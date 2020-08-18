import React from "react";

function About() {
  return (
    <React.Fragment>
      <h1>About</h1>
      <p>
        This is the{" "}
        <a href="https://www.youtube.com/watch?v=sBws8MSXN7A" style={linkStyle}>
          TodoList app v1.0.0.
        </a>{" "}
        It is part of a React crash course.
      </p>
    </React.Fragment>
  );
}

const linkStyle = {
  textDecoration: "underline",
  color: "#00f",
};
export default About;
