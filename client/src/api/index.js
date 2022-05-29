import axios from 'axios';

const url = '/posts';

export const fetchPosts = async () => {
  const { data } = await axios.get(url);
  return data;
};

export const createPost = (newPost) =>
  axios.post(url, newPost, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
