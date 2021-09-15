import React from "react";
import style from "./Post.module.css";

function Post(props) {
  return (
    <div className={style.postBody}>
      <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU"
        alt="avatar"
      />
      {props.text}
    </div>
  );
}

export default Post;
