import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";

import "./Login.css";
function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("Please enter full name!");
    }
    
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        });
    }).catch((error)=> alert(error))
  };
  const loginApp = (e) => {
      auth.signInWithEmailAndPassword(email,password)
      .then(userAuth => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: userAuth.user.displayName,
              profileURL:userAuth.user.photoURL
            })
          );
      })
      .catch(error => alert(error));
    e.preventDefault();
  };
  return (
    <div className="login">
      <img
        src="https://www.tmf-group.com/-/media/images/logos/case-study-logos/linkedin.png"
        alt=""
      />
      <form>
        <input
          type="text"
          placeholder="Full Name(required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Profile pic URL (optional)"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          placeholder="email"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        />
        <button type="submit" onClick={loginApp}>
          Sign in
        </button>
      </form>
      <p>
        Not a member ?{" "}
        <span className="login_Register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
