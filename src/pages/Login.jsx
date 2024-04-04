import axios from "axios";
import React, { useState } from "react";
import "./Login.css"

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log("button was cliked");
    axios
      .post("http://localhost:8080/login", formData)
      .then((response) => {
        localStorage.setItem("operator", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="login-parent">
      <form class="login-form">
        <div>
          <label>Email</label>
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, email: e.target.value };
              });
            }}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            value={formData.password}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, password: e.target.value };
              });
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Login
        </button>
        <footer class="signup-footer">
            <p>Dont have an Account ?<a href="register">Register</a></p>
        </footer>
      </form>
    </div>
  );
};

export default Login;
