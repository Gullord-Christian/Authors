// connecting to the controller 
const AuthorController = require ('../controllers/author.controller')

// test route to ensure route is connected
module.exports = (app) => {
    app.get('/api', AuthorController.index) // test
    app.get('/api/authors', AuthorController.getAllAuthors) // get all
    app.post('/api/author', AuthorController.createAuthor) // create
    app.get('/api/author/:id', AuthorController.getOneAuthor) // get one
    app.put('/api/author/:id', AuthorController.updateAuthor) // update
    app.delete('/api/author/:id', AuthorController.deleteAuthor) // update
}