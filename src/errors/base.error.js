/**
 * BaseError is a custom error class that extends the built-in Error class.
 * It includes additional properties such as name and statusCode.
 *
 * @class BaseError
 * @extends {Error}
 * @param {string} name - The name of the error.
 * @param {number} statusCode - The HTTP status code associated with the error.
 * @param {string} description - A description of the error.
 */
class BaseError extends Error {
    constructor(name, statusCode, description, details) {
        super(description);
        this.name = name;
        this.statusCode = statusCode;
        this.details = details;
    }
}


module.exports = BaseError;