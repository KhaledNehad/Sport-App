import { combineReducers } from 'redux';
import allPosts from './posts';

const rootReducer = combineReducers({
  allPosts,
});
export default rootReducer;
