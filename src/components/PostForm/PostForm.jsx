import { Component, useState } from 'react';

import React from 'react';

export const PostForm = ({ title:propsTitle, onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onInputChange = event => {
    switch (event.target.name) {
      case 'title':
        setTitle(event.target.value);
        break;
      case 'content':
        setContent(event.target.value);
        break;

      default:
        return;
    }
  };

  // const [formData, setFormData] = useState({ title: '', content: '' });
  // const onInputChange = event => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    onAddPost({ title, content });
    setTitle('');
    setContent('');
  };
  // const handleSubmit = event => {
  //   event.preventDefault();
  //   onAddPost(formData);
  //   setFormData({ title: '', content: '' });
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2> {propsTitle}</h2>
      {/* {formData.title === 'halyava' && <p>Discount promocode: #2281337</p>} */}
      {title === 'halyava' && <p>Discount promocode: #2281337</p>}
      <label>
        <span> Title: </span>
        <input
          onChange={onInputChange}
          type="text"
          name="title"
          // value={formData.title}
          value={title}
        />
      </label>
      <label>
        <span> Content: </span>
        <input
          onChange={onInputChange}
          type="text"
          name="content"
          // value={formData.content}
          value={content}
        />
      </label>
      <button type="submit">add post</button>
    </form>
  );
};
