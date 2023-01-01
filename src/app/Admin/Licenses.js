import React, {} from 'react';
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown } from "react-bootstrap";

function Licenses(props) {

    const showDetails = () => {
        window.location.assign("/admin/licenseform");
      };

      const submitForm = (e) => {
        e.preventDefault();
      }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">
              License Information
               <button
                  type="button"
                  style={{ backgroundColor: "#629C44" }}
                  onClick={showDetails}
                  size="sm"
                  className="btn btn-success float-right"
                >
                  New
            </button>
          </h4><hr className="mt-1" />
          <br/>
            <h6 className="mb-4 text-black">Your organization is running on these license packages</h6>
            
           
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
                        <th className="text-muted" style={{border: 'none'}}>Product</th>
                        <th className="text-muted" style={{border: 'none'}}></th>
                        <th className="text-muted" style={{border: 'none'}}>Expires</th>
                        <th style={{border: 'none'}}></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style={{border: 'none'}} colSpan="2">Source - Standard
                        </td>
                        <td style={{border: 'none'}} colSpan="2">
                        Apr 29, 2026 (1214 days left)
                        </td>
                       
                      </tr>
                      <tr>
                        <td style={{border: 'none'}} colSpan="2">Procure - Standard
                        </td>
                        <td style={{border: 'none'}} colSpan="2">
                        Apr 29, 2026 (1214 days left)
                        </td>
                       
                      </tr>
                      <tr>
                        <td style={{border: 'none'}} colSpan="2">Pay - Standard
                        </td>
                        <td style={{border: 'none'}} colSpan="2">
                        Apr 29, 2026 (1214 days left)
                        </td>
                       
                      </tr> 
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

export default Licenses;