import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { useForm } from "../../hooks/useForm";
import { setError, removeError } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

export const RegisterScreen = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange, reset] = useForm({
    name: "LEyla",
    email: "ley@gmail.com",
    password: "123456",
    password2: "123456",
  });
  const { name, email, password, password2 } = formValues;

  const handleRegister = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      console.log(name, email, password, password2);
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
    }
    e.target.reset();
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError("Name is required"));
      // console.log("name is required");
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is not valid"));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(setError("Password should be at least 5 characters"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="email"
          name="email"
          className="auth__input"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          value={password}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          name="password2"
          className="auth__input"
          value={password2}
          onChange={handleInputChange}
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Login
        </button>

        <hr />

        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </>
  );
};
