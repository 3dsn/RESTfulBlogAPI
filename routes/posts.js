const model = require('./model')
const store = model.store
module.exports = {
    getPosts(req, res) {
        res.status(200).send(store.posts)
    },
    addPost(req, res) {
        let newStore = req.body
        let postId = store.posts.length
        store.posts.push(newStore)
        res.status(201).send({ postId: postId })
    },
    updatePost(req, res) {
        store.posts[req.params.postId] = req.body
        res.status(200).send(store.posts[req.params.postId])
    },
    removePost(req, res) {
        store.posts.splice(req.params.postId, 1)
        res.status(204).send()
    }
}