import React from 'react';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';

const PostCardItem = ({ post }) => {
  return (
    <div className='post-card'>
      <div className='card-thumbnail'>
        <img src={post.image} alt={post.title} />
      </div>
      <div className='card-header'>
        <h3>{post.title}</h3>
        <span className='card-date'>{post.date}</span>
      </div>
      <div className='card-body'>
        <p>{post.body}</p>
      </div>
      <div className='card-footer'>
        <div className='creator-info'>
          <img src={post.creator.profilePic} alt='' />
          <h5>
            {post.creator.username}
            <br />
            <span className='role'>{post.creator.role}</span>
          </h5>
        </div>
        <div className='post-actions'>
          <span className='likes'>
            {post.numberOfLikes} <ThumbUpAltRoundedIcon fontSize='small' />
          </span>
          <span className='comments'>
            {post.numberOfComments}
            <QuestionAnswerRoundedIcon fontSize='small' />
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCardItem;
