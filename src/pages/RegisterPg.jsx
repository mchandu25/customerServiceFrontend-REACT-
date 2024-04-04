import React, { useState } from "react";
import "./RegisterPg.css";
import axios from "axios";

const RegisterPg = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNo: "",
    city: "",
    issuesSolved: null,
  });
  return (
    <div className="register-parent">
      <form class="register-form">
        <div>
          <label htmlFor="">FirstName:</label>
          <input
            value={formData.firstName}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, firstName: e.target.value };
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">LastName:</label>
          <input
            value={formData.lastName}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, lastName: e.target.value };
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">EmailId</label>
          <input
            value={formData.email}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, email: e.target.value };
              });
            }}
            type="email"
          />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input
            value={formData.password}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, password: e.target.value };
              });
            }}
            type="password"
            name=""
            id=""
          />
        </div>
        <div>
          <label htmlFor="">PhoneNo</label>
          <input
            value={formData.phoneNo}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, phoneNo: e.target.value };
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">City</label>
          <input
            value={formData.city}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, city: e.target.value };
              });
            }}
            type="text"
          />
        </div>
        <div>
          <label htmlFor="">IssuesSolved</label>
          <input
            value={formData.issuesSolvedtype}
            onChange={(e) => {
              setFormData((curr) => {
                return { ...curr, issuesSolved: e.target.value };
              });
            }}
            type="number"
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();
            axios
              .post("http://localhost:8080/create/operator", formData)
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.error(error);
              });
          }}
        >
          Create Account
        </button>
        <footer class="signup-footer">
      <p>Already have an account? <a href="/login">Login</a></p>
        </footer>
      </form>
    </div>
  );
};

export default RegisterPg;
