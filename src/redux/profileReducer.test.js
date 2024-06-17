import profileReducer from "./profileReducer";
import { addPost, deletePost } from "./profileReducer";

let state = {
    posts: [
        { id: 1, post: 'It\'s my first post', likeCount: 11 },
        { id: 2, post: 'How are you today?', likeCount: 10 }
    ]
}

test('lenght of posts should incease', () => {
    // 1. test data
    let action = addPost('addPost test');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected answer
    expect(newState.posts.length).toBe(3);
})

test('message of new post should be the same as input', () => {
    // 1. test data
    let action = addPost('addPost test');

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected answer
    expect(newState.posts[2].post).toBe('addPost test');
})

test('length should decremented after removing an element', () => {
    // 1. test data
    let action = deletePost(1);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected answer
    expect(newState.posts.length).toBe(state.posts.length - 1);
})

test("length shouldn't decremented after removing an element with wrong id", () => {
    // 1. test data
    let action = deletePost(3);

    // 2. action
    let newState = profileReducer(state, action);

    // 3. expected answer
    expect(newState.posts.length).toBe(state.posts.length);
})

