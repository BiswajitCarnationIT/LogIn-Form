import React from "react";
import useForm from "./useForm";
import validateInfo from "./validateInfor";

const FormSignup = () => {
  const { handleChange, values,handleSubmit } = useForm(validateInfo);
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-input"
          type="text"
          name="username"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
        <br></br>
        <input
          className="form-input"
          type="email"
          name="email"
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
        />
        <br></br>
        <button className="form-input-btn" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;
