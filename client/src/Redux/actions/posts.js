import * as api from './../../api';
import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_SUCCESS,
  ALL_POSTS_FAIL,
} from '../constants/postConstants';

export const getPosts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_POSTS_REQUEST });

    const data = await api.fetchPosts();
    dispatch({ type: ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ALL_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
