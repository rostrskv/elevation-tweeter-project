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
    const postElement = $(this).closest(".post")
    const postId = postElement.data("id")
    tweeter.addComment(postElement.find(".comment-input").val(), postId)
    renderer.renderPosts(tweeter.getPosts())
}

const deleteCommentHandler = function () {
    const postElement = $(this).closest(".post")
    const postId = postElement.data("id")
    const commentElement = $(this).closest(".comment")
    const commentId = commentElement.data("id")
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
}

$("body")
    .on("click", ".delete", deleteHandler)
    .on("click", ".comment-button", commentHandler)
    .on("click", ".delete-comment", deleteCommentHandler)
