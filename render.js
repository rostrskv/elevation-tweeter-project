"use strict"
const Renderer = function () {
    const renderPosts = function (posts) {
        const postsElement = $("#posts")
        postsElement.empty()
        for (const post of posts) {
            const postTextElement = postsElement.append(
                `<div class="post"  data-id="${post.id}" id="${post.id}">                
<div class="post-text"></div>
<button class="delete">\u00D7 Delete post</button>
<input type="text" class="comment-input">
<button class="comment-button">Comment</button>
<div class="comments"></div>
</div>
`
            )
            $(`#${post.id}`).find(".post-text").text(post.text)
        }
    }
    return { renderPosts }
}