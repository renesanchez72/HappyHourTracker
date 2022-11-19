const mongoose = require('mongoose')
const HappyHourSchema = require('./happyhour')
const HappyHourDealSchema = require('./happyhourdeal')

const HappyHour = mongoose.model('happyhours', HappyHourSchema)
const HappyHourDeal = mongoose.model('happyhourdeals', HappyHourDealSchema)

module.exports = {
  HappyHour,
  HappyHourDeal
}
