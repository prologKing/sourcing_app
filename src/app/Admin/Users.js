import React, { } from "react";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, ButtonGroup } from "react-bootstrap";


function Users(props) {

  const showDetails = () => {
    window.location.assign("/admin/userform");
  };

    return (
      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
            <div className="card-body">
              <h4 className="card-title text-muted">
                Users{" "}
                <button
                  type="button"
                  style={{ backgroundColor: "#629C44" }}
                  onClick={showDetails}
                  size="sm"
                  className="btn btn-success float-right"
                >
                  New
                </button>
              </h4>
              <hr />
              <small>
                Showing{" "}
                <span className="text-primary">
                  <u>all</u>
                </span>{" "}
                users with{" "}
                <span className="text-primary">
                  <u>any</u>
                </span>{" "}
                role
              </small>
              <br />
              <br />
              <div className="media">
                <i
                  className="mdi mdi-account-box-outline icon-md d-flex align-self-start mr-3"
                  style={{ color: "#629C44" }}
                ></i>
                <div className="media-body">
                  <p className="card-text">
                    <span className="text-primary" style={{ fontSize: "18px" }}>
                      Yaw James
                      <Dropdown className="float-right">
                        <Dropdown.Toggle
                          variant="btn btn-outline-secondary"
                          id="dropdownMenuButton3"
                        >
                          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                    <br />
                    <small>akwasi.james@joy.com</small>
                    <br />
                    <small>March 13, 2021, 1:35 PM (Last Login)</small>
                    <br />
                  </p>
                </div>
              </div>

              <hr />
              <div className="media">
                <i
                  className="mdi mdi-account-box-outline icon-md d-flex align-self-start mr-3"
                  style={{ color: "#629C44" }}
                ></i>
                <div className="media-body">
                  <p className="card-text">
                    <span className="text-primary" style={{ fontSize: "18px" }}>
                      Joana James
                      <Dropdown className="float-right">
                        <Dropdown.Toggle
                          variant="btn btn-outline-secondary"
                          id="dropdownMenuButton3"
                        >
                          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                    <br />
                    <small>akwasi.james@joy.com</small>
                    <br />
                    <small>March 13, 2021, 1:35 PM (Last Login)</small>
                    <br />
                  </p>
                </div>
              </div>

              <hr />
              <div className="media">
                <i
                  className="mdi mdi-account-box-outline icon-md d-flex align-self-start mr-3"
                  style={{ color: "#629C44" }}
                ></i>
                <div className="media-body">
                  <p className="card-text">
                    <span className="text-primary" style={{ fontSize: "18px" }}>
                      Mercy James
                      <Dropdown className="float-right">
                        <Dropdown.Toggle
                          variant="btn btn-outline-secondary"
                          id="dropdownMenuButton3"
                        >
                          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                    <br />
                    <small>akwasi.james@joy.com</small>
                    <br />
                    <small>March 13, 2021, 1:35 PM (Last Login)</small>
                    <br />
                  </p>
                </div>
              </div>

              <hr />
              
              <div className="media">
                <i
                  className="mdi mdi-account-box-outline icon-md d-flex align-self-start mr-3"
                  style={{ color: "#629C44" }}
                ></i>
                <div className="media-body">
                  <p className="card-text">
                    <span className="text-primary" style={{ fontSize: "18px" }}>
                      Joana James
                      <Dropdown className="float-right">
                        <Dropdown.Toggle
                          variant="btn btn-outline-secondary"
                          id="dropdownMenuButton3"
                        >
                          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </span>
                    <br />
                    <small>akwasi.james@joy.com</small>
                    <br />
                    <small>March 13, 2021, 1:35 PM (Last Login)</small>
                    <br />
                  </p>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    );
}
export default Users;
