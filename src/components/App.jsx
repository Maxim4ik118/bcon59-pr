import PostList from './PostList';

import imgCat from '../assets/images/cat-1.jpg';
import imgDog from '../assets/images/dog-1.jpg';
import imgFish from '../assets/images/fish-1.webp';
import { Component, useEffect, useState } from 'react';
import { PostForm } from 'components/PostForm/PostForm';
import { Modal } from './Modal/Modal';

import React from 'react';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [modal, setModal] = useState({ isOpen: false, modalData: null });
  const [posts, setPosts] = useState(() => {
    const stringifiedPosts = localStorage.getItem('keyPost');
    const parsedPosts = JSON.parse(stringifiedPosts) ?? [];
    return parsedPosts;
  });

  useEffect(() => {
    const stringifiedPosts = JSON.stringify(posts);
    localStorage.setItem('keyPost', stringifiedPosts);
  }, [posts]);

  const onDeletePost = postId => {
    setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
  };

  const addPopularStatus = postId => {
    // postId = 2
    // [{ id: 1, isPopular: false}, {id:2, isPopular: false}]
    // [{ id: 1, isPopular: false}, {id:2, isPopular: true}]

    setPosts(prevPosts =>
      posts.map(post =>
        postId === post.id ? { ...post, isPopular: !post.isPopular } : post
      )
    );
  };

  const onAddPost = formData => {
    const post = {
      ...formData,
      id: Math.random(),
      srcImage: imgCat,
      isPopular: false,
    };

    setPosts([...posts, post]);
  };

  const onFilterChange = event => {
    const inputValue = event.target.value;
    setFilter(inputValue);
  };


  const onOpenModal = (modalData) => {
    setModal({isOpen: true, modalData })
  }
  const onCloseModal = () => {
    setModal({isOpen: false, modalData:null})
  }

  const filteredPostsByTitleAndContent = posts.filter(post => {
    return (
      post.title.toLowerCase().includes(filter.trim().toLowerCase()) ||
      post.content.toLowerCase().includes(filter.trim().toLowerCase())
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
      <PostForm title="Form post" onAddPost={onAddPost} />
      <div className="input-wrapper">
        <p>Find post by title or content</p>
        <input onChange={onFilterChange} value={filter} type="text" />
      </div>
      <PostList
        title="My Post List"
        list={sortedFilteredPosts}
        filter={filter}
        onDeletePost={onDeletePost}
        addPopularStatus={addPopularStatus}
        onOpenModal={onOpenModal}
      />

      {modal.isOpen === true && (
        <Modal data={'Hello from modal'} onCloseModal={onCloseModal} />
      )}
    </>
  );
};