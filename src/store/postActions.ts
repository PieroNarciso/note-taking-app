import { IPost } from '../types';

export interface addPostItem {
  type: 'ADD_POST';
  payload: IPost;
}

export interface deletePostItem {
  type: 'DELETE_POST';
  payload: { id: IPost['id'] };
}


export type Actions = addPostItem | deletePostItem;
