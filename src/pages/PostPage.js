import React, { PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const getStyles = () => {
  const styles = {
    paper: {
      height: '400px',
      width: '900px',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    },
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
    zDepth,
    paperStyle,
    pageStyle,
  } = props;

  const styles = getStyles();

  const getPost = () => {
    const posts = postList.map((post) => (
        <Paper style={Object.assign(styles.paper, paperStyle)} zDepth={zDepth}>
          <div className="header">
            <div className="fields">
              {post.name}
            </div>
            <div className="fields">
              {post.time}
            </div>
          </div>
          <div className="comment-part">
            {post.comment}
          </div>
        </Paper>
      )
    )
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
  paperStyle: PropTypes.object,
  zDepth: PropTypes.number,
  postList: PropTypes.array,
};

PostPage.defaultProps = {
  zDepth: 3,
};

export default PostPage;
