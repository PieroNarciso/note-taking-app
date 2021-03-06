import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Post from './Post';
import PostForm from './PostForm';
import AddBtn from './AddBtn';
import { IState } from '../store/reducer';

import { IPost } from '../types';

interface Props {
  posts: IPost[];
  deletePostByItem: (payload: { id: IPost['id'] }) => void;
}

const Dashboard: React.FC<Props> = (props) => {
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

  const deletePost = (id: number | string) => {
    props.deletePostByItem({ id: id });
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
              deletePost={() => deletePost(post.id)}
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

const mapStateToProps = (state: IState) => {
  return {
    posts: state.posts,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    deletePostByItem: (payload: { id: IPost['id'] }) => {
      dispatch({
        type: 'DELETE_POST',
        payload: payload,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
