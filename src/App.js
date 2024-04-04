import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router";
import Login from "./pages/Login";
import DisplayOp from "./pages/DisplayOp";
import RegisterPg from "./pages/RegisterPg";
import UpdateOp from "./pages/UpdateOp";
import "bootstrap/dist/css/bootstrap.min.css";
import IssueBucketOp from "./pages/IssueBucketOp";
import DisplayIssueOp from "./pages/DisplayIssueOp.jsx";

function App() {
  const myPath = [
    { pageName: "DisplayOp", url: "/display" },
    { pageName: "Login", url: "/login" },
    { pageName: "Register", url: "/register" },
    { pageName: "Update", url: "/update" },
    { pageName: "IssueBucket", url: "/issue-bucket" },
    { pageName: "DisplayIssue", url: "/all-issue" },
  ];
  const navigate = useNavigate();
  return (
    <div className="App">
      {myPath.map((e) => {
        return (
          <button
            onClick={() => {
              navigate(e.url);
            }}
          >
            {e.pageName}
          </button>
        );
      })}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/display" element={<DisplayOp />}></Route>
        <Route path="/register" element={<RegisterPg />}></Route>
        <Route path="/update/*" element={<UpdateOp />}></Route>
        <Route path="/issue-bucket" element={<IssueBucketOp />}></Route>
        <Route path="/all-issue" element={<DisplayIssueOp />}></Route>
      </Routes>
    </div>
  );
}

export default App;
