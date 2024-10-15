const NotFound = require('../errors/notfound.error');
const { Problem } = require('../models');

class ProblemRepository {
    async createProblem(problemData) {
        try {
            const newProblem = await Problem.create({
                title: problemData.title,
                description: problemData.description,
                testCases: (problemData.testCases) ? problemData.testCases : []
            })
            return newProblem;
        } catch (error) {
            console.log('Error: ', error);
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await Problem.find();
            return problems;
        } catch (error) {
            console.log('Error: ', error)
            throw error;
        }
    }

    async getProblemById(problemId) {
        try {
            const problem = await Problem.findById(problemId);
            if (!problem) {
                throw new NotFound(problemId)
            }
            return problem;
        } catch (error) {
            console.log('Error: ', error)
            throw error
        }
    }

    async deleteProblem(problemId) {
        try {
            const problem = await Problem.findByIdAndDelete(problemId);
            if (!problem) {
                throw new NotFound(problemId)
            }
            return problem;
        } catch (error) {
            console.log('Error: ', error)
            throw error
        }
    }

    async updateProblem(problemId, updatedData) {
        try {
            const problem = await Problem.findByIdAndUpdate(problemId, updatedData, { new: true });
            if (!problem) {
                throw new NotFound(problemId);
            }
            return problem;
        } catch (error) {
            console.log('Error: ', error);
            throw error;
        }
    }
}

module.exports = ProblemRepository;