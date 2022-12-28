import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from "@material-ui/core/Button";

function EventDetail(props) {
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
                    <label htmlFor="exampleInputName1">Title</label>
                    <Form.Control type="text" className="form-control form-control-sm" id="title" name="title" value={eventDetails.title}  onChange={handleChange} required />
                  </Form.Group>
                  <Form.Group>
                    <label htmlFor="exampleTextarea1">Description</label>
                    <textarea className="form-control form-control-sm" id="description" name="description" value={eventDetails.description} rows="4" onChange={handleChange} required></textarea>
                  </Form.Group>
                  <Form.Group>
                    <label>File upload</label>
                    <div className="custom-file">
                      <Form.Control type="file" className="form-control" id="customFileLang" name="filename" value={eventDetails.filename} lang="en" onChange={handleChange}/>
                      <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                    </div>
                  </Form.Group>
                  <Form.Group className="col-6">
                    <label htmlFor="exampleSelectGender">Request Type</label>
                    <select className="form-control form-control-sm" id="request_type" name="request_type" value={eventDetails.request_type} onChange={handleChange} required>
                    <option value="">-- Select Option --</option>
                      <option value="Request for Quote">Request for Quote</option>
                      <option value="Request for Quote">Request for Quote</option>
                    </select>
                  </Form.Group>
                  <Form.Group className="col-6">
                    <label htmlFor="exampleSelectGender">Currency</label>
                    <select className="form-control form-control-sm" id="currency" name="currency" value={eventDetails.currency} onChange={handleChange} required>
                    <option value="">-- Select Option --</option>
                      <option value="USD ($)">USD</option>
                      <option value="GHS">GHS</option>
                    </select>
                  </Form.Group>
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

export default EventDetail;