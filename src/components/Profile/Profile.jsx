import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";

function Profile() {
  return (
    <div>
        <img  className={style.mainPic} src="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg" />
      <div>ava + description</div>
      <MyPosts />
    </div>
  );
}

export default Profile;
