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
      required: true,
    },
    file: {
      type: String,
      required: true,
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

const commentModel =
  mongoose.models.comment || mongoose.model('comment', schema)

export default commentModel
