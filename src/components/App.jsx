import PostList from './PostList';
import imgCat from '../assets/images/cat-1.jpg';
import { Component } from 'react';
import { PostForm } from 'components/PostForm/PostForm';

export class App extends Component {
  state = {
    posts: [
      { id: 1, srcImage: imgCat, title: 'Hello Cat', content: 'testReact1' },
      { id: 2, srcImage: imgCat, title: 'Hello Dog', content: 'testReact2' },
      {
        id: 3,
        srcImage: imgCat,
        title: 'Hello Fish',
        content: 'testReact3',
        isPopular: true,
      },
    ],
  };

  onDeletePost = postId => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId),
    });
  };

  onAddPost = formData => {
    const post = { ...formData, id: Math.random(), srcImage: imgCat };

    this.setState({ posts: [...this.state.posts, post] });
  };

  render() {
    return (
      <>
        <h2 className="header-title">Котик на дієті, нещасний котик</h2>
        <PostForm title="Form post" onAddPost={this.onAddPost} />
        <PostList
          title="My Post List"
          list={this.state.posts}
          onDeletePost={this.onDeletePost}
        />
      </>
    );
  }
}
