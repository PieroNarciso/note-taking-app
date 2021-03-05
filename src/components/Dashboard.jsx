import React, { useState } from "react";
import { connect } from "react-redux";

import Post from "./Post";
import PostForm from "./PostForm.jsx";

const Dashboard = (props) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };
  const hideForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-y-4">
      {props.posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            content={post.content}
            color={post.color}
          />
        );
      })}

      <div>
        <button
          onClick={toggleForm}
          className="fixed flex items-center justify-center w-12 h-12 font-mono text-4xl font-medium text-white bg-yellow-600 rounded-full shadow-lg hover:bg-yellow-700 right-4 bottom-2 focus:outline-none"
        >
          +
        </button>
      </div>
      {showForm ? (
        <div className="fixed">
          <PostForm hideForm={hideForm} />
        </div>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => console.log("Add"),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
