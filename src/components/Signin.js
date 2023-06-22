import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import { useState } from "react";
export default function Signin() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handlInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  return (
    <div class="signin-page">
      <div class="signinform">
        <div class="signin">
          <div class="signin-header">
            <h3>SIGNUP</h3>
            <p>Please create your account.</p>
          </div>
        </div>
        <form class="signin-form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handlInputs}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handlInputs}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handlInputs}
          />

          <input
            type="password"
            placeholder="password"
            name="password"
            value={user.password}
            onChange={handlInputs}
          />
          <input
            type="password"
            placeholder="confirm password"
            name="cpassword"
            value={user.cpassword}
            onChange={handlInputs}
          />
          <Link to="/login">
            <button>SIGNUP</button>
          </Link>
          <p class="message">
            <Link to="/login">ALREADY HAVE AN ACCOUNT</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
