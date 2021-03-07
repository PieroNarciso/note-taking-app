import { IPost } from '../types';

export interface addPostItem {
  type: 'ADD_POST';
  payload: IPost;
}

export interface deletePostItem {
  type: 'DELETE_POST';
  payload: { id: IPost['id'] };
}

export interface editPostItem {
  type: 'EDIT_POST';
  payload: IPost;
}


export type Actions = addPostItem | deletePostItem | editPostItem;
