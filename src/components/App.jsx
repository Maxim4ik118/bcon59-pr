import PostList from './PostList';
import imgCat from '../assets/images/cat-1.jpg';
import { useState } from 'react';
import { checkPopularityPosts } from 'utils/helpers';
import { Modal } from './Modal';

import React from 'react';

export const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      srcImage: imgCat,
      title: 'Hello Cat',
      content: 'testReact1',
      isPopular: false,
    },
    {
      id: 2,
      srcImage: imgCat,
      title: 'Hello Dog',
      content: 'testReact2',
      isPopular: false,
    },
    {
      id: 3,
      srcImage: imgCat,
      title: 'Hello Fish',
      content: 'testReact3',
      isPopular: true,
    },
  ]);
  const [filterTerm, setFilterTerm] = useState('');
  const [modalOpen, setModal] = useState(true);

  const onDeletePost = postId => {
    setPosts(posts.filter(post => post.id !== postId));
  };

  const onInputChange = event => {
    setFilterTerm(event.target.value);
  };

  const filteredPosts = posts.filter(post => {
    const regex = new RegExp(filterTerm.toLocaleLowerCase());
    return regex.test(post.title.toLocaleLowerCase());
  });

  const onChangeStatus = postId => {
    setPosts(
      posts.map(post => {
        if (postId === post.id) {
          return { ...post, isPopular: !post.isPopular };
        }
        return post;
      })
    );
  };

  const onCloseModal = () => {
    setModal(false);
  };

  const showPromocode = checkPopularityPosts(posts) && modalOpen;
  return (
    <>
      <h2 className="header-title">Котик на дієті, нещасний котик</h2>
      <input value={filterTerm} type="text" onChange={onInputChange} />
      {showPromocode && <Modal onCloseModal={onCloseModal} />}
      <PostList
        title="My Post List"
        list={filteredPosts}
        onDeletePost={onDeletePost}
        onChangeStatus={onChangeStatus}
      />
    </>
  );
};
