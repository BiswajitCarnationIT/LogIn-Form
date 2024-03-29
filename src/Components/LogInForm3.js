
import React ,{Component} from 'react';
import './Style2.css'

class LogInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            fields: {},
            errors: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event){
        console.log(event.target);  //*
        //this.setState({username: event.target.value});
        
        this.setState({       //Spreed operator
            ...this.state,
            [event.target.name]:  event.target.value
          });
          this.validate(event)
          
    }

    validate(event) {
        console.log(this.state)
        var pass = event.target.value;
        var reg = '/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/';
        var test = reg.test(pass);
        /*if (test) {
           // alert('pass'); error string
        } else{
            //alert('fail');
        }
        */
       let isValid = false
       if(event.target.name === 'username'){
           
         var usr =  event.target.value
         if(usr === ''){
              
             this.setState({usrerror: "Please enter user name"})
         }


         //if(isValid === t)
       }

    }
  
    handleSubmit(event){
        console.log(this.state.username)
        alert('A first name was submitted :' + this.state.username +'\n'
        + 'A second name was submitted :' + this.state.password 
        +'\n');
        event.preventDefault();
    }

    //onPasswordChange = event => {this.setState({password: event.target.value})}
    
    render(){
        console.log(this.state)
        //const {username, password} = this.state
        return (
            <div class="container">
                <form onSubmit ={this.handleSubmit}>

                       

                    <label className = 'error' for="usrename">Username </label>
                        <input className ='input' type="text" id="username" name="username"  value={this.state.username} 
                        onChange = {this.handleChange}/><br></br>

                    <label for="pwd">Password </label>
                        <input className ='input' type="password" id="password" name="password"  
                         title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        value = {this.state.password} onChange ={ this.handleChange }  />

                    
                    <label ></label><br></br>
                        <input type="submit" disabled={!this.state.password} value="Log In" />
                    

                    <label ></label><br></br>
                        <button type="button" class = 'button'  >Log In</button><br></br>
                    
                        <input type="checkbox" class = 'checkbox' id="rememberPassword" name="rememberPassword" value="rememberPassword"/>
                    <label for="checkbox"> Remember me</label>
                    <a href="url">Forgot Password?</a>
                    
                </form>
            </div>
        );
        
    }

}

export default LogInForm;
