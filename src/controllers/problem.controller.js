const { StatusCodes } = require('http-status-codes');

function pingProblem(req, res) {
    res.send({
        message: "Problem controller is working:"
    })
}

function addProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });

}


function getProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function getProblems(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}


function deleteProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}

function updateProblem(req, res) {
    return res.status(StatusCodes.NOT_IMPLEMENTED).json({
        message: 'Not implemented'
    });
}



module.exports = {
    addProblem,
    getProblem,
    getProblems,
    deleteProblem,
    updateProblem,
    pingProblem
}