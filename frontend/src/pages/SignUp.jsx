import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {

  const refUser = useRef()
  const refPassword = useRef()

  const signupSubmitHandler = () => {
    const credentials = {
      username: `${refUser.current.value}`,
      password: `${refPassword.current.value}`,
    };
    async function fetchsignup() {
      console.log("running");
      const url = "http://127.0.0.1:8000/auth/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });
      const token = await response.json()
      console.log(token.token)
      if (typeof(token.token) == "undefined"){
        console.log('Already Exist')
      }
    }
    fetchsignup();
  };

  return (
    <>
      SignUp
      <br />
      User Name
      <br />
      <input type="text" ref={refUser}></input>
      <br />
      Password
      <br />
      <input type="text" ref={refPassword}></input>
      <br />
      <Link to="/signin">Already have an Account ?</Link>
      <br />
      <button onClick={signupSubmitHandler}> SUBMIT </button>
    </>
  );
};

export default SignUp;
