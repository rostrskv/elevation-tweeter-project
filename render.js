"use strict"
const Renderer = function () {
    const renderPosts = function (posts) {
        const postsElement = $("#posts")
        postsElement.empty()
        for (const post of posts) {
            postsElement.append(`
<div class="post" data-id="${post.id}" id="${post.id}">
<div class="post-text"></div>
<button class="delete">\u00D7 Delete post</button>
<input type="text" class="comment-input">
<button class="comment-button">Comment</button>
<div class="comments"></div>
</div>
`)
            const postElement = $(`#${post.id}`)
            postElement.find(".post-text").text(post.text)

            const commentsElement = postElement.find(".comments")
            for (const comment of post.comments) {
                commentsElement.append(`
<div class="comment"  data-id="${comment.id}" id="${comment.id}">
<span class="comment-text"></span>
<span class="delete-comment" title="Delete comment">\u00D7</span>
</div>
`)
                postElement.find(`#${comment.id}`).find(".comment-text").text(comment.text)
            }
        }
    }
    return { renderPosts }
}