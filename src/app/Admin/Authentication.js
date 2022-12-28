import React, {} from 'react';
import { Link } from 'react-router-dom';

function Authentication(props) {

    const submitForm = (e) => {
        e.preventDefault();

    }

    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">Authentication</h4><hr className="mt-1" />
          <br/>
          <form className="forms-sample"  method="POST" onSubmit={submitForm}>
            <h6 className="mb-4 text-black">
            <input type="checkbox" className="form-check-input"/>   
            <span className="ml-4">Enable two-step verification for this organization</span> 
            </h6>
            <h6 className="mb-4 text-black">
            <input type="checkbox" className="form-check-input"/>
            <span className="ml-4">Enable Single Sign-on for this organization</span> 
              
            </h6>
            <h6 className="mb-4 ml-4 text-black">    
            <Link className="font-weight-medium d-block mb-4" to="/admin/auth/configform">SAML IdP Configuration</Link>
            </h6>
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

export default Authentication;