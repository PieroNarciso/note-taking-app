import React, { useState } from 'react';
import { connect } from 'react-redux';

import Post from './Post';
import PostForm from './PostForm.jsx';
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
    setRotate((prev) => {
      if (prev === '') return 'rotate-45';
      return '';
    });
  };

  return (
    <div>
      <div className="my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-y-4">
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
      </div>

      <div>
        <AddBtn onClick={toggleForm} className={rotate} />
      </div>
      {showForm ? (
        <div className="fixed top-0 w-screen h-screen bg-black bg-opacity-20">
          <div className="flex items-center justify-center h-screen">
            <PostForm hideForm={hideForm} />
          </div>
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

export default connect(mapStateToProps)(Dashboard);
