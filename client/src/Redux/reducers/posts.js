import {
  ALL_POSTS_REQUEST,
  ALL_POSTS_FAIL,
  ALL_POSTS_SUCCESS,
} from '../constants/postConstants';

const allPosts = (state = { posts: [] }, action) => {
  switch (action.type) {
    case ALL_POSTS_REQUEST:
      return { isLoading: true, posts: [] };
    case ALL_POSTS_SUCCESS:
      return { isLoading: false, posts: action.payload };
    case ALL_POSTS_FAIL:
      return { isLoading: false, error: action.payload };

    case 'CREATE':
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        isLoading: false,
      };

    default:
      return state;
  }
};

export default allPosts;
