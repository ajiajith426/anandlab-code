import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Address() {
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
              <h4>Address Registered</h4>
              <div className="rit-endup">
                <Link to="">Add New Address</Link>
              </div>
            </div>
            <div className="acnt-deetils">
              <table className="table">
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Address</th>
                    <th scope="col">Make as Default</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      {" "}
                      No. 1833, 18th Main Road, Anna Nagar West, Chennai - 600
                      040, India.
                    </th>
                    <td>
                      <label>
                        <input
                          name="ug_degree_box"
                          id="ug_degree_box"
                          type="checkbox"
                        />
                        <span className="checkbox-material">
                          <span className="check"></span>
                        </span>
                      </label>
                    </td>
                    <td>
                      <ul className="action-felds">
                        <li>
                          <Link to="">
                            <i
                              className="fa fa-pencil-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i
                              className="fa fa-minus-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      {" "}
                      No. 49, Kamaraj Road, JJ Nagar, Chennai - 600 084, India.
                    </th>
                    <td>
                      <label>
                        <input
                          name="ug_degree_box"
                          id="ug_degree_box"
                          type="checkbox"
                        />
                        <span className="checkbox-material">
                          <span className="check"></span>
                        </span>
                      </label>
                    </td>
                    <td>
                      <ul className="action-felds">
                        <li>
                          <Link to="">
                            <i
                              className="fa fa-pencil-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i
                              className="fa fa-minus-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      {" "}
                      No.3, 1A Stree, 3rd Main Road, KK Nagar, Chennai - 600
                      030.
                    </th>
                    <td>
                      <label>
                        <input
                          name="ug_degree_box"
                          id="ug_degree_box"
                          type="checkbox"
                        />
                        <span className="checkbox-material">
                          <span className="check"></span>
                        </span>
                      </label>
                    </td>
                    <td>
                      <ul className="action-felds">
                        <li>
                          <Link to="">
                            <i
                              className="fa fa-pencil-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                        <li>
                          <Link to="">
                            <i
                              className="fa fa-minus-square"
                              aria-hidden="true"
                            ></i>
                          </Link>
                        </li>
                      </ul>
                    </td>
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
