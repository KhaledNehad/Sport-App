import React, { useState } from 'react';

import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Link,
  Menu,
  MenuItem,
} from '@material-ui/core';
import {
  ThumbUpAltRounded,
  QuestionAnswerRounded,
  Delete,
  MoreHoriz,
} from '@material-ui/icons';

import MoreVertIcon from '@material-ui/icons/MoreVert';

import Moment from 'react-moment';

const PostCardItem = ({ post }) => {
  const [showMenu, setShowMenu] = useState(null);

  const handleClick = (event) => {
    setShowMenu(event.currentTarget);
    console.log(event.currentTarget);
  };

  const handleClose = () => {
    setShowMenu(null);
    console.log('closed');
  };
  return (
    <>
      <Card>
        <CardMedia
          component={() => (
            <img alt='' src={post.selectedFile} className='card-thumbnail' />
          )}
        />
        <CardHeader
          avatar={
            <Avatar aria-label='recipe'>{`${post.title}`.charAt(0)}</Avatar>
          }
          action={
            <IconButton
              aria-label='settings'
              aria-haspopup='true'
              onClick={handleClick}
            >
              <MoreVertIcon />

              <Menu
                id='simple-menu'
                anchorEl={showMenu}
                keepMounted
                open={Boolean(showMenu)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </IconButton>
          }
          title={<Link to='/#'>{post.title}</Link>}
          subheader={
            <Moment className='card-date' fromNow>
              {post.createdAt}
            </Moment>
          }
        />
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {/* {`${post.body}.split(' ')`.slice(0, 150)}... */}
            {post.body.length > 150
              ? post.body.slice(0, 150) + '...'
              : post.body}
          </Typography>
        </CardContent>

        <CardActions disableSpacing>
          {/* <Typography variant='subtitle2'>{post.likes}</Typography> */}

          <IconButton aria-label='like post'>
            <ThumbUpAltRounded fontSize='small' />
          </IconButton>
          <IconButton aria-label='like post'>
            <QuestionAnswerRounded fontSize='small' />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default PostCardItem;
