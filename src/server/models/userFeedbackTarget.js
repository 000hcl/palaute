const { STRING, INTEGER, Model } = require('sequelize')
const { sequelize } = require('../util/dbConnection')
const FeedbackTarget = require('./feedbackTarget')

class UserFeedbackTarget extends Model {}

UserFeedbackTarget.init(
  {
    accessStatus: {
      type: STRING,
      allowNull: false,
    },
    feedbackId: INTEGER,
    userId: {
      type: STRING,
      allowNull: false,
    },
    feedbackTargetId: {
      type: INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
    sequelize,
  },
)

UserFeedbackTarget.FeedbackTarget = UserFeedbackTarget.belongsTo(
  FeedbackTarget,
  { as: 'feedbackTarget' },
)

module.exports = UserFeedbackTarget
