import React, { useState, useEffect } from "react";
import "./Style2.css";

function LogInForm() {
  const [objectState, setValue] = useState({});
  const [errors, setErrors] = useState({});
  const [IsFormValid, setIsFormValid] = useState(0);
  /*
  console.log(objectState);
  console.log(errors);
  console.log(IsFormValid);
  */

  useEffect(() => {
      //console.log("submitted");
    if (IsFormValid === 1) document.title = `Welcome ${objectState.userName}`;
    else {
      document.title = `Please Login`;
    }
  },[IsFormValid]);

  const handelSubmit = (e) => {
    validate();
  };
  const validate = (e) => {
    //console.log("console  " + objectState.userName);
    let error = { ...errors };
    if (!objectState.userName) {
      error["userNameError"] = "Put user name";
      //setErrors({ ...errors, errors["userNameError"]: "Put user name" });  //is this right way?
      setErrors(error);

      alert("Put user name" + errors.userNameError);
    } else if (!objectState.userName.match(/^[0-9a-zA-Z ]*$/)) {
      error["userNameError"] = "Put correct user name";
      setErrors(error);
    } else {
      error["userNameError"] = "";
      setErrors(error);
    }

    if (!objectState.password) {
      /*console.log(error);
      console.log(errors);*/
      error["passwordError"] = "Put pasword";
      setErrors(error);
    } else if (
      !objectState.password.match(
        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
      )
    ) {
      error["passwordError"] = "Put correct password";
      setErrors(error);
    } else {
      error["passwordError"] = "";
      setErrors(error);
    }

    if (objectState.userName && objectState.password) {
      if (error["passwordError"] === "" && error["userNameError"] === "") {
        setIsFormValid(1);
      }
    }
  };

  return (
    <div class="Outercontainer">
      <div class="container">
        <form>
          <br></br>
          <div className="centerAlign">
            <label className="Login" for="login">
              Login Form{" "}
            </label>
          </div>
          <br></br>
          <hr className="line"></hr>

          <label className="Label" for="usrename">
            Username{" "}
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="userName"
            onChange={(e) =>
              setValue({ ...objectState, [e.target.name]: e.target.value })
            }
          />
          <div className="errorMsg">{errors.userNameError}</div>

          <label className="Label" for="pwd">
            Password{" "}
          </label>
          <br></br>
          <input
            className="input"
            type="text"
            name="password"
            onChange={(e) =>
              setValue({ ...objectState, [e.target.name]: e.target.value })
            }
          />
          <div className="errorMsg">{errors.passwordError}</div>

          <label></label>
          <br></br>
          <button type="button" class="button" onClick={handelSubmit}>
            Login
          </button>
          <br></br>
          <div className="ForgetPass">
            <input
              type="checkbox"
              id="rememberPassword"
              name="rememberPassword"
              value="rememberPassword"
            />
            <label for="checkbox">Remember me</label>

            <a href="url" className="ForgetPassLink">
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LogInForm;
