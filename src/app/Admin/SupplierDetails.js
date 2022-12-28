import React, {} from 'react';

function SupplierDetails(props) {
  
 
    return (
      <div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">Supplier - ACME Corps</h4><hr className="mt-1" />
          <br/>
            <span className="card-title d-block" style={{color:'#629C44'}}>Basics</span>
            <span className="card-title text-muted mt-3">Company Name</span>
            <p className="text-black">ACME Corps</p>

            <span className="card-title mt-3 text-muted">Industry</span>
            <p className="text-black">Information Technology</p>
           
            <span className="card-title mt-3 text-muted">Company Size</span>
            <p className="text-black">1 - 50 employees</p>

            <span className="card-title mt-3 text-muted">Company Type</span>
            <p className="text-black">Privately Held</p>

            <span className="card-title mt-3 text-muted">Year Founded</span>
            <p className="text-black">2011</p>

            <span className="card-title mt-3 text-muted">Preferred Language</span>
            <p className="text-black">English</p>

            <span className="card-title mt-3 text-muted">Web URL</span>
            <p className="text-black">https://www.acme.com</p>
            
            <span className="card-title mt-4 d-block" style={{color:'#629C44'}}>Location</span>
            <span className="card-title text-muted mt-3">Country</span>
            <p className="text-black">Ghana</p>

            <span className="card-title text-muted mt-3">City</span>
            <p className="text-black">Accra</p>

            <span className="row">
                  <span className="col-md-3">
                  <span className="card-title text-muted mt-3">State</span>
                   <p className="text-black">Greater Accra</p>
                  </span>
                  <span className="col-md-3">
                  <span className="card-title text-muted mt-3">Zip Code</span>
                   <p className="text-black">251-9344</p>
                  </span>
                  </span>

            <span className="card-title mt-4 d-block" style={{color:'#629C44'}}>Incorporation</span>
            <span className="card-title text-muted mt-3">Business Registration No.</span>
            <p className="text-black">CSS35201083493</p>

            <span className="card-title text-muted mt-3">Tax Identification No.</span>
            <p className="text-black">CNN17774992334</p>

            <span className="card-title mt-4 d-block" style={{color:'#629C44'}}>Database Info</span>
            <span className="card-title text-muted mt-3">Kotage ID</span>
            <p className="text-black">X52-10713-M94</p>

            <span className="card-title text-muted mt-3">Added as Supplier</span>
            <p className="text-black">May 15, 2020</p>

            <span className="card-title text-muted mt-3">Events Invited</span>
            <p className="text-black">15</p>
            
            <span className="card-title text-muted mt-3">Bids Won</span>
            <p className="text-black">12</p>
      </div>
      </div>
      </div>
      </div>
      
    );
  }

export default SupplierDetails;