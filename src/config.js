/**
 * Insert application wide common items here
 */

const inProduction = process.env.NODE_ENV === 'production'

const inE2EMode = process.env.REACT_APP_E2E === 'true'

const runningJest = process.env.REACT_APP_JEST === 'true'

const ADMINS = [
  'varisleo',
  'kalleilv',
  'jakousa',
  'mluukkai',
  'keolli',
  'ttiittan',
]

// These courses bypass the starting after 1.9 filter
const INCLUDE_COURSES = [
  'hy-opt-cur-2122-9f78b627-6261-4eb9-91c4-426066b56cef', // MED-200
  'hy-opt-cur-2122-329bfeb5-2c56-450f-b3f5-ff9dbcca8932',
  'hy-CUR-142630573',
  'hy-CUR-135891626', // Avoin ohtu
  'hy-opt-cur-2021-28bce92e-aa01-4be8-832a-ca9df39bbd39', // Ohte
  'hy-CUR-142676412', // Tsoha loppukesä
]

const basePath = process.env.PUBLIC_URL || ''

const GIT_SHA = process.env.REACT_APP_GIT_SHA || ''

module.exports = {
  inProduction,
  inE2EMode,
  runningJest,
  basePath,
  GIT_SHA,
  ADMINS,
  INCLUDE_COURSES,
}
