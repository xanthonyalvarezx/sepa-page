import React from "react";
import { Button, Input, Label } from "semantic-ui-react";
import './FormPage.css'

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div className='emailForm'>
        <p>Subscribe to our monthly newsletter and you'll recieve updates on new trails, new videos on our YouTube and Events happening locally. Don't miss out sign up now!</p>



        <form
          id='form'
          onSubmit={this.submitForm}
          action="https://formspree.io/f/myybwgyo"
          method="POST"
        >

          <Input type="email" name="email" />
          <br />
          <Label pointing>Please enter your email</Label>
          <br />
          <br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <Button content='Submit' primary size='medium' />}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default Form