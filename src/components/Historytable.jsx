import React from 'react'
import { Link } from "react-router-dom";
import Table from "react-bootstrap/Table";

const Historytable = () => {
  return (
    <div>
    <div className="container">
      <div className="d-flex  justify-content-between py-5">
        <div>
          <h3>Watch History</h3>
        </div>
        <div>
          <Link>watch history</Link>
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
          <tr>
            <td>1</td>
            <td>JS Tutorial</td>
            <td><Link>https://youtu.be/Po3jStA673E?si=3BFCFdsEuA2obDmF</Link></td>
            <td>11/20/2025</td>
            <td>
              {" "}
              <button className="btn">
                <i className="fa-solid fa-trash text-danger"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  </div>
  )
}

export default Historytable