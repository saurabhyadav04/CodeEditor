import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class About extends Component {
  render() {
    return (
      <div className="container my-4">
        <h1>About Me !</h1>
        <p>
          <b> Hyy </b>
          <div class="container-fluid">
            Saurabh Here ,Experienced Content Writer with a demonstrated history
            of working in the computer software industry. Skilled in
            Communication, English, HTML, Algorithms, and Object-Oriented
            Programming (OOP). Strong media and communication professional with
            a Bachelor of Science focused in Information Technology from
            University of Mumbai I have rich experience C++ and React
            Programming!.{" "}
          </div>
        </p>

        <Link
          to="https://www.linkedin.com/in/saurabh-yadav2003/"
          target="_blank"
          className="btn btn-primary"
        >
          Click here{" "}
        </Link>
      </div>
    );
  }
}
