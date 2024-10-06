const mongoose = require('mongoose');


/**
 * @typedef {Object} Problem
 * @property {string} title - The title of the problem. This field is required.
 * @property {string} description - A detailed description of the problem. This field is required.
 * @property {string} difficulty - The difficulty level of the problem. It can be 'easy', 'medium', or 'hard'. This field is required and defaults to 'easy'.
 * @property {Array.<Object>} testCases - An array of test cases for the problem.
 * @property {string} testCases.input - The input for a test case. This field is required.
 * @property {string} testCases.output - The expected output for a test case. This field is required.
 * @property {string} [editorial] - An optional editorial or explanation for the problem.
 */
const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Problem title cannot be empty"]
    },
    description: {
        type: String,
        required: [true, "Description cannot be empty"]
    },
    difficulty: {
        type: String,
        enum: ['easy', 'medium', 'hard'],
        required: [true, 'Problem difficulty cannot be empty'],
        default: 'easy'
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    editorial: {
        type: String
    }
})


const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;