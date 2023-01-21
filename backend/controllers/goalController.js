const asynHandler = require('express-async-handler')

// @desc    Get goals
// @route   GET /api/goals
// @access  Private
const getGoals = asynHandler(async (req, res) => {
    res.status(200).json({ message: 'Get goals' });
})

// @desc    Set goal
// @route   POST /api/goals
// @access  Private
const setGoal = asynHandler(async (req, res) => {
    if (!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set goal' })
})

// @desc    Set goals
// @route   PUT /api/goals/:id
// @access  Private
const updateGoal = asynHandler(async (req, res) => {
    res.status(200).json({ message: `Update goal ${req.params.id}` })
})

// @desc    Delete goals
// @route   GET /api/goals/:id
// @access  Private
const deleteGoal = asynHandler(async (req, res) => {
    res.status(200).json({ message: `Delete goal ${req.params.id}` })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
}