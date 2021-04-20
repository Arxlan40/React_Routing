import React, { Component } from "react";
// import axios from 'axios';

import Posts from "../Blog/Posts/Posts";
import "./Blog.css";
import { Route, Link } from "react-router-dom";
import NewPost from "../Blog/NewPost/NewPost";
class Blog extends Component {
  render() {
    return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
                <Link
                  to={{
                    pathname: "/New-Post",
                    hash: "#search",
                    search: "?some-true",
                  }}
                >
                  New Post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact render={() => <Posts />} />
        <Route path="/New-Post" render={() => <NewPost />} />{" "}
      </div>
    );
  }
}

export default Blog;
