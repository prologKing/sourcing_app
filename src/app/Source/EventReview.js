import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from '@fortawesome/free-solid-svg-icons';
import Button from "@material-ui/core/Button";

function EventReview(props) {
    const [eventDetails, setEventDetails] = useState(props.eventDetails);
    const [suppliers, setSuppliers] = useState(props.suppliers);
  
  const showDetails = () => {
    window.location.assign("/source/new");
  };
    return (
      <div className="card">
        
            <h6 className="mb-4">Review details of this event</h6>
            <p className="card-title" style={{color:'#629C44'}}>Event Details</p>
            <span>Title</span>
            <p className="text-black">{eventDetails.title}</p>
            <span>Description</span>
            <p className="text-black">{eventDetails.description}</p>
            <span>File Attachment</span>
            <p className="text-black">None Provided</p>
            <span>Request Type</span>
            <p className="text-black">{eventDetails.request_type}</p>
            <span>Currency</span>
            <p className="text-black">{eventDetails.currency}</p>
            <span><a className="cursor-pointer text-primary" onClick={()=> props.setActiveStep(0)}>Edit</a></span>
            <p className="card-title mt-3" style={{color:'#629C44'}}>Timelines</p>
            <span>Bid Submission Deadline</span>
            <p className="text-black">{moment(eventDetails.deadline_date).format('DD MMM, YYYY')} {moment(eventDetails.deadline_time, "h:mm:ss").format('hh:mm A')}</p>
            <span>Supplier RSVP Deadline</span>
            <p className="text-black">Not Set</p>
            <span>Supplier Question Deadline</span>
            <p className="text-black">Not Set</p>
            <span><a className="cursor-pointer text-primary" onClick={()=> props.setActiveStep(1)}>Edit</a></span>
            <p className="card-title mt-4 mb-1" style={{color:'#629C44'}}>Suppliers</p><hr className="mt-1" />
            <div className="table-responsive">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th className="text-muted" with="35%">Supplier Name</th>
                        <th className="text-muted">Contact</th>
                        <th></th>
                        
                      </tr>
                    </thead>
                    <tbody>
                    {suppliers.map((data, index)=>(
                      <tr key={index}>
                        <td key={index + "_0"}>{data.suppliername}</td>
                        <td key={index + "_1"} colSpan="2">{data.contact}</td> 
                      </tr>
                    ))}
                      
                    </tbody>
                  </table>
                </div>
                <span className="mt-3 mb-3"><a className="cursor-pointer text-primary" onClick={()=> props.setActiveStep(2)}>Edit</a></span>
                <div className="content">
                <Button
                    onClick={props.handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous
                  </Button>
                  <Button
                    sx={{ mt: 1, mr: 1 }}
                  >
                   <FontAwesomeIcon icon={faPrint} size="lg" /> &nbsp; Print
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Publish
                  </Button>
                  </div>
      </div>
      
    );
  }

export default EventReview;