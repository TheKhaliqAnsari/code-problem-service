const BaseError = require("./base.error")
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(problemId) {
        super("NotFound", StatusCodes.NOT_FOUND, `The problem id ${problemId} not fount in db`)
    }
}


module.exports = NotFound;