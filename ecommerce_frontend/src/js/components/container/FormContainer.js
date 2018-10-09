import React, { Component } from "react";
import ReactDOM from "react-dom";
import InputText from "../presentational/InputText";
import VerifyAuthStep from "../presentational/VerifyAuthStep";
import Button from '@material-ui/core/Button';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
      <VerifyAuthStep         />

      </form>
    );
  }
}
export default FormContainer;
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;
