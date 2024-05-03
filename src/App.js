

import React from 'react';
import './App.css';
import { BookmarkProvider } from './contexts/BookmarkContext';
import AddBookmark from './components/AddBookmark';
import BookmarkList from './components/BookmarkList';

function App() {
  return (
    <div className="App">
      <h1>Bookmark Website</h1>
      <BookmarkProvider>
        <AddBookmark />
        <BookmarkList />
      </BookmarkProvider>
    </div>
  );
}

export default App;
