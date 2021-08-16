const Author = require('../models/author.model');

module.exports = {
    create: (req, res) => {
        const { name } = req.body;
        Author.create({
            name
        })
            .then(author => res.json(author))
            .catch(err => res.status(400).json(err));
    },

    getAll: (req, res) => {
        Author.find({})
            .then(authors => res.json(authors))
            .catch(err => res.json(err));
    },

    getOne: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(author => res.json(author))
            .catch(err => res.json(err));
    },

    update: (req, res) => {
        Author.findOneAndUpdate(
            {_id: req.params.id},
            req.body,
            {runValidators: true, new: true}
            )
            .then(updatedAuthor => res.json(updatedAuthor))
            .catch(err => res.status(400).json(err));
    },

    delete: (req, res) => {
        Author.deleteOne({_id: req.params.id})
            .then(deletedAuthor => res.json(deletedAuthor))
            .catch(err => res.json(err));
    }
}