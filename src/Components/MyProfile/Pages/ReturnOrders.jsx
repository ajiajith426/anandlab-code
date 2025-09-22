import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function ReturnOrders() {
  useEffect(() => {
    document.title = "Account Information";
    window.scroll(0, 0);
  }, []);
  return (
    <div className="col-9">
      <div className="Products-factory-functions">
        <div className="row">
          <div className="col-12">
            <div className="accnt-heads">
              <h4>Return Orders</h4>
            </div>
            <div className="acnt-deetils">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Order Id</th>
                    <th scope="col">Package Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">7854189</th>
                    <td>Neu Test</td>
                    <td>Pending</td>
                    <td>Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">7854189</th>
                    <td>Neu Test</td>
                    <td>Pending</td>
                    <td>Cancel</td>
                  </tr>
                  <tr>
                    <th scope="row">7854189</th>
                    <td>Neu Test</td>
                    <td>Pending</td>
                    <td>Cancel</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
