const express = require('express');
const Expense = require('../modelsExpense');
const authMiddleware = require('../middlewareauthMiddleware');
const router = express.Router();

// Add Expense
router.post('/', authMiddleware, async (req, res) => {
  const { amount, category, date, description } = req.body;
  try {
    const expense = new Expense({ amount, category, date, description, userId: req.user.userId });
    await expense.save();
    res.status(201).json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get Expenses
router.get('/', authMiddleware, async (req, res) => {
  const { page = 1, limit = 10, category, startDate, endDate } = req.query;
  const filter = { userId: req.user.userId };
  if (category) filter.category = category;
  if (startDate && endDate) filter.date = { $gte: new Date(startDate), $lte: new Date(endDate) };
  try {
    const expenses = await Expense.find(filter)
      .skip((page - 1) * limit)
      .limit(limit);
    res.json(expenses);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Expense
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;