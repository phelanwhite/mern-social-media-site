import mongoose, { Schema } from 'mongoose'
const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    content: {
      type: String,
    },
    file_url: {
      type: String,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'post',
    },
    comment: {
      type: Schema.Types.ObjectId,
      ref: 'comment',
    },
  },
  {
    timestamps: true,
  },
)

schema.pre('save', function () {
  return this.populate([
    {
      path: 'user',
    },
    {
      path: 'post',
    },
    {
      path: 'comment',
    },
  ])
})

const commentModel =
  mongoose.models.comment || mongoose.model('comment', schema)

export default commentModel
