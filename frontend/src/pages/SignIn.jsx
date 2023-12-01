import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {

    const [userName, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')

    const userNameHandler = () => {
        setUserName[event.target.value]
    }
    const userPasswordHandler = () => {
        setUserName[event.target.value]
    }


  return (
    <>
    <div className="div1">
    
    <br />
      User Name
      <br />
      <input type="text" onChange={userNameHandler}></input>
      <br />
      Password
      <br />
      <input type="password" onChange={userPasswordHandler}></input>
      <br />
      <Link to="/signup">Don't have an account ?</Link>
      <br/>
      <button> <Link to ='/'> SignIn </Link></button>
      </div>
    </>
  );
};

export default SignIn;
