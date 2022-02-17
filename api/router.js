const express = require('express');
const router = express.Router();
const Recipes = require('./model');

router.get('/:id', (req, res) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            console.log(err);
        })
});

module.exports = router;