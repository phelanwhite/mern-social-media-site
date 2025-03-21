import { QUERY_PARAMETER } from '#server/constants/query.constant'
import postModel from '#server/models/post.model'
import { Types } from 'mongoose'

export async function customPostData({ req, filter }) {
  const _page = parseInt(req.query._page) || QUERY_PARAMETER._PAGE
  const _limit = parseInt(req.query._limit) || QUERY_PARAMETER._LIMIT
  const _skip = parseInt(req.query._skip) || QUERY_PARAMETER._SKIP
  const _tracking_id = req.query._tracking_id

  const posts = await postModel.aggregate([
    ...filter,
    // populate
    {
      $lookup: {
        from: 'users',
        localField: 'user',
        foreignField: '_id',
        as: 'user',
      },
    },
    {
      $unwind: '$user',
    },
    // save
    {
      $lookup: {
        from: 'saves',
        localField: '_id',
        foreignField: 'post',
        as: 'isSaved',
        pipeline: [{ $match: { user: new Types.ObjectId(_tracking_id) } }],
      },
    },
    {
      $addFields: {
        isSaved: { $gt: [{ $size: '$isSaved' }, 0] },
      },
    },

    // paginate
    {
      $skip: (_page - 1) * _limit + _skip,
    },
    {
      $limit: _limit,
    },
    {
      $sort: {
        createdAt: -1,
      },
    },
  ])

  const total_rows = (
    await postModel.aggregate([
      ...filter,
      {
        $count: 'count',
      },
    ])
  )?.[0]?.count

  const total_pages = Math.ceil(total_rows / _limit)

  return { posts, total_rows, total_pages, _page, _limit, _skip }
}
