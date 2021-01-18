import React, { Component } from "react";
import axios from "axios";
class Getentries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:1337/form-entries")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return <div>test</div>;
  }
}

export default Getentries;
