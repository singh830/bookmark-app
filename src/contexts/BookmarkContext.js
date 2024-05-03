

import React, { createContext, useState, useContext } from 'react';

const BookmarkContext = createContext();

export const useBookmark = () => useContext(BookmarkContext);

export const BookmarkProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  const addBookmark = (newBookmark) => {
    setBookmarks([...bookmarks, newBookmark]);
  };

  const removeBookmark = (url) => {
    setBookmarks(bookmarks.filter(bookmark => bookmark.url !== url));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarks, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};
