import React, { PropTypes, Component } from 'react';
import moment from 'moment';
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

class PostPage extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const {
      postList,
      pageStyle,
    } = this.props;

  const styles = getStyles();
    const posts = (
      <PostItem
        name={this.props.name}
      />
    );
  
  return (
    <div className="post-page" style={Object.assign(styles.page, pageStyle)}>
      {posts}
    </div>
  );
};
}

PostPage.propTypes = {
  pageStyle: PropTypes.object,
  postList: PropTypes.array,
};

export default PostPage;
