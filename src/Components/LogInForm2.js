
import React ,{Component} from 'react';
import './Style2.css'

class LogInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event){
        console.log(event.target);  //*
        this.setState({username: event.target.value});
        /*
        this.setState({       //Spreed operator
            ...this.state,
            [event.target.name]:  event.target.value
          });
          */
    }
  
    handleSubmit(event){
        console.log(this.state.username)
        alert('A first name was submitted :' + this.state.username +'\n'
        + 'A second name was submitted :' + this.state.password 
        +'\n');
        event.preventDefault();
    }

    onPasswordChange = event => {this.setState({password: event.target.value})}
    
    render(){
        console.log(this.state)
        //const {username, password} = this.state
        return (
            <div class="container">
                <form onSubmit ={this.handleSubmit}>

                       

                    <label className = 'error' for="usrname">Username </label>
                        <input className ='input' type="text" id="usrname" name="usrname"  value={this.state.username} 
                        onChange = {this.handleChange} required/><br></br>

                    <label for="pwd">Password </label>
                        <input className ='input' type="password" id="pwd" name="pwd" minlength="8" 
                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        value = {this.state.password} onChange ={ this.onPasswordChange } />

                    {/*
                    <label ></label><br></br>
                        <input type="submit"  value="Log In" />
                    */}

                    <label ></label><br></br>
                        <button type="button" class = 'button' disabled={!this.state.password}>Button</button>
                </form>
            </div>
        );
        
    }

}

export default LogInForm;
