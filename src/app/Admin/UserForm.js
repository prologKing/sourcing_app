import React, {} from 'react';
import { Form } from 'react-bootstrap';

function UserForm(props) {
  
    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">New User</h4><hr className="mt-1" />
          <br/>
          <form className="forms-sample"  method="POST" onSubmit={submitForm}>
          <ol className="number-circle-list">
                    <li className="number-circle-list--list-item"> 
                    <span className="card-text text-black">Basics</span>
                    <br />
                    <br />
                  <div className="ml-4">  
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>First Name</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Last Name</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Email Address</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  </div>
                  </li>

                  <li className="number-circle-list--list-item"> 
                    <span className="card-text text-black">Access</span>
                    <br />
                    <br />
                  <div className="ml-4">  
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>User Role</strong></label>
                    <select className="form-control form-control-sm" id="currency" name="currency">
                    <option value="">-- Select Option --</option>
                      <option value="Administrator">Administrator</option>
                      <option value="Administrator">Administrator</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>Status</strong></label>
                    <select className="form-control form-control-sm" id="currency" name="currency">
                    <option value="">-- Select Option --</option>
                      <option value="Active">Active</option>
                      <option value="Inactive">Inactive</option>
                    </select>
                  </Form.Group>
                  </div>
                  </li>
            </ol> 
            <div className="ml-4 pl-4">
                <button type="button" className="btn btn-outline-secondary btn-fw">Cancel</button>
                <button type="button" className="btn btn-success btn-fw"  style={{backgroundColor:'#629C44'}}>Save</button>
                </div>     
            </form>
      </div>
      </div>
      </div>
      </div>
      
    );
  }

export default UserForm;