const { ApplicationError } = require('../util/customErrors')
const logger = require('../util/logger')
const { User } = require('../models')

const isSuperAdmin = (id) =>
  ['varisleo', 'kalleilv', 'jakousa', 'mluukkai'].includes(id)

const upsertUser = async ({
  uid,
  givenname,
  sn,
  mail,
  preferredlanguage,
  hypersonsisuid,
}) => {
  const [user, created] = await User.findOrCreate({
    where: {
      id: hypersonsisuid,
    },
    defaults: {
      first_name: givenname,
      last_name: sn,
      email: mail,
      language: preferredlanguage,
      username: uid,
    },
  })
  if (created) {
    logger.info(`New user: ${user.last_name}, ${user.first_name}`, {
      ...user.dataValues,
    })
  }
  return user
}

const currentUserMiddleware = async (req, res, next) => {
  const { uid: id } = req.headers
  if (!id) throw new ApplicationError('Missing uid header', 403)

  req.user = await upsertUser(req.headers)
  if (!isSuperAdmin(id)) return next()

  const loggedInAs = req.headers['x-admin-logged-in-as']
  if (!loggedInAs) return next()

  req.user = await User.findOne({ where: { id: loggedInAs } })
  return next()
}

module.exports = currentUserMiddleware
