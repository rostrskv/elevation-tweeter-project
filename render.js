"use strict"
const Renderer = function () {
    const renderPosts = function (posts) {
        const postsElement = $("#posts")
        postsElement.empty()
        for(const post of posts)
        {
            postsElement.append(`<div data-id="${post.id}" class="post-text">${post.text}</div>`);
        }
    }
    return { renderPosts }
}