import React from 'react';
import logo from './logo.svg';
import './App.css';
import FormBuilder from './builder/FormBuilder';
import PostCard from './components/PostCard';
import CommandApp from './command/CommandApp';

function App() {
  let elements = new FormBuilder()
  .input({"label": "Name"})
  .input({"label": "Email"})
  .input({"label": "Age"})
  .checkbox({"label": "Subscribe for Newsletter"})
  .build();

  return (
    <div className="App">
      <CommandApp />
       {elements} 
      <PostCard 
    
      post={{
        id: 1,
        title: 'Hello world',
        content: 'This is a post content',
        user: {
          id: 1,
          name: 'Harish Prasad'
        }
      }}>
     
        <PostCard.Title />
        <PostCard.Buttons />
      </PostCard>
    </div>
  );
}

export default App;
