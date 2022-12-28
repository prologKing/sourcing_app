import React, { Component } from 'react';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dropdown, ButtonGroup } from 'react-bootstrap';

export class Pay extends Component {
  
  render () {
    return (
      <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
            {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
              <div className="card-body">
                <h4 className="card-title text-muted">Suppliers <button type="button" style={{backgroundColor:'#629C44'}} size="sm" className="btn btn-success float-right">New</button></h4><hr />
                
                <br/>
                <div className="media">
                  <i className="mdi mdi-ferry icon-md d-flex align-self-start mr-3" style={{color:'#629C44'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary" style={{fontSize: '18px'}}>ACME Corp
                    <Dropdown className="float-right">
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuButton3">
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
                    </span><br />
                    <small>Kofi Kingston, kofi@acmecorp.com</small><br />
                    <small>Information Technology</small><br />
                    <small>Accra, Ghana</small><br /></p>
                  </div>
                </div>
                
                <hr />
                <div className="media">
                  <i className="mdi mdi-ferry icon-md d-flex align-self-start mr-3" style={{color:'#629C44'}}></i>
                  <div className="media-body">
                  <p className="card-text"><span className="text-primary" style={{fontSize: '18px'}}>Blink, Inc
                    <Dropdown className="float-right">
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuButton3">
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
                  </span><br />
                    <small>Kofi Kingston, kofi@acmecorp.com</small><br />
                    <small>Building Management</small><br />
                    <small>Accra, Ghana</small><br /></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-ferry icon-md d-flex align-self-start mr-3" style={{color:'#629C44'}}></i>
                  <div className="media-body">
                  <p className="card-text"><span className="text-primary" style={{fontSize: '18px'}}>Charlie Rider
                    <Dropdown className="float-right">
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuButton3">
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
                  </span><br />
                    <small>Kofi Kingston, kofi@acmecorp.com</small><br />
                    <small>Transport</small><br />
                    <small>Accra, Ghana</small><br /></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-ferry icon-md d-flex align-self-start mr-3" style={{color:'#629C44'}}></i>
                  <div className="media-body">
                  <p className="card-text"><span className="text-primary" style={{fontSize: '18px'}}>Datadang
                    <Dropdown className="float-right">
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuButton3">
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
                  </span><br />
                    <small>Kofi Kingston, kofi@acmecorp.com</small><br />
                    <small>Information Technology</small><br />
                    <small>Accra, Ghana</small><br /></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-ferry icon-md d-flex align-self-start mr-3" style={{color:'#629C44'}}></i>
                  <div className="media-body">
                  <p className="card-text"><span className="text-primary" style={{fontSize: '18px'}}>Elvis Furniture
                    <Dropdown className="float-right">
                    <Dropdown.Toggle variant="btn btn-outline-secondary" id="dropdownMenuButton3">
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
                  </span><br />
                    <small>Kofi Kingston, kofi@acmecorp.com</small><br />
                    <small>Upholstery</small><br />
                    <small>Accra, Ghana</small><br /></p>
                  </div>
                </div>
                <hr />
              </div>
            </div>
          </div>
      </div> 
    );
  }
}
export default Pay;