const postsCrud = require('./posts')
const commentsCrud = require('./comments')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan');

let html = "<h1> Blog REST API </h1>\
<a href='http://localhost:3000/posts'> ==> ( Posts )</a >"

let app = express()
app.use(bodyParser.json())
app.use(logger('dev'))

let slash = app.get('/', (req, res) => {
    res.send(html)
})
// GET and POST /posts
app.get('/posts', postsCrud.getPosts)
app.post('/posts', postsCrud.addPost)
// PUT and DELETE /posts/:postId/
app.put('/posts/:postId', postsCrud.updatePost)
app.delete('/posts/:postId', postsCrud.removePost)

// GET and POST /posts/:postId/comments
app.get('/posts/:postId/comments', commentsCrud.getComments)
app.post('/posts/:postId/comments', commentsCrud.addComment)
// PUT and DELETE /posts/:postId/comments/commentId
app.put('/posts/:postId/comments/:commentId', commentsCrud.updateComment)
app.delete('/posts/:postId/comments/:commentId', commentsCrud.removeComment)

module.exports = { app }