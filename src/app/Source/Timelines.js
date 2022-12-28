import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from "@material-ui/core/Button";

function Timelines(props) {
    const [eventDetails, setEventDetails] = useState(props.eventDetails);
    

    useEffect(() => {
        setEventDetails(props.eventDetails);
    }, []);


  


    const handleChange = (e) => {
        const { name, value } = e.target;
        setEventDetails(prevState => ({ ...prevState, [name]: value }));
        
        
    };

    const submitForm = (e) => {
        e.preventDefault();
        props.handleChange(0, eventDetails);
        props.handleNext();

    }

    return (
        <div className="content">
            <form className="forms-sample"  method="POST" onSubmit={submitForm}>
            <Form.Group> 
                <label className="ml-2" htmlFor="exampleInputName1">Bid Submission Deadline</label>  
                  <div className="input-group col-6"> 
                  <Form.Control type="date" className="form-control form-control-sm" id="deadline_date" name="deadline_date" value={eventDetails.deadline_date} onChange={handleChange} required />
                    <div className="input-group-append">
                    <Form.Control type="time" className="form-control form-control-sm" id="deadline_time" name="deadline_time" value={eventDetails.deadline_time}  onChange={handleChange} required  />
                    </div>
                  </div>
            </Form.Group>
                  <Button
                    onClick={props.handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Continue
                  </Button>
                  
                </form>
            
        </div>
    )
}

export default Timelines;