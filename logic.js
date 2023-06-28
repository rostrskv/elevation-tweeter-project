"use strict"
const Tweeter = function () {
    const _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]

    let _postIdCounter = 2
    let _commentIdCounter = 6

    const getPosts = function () {
        return _posts
    }

    const addPost = function (text) {
        if (text.trim().length === 0) {
            throw new Error("Post text is empty")
        }
        const post = {
            text: text,
            id: `p${++_postIdCounter}`,
            comments: []
        }
        _posts.push(post)
    }

    const removePost = function (postId) {
        const postIndex = _posts.findIndex(p => p.id === postId)
        if (postIndex < 0) {
            throw new Error("Post not found")
        }
        _posts.splice(postIndex, 1)
    }

    const addComment = function (text, postId) {
        if (text.trim().length === 0) {
            throw new Error("Comment text is empty")
        }
        const post = _posts.find(p => p.id === postId)
        if (post === undefined) {
            throw new Error("Post not found")
        }
        const comment = {
            id: `c${++_commentIdCounter}`,
            text: text
        }
        post.comments.push(comment)
    }

    const removeComment = function (postId, commentId) {
        const post = _posts.find(p => p.id === postId)
        if (post === undefined) {
            throw new Error("Post not found")
        }
        const commentIndex = post.comments.findIndex(c => c.id === commentId)
        if (commentIndex < 0) {
            throw new Error("Comment not found")
        }
        post.comments.splice(commentIndex, 1)
    }

    return {
        getPosts: getPosts,
        addPost: addPost,
        removePost: removePost,
        addComment: addComment,
        removeComment: removeComment
    }
}
