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
  };
  return styles;
};

class PostItem extends Component {

  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
    };
  }

  handleClick = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {

    const {
      post,
      zDepth,
      paperStyle,
    } = this.props;

    const styles = getStyles();

    const icon = this.state.isEditing ?
        <Save />
    :
        <Create />;

    return (
      <div>
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
            <TextField
              value={post.comment}
              fullWidth={false}
              disabled={!this.state.isEditing}
              onChange={e => this.props.onChange(e)}
            />
            <br />
          </div>
        </Paper>
      </div>
    );
  }
};

export default PostItem;

