import React, { useState } from "react";
import { connect } from "react-redux";

import Post from "./Post";
import PostForm from "./PostForm.jsx";
import AddBtn from './AddBtn';

const Dashboard = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [rotate, setRotate] = useState('');

  const toggleForm = () => {
    setShowForm((prev) => !prev);
    activateRotate();
  };
  const hideForm = () => {
    setShowForm(false);
    setRotate('');
  };

  const activateRotate = () => {
    setRotate(prev => {
      if (prev === '') return 'rotate-45';
      return '';
    });
  };

  return (
    <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-y-4">
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
        <AddBtn onClick={toggleForm} className={rotate}/>
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
