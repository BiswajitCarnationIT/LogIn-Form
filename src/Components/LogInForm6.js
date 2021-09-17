import React from 'react';
import './Style3.css';


class RegisterForm extends React.Component {
    constructor() {
      super();
      this.state = {
        fields: {},
        errors: {},
        formInvalid: true
      }

      this.handleChange = this.handleChange.bind(this);
      this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

    };

    handleChange(e) {
      let fields = this.state.fields; 
      
      fields[e.target.name] = e.target.value;   
      
      this.setState({
        fields   
      });
      
      this.validateForm()
      
     
    }

    submituserRegistrationForm(e) {
      e.preventDefault();
      alert("Form submitted \n" + "Username :" + this.state.fields["username"] + "\nPassword:"+this.state.fields["password"]);
      let fields = {};
      fields["username"] = "";
      fields["password"] = "";
          
      this.setState({fields:fields,formInvalid: true});

    }

    validateForm() {  

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
      console.log( errors["password"])
      console.log( fields["password"])
      console.log( formIsValid)
      if(formIsValid){
        errors["password"] = "";
        errors["username"] = "";
        this.setState({    
            ...this.state,
            formInvalid: false,
            errors: errors
            });
      }
      else{
        this.setState({    
           ...this.state,
           errors: errors        
        });
    }
      return formIsValid;  


    }



  render() {
      console.log(this.state)
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
        <input type="submit" className="button"  value="Register" disabled = {this.state.formInvalid} />

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