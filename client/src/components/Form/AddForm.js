import React, { useState } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Typography,
} from '@material-ui/core';

import FileBase from 'react-file-base64';

import { useDispatch } from 'react-redux';
import { createPost } from '../../Redux/actions/posts';
const initialState = {
  title: '',
  body: '',
  postImage: '',
};

export default function AddForm() {
  const [openAddForm, setOpenAddForm] = useState(false);

  const openAddFromHandler = () => {
    setOpenAddForm(true);
  };

  const closeAddFromHandler = () => {
    setOpenAddForm(false);
  };

  const dispatch = useDispatch();
  const submitPostHandler = async (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
    setPostData(initialState);
    setOpenAddForm(false);
  };
  const [postData, setPostData] = useState(initialState);
  const { title, body, postImage } = postData;
  const onChangeHandler = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button variant='outlined' color='primary' onClick={openAddFromHandler}>
        Add new post
      </Button>
      <Dialog
        open={openAddForm}
        onClose={closeAddFromHandler}
        aria-labelledby='form-dialog-title'
      >
        <DialogTitle id='form-dialog-title'>Add New Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin='dense'
            label='Post title'
            type='text'
            fullWidth
            variant='outlined'
            onChange={(e) => onChangeHandler(e)}
            name='title'
            value={title}
          />
          <TextField
            margin='dense'
            label='Post body'
            type='text'
            fullWidth
            multiline
            rows={4}
            variant='outlined'
            onChange={(e) => onChangeHandler(e)}
            name='body'
            value={body}
          />
          <Typography variant='subtitle1'>Post Image</Typography>

          <FileBase
            type='file'
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
            name='postImage'
            value={postImage}
            hidden
          />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={closeAddFromHandler}
            variant='outlined'
            color='secondary'
          >
            Cancel
          </Button>
          <Button
            onClick={submitPostHandler}
            variant='contained'
            color='primary'
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
