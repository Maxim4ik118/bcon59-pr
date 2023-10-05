import PostList from './PostList';
// import imgCat from '../assets/images/cat-1.jpg';
// import imgDog from '../assets/images/dog-1.jpg';
// import imgFish from '../assets/images/fish-1.webp';
import { useState, useEffect } from 'react';
// import { PostForm } from 'components/PostForm/PostForm';
import { Modal } from './Modal/Modal';
import { requestPosts } from 'services/api';
import { ColorRing } from 'react-loader-spinner';

// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },

export function App() {
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState({ isOpen: false, modalData: null });
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setIsLoading(true);
        const postsData = await requestPosts();
        setPosts(postsData);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPost();
  }, []);

  const onDeletePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const onFilterChange = event => {
    const inputValue = event.target.value;
    setFilter(inputValue);
  };

  const onOpenModal = modalData => {
    setModal({
      isOpen: true,
      modalData: modalData,
    });
  };

  const onCloseModal = () => {
    setModal({
      isOpen: false,
      modalData: null,
    });
  };

  const filteredPostsByTitleAndContent = posts.filter(post => {
    return post.title.toLowerCase().includes(filter.trim().toLowerCase());
  });

  return (
    <>
      <h2 className="header-title">Котик на дієті, нещасний котик</h2>
      {/* <PostForm title="Form post" onAddPost={onAddPost} /> */}
      <div className="input-wrapper">
        <p>Find post by title or content</p>
        <input onChange={onFilterChange} value={filter} type="text" />
      </div>
      {/* {this.state.posts.length === 0 ? (
          <p>There are no added posts yet</p>
        ) : null} */}
      {isLoading ? (
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
      {error ? <p className="error-txt">Error: {error}</p> : null}
      <PostList
        title="My Post List"
        list={filteredPostsByTitleAndContent}
        filter={filter}
        onDeletePost={onDeletePost}
        onOpenModal={onOpenModal}
      />
      {modal.isOpen === true && (
        <Modal data={'Hello from modal'} onCloseModal={onCloseModal} />
      )}
    </>
  );
}
