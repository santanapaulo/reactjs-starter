import React, { PropTypes, Component } from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AccountCircle from 'material-ui/svg-icons/action/account-circle';
import AccessTime from 'material-ui/svg-icons/device/access-time';
import Save from 'material-ui/svg-icons/content/save';
import Create from 'material-ui/svg-icons/content/create';
import IconButton from 'material-ui/IconButton';

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

class PostPage extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleClick() {
    console.log('ok');
    console.log(this.state);
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {

    const {
      postList,
      zDepth,
      paperStyle,
      pageStyle,
    } = this.props;

    const styles = getStyles();

    const getPost = () => {
      const icon = this.state.isEditing ?
        <Save />
      :
        <Create />;
      const posts = postList.map((post) => (
          <Paper style={Object.assign(styles.paper, paperStyle)} zDepth={zDepth}>
            <div className="header">
              <div className="fields">
                <AccountCircle />
                {post.name}
              </div>
              <div className="fields">
                <AccessTime />
                {post.time}
              </div>
              <div className="fields">
                <IconButton
                  onClick={this.handleClick}
                >
                  {icon}
                </IconButton>
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
  }
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
