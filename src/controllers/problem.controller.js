const NotImplemented = require('../errors/notimplemented.error');
const { ProblemService } = require('../services');
const { ProblemRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const problemService = new ProblemService(new ProblemRepository());

function pingProblem(req, res) {
    res.send({
        message: "Problem controller is working:"
    })
}

async function addProblem(req, res, next) {
    try {
        const newProblem = await problemService.createProblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: 'Successfully created a new problem.',
            error: {},
            data: newProblem
        })
    } catch (error) {
        next(error)
    }
}


async function getProblem(req, res, next) {
    try {
        const { problemId } = req.params;
        const problem = await problemService.getProblemById(problemId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched problem.',
            error: {},
            data: problem
        })
    } catch (error) {
        next(error)
    }
}

async function getProblems(req, res, next) {
    try {
        const problems = await problemService.getAllProblems();
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully fetched all problems.',
            error: {},
            data: problems
        })
    } catch (error) {
        next(error)
    }
}


async function deleteProblem(req, res, next) {
    try {
        const { problemId } = req.params;
        const problem = await problemService.deleteProblem(problemId);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully deleted problem.',
            error: {},
            data: problem
        })
    } catch (error) {
        next(error)
    }
}

async function updateProblem(req, res, next) {
    try {
        const { problemId } = req.params;
        const updatedData = req.body;
        const problem = await problemService.updateProblem(problemId, updatedData);
        return res.status(StatusCodes.OK).json({
            success: true,
            message: 'Successfully updated problem.',
            error: {},
            data: problem
        })
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