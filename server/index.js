import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import passport from 'passport'
import session from 'express-session'
import path from 'path'

import { connectMongoDB } from './configs/database.config.js'
import { connectRedis } from './configs/redis.config.js'
import ENV_CONFIG from './configs/env.config.js'
import { handleError } from './helpers/responses.helper.js'
import router from './routers/index.js'
import passportConfig from './configs/passport.config.js'

// connect database
await connectMongoDB()
await connectRedis()

// express app setup
const app = express()
app.use(
  cors({
    origin: [ENV_CONFIG.URL_WEBSITE],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
  }),
)
app.use(cookieParser())
app.use(
  bodyParser.json({
    limit: '50mb',
  }),
)
app.listen(ENV_CONFIG.PORT, function () {
  console.log(`Server is running on port ${ENV_CONFIG.PORT}`)
})

// passport
app.use(
  session({
    secret: ENV_CONFIG.PASSPORT.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    },
  }),
)
app.use(passport.initialize())
app.use(passport.session())

// routes
app.use(`/api`, router)

// deployments
if (ENV_CONFIG.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, '../client/dist')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'))
  })
}

// error handler
app.use(handleError)
