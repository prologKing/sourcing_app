import React, {} from 'react';
import { Form } from 'react-bootstrap';

function CompanyDetails(props) {
  
    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">Company Details</h4><hr className="mt-1" />
          <br/>
          <form className="forms-sample"  method="POST" onSubmit={submitForm}>
          <ol className="number-circle-list">
                    <li className="number-circle-list--list-item"> 
                    <span className="card-text text-black">Basic</span>
                    <br />
                    <br />
                  <div className="ml-4">  
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Company Name</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>Industry</strong></label>
                    <select className="form-control form-control-sm" id="request_type" name="request_type">
                    <option value="">-- Select Option --</option>
                      <option value="Telecommunications">Telecommunications</option>
                      <option value="Telecommunications">Telecommunications</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>Company Size</strong></label>
                    <select className="form-control form-control-sm" id="currency" name="currency">
                    <option value="">-- Select Option --</option>
                      <option value="1001 - 5000 employees">1001 - 5000 employees</option>
                      <option value="1001 - 5000 employees">1001 - 5000 employees</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>Company Type</strong></label>
                    <select className="form-control form-control-sm" id="currency" name="currency">
                    <option value="">-- Select Option --</option>
                      <option value="Privately Held">Privately Held</option>
                      <option value="Privately Held">Privately Held</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Year Founded</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>Preferred Language</strong></label>
                    <select className="form-control form-control-sm" id="currency" name="currency">
                    <option value="">-- Select Option --</option>
                      <option value="English">English</option>
                      <option value="French">French</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Website URL</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  </div>

                    </li>
                    <li className="number-circle-list--list-item">
                    <span className="card-text text-black">Location</span>
                    <br />
                    <br />
                    <div className="ml-4">  
                    <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleSelectGender"><strong>Country</strong></label>
                    <select className="form-control form-control-sm" id="currency" name="currency">
                    <option value="">-- Select Option --</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Nigeria">Nigeria</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Address</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>City</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  <Form.Group className="row col-6 col-md-12 col-sm-12">
                  <div className="col-md-3">
                  <label htmlFor="exampleInputName1"><strong>State</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </div>
                  <div className="col-md-3">
                  <label htmlFor="exampleInputName1"><strong>Zip Code</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </div>
                  </Form.Group>
                  
                 
                 
                  </div>
                    </li>
                    <li className="number-circle-list--list-item">
                    <span className="card-text text-black">Other</span>
                    <br />
                    <br />
                  <div className="ml-4">  
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Business Registration #</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
                  </Form.Group>
                  <Form.Group className="col-6 col-md-6 col-sm-12">
                    <label htmlFor="exampleInputName1"><strong>Tax ID Number</strong></label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title"  />
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

export default CompanyDetails;