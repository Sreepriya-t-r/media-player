import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";
import { deleteHistory, getAllHistory } from "../services/allAPI";

const Historytable = () => {
  const [historyData, setHistoryData] = useState({});

  useEffect(() => {
    getHistory();
  }, []);

  const getHistory = async () => {
    try {
      let apiResponse = await getAllHistory();
      setHistoryData(apiResponse.data);
      console.log(apiResponse);
    } catch (error) {
      console.log(error);
    }
  };

  const onDeleteClick = async (id) => {
    try {
      await deleteHistory(id);
      getHistory();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex  justify-content-between py-5">
          <div>
            <h3>Watch History</h3>
          </div>
          <div>
            <Link>back to home</Link>
          </div>
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Caption</th>
              <th>Link</th>
              <th>Time Stamp</th>
              <th>...</th>
            </tr>
          </thead>
          <tbody>
            {historyData.length > 0
              ? historyData.map((value, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{value.caption}</td>
                    <td>
                      <Link
                        to={`https://youtu.be/Po3jStA673E?v=${value.videoLink}`}
                        target="_blank"
                      >
                        https://youtu.be/Po3jStA673E?v=value.videoLink
                      </Link>
                    </td>
                    <td>{value.formatedDate}</td>
                    <td>
                      {" "}
                      <button
                        onClick={() => onDeleteClick(value.id)}
                        className="btn"
                      >
                        <i className="fa-solid fa-trash text-danger"></i>
                      </button>
                    </td>
                  </tr>
                ))
              :<tr className="mt-3 p-3 border border-2 border-danger text-center " >NO HISTORY FOUND</tr> }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default Historytable;
