import React, { PropTypes } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const getStyles = () => {
  const styles = {
    paper: {
      height: 'auto',
      width: 'auto',
      margin: 20,
      textAlign: 'center',
      display: 'inline-block',
    },
    page: {
      height: '100%',
      width: '100%',
    },	
  };
  return styles;
};

const PostForm = (props) => {
  const {
    pageStyle,
    zDepth,
    paperStyle,
    ...others,
  } = props;

  const styles = getStyles();

  return (
    <div style={Object.assign(styles.page, pageStyle)}>
      {...others}
      <Paper style={Object.assign(styles.paper, paperStyle)} zDepth={zDepth}>
        <TextField
          hintText="Nome"
        />
      </Paper>
    </div>
  );
};

PostForm.propTypes = {
  pageStyle: PropTypes.object,
  paperStyle: PropTypes.object,
  zDepth: PropTypes.number,
};

PostForm.defaultProps = {
  zDepth: 3,
};

export default PostForm;
