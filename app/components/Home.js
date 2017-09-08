import React, { Component } from "react";
import Panel from "./common/Panel";
import ArticleForm from "./common/ArticleForm";
import SearchDetails from "./common/searchDetails";
import API from "../utils/API";

class Home extends Component {
  state = {
    quotes: ["blah", "boo"]
  };
  // Getting all quotes when the component mounts
  getQuotes = () => {
    API.getQuotes().then((res) => {
      this.setState({ quotes: res.data });
    });
  }
  // A helper method for rendering one panel for each quote

  render() {
    return (
      <div className="container">
        <div className="row">
          <ArticleForm />
        </div>
        <div className="row">
          <h3>hi</h3>
          <SearchDetails articleTitle={this.state.quotes}/>
        </div>
      </div>
    );
  }
}

export default Home;
