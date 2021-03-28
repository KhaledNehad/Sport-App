import React from 'react';
import MainPostsOptions from '../components/posts/MainPostsOptions';
import Posts from '../components/posts/Posts';
import TopPost from '../components/posts/TopPost';
import Container from '../layout/Container';

const Home = () => {
  return (
    <Container>
      <MainPostsOptions />
      <TopPost />
      <Posts />
    </Container>
  );
};

export default Home;
