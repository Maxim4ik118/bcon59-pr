import Loader from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import Postlist from 'components/PostList';
import React, { useEffect, useState } from 'react';
import { requestPosts } from 'services/api';

const Posts = () => {
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
      <div className="input-wrapper">
        <p>Find post by title or content</p>
        <input onChange={onFilterChange} value={filter} type="text" />
      </div>

      {isLoading ? <Loader /> : null}
      {error ? <p className="error-txt">Error: {error}</p> : null}
      <Postlist
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
};

export default Posts;
