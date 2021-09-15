import React from "react";
import myPostsStyles from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={myPostsStyles.posts}>
        <Post text="some text 1"/>
        <Post text="some text 2"/>
        <Post text="some text 3"/>
      </div>
    </div>
  );
}

export default MyPosts;
