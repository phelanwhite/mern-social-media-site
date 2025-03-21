import express from 'express'
import storyRouter from './story.router.js'
import postRouter from './post.router.js'
import userRouter from './user.router.js'

const apiV1Router = express.Router()

apiV1Router.use(`/story`, storyRouter)
apiV1Router.use(`/post`, postRouter)
apiV1Router.use(`/user`, userRouter)

export default apiV1Router
