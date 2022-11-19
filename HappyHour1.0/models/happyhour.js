const { Schema } = require('mongoose')

const HappyHour = new Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: false },
    happyhourdeals: [{ type: Schema.Types.ObjectId, ref: 'happyhourdeals' }]
  },
  { timestamps: true }
)

module.exports = HappyHour
