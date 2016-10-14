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

  static propTypes = {
    pageStyle: PropTypes.object,
    id: PropTypes.number,
    postItem: PropTypes.object,
  };

  constructor(props){
    super(props);
    this.state = {
      countId: 1,
      posts: [
        {
          id: 1,
          postItem: (<PostItem
            name={this.props.name}
          />)
        },
      ]
    }
  }

  handleRemove = (id) => {
    let postItems = this.state.posts;
    postItems.map((post) => {
      if (post.id > 1 && post.id === id) {
        const removePors = postItems.indexOf(post);
        postItems.splice(removePors, 1);
      }
    });

    this.setState({
      posts: postItems,
    });
  };

  handleAdd = () => {
    const postItems = this.state.posts;

    postItems.push(
        {
          id: this.state.countId + 1,
          postItem: (<PostItem
            name={this.props.name}
            id={this.state.countId + 1}
            handleRemove={this.handleRemove}
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

    const posts = this.state.posts.map((post) => (
      <div key={post.id}>
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

export default PostPage;
