import React, { useState } from "react";
import "./Style2.css";

function LogInForm() {
  const [objectState, setValue] = useState({});
  const [errors, setErrors] = useState({});
  console.log(objectState);
  console.log(errors);
  console.log("error" + errors["userNameError"]);

  const handelSubmit = (e) => {
    validate();
  };
  const validate = (e) => {
    console.log("console  " + objectState.userName);
    //alert(objectState.userName);
    if (!objectState.userName) {
      let error = { ...errors };
      console.log(error);
      error["userNameError"] = "Put user name";
      //setErrors({ ...errors, errors["userNameError"]: "Put user name" });  //is this right way?
      setErrors(error);

      alert("Put user name" + errors.userNameError);
    } else if (!objectState.userName.match(/^[0-9a-zA-Z ]*$/)) {
      let error = { ...errors };
      error["userNameError"] = "Put correct user name";
      setErrors(error);
    } else {
      let error = { ...errors };
      error["userNameError"] = "";
      setErrors(error);
    }

    if (!objectState.password) {
      let error = { ...errors };
      console.log(error);
      console.log(errors);
      error["passwordError"] = "Put pasword";
      setErrors(error);
    } else if (
      !objectState.password.match(
        /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
      )
    ) {
      let error = { ...errors };
      error["passwordError"] = "Put correct password";
      setErrors(error);
    } else {
      let error = { ...errors };
      error["passwordError"] = "";
      setErrors(error);
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
            type="text"
            name="userName"
            onChange={(e) =>
              setValue({ ...objectState, [e.target.name]: e.target.value })
            }
          />
          <p>{errors.userNameError}</p>
          <br></br>

          <label className="Label" for="pwd">
            Password{" "}
          </label>
          <br></br>
          <input
            type="text"
            name="password"
            onChange={(e) =>
              setValue({ ...objectState, [e.target.name]: e.target.value })
            }
          />

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
