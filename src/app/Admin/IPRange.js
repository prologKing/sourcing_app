import React, {} from 'react';
import { Form } from 'react-bootstrap';

function IPRange(props) {

    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">Login IP Range</h4><hr className="mt-1" />
          <br/>
            <h6 className="mb-4 text-black">Limit Dashboard and API access to these IP ranges</h6>
            
            <p className="mb-4 text-black">This computer is using IP address <strong>196.19.65.19</strong></p>
            <form className="forms-sample"  method="POST" onSubmit={submitForm}>
            <Form.Group className="col-6">
                    {/* <label htmlFor="exampleTextarea1">Description</label> */}
                    <textarea className="form-control form-control-sm" id="description" name="description" rows="4"></textarea>
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

export default IPRange;