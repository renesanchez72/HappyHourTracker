const { Schema } = require('mongoose')

const HappyHourDeal = new Schema(
  {
    description: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    sunday: { type: Boolean, required: false },
    monday: { type: Boolean, required: false },
    tuesday: { type: Boolean, required: false },
    wednesday: { type: Boolean, required: false },
    thursday: { type: Boolean, required: false },
    friday: { type: Boolean, required: false },
    saturday: { type: Boolean, required: false },
    happyHour_id: { type: String, required: false }
  },
  { timestamps: true }
)

module.exports = HappyHourDeal
