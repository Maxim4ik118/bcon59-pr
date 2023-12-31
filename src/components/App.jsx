import PostList from './PostList';

import imgCat from '../assets/images/cat-1.jpg';
import imgDog from '../assets/images/dog-1.jpg';
import imgFish from '../assets/images/fish-1.webp';
import { Component } from 'react';
import { PostForm } from 'components/PostForm/PostForm';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    filter: '',
    modal: {
      isOpen: false,
      modalData: null,
    },
    posts: [
      {
        id: 1,
        srcImage: imgCat,
        title: 'Cat',
        content: 'Sad',
        isPopular: false,
      },
      {
        id: 2,
        srcImage: imgDog,
        title: 'Dog',
        content: 'Happy',
        isPopular: false,
      },
      {
        id: 3,
        srcImage: imgFish,
        title: 'Fish',
        content: 'Wet',
        isPopular: true,
      },
    ],
  };

  componentDidMount() {
    const stringifiedPosts = localStorage.getItem('keyPost');
    const parsedPosts = JSON.parse(stringifiedPosts) ?? [];
    this.setState({ posts: parsedPosts });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.posts !== prevState.posts) {
      const stringifiedPosts = JSON.stringify(this.state.posts);
      localStorage.setItem('keyPost', stringifiedPosts);
    }
  }

  onDeletePost = postId => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId),
    });
  };

  addPopularStatus = postId => {
    // postId = 2
    // [{ id: 1, isPopular: false}, {id:2, isPopular: false}]
    // [{ id: 1, isPopular: false}, {id:2, isPopular: true}]
    this.setState({
      posts: this.state.posts.map(post =>
        postId === post.id ? { ...post, isPopular: !post.isPopular } : post
      ),
    });
  };

  onAddPost = formData => {
    const post = { ...formData, id: Math.random(), srcImage: imgCat, isPopular: false };

    this.setState({ posts: [...this.state.posts, post] });
  };

  onFilterChange = event => {
    const inputValue = event.target.value;
    this.setState({ filter: inputValue });
  };


  onOpenModal = (modalData) => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: modalData
      }
    })
  }
  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modaltData: null
      }
    })
  }





  render() {
    const filteredPostsByTitleAndContent = this.state.posts.filter(post => {
      return (
        post.title
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase()) ||
        post.content
          .toLowerCase()
          .includes(this.state.filter.trim().toLowerCase())
      );
    });
    const sortedFilteredPosts = [...filteredPostsByTitleAndContent].sort(
      (a, b) => {
        return Number(b.isPopular) - Number(a.isPopular);
      }
    );
    return (
      <>
        <h2 className="header-title">Котик на дієті, нещасний котик</h2>
        <PostForm title="Form post" onAddPost={this.onAddPost} />
        <div className="input-wrapper">
          <p>Find post by title or content</p>
          <input
            onChange={this.onFilterChange}
            value={this.state.filter}
            type="text"
          />
        </div>
        {/* {this.state.posts.length === 0 ? (
          <p>There are no added posts yet</p>
        ) : null} */}
        <PostList
          title="My Post List"
          list={sortedFilteredPosts}
          filter={this.state.filter}
          onDeletePost={this.onDeletePost}
          addPopularStatus={this.addPopularStatus}
          onOpenModal={this.onOpenModal}
        />

        {
          this.state.modal.isOpen === true &&
          <Modal
            data={'Hello from modal'}
            onCloseModal={this.onCloseModal}
          />
        }




      </>
    );
  }
}
