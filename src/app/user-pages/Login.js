import React, { useState } from 'react';
import {DoLogin} from '../../components/Config';
import { Form } from 'react-bootstrap';

function Login(){
  const [formItems, setformItems] = useState({ email: '', password: '', code: '' });
  const [resetForm, setResetForm] = useState({ email: '' });
  const [isResetFormFilled, setIsResetFormFilled] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setformItems(prevState => ({ ...prevState, [name]: value }));
};

const handleResetFormChange = (e) => {
  e.preventDefault();

  const { name, value } = e.target;

  setResetForm(prevState => ({ ...prevState, [name]: value }));
};

const reset = (value) => {
  setIsReset(value)
}

const submitResetForm = (e) => {
  e.preventDefault();
  setIsResetFormFilled(true);
};

const submitForm1 = (e) => {
  e.preventDefault();
  setIsVerified(true);
};

const submitForm2 = (e) => {
  e.preventDefault();
  DoLogin(formItems);
};
 
    return (
      
      <div style={{marginTop: '50px', marginLeft: '30px'}}>
        <div className="d-flex align-items-center auth">
          <div className="row w-100">
            <div className="col-lg-4 mx-auto">
              {!isReset && <div className="auth-form-light text-center py-5 px-4 px-sm-5">
                <div className="brand-logo d-sm-flex justify-content-center">
                  <img src={require("../../assets/images/logo.png")} alt="logo" />
                </div>
                {!isVerified ? <>
                <h4>Sign In</h4>
                <Form className="pt-3" onSubmit={submitForm1}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" id="email" name="email" value={formItems.email} onChange={handleChange} placeholder="Email Address" autoComplete="off" size="sm" className="h-auto" />
                  </Form.Group>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="password" id="password" value={formItems.password} name="password" onChange={handleChange} autoComplete="off" placeholder="Password" size="sm" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                  <button type="submit" style={{backgroundColor:'#629C44', fontSize:"15px"}} size="sm" className="btn btn-block btn-success">Sign In</button>
                  </div>
                  <div className="mr-4 justify-content-center align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        Forgot password? <a  onClick={() => reset(true)} className="cursor-pointer auth-link text-primary">Reset</a>
                      </label>
                    </div>
                    
                  </div>
                </Form>
                </>:
                <>
                <h4>Verify It's You</h4>
                <Form className="pt-3" onSubmit={submitForm2}>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="text" id="code" name="email" value={formItems.code} onChange={handleChange} placeholder="6-character code" autoComplete="off" size="sm" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                  <button type="submit" style={{backgroundColor:'#629C44', fontSize:"15px"}} size="sm" className="btn btn-block btn-success">Verify Code</button>
                  </div>
                  <div className="mr-4 justify-content-center align-items-center">
                    <div className="form-check">
                      <label className="form-check-label text-muted">
                        Didn't receive code? <a onClick={event => event.preventDefault()} className="cursor-pointer auth-link text-primary">Resend</a>
                      </label>
                    </div>
                    
                  </div>
                </Form>
                </>}
              </div>}
              {isReset && <div className="auth-form-light text-center py-5 px-4 px-sm-5">
                <div className="brand-logo d-sm-flex justify-content-center">
                  <img src={require("../../assets/images/logo.png")} alt="logo" />
                </div>
                <h4>Reset Password</h4>
                <Form className="pt-3" onSubmit={submitResetForm}>
                  {!isResetFormFilled ? <>
                  <Form.Group className="d-flex search-field">
                    <Form.Control type="email" id="email" name="email" value={resetForm.email} onChange={handleResetFormChange} placeholder="Email Address" required size="sm" className="h-auto" />
                  </Form.Group>
                  <div className="mt-3">
                  <button type="submit" style={{backgroundColor:'#629C44', fontSize:"15px"}} size="sm" className="btn btn-block btn-success">Submit</button>
                  </div>
                  </>: <p className="text-center">We have sent password reset instructions to the email address provided.</p>}

                  <div className="mr-4 justify-content-center align-items-center">
                    <div className="form-check">
                    {!isResetFormFilled ?
                    <label className="form-check-label text-muted">
                        Already have an account? <a onClick={() => reset(false)} className="cursor-pointer auth-link text-primary">Sign In</a>
                    </label>:
                    <label className="form-check-label text-muted">
                    <small className="text-center">Still have trouble logging in? <a onClick={event => event.preventDefault()} className="text-primary">Contact Support</a></small>
                </label>}
                    </div>
                    
                  </div>
                </Form>
              </div>}
            </div>
          </div>
        </div>  
      </div>
    )
  }


export default Login
