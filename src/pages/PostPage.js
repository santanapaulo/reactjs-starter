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
    this.state = {
      countId: 1,
      posts: [
        {
          id: 1,
          postItem: (<PostItem name={this.props.name} id={1} />)
        },
      ]
    }
  }

  handleRemove = (id) => {
    let postItems = this.state.posts;
    postItems.map((post) => {
      if (post.id > 1 && post.id === id) {
        const removePosts = postItems.indexOf(post);
        postItems.splice(removePosts, 1);
      }
    });

    this.setState({
      posts: postItems,
    });
  };

  handleAdd = () => {
    let postItems = this.state.posts;

    postItems.push(
        {
          id: this.state.countId + 1,
          postItem: (<PostItem
            name={this.props.name}
            id={this.state.countId + 1}
            onRemove={this.handleRemove}
          />)
        }
    );

    this.setState({
      countId: this.state.countId + 1,
      posts: postItems,
    })
  };

  render() {
    const {
      pageStyle,
    } = this.props;

    const styles = getStyles();

    const posts = this.state.posts.map((post, index) => (
      <div key={index}>
        {post.postItem}
      </div>
    ));
    
    return (
      <div className="post-page" style={Object.assign(styles.page, pageStyle)}>
        {posts}
        <div style={{ textAlign: 'right', width: 900, paddingBottom: 30, alignSelf: 'center' }}>
          <RaisedButton
            style={{ width: '100%', textAlign: 'center' }}
            backgroundColor="#5FDAF9"
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
  name: PropTypes.string,
};

export default PostPage;
