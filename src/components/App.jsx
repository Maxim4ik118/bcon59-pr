import PostList from './PostList';
// import imgCat from '../assets/images/cat-1.jpg';
// import imgDog from '../assets/images/dog-1.jpg';
// import imgFish from '../assets/images/fish-1.webp';
import { Component } from 'react';
import { PostForm } from 'components/PostForm/PostForm';
import { Modal } from './Modal/Modal';
import { requestPosts } from 'services/api';
import { ColorRing } from 'react-loader-spinner';

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },

export class App extends Component {
  state = {
    filter: '',
    modal: {
      isOpen: false,
      modalData: null,
    },
    posts: [],
    isLoading: false,
    error: null,
  };

  fetchPost = async () => {
    try {
      this.setState({ isLoading: true });
      const posts = await requestPosts();
      console.log(posts);
      this.setState({ posts: posts });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchPost();
  }

  onDeletePost = postId => {
    this.setState({
      posts: this.state.posts.filter(post => post.id !== postId),
    });
  };

  onFilterChange = event => {
    const inputValue = event.target.value;
    this.setState({ filter: inputValue });
  };

  onOpenModal = modalData => {
    this.setState({
      modal: {
        isOpen: true,
        modalData: modalData,
      },
    });
  };
  onCloseModal = () => {
    this.setState({
      modal: {
        isOpen: false,
        modaltData: null,
      },
    });
  };

  render() {
    // const filteredPostsByTitleAndContent = this.state.posts.filter(post => {
    //   return (
    //     post.title
    //       .toLowerCase()
    //       .includes(this.state.filter.trim().toLowerCase()) ||
    //     post.content
    //       .toLowerCase()
    //       .includes(this.state.filter.trim().toLowerCase())
    //   );
    // });

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
        {this.state.isLoading ? (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        ) : null}
        {this.state.error ? (
          <p className="error-txt">Error: {this.state.error}</p>
        ) : null}
        <PostList
          title="My Post List"
          list={this.state.posts}
          filter={this.state.filter}
          onDeletePost={this.onDeletePost}
          onOpenModal={this.onOpenModal}
        />
        {this.state.modal.isOpen === true && (
          <Modal data={'Hello from modal'} onCloseModal={this.onCloseModal} />
        )}
      </>
    );
  }
}
