const express = require('express');


const { problemController } = require('../../controllers');


const problemRouter = express.Router();


problemRouter.get('/ping', problemController.pingProblem)

problemRouter.get('/:problemId', problemController.getProblem);
problemRouter.get('/', problemController.getProblems);
problemRouter.post('/', problemController.addProblem);

problemRouter.delete('/:problemId', problemController.deleteProblem);

problemRouter.put('/:problemId', problemController.updateProblem);


module.exports = problemRouter;