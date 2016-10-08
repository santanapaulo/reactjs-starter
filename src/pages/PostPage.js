import React, { PropTypes } from 'react';

import PostItem from '../components/PostItem';

const getStyles = () => {
  const styles = {
    page: {
      height: '100%',
      width: '100%',
      textAlign: 'center'
    },
  };
  return styles;
};

const PostPage = (props) => {
  const {
    postList,
    pageStyle,
  } = props;

  const styles = getStyles();

  const getPost = () => {
    console.log(postList);
    const posts = postList.map((post) => (
      <PostItem
        post={post}
      />
    ))
    return posts;
  };
  
  return (
    <div className="post-page" style={Object.assign(styles.page, pageStyle)}>
      {getPost()}
    </div>
  );
};

PostPage.propTypes = {
  pageStyle: PropTypes.object,
  postList: PropTypes.array,
};

export default PostPage;
