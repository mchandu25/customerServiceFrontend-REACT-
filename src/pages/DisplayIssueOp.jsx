import React, { useEffect, useState } from "react";
import "./DisplayIssueOp.css";
import axios from "axios";
import { Table } from "react-bootstrap";
import { Button } from "bootstrap";

const DisplayIssueOp = () => {
  const [issueArr, setIssueArr] = useState([]);

  const getAllIssues = () => {
    axios
      .get("http://localhost:8080/issues/all")
      .then((response) => {
        console.log("sucxkex");
        setIssueArr(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (issueArr.length === 0) getAllIssues();
  });

  return (
    <div>
      {issueArr.length !== 0 && (
        <Table>
          <thead>
            {Object.keys(issueArr[0]).map((issueProperty) => {
              return <th>{issueProperty}</th>;
            })}
            <th>Assign to Op</th>
          </thead>
          <tbody>
            {issueArr.map((issue) => {
              return (
                <tr>
                  {Object.keys(issue).map((issueProperty) => {
                    return <td>{issue[issueProperty]}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        let opId = localStorage.getItem("actOp");
                        axios
                          .put(
                            "http://localhost:8080/assign/issue/" +
                              opId +
                              "/" +
                              issue.id
                          )
                          .then((response) => {
                            console.log(response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                      }}
                    >
                      Assign
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default DisplayIssueOp;
