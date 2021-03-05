const initialState = {
  posts: [
    { id: 1, title: "Post number 1", content: "Hello world!", color: "red" },
    {
      id: 2,
      title: "Post number 2",
      content: "Finish this project",
      color: "green",
    },
    {
      id: 3,
      title: "Post number 3",
      content: "Another example",
      color: "blue",
    },
    { id: 4, title: "Post number 4", content: "Example 3,2,1..." },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: state.posts.concat(action.payload)
      };
    case 'DELETE_POST':
      const filteredPosts = state.posts.filter(post => post.id !== action.payload.id);
      return {
        ...state,
        posts: filteredPosts,
      };
    default:
      return state;
  }
};

export default reducer;
