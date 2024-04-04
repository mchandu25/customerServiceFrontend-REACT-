import React, { useState } from "react";
import "./IssueBucket.css";
import { Table } from "react-bootstrap";

const IssueBucketOp = () => {
  const [operatorIssue, setOperatorIssue] = useState(
    JSON.parse(localStorage.getItem("operator")).issueBucket.issues
  );
  return (
    <div>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            {Object.keys(operatorIssue[0]).map((operatorIssueProperty) => {
              return <th>{operatorIssueProperty}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {operatorIssue.map((issue) => {
            return (
              <tr>
                {Object.keys(issue).map((issueProperty) => {
                  return <td>{issue[issueProperty]}</td>;
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default IssueBucketOp;
