const badRequest = require('./bad-request')
const unauthenticatedError = require('./unauthenticated')
const customAPIError = require('./custom-error')

module.exports = {
    badRequest,
    unauthenticatedError,
    customAPIError
}