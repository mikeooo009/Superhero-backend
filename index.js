// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');

// Initialize app
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

// Middleware
app.use(bodyParser.json());

// In-memory database
const superheroes = [];

// POST /superheroes - Add a new superhero
app.post('/superheroes', [
    check('name').notEmpty().withMessage('Name is required'),
    check('superpower').notEmpty().withMessage('Superpower is required'),
    check('humilityScore').isInt({ min: 1, max: 10 }).withMessage('Humility score must be between 1 and 10')
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, superpower, humilityScore } = req.body;
    superheroes.push({ name, superpower, humilityScore });
    res.status(201).json({ message: 'Superhero added successfully', superhero: { name, superpower, humilityScore } });
});

// GET /superheroes - Fetch superheroes sorted by humility score
app.get('/superheroes', (req, res) => {
    const sortedHeroes = superheroes.sort((a, b) => b.humilityScore - a.humilityScore);
    res.json(sortedHeroes);
});

// Start server
app.listen(port, () => {
    console.log(`Humble Superhero API is running on http://localhost:${port}`);
});

// Export app for testing
module.exports = app;
