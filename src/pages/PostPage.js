import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import RaisedButton from 'material-ui/RaisedButton';
import AddCircle from 'material-ui/svg-icons/content/add-circle';
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
    console.log(props);
    this.state = {
      posts: [
        {
          postItem: (<PostItem
            name={this.props.name}
          />)
        },
      ]
    }
  }

  handleAdd = () => {
    const postItems = this.state.posts;

    postItems.push(
        {
          postItem: (<PostItem
            name={this.props.name}
          />)
        }
    );

    this.setState({
      posts: postItems,
    })
  };

  render() {
    const {
      postList,
      pageStyle,
    } = this.props;

    const styles = getStyles();

    const posts = this.state.posts.map((post) => (
      post.postItem
    ));
    
    return (
      <div className="post-page" style={Object.assign(styles.page, pageStyle)}>
        {posts}
        <div style={{ textAlign: 'right', width: 900, paddingBottom: 30, alignSelf: 'center' }}>
          <RaisedButton
            style={{ width: '100%', textAlign: 'center' }}
            primary={true}
            label="Add"
            icon={<AddCircle />}
            onClick={this.handleAdd}
          />
        </div>
      </div>
    );
  };
}

PostPage.propTypes = {
  pageStyle: PropTypes.object,
  postList: PropTypes.array,
};

export default PostPage;
