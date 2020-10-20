import React from "react";
import { Button ,Input, Label } from "semantic-ui-react";


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
      <form
        id='form'
        onSubmit={this.submitForm}
        action="https://formspree.io/f/myybwgyo"
        method="POST"
      >
        
        <Input type="email" name="email" />
        <br/>
        <Label pointing>Please enter your email</Label>
        <br/>
        <br/>
        {status === "SUCCESS" ? <p>Thanks!</p> : <Button content='Submit' primary size='medium'/>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
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