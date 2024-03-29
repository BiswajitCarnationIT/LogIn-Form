import React from 'react';
import './Style3.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {}
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields; 
      //         
      fields[e.target.name] = e.target.value;   ///What is happening here  ????
      ///
      this.setState({
        fields   
      });
     
    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      if (this.validateForm()) {    /// If form is valid then why setting to empty ???
          let fields = {};
          fields["username"] = "";
          fields["emailid"] = "";
          this.setState({fields:fields});
          alert("Form submitted");
      }

    }

    validateForm() {  //How it is getting stats ????

      let fields = this.state.fields;  
      let errors = {};
      let formIsValid = true;

      if (!fields["username"]) {
        formIsValid = false;
        errors["username"] = "*Please enter your username.";
      }

      if (typeof fields["username"] !== "undefined") {
        if (!fields["username"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["username"] = "*Please enter alphabet characters only.";
        }
      }

      
      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "*Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "*Please enter secure and strong password.";
        }
      }

     this.setState({    ///Why not using spread operator ???
      ...this.state,
        errors: errors
      });
      return formIsValid;  


    }



  render() {
    return (
    <div id="main-registration-container">
     <div id="register">
        <h3>Registration page</h3>
        <form method="post"  name="userRegistrationForm"  onSubmit= {this.submituserRegistrationForm} >
        <label>Username</label>
        <input type="text" name="username" value={this.state.fields.username} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.username}</div>
        
        <label>Password</label>
        <input type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
        <div className="errorMsg">{this.state.errors.password}</div>
        <input type="submit" className="button"  value="Register"/>

        <input type="checkbox" class = 'checkbox' id="rememberPassword" name="rememberPassword" value="rememberPassword"/>
        <label for="checkbox">Remember me</label><br></br>
        <a href="url">Forgot Password?</a>
        </form>
    </div>
</div>

      );
  }


}


export default RegisterForm;