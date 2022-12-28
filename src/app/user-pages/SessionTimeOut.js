import React, { Component } from "react";
import { Link } from 'react-router-dom';


export class SessionTimeOut extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <div className="card mt-4" style={{marginLeft: '150px', marginRight: '150px'}}>
            <div className="card-body" style={{marginLeft: '100px', marginRight: '100px'}}>
            <div className="brand-logo d-sm-flex mt-2">
              <img src={require("../../assets/images/logo.png")} width="150px" alt="logo" />
              </div>
              <hr />
        
              <p className="ml-3 text-black" style={{ fontSize: "15px" }}>
                  For security reasons, you have been logged out of your Kotage dashboard
              </p>
              <p className="ml-3">
                  Your session expired after several minutes of inactivity
              </p>
              <p className="ml-3 text-primary">
              <Link className="font-weight-medium" to="/">Sign in again</Link> 
              </p>
              <br />
              
              <hr />
              <span className="float-right"><Link className="font-weight-medium mr-4" to="/">Home</Link>  <Link className="font-weight-medium" to="/">Docs</Link></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SessionTimeOut;
