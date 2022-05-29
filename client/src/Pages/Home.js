import React from 'react';
import MainPostsOptions from '../components/posts/MainPostsOptions';
import Posts from '../components/posts/PostsList';
import Container from '../layout/Container';

const Home = () => {
  return (
    <Container>
      <MainPostsOptions />
      <Posts />
    </Container>
  );
};

export default Home;
