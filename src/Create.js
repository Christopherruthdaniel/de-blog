import { useState } from "react";
import { useHistory } from "react-router-dom";
// import React, {Component} from 'react';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      history.push('/');
    })
  }
  // class App extends Component{
  // fileselectedhandler = event => {
  //   console.log(event.tar);
  // }}

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        {/* <div className="App">
          <input type="file "onchange={this.fileselectedhandler}></input>
          </div> */}
        <label>Blog title:</label>

        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <input 
          type="text" 
          required 
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        {/* <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
         
        </select> */}
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;