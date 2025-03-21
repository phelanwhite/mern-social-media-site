import upload from '#server/configs/multer.config'
import { QUERY_PARAMETER } from '#server/constants/query.constant'
import {
  handleResponse,
  handleResponseList,
} from '#server/helpers/responses.helper'
import { authProtectedRouter } from '#server/middlewares/auth.middleware'
import commentModel from '#server/models/comment.model'
import { uploadImageToCloudinary } from '#server/utils/storage.util'
import express from 'express'
import { StatusCodes } from 'http-status-codes'

const commentRouter = express.Router()

// auth
commentRouter.get(`/get-me`, authProtectedRouter, async (req, res, next) => {
  try {
    const _page = parseInt(req.query._page) || QUERY_PARAMETER._PAGE
    const _limit = parseInt(req.query._limit) || QUERY_PARAMETER._LIMIT
    const _skip = parseInt(req.query._skip) || QUERY_PARAMETER._SKIP
    const user = req.user

    const filter = {
      user: user._id,
    }

    const getDatas = await commentModel
      .find(filter)
      .limit(_limit)
      .skip((_page - 1) * _limit + _skip)

    const total_rows = await commentModel.countDocuments(filter)
    const total_pages = Math.ceil(total_rows / _limit)

    return handleResponseList(res, {
      status: StatusCodes.OK,
      message: 'Posts fetched successfully',
      results: getDatas,
      paginations: {
        total_rows,
        total_pages,
        current_page: 1,
        limit: _limit,
        skip: _skip,
      },
    })
  } catch (error) {
    next(error)
  }
})
commentRouter.post(
  `/create`,
  upload.single('file'),
  authProtectedRouter,
  async (req, res, next) => {
    try {
      const body = req.body
      const user = req.user
      const file = req.file

      let file_url = body.file
      if (file) {
        file_url = (await uploadImageToCloudinary(file)).url
      }
      const newData = await commentModel.create({
        ...body,
        user: user._id,
        file: file_url,
      })

      return handleResponse(res, {
        status: StatusCodes.CREATED,
        message: 'Post created successfully',
        data: newData,
      })
    } catch (error) {
      next(error)
    }
  },
)
commentRouter.delete(
  `/delete/:id`,
  authProtectedRouter,
  async (req, res, next) => {
    try {
      const id = req.params.id
      const deleteData = await commentModel.findByIdAndDelete(id, { new: true })

      return handleResponse(res, {
        status: StatusCodes.OK,
        message: 'Post deleted successfully',
        data: deleteData,
      })
    } catch (error) {
      next(error)
    }
  },
)

export default commentRouter
