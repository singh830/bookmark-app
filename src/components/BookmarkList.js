

import React from 'react';
import { useBookmark } from '../contexts/BookmarkContext';

const BookmarkList = () => {
  const { bookmarks, removeBookmark } = useBookmark();

  return (
    <div>
      <h2>Bookmarks</h2>
      <ul>
        {bookmarks.map((bookmark, index) => (
          <li key={index}>
            <a href={bookmark.url}>{bookmark.name}</a>
            <button onClick={() => removeBookmark(bookmark.url)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookmarkList;
