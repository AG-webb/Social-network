import React from 'react';
import profileReducer, { addPost, deletePost } from './profile-reducer';

let state = {
    posts: [
        {
            id: "1",
            message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            likes: "150",
            src: "https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-512.png"
        },
        {
            id: "2",
            message: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
            likes: "5404",
            src: "https://www.shareicon.net/data/2015/09/24/106427_man_512x512.png"
        },
        {
            id: "3",
            message: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
            likes: "20",
            src: "https://png.pngtree.com/element_our/png/20181206/female-avatar-vector-icon-png_262142.jpg"
        },
    ],
}

test('new post must add to array', () => {
    let action = addPost("New Post text");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4)
    expect(newState.posts[3].message).toBe("New Post text")
});

test('message must be correct', () => {
    let action = addPost("New Post text");
    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe("New Post text")
});

test('lenth of array must degrement', () => {
    let action = deletePost(3);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2)
});

test('lenth of array must be unchanged if id is incorrect', () => {
    let action = deletePost(21211);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(3)
});