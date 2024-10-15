const { markdownSanitizer } = require("../utils");


class ProblemService {
    constructor(problemRepository) {
        this.problemRepository = problemRepository
    }

    async createProblem(problemData) {
        try {
            problemData.description = markdownSanitizer(problemData.description);
            const problem = this.problemRepository.createProblem(problemData);
            return problem
        } catch (error) {
            console.log("error: ", error)
            throw error;
        }
    }

    async getAllProblems() {
        try {
            const problems = await this.problemRepository.getAllProblems();
            return problems;
        } catch (error) {
            console.log('error: ', error);
            throw error;
        }
    }

    async getProblemById(problemId, updatedData) {
        try {
            const problem = await this.problemRepository.getProblemById(problemId, updatedData);
            return problem;
        } catch (error) {
            console.log('error: ', error);
            throw error;
        }
    }

    async deleteProblem(problemId) {
        try {
            const problem = await this.problemRepository.deleteProblem(problemId);
            return problem;
        } catch (error) {
            console.log('error: ', error);
            throw error;
        }
    }

    async updateProblem(problemId, updatedData) {
        try {
            console.log("ser: ", updatedData)
            const problem = await this.problemRepository.updateProblem(problemId, updatedData);
            return problem;
        } catch (error) {
            console.log('error: ', error);
            throw error;
        }
    }
}
module.exports = ProblemService;         