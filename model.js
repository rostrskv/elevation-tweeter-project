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
            throw new Error(`Post not found, id:${postId}`)
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

const tweeter = Tweeter()

tweeter.addPost("This is my own post!")
console.log(tweeter.getPosts())
//This should be added to the posts array:
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.removePost("p1")
console.log(tweeter.getPosts())
//There should only be two posts in the post's array:
//{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
//{text: "This is my own post!", id: "p3", comments: []}

tweeter.addComment("Damn straight it is!", "p3")
tweeter.addComment("Second the best!", "p2")
console.log(tweeter.getPosts())
//This should be added to the third post's comments array:
//{id: "c7", text: "Damn straight it is!"}

//This should be added to the second post's comments array:
//{id: "c8", text: "Second the best!"}

tweeter.removeComment("p2", "c6")
console.log(tweeter.getPosts())
//This comment should be removed:
//{id: "c6", text: "Haha second place what a joke."}
