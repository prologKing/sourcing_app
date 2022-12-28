import React, { Component } from 'react';

function Source(props) {
  
  const showDetails = () => {
    window.location.assign("/source/new");
  };
    return (
      <div className="row">
          <div className="col-md-12 grid-margin stretch-card">
            <div className="card">
            {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
              <div className="card-body">
                <h4 className="card-title text-muted">Sourcing Events <button type="button" style={{backgroundColor:'#629C44'}} onClick={showDetails} size="sm" className="btn btn-success float-right">New</button></h4><hr />
                <small>Showing <span className="text-primary"><u>all events</u></span> created by <span className="text-primary"><u>everyone</u></span> from <span className="text-primary"><u>all times</u></span></small>
                <br/>
                <span><br/>Running</span>
                <hr className="mt-1" />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closing on May 13, 2022</small></p>
                  </div>
                </div>
                
                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closing on May 13, 2022</small></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closing on May 13, 2022</small></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closing on May 13, 2022</small></p>
                  </div>
                </div>
                <hr className="mb-2" />
                <span className="card-text p-4 ml-4"><small className="text-primary">See 2 more Open Events</small></span>



                <br/>
                <span><br/>Closed</span>
                <hr className="mt-1" />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closed on May 13, 2022</small></p>
                  </div>
                </div>
                
                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closed on May 13, 2022</small></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closed on May 13, 2022</small></p>
                  </div>
                </div>

                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closed on May 13, 2022</small></p>
                  </div>
                </div>
                <hr />
                <div className="media">
                  <i className="mdi mdi-cart-outline icon-md d-flex align-self-start mr-3" style={{color:'green'}}></i>
                  <div className="media-body">
                    <p className="card-text"><span className="text-primary">Supply of Lenovo Laptops</span> <small className="text-muted">by</small><small> Ewurama Marvels</small><br />
                <small>Closed on May 13, 2022</small></p>
                  </div>
                </div>
                <hr className="mb-2" />
                <span className="card-text p-4 ml-4"><small className="text-primary">See 51 more Closed Events</small></span>
              </div>
            </div>
          </div>
      </div>
      
    );
  }

export default Source;