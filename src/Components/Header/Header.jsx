import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings inner-Width h-container">
        SARVODAYA
        {/* <img src="./logo.png" alt="logo" width={100} /> */}
        <div className="flexCenter h-menu">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Programs</a>
          <a href="">Communitess</a>
          <button className="button">
            <a href="">contact</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
