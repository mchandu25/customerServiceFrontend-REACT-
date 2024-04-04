import axios from "axios";
import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router";

const DisplayOp = () => {
  const [operatorArr, setOperatorArr] = useState([]);
  const navigate = useNavigate();
  const getAllOperators = () => {
    axios
      .get("http://localhost:8080/operator/all")
      .then((response) => {
        setOperatorArr(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  if (operatorArr.length === 0) {
    getAllOperators();
  }

  return (
    <div>
      {operatorArr.length !== 0 && (
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              {Object.keys(operatorArr[0]).map((operatorProperty, index) => {
                if (operatorProperty === "issueBucket") return null;
                return <th operatorProperty={index}>{operatorProperty}</th>;
              })}
              <th>update</th>
              <th>delete</th>
              <th>active</th>
            </tr>
          </thead>
          <tbody>
            {operatorArr.map((operatorObj) => {
              return (
                <tr>
                  {Object.keys(operatorObj).map((operatorProperty) => {
                    if (operatorProperty === "issueBucket") return null;
                    return <td>{operatorObj[operatorProperty]}</td>;
                  })}
                  <td>
                    <button
                      className="btn btn-warning"
                      onClick={() => {
                        navigate("/update?id=" + operatorObj.operatorId);
                      }}
                    >
                      udpate
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        axios
                          .delete(
                            "http://localhost:8080/deleteOperator/" +
                              operatorObj.operatorId
                          )
                          .then((response) => {
                            console.log("Operator was deleted", response);
                          })
                          .catch((error) => {
                            console.log(error);
                          });
                        // getAllOperators();
                      }}
                    >
                      delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-success"
                      onClick={() => {
                        localStorage.setItem("actOp", operatorObj.operatorId);
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

export default DisplayOp;
