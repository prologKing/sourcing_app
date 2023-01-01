import React, {} from 'react';
import { Form } from 'react-bootstrap';

function LicenseActivationForm(props) {

    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">License Activation</h4><hr className="mt-1" />
          <br/>
            <h6 className="mb-4 pl-2 text-black">Enter the Kotage activation code that you received</h6>
            
            <form className="forms-sample"  method="POST" onSubmit={submitForm}>
            <Form.Group className="col-6">
            <Form.Control type="text" className="form-control form-control-sm" id="title" name="title" placeholder="XXXX-XXXXX-XXXXX-XXXXX" />
            </Form.Group>
                  <div className="ml-2">
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

export default LicenseActivationForm;