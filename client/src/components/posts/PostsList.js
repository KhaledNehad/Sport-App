import { useEffect } from 'react';
import PostCardItem from './PostCardItem';
import './Posts.css';
import { getPosts } from './../../Redux/actions/posts';
import { useDispatch, useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

// const posts = [
//   {
//     id: 1,
//     title: 'Liverpool "cannot rely on the past"!',
// body: `Liverpool defender Andy Robertson says they cannot "rely on the past"after Chelsea inflicted a fifth successive competitive home defeat on the reigning Premier League champions for the first time in their history to leave them battling to make the top four.`,
//     image: './images/liverpool.jpeg',
//     date: 'Today at 9:00 PM',
//     numberOfLikes: 25,
//     numberOfComments: 12,
//     creator: {
//       username: 'Khaled Nehad',
//       profilePic: './images/profile2.jpeg',
//       role: 'Admin',
//     },
//   },
//   {
//     id: 2,
//     title: 'Leicester in goalless draw at Wolves',
//     body: `Leicester City's outside hopes of winning the Premier League title suffered a
//     blow after being held to a goalless draw at Midlands rivals Wolves.
//     Brendan Rodgers' side lie in third place, seven points adrift of league
//     leaders Manchester City, who also have a further game in hand.

//     `,
//     image: './images/Leicester.jpeg',
//     date: 'Today at 9:00 PM',
//     numberOfLikes: 25,
//     numberOfComments: 12,
//     creator: {
//       username: 'Albert Dera',
//       profilePic: './images/profile.png',
//       role: 'Admin',
//     },
//   },
//   {
//     id: 3,
//     title: 'Arsenal mount comeback at West Ham',
//     body: `While Martin Odegaard's opener paved the way for their win, familiar
//     failings at the back saw the Greek champions level and made life uncomfortable
//     until late goals from Gabriel and Mohamed Elneny swung the contest back in
//     Arsenal's favour.`,
//     image: './images/Arsenal.jpeg',
//     date: 'Today at 9:00 PM',
//     numberOfLikes: 25,
//     numberOfComments: 12,
//     creator: {
//       username: 'Rachel McDermott',
//       profilePic: './images/profile3.jpeg',
//       role: 'Admin',
//     },
//   },
//   {
//     id: 4,
//     title: 'Own goal helps Man Utd edge past Hammers',
//     body: `On loan from Watford, Dawson has been outstanding in the Hammers'
//     push for a top-four slot but settled the contest in the wrong way at the start
//     of the second half as he turned Bruno Fernandes' corner into his own net under pressure
//     from Scott McTominay at the near post.

//     `,
//     image: './images/ManU.jpeg',
//     date: 'Today at 9:00 PM',
//     numberOfLikes: 25,
//     numberOfComments: 12,
//     creator: {
//       username: 'Khaled Nehad',
//       profilePic: './images/profile2.jpeg',
//       role: 'Admin',
//     },
//   },
// ];
const PostsList = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.allPosts);

  const { isLoading, error, posts } = allPosts;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <>
      {isLoading ? (
        <div className='spinner-container'>
          <CircularProgress />
        </div>
      ) : error ? (
        <div className='error-container'>
          <Alert severity='error'>{error}</Alert>
        </div>
      ) : !posts.length ? (
        <div className='error-container'>
          <Alert severity='info'>There's no posts to load.</Alert>
        </div>
      ) : (
        <section className='post-container'>
          {posts.map((post) => (
            <PostCardItem key={post._id} post={post} />
          ))}
        </section>
      )}
    </>
  );
};

export default PostsList;
