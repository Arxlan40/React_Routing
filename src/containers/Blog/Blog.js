import React, { Component } from "react";
// import axios from 'axios';

import Posts from "../Blog/Posts/Posts";
import "./Blog.css";
import { Route } from "react-router-dom";
class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <a href="/posts">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <Posts   />
        <Route path="/posts"  exact render={()=> <h1>Arsalan</h1>}/>     </div>
    );
  }
}

export default Blog;
