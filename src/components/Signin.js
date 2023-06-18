import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
export default function Signin() {
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
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
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
