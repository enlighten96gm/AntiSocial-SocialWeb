const { default: profileReducer, addPostActionCreator, deletePost } = require("./profile-reducer");

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: 'How is your sex life', likesCount: 11},
        {id: 3, message: 'Lol kek', likesCount: 1},
        {id: 4, message: 'Swipe Left', likesCount: 1111},
],
}

// test('new post incrementation is done', () => {
//     let action = addPostActionCreator("lololol")
//     let newState = profileReducer(state,action)
//     expect (newState.posts.length).toBe(5);
//   });
// test('new post added', () => {
//     let action = addPostActionCreator("lololol")
//     let newState = profileReducer(state,action)
//     expect (newState.posts[4].message).toBe('lololol');
//   });
test('message length decemented', () => {
    let action = deletePost(1)
    let newState = profileReducer(state,action)
    expect (newState.posts.length).toBe(3);
  });
test('not decremented id incorect', () => {
    let action = deletePost(1000)
    let newState = profileReducer(state,action)
    expect (newState.posts.length).toBe(4);
  });




