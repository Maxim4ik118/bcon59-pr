import PostList from './PostList';
import imgCat from '../assets/images/cat-1.jpg';
import { Component } from 'react';

const posts = [
  { id: 1, srcImage: imgCat, title: 'Hello Cat', content: 'testReact1' },
  { id: 2, srcImage: imgCat, title: 'Hello Dog', content: 'testReact2' },
  {
    id: 3,
    srcImage: imgCat,
    title: 'Hello Fish',
    content: 'testReact3',
    isPopular: true,
  },
];
// export const App = () => {
//   return (
//     <>
//       <h2 className="header-title">Котик на дієті, нещасний котик</h2>
//       <PostList title="My Post List" list={posts} />
//     </>
//   );
// };

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

  render() {
    return (
      <>
        <h2 className="header-title">Котик на дієті, нещасний котик</h2>
        <PostList
          title="My Post List"
          list={this.state.posts}
          onDeletePost={this.onDeletePost}
        />
      </>
    );
  }
}
