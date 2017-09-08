import React, { Component } from "react";
import API from "../../utils/API";
import {Row,Button,Input} from "react-materialize";

class ArticleForm extends Component {
  constructor() {
    super();
    this.state = {
      topic: "",
      startYear: "",
      endYear: "",
    };
    // Binding handleInputChange and handleButtonClick since we'll be passing them as
    // callbacks and 'this' will change otherwise
  //   this.handleInputChange = this.handleInputChange.bind(this);
  //   this.handleButtonClick = this.handleButtonClick.bind(this);
 }
  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
   };

    searchArticle = query => {
      API.search(query)
        .then(res => this.setState({ results: res.data.data }))
        .catch(err => console.log(err));
  };

    handleFormSubmit = event => {
    event.preventDefault();
    this.searchArticle(this.state);
  };

  render() {
    return (
      <div>
        <Row>
          <Input onChange={this.handleInputChange} name="topic" placeholder="Topic" s={12} label="Topic" />
          <Input onChange={this.handleInputChange} name="startYear" s={12} label="Start Year" />
          <Input onChange={this.handleInputChange} name="endYear" s={12} label="End Year" />
        </Row>
        <Button onClick={this.handleFormSubmit} waves='light'>Search</Button>
      </div>
    );
  }
}

export default ArticleForm;