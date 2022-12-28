import React, { useEffect, useState } from 'react';
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import EventDetail from './EventDetail';
import Timelines from './Timelines';
import AddDeleteTableRows from './AddDeleteTableRows';
import EventReview from './EventReview';


export default function EventForm(props) {
  const [activeStep, setActiveStep] = useState(0);

  const [eventDetails, setEventDetails] = useState({
    id: 0, title: '', description:'', filename: '', request_type:'', currency: '', deadline_date: new Date(), deadline_time: '00:00'
});

const [suppliers, setSuppliers] = useState([]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleChange = (area, items) => {
    if(area === 0){
        setEventDetails(items);
    }else if(area === 1){
        setSuppliers(items);
    }

}

const steps = [
    {
      label: 'Event Details',
      description: <EventDetail handleChange={handleChange} eventDetails={eventDetails} handleBack={handleBack} handleNext={handleNext} />,
    },
    {
      label: 'Timelines',
      description: <Timelines handleChange={handleChange} eventDetails={eventDetails} handleBack={handleBack} handleNext={handleNext} />,
    },
    {
      label: 'Suppliers',
      description: <AddDeleteTableRows  handleChange={handleChange} suppliers={suppliers} handleBack={handleBack} handleNext={handleNext}  />,
    },
    {
      label: 'Review',
      description: <EventReview  handleChange={handleChange} eventDetails={eventDetails} suppliers={suppliers} setActiveStep={setActiveStep} handleBack={handleBack} handleNext={handleNext}  />,
    }
  ];

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
<div className="row">
    <div className="col-md-12 grid-margin stretch-card">
      <div className="card">
      {/* <div className="card-header"><h4>Sourcing Events</h4></div> */}
        <div className="card-body">
          <h4 className="card-title text-muted">New Event</h4><hr />
          <br/>
    <div style={{ maxWidth: 800 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
              
                  <StepLabel>{step.label}</StepLabel>
                  <StepContent> <div>{step.description}</div></StepContent>
           
            <StepContent>
             
              <div sx={{ mb: 2 }}>
                <div>
                {/* <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Save' : 'Continue'}
                  </Button> */}
                  
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
    </div>
            </div>
          </div>
      </div>
  );
}
