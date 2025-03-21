import upload from '#server/configs/multer.config'
import { QUERY_PARAMETER } from '#server/constants/query.constant'
import {
  handleResponse,
  handleResponseList,
} from '#server/helpers/responses.helper'
import postModel from '#server/models/post.model'
import userModel from '#server/models/user.model'
import express from 'express'
import { StatusCodes } from 'http-status-codes'

const userRouter = express.Router()

// userRouter.get(`/get-all`, async (req, res, next) => {
//   try {
//     const _page = parseInt(req.query._page) || QUERY_PARAMETER._PAGE
//     const _limit = parseInt(req.query._limit) || QUERY_PARAMETER._LIMIT
//     const _skip = parseInt(req.query._skip) || QUERY_PARAMETER._SKIP

//     const filter = {}

//     const getDatas = await postModel
//       .find(filter)
//       .populate([`user`])
//       .limit(_limit)
//       .skip((_page - 1) * _limit + _skip)
//       .sort({
//         createdAt: -1,
//       })

//     const total_rows = await postModel.countDocuments(filter)
//     const total_pages = Math.ceil(total_rows / _limit)

//     return handleResponseList(res, {
//       status: StatusCodes.OK,
//       message: 'Posts fetched successfully',
//       results: getDatas,
//       paginations: {
//         total_rows,
//         total_pages,
//         current_page: 1,
//         limit: _limit,
//         skip: _skip,
//       },
//     })
//   } catch (error) {
//     next(error)
//   }
// })
userRouter.get(`/get-id/:id`, async (req, res, next) => {
  try {
    const { id } = req.params

    const getData = await userModel.findById(id)

    return handleResponse(res, {
      status: StatusCodes.OK,
      message: 'User data fetched successfully',
      data: getData,
    })
  } catch (error) {
    next(error)
  }
})

export default userRouter
