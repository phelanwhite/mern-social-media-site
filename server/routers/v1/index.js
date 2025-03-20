import express from 'express'
import storyRouter from './story.router.js'

const apiV1Router = express.Router()

apiV1Router.use(`/story`, storyRouter)

export default apiV1Router
