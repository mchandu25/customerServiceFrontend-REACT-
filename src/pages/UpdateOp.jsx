import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import "./UpdateOp.css"
const UpdateOp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    password: "",
    phoneNo: "",
    city: "",
    issuesSolved: null,
  });

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const OperatorIdFromUrl = searchParams.get("id");

  useEffect(() => {
    axios
      .get("http://localhost:8080/getOperator/" + OperatorIdFromUrl)
      .then((response) => {
        setFormData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSubmitHandler = (e) => {
    axios.post("http://localhost:8080/update/operator", formData);
    navigate("/display");
  };

  return (
    <div class="updateForm">
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
          onClick={() => {
            onSubmitHandler();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateOp;
