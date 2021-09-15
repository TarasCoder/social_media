import React from "react";
import headerStyles from "./Header.module.css";

function Header() {
  return (
    <header className={headerStyles.header}>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2uGm6s7ajVFIea-NkqC7VAt0xCJfMR0UwqA&usqp=CAU"
        alt="logo"
      ></img>
    </header>
  );
}

export default Header;