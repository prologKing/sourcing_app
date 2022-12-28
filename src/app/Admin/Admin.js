import React, {} from 'react';
import { Link } from 'react-router-dom';

function Admin(props) {
  
  const showDetails = () => {
    window.location.assign("/source/new");
  };
    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">Account &amp; Settings</h4><hr className="mt-1" />
          <br/>
            <h6 className="mb-4 text-black">Your Kotage Network ID is <strong>7X2-51119-2UB</strong></h6>
            <span className="card-title" style={{color:'#629C44'}}>Organization</span>
            <p className="text-black">Current information relating to your organization</p>
            <span><Link className="font-weight-medium d-block mb-4" to="/admin/companyinfo">View</Link></span>

            <span className="card-title mt-3 text-muted">Users</span>
            <p className="text-black">Who can view, edit, or create transactions</p>
            <span><Link className="font-weight-medium d-block mb-4" to="/admin/users">View</Link></span>

            <span className="card-title mt-3 d-block" style={{color:'#629C44'}}>Security</span>
            <span className="card-title text-muted mt-3">Authentication</span>
            <p className="text-black">Settings for Single sign-on and two-step verification</p>
            <span><Link className="font-weight-medium d-block mb-4" to="/admin/auth">Edit</Link></span>

            <span className="card-title mt-3 text-muted">Login IP Range</span>
            <p className="text-black">Restrict access to Dashboard from certain IP addresses</p>
            <span><Link className="font-weight-medium d-block mb-4" to="/admin/iprange">Edit</Link></span>

            <span className="card-title mt-3 text-muted">API Access</span>
            <p className="text-black">Enable access to the Kotage Dashboard API</p>
            <span><Link className="font-weight-medium d-block mb-4" to="/admin/apiaccess">Edit</Link></span>

            <span className="card-title mt-3" style={{color:'#629C44'}}>Suppliers</span>
            <p className="text-black">Information relating to your Suppliers</p>
            <span><Link className="font-weight-medium d-block mb-4" to="/admin/suppliers">Edit</Link></span>

            <span className="card-title mt-3" style={{color:'#629C44'}}>Delete Organization</span>
            <p className="text-black">You can delete this organization only if it has no users, active licenses, or open events</p>
            <span><a className="cursor-pointer text-primary">Proceed</a></span>
            
            
      </div>
      </div>
      </div>
      </div>
      
    );
  }

export default Admin;