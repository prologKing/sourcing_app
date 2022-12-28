import React, {} from 'react';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";

function APIAccess(props) {

    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">API Access</h4><hr className="mt-1" />
          <br/>
            <h6 className="mb-4 text-black">Access your Dashboard API with this key</h6>
            
           
            <form className="forms-sample"  method="POST" onSubmit={submitForm}>
            {/* <div className="col-12">
            <div className="col-md-5 col-sm-12 text-center">
            Key
            </div>
            <div className="col-md-3 col-sm-12 text-center">
            Secret
            </div>
            <div className="col-md-2 col-sm-12 text-center">
            Enabled
            </div>
            <div className="col-md-2 col-sm-12 text-center">
            Hidden  
            </div>
            </div>
            <div className="col-12">
            <div className="col-md-5 col-sm-12">
            1d1621456bf64fb1831db60f19b
            </div>
            <div className="col-md-3 col-sm-12">
                
            </div>
            <div className="col-md-2 col-sm-12">
                
            </div>
            <div className="col-md-2 col-sm-12">
            <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-secondary"
                          id="dropdownMenuButton3"
                        >
                          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{position:'fixed', zIndex:'2000'}}>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>  
            </div>
            </div> */}
            <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th className="text-muted" style={{border: 'none'}}>Key</th>
                        <th className="text-muted" style={{border: 'none'}}>Secret</th>
                        <th className="text-muted" style={{border: 'none'}}>Enabled</th>
                        <th style={{border: 'none'}}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{border: 'none'}}>1d1621456bf64fb1831db60f19b <i className="mdi mdi-content-copy"></i>
                        </td>
                        <td style={{border: 'none'}}>Hidden  <i className="mdi mdi-content-copy"></i></td>
                        <td style={{border: 'none'}} >
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"/>
                            <i className="input-helper"></i>
                            Default
                          </label>
                        </div>
                        </td>
                        <td style={{border: 'none'}}>
                        <Dropdown>
                        <Dropdown.Toggle
                          variant="btn btn-outline-secondary"
                          id="dropdownMenuButton3"
                        >
                          <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                        </Dropdown.Toggle>
                        <Dropdown.Menu style={{position:'fixed', zIndex:'2000'}}>
                          <Dropdown.Header>Settings</Dropdown.Header>
                          <Dropdown.Item>Action</Dropdown.Item>
                          <Dropdown.Item>Another action</Dropdown.Item>
                          <Dropdown.Item>Something else here</Dropdown.Item>
                          <Dropdown.Divider></Dropdown.Divider>
                          <Dropdown.Item>Separated link</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>  
                    </td>
                      </tr>
                      <tr><td style={{border: 'none'}} colSpan="4"></td></tr>
                      <tr><td style={{border: 'none'}} colSpan="4"></td></tr>
                      <tr><td style={{border: 'none'}} colSpan="4"></td></tr>
                      <tr><td style={{border: 'none'}} colSpan="4"></td></tr>
                      <tr><td style={{border: 'none'}} colSpan="4"></td></tr> 
                    </tbody>
                  </table>
                </div>
                 
            </form>
            
      </div>
      </div>
      </div>
      </div>
      
    );
  }

export default APIAccess;