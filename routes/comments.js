const model = require('./model')
const store = model.store

module.exports = {
    getComments(req, res) {
        res.status(200).send(store.posts)
    },
    addComment(req, res) {
        let newStore = req.body
        let commentId = store.posts.comments.length
        store.posts.comments.push(newStore)
        res.status(201).send({ commentId: commentId })
    },
    updateComment(req, res) {
        store.posts.comments[req.params.commentId] = req.body
        res.status(200).send(store.posts.comments[req.params.commentId])
    },
    removeComment(req, res) {
        store.posts.comments.splice(req.params.commentId, 1)
        res.status(204).send()
    }
}