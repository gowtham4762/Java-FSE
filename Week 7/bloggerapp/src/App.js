
import React, { useState } from 'react';

function BookDetails() {
  return <h3>Book: React Basics</h3>;
}

function BlogDetails() {
  return <h3>Blog: Learning React Step by Step</h3>;
}

function CourseDetails() {
  return <h3>Course: Advanced React Development</h3>;
}

function App() {
  const [view, setView] = useState('book');

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blogger App</h1>
      <button onClick={() => setView('book')}>Book Details</button>
      <button onClick={() => setView('blog')}>Blog Details</button>
      <button onClick={() => setView('course')}>Course Details</button>

      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}
    </div>
  );
}

export default App;
