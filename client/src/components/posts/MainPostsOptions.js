import React from 'react';
import AddIcon from '@material-ui/icons/Add';

const MainPostsOptions = () => {
  return (
    <div className='post-options'>
      <button className='btn btn-primary add-post-btn'>
        <AddIcon fontSize='small' /> Add
      </button>
    </div>
  );
};

export default MainPostsOptions;
