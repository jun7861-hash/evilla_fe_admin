import React from "react";
import { Download } from "react-feather";

const Property: React.FC = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="card">
            <div className="card-header d-flex justify-content-end">
              <button className="btn btn-light px-2 py-1" type="button">
                <Download size={20} />
              </button>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">{"#"}</th>
                      <th scope="col">{"First Name"}</th>
                      <th scope="col">{"Last Name"}</th>
                      <th scope="col">{"Username"}</th>
                      <th scope="col">{"Role"}</th>
                      <th scope="col">{"Country"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{"1"}</th>
                      <td>{"Alexander"}</td>
                      <td>{"Orton"}</td>
                      <td>{"@mdorton"}</td>
                      <td>{"Admin"}</td>
                      <td>{"USA"}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Property;
