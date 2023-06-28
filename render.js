"use strict"
const Renderer = function () {
    const renderPosts = function (posts) {
        const postsElement = $("#posts")
        postsElement.empty()
        for(const post of posts)
        {
            const postTextElement = postsElement.append(`<div data-id="${post.id}" id="${post.id}" class="post-text"></div>`);
            $(`#${[post.id]}`).append(post.text);
        }
    }
    return { renderPosts }
}