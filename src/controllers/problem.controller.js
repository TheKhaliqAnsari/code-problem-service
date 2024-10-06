const { StatusCodes } = require('http-status-codes');
const BadRequest = require('../errors/badrequest.error');
const NotImplemented = require('../errors/notimplemented.error');

function pingProblem(req, res) {
    res.send({
        message: "Problem controller is working:"
    })
}

function addProblem(req, res, next) {
    try {
        throw new NotImplemented("addProblem")
    } catch (error) {
        next(error)
    }
}


function getProblem(req, res) {
    try {
        throw new NotImplemented("addProblem")
    } catch (error) {
        next(error)
    }
}

function getProblems(req, res) {
    try {
        throw new NotImplemented("addProblem")
    } catch (error) {
        next(error)
    }
}


function deleteProblem(req, res) {
    try {
        throw new NotImplemented("addProblem")
    } catch (error) {
        next(error)
    }
}

function updateProblem(req, res) {
    try {
        throw new NotImplemented("addProblem")
    } catch (error) {
        next(error)
    }
}



module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblem
}