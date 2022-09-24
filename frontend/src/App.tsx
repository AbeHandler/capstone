import React from 'react';

import { Route, Routes } from 'react-router-dom';

import AppBar from './components/AppBar';
import HomePage from './components/HomePage';
import TagPage from './components/TagPage';
import DocumentPage from './components/DocumentPage';

function App() {
  return (
    <div className="App">
    <AppBar />
    <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/Tags" element={<TagPage />}/>
        <Route path="/Documents" element={<DocumentPage />}/>

      </Routes>
    </div>
  );
}

export default App;
