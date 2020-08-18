import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/todos-react">
        Home
      </Link>{" "}
      |{" "}
      <Link style={linkStyle} to="/todos-react/about">
        About
      </Link>
      <br />
      <small style={noteStyle}>
        Combinations of back + refresh will break the route. <br /> This uses
        fake backend.
      </small>
    </header>
  );
}

const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
};
const noteStyle = {
  color: "#555",
};
export default Header;
