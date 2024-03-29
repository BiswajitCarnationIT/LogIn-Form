
import React ,{Component} from 'react';
import './Style2.css'

class LogInForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            usrerror: 'User name is empty',
            pwserror: 'Password field is empty',
            //isSubmitDissabled: true,
            isUserNameInValid : true,
            isPasswordInValid: true

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event){
        console.log(event.target);  
        /*
        this.setState({       
            ...this.state,
            //[event.target.name]:  event.target.value
          }); */
          this.validate(event)
          
    }

    
    validate(event) {
        //console.log(this.state)
       

       if(event.target.name === 'username'){
           //console.log('user name is'+event.target.value)
         var usr =  event.target.value
         console.log('user name is '+usr)
         
        
         
        if (!usr.match(/^[a-zA-Z ]*$/)) {

            this.setState({       
                ...this.state,
                [event.target.name]:  event.target.value,
                usrerror: '*Please enter alphabet characters only'
              });

        }
        
        else if(usr.match(/^[a-zA-Z ]*$/)) {
            console.log('success')
            
            this.setState({       
                ...this.state,
                [event.target.name]:  event.target.value,
                isUserNameInValid : false,
                usrerror: ''
              });
             // console.log('success' + this.target.value)
        }
        
        
        

       }
       if(event.target.name === 'password'){
            //console.log('user name is'+event.target.value)
            var pass =  event.target.value
            console.log('password  is '+event.target.value)
            
            if (!pass.match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
                this.setState({       
                    ...this.state,
                    [event.target.name]:  event.target.value,
                    pwserror: '*Please enter secure and strong password'
                });
            }
            else{
                
                this.setState({       
                    ...this.state,
                    [event.target.name]:  event.target.value,
                    isPasswordInValid : false,
                    pwserror: ''
                  });
            }
        }
        
        
        

    }
  
    handleSubmit(event){
        console.log(this.state.username)
        alert('A first name was submitted :' + this.state.username +'\n'
        + 'A second name was submitted :' + this.state.password 
        +'\n');
        event.preventDefault();
    }

    
    render(){
        console.log(this.state)
        //const {username, password} = this.state
        return (
            <div class="container">
                <form onSubmit ={this.handleSubmit}>
                    <br></br><label className = 'Login' for="login">Login Form </label><br></br>
                    <hr className = 'line'></hr>  

                    <label className = 'Label' for="usrename">Username </label><br></br>
                        <input className ='input' type="text" id="username" name="username"  value={this.state.username} 
                        onChange = {this.handleChange}/>
                        <div className="errorMsg">{this.state.usrerror}</div>

                    <label className = 'Label' for="pwd">Password </label><br></br>
                        <input className ='input' type="password" id="password" name="password"  
                         title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                        value = {this.state.password} onChange ={ this.handleChange }  />
                        <div className="errorMsg">{this.state.pwserror}</div>

                    {/*
                    <label ></label><br></br>
                        <input type="submit" disabled={this.state.isPasswordInValid || this.state.isUserNameInValid } value="Log In" /> */} 
                    

                    <label ></label><br></br>
                        <button type="button" class = 'button' disabled = {this.state.isPasswordInValid || this.state.isUserNameInValid } onClick ={this.handleSubmit} >Log In</button><br></br>
                    
                        <input type="checkbox" class = 'checkbox' id="rememberPassword" name="rememberPassword" value="rememberPassword"/>
                    <label for="checkbox">Remember me</label><br></br>
                    <a href="url">Forgot Password?</a>
                    
                </form>
            </div>
        );
        
    }

}

export default LogInForm;
