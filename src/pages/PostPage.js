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
          name: this.props.name,
        },
      ]
    }
  }

  handleRemove = (id) => {
    if (this.state.posts.length > 1) {
      const postItems = this.state.posts.filter((item) => {
        return item.id !== id;
      });

      this.setState({
        posts: postItems,
      });
    } else {
      window.alert('Você deve ter no mínimo um post!');
    }
  };

  handleAdd = () => {
    const postItems = this.state.posts;
    postItems.push(
        {
          id: this.state.countId + 1,
          name: this.props.name,
        },
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
        <PostItem
          id={post.id}
          name={post.name}
          onRemove={this.handleRemove}
        />
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
