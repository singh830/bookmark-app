

import React, { useState } from 'react';
import { useBookmark } from '../contexts/BookmarkContext';

const AddBookmark = () => {
  const { addBookmark } = useBookmark();
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBookmark({ name, url });
    setName('');
    setUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} required />
      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default AddBookmark;
