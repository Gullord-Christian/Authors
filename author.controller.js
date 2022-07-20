// connecting to model
const Author = require('../models/author.model')

// to test routes are working
module.exports.index = (req, res) => {
    res.json({
        message: "Hello world"
    })
}

module.exports.getAllAuthors = (req, res) => {
    Author.find({})
        .then(authors => res.json(authors))
        .catch(err => res.json(err))
}

module.exports.createAuthor = (req, res) => {
    const {fullName} = req.body
    Author.create(req.body)
        .then(author => res.json(author))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Author.findOne({_id: req.params.id})
        .then(author => res.json(author))
        .catch(err => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        {new: true, runValidators: true})
        .then(updatedAuthor => res.json(updatedAuthor))
        .catch(err => res.status(400).json(err))
}

// req.body = value to be updated
// new - true - return with update
// new - false - return original song
// by default: runValidators is false - no validations on update
// runValidators is true, validations on update.

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
        .then(deleteOne => res.json(deleteOne))
        .catch(err => res.json(err))
}