
import React ,{Component} from 'react';

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
            <form onSubmit ={this.handleSubmit}>

                    {/*
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" value={this.state.username} 
                    onChange = {this.handleChange}></input><br></br>
                    */}
                    {/*<label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.lname} onChange = {this.handleChange}></input>*/}

                    {/*
                    <label for="lname">Last name:</label><br></br>
                    <input type="text" id="lname" name="lname" value={this.state.password} 
                    onChange = {e => this.setState({lname : e.target.value})}></input>
                   */}

                   <label for="usrname">Username</label>
                    <input type="text" id="usrname" name="usrname"  value={this.state.username} 
                    onChange = {this.handleChange} required/><br></br>

                   <label for="pwd">Password:</label>
                    <input type="password" id="pwd" name="pwd" minlength="8" 
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                    value = {this.state.password} onChange ={ this.onPasswordChange } />

                   <label ></label><br></br>
                    <input type="submit" value="Submit" />
            </form>
        );
        
    }

}

export default LogInForm;
