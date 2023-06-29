"use strict"
const tweeter = Tweeter()
const renderer = Renderer()

renderer.renderPosts(tweeter.getPosts())

const post = function () {
    const input = $("#input")
    tweeter.addPost(input.val())
    renderer.renderPosts(tweeter.getPosts())
    input.val("")
}

const deleteHandler = function () {
    const postId = $(this).closest(".post").data("id")
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
}

const commentHandler = function () {
    const postId = $(this).closest(".post").data("id")
}

$("body")
    .on("click", ".delete", deleteHandler)
    .on("click", ".comment-button", commentHandler)
