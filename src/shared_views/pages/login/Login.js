/* eslint-disable */
import React, { useState, useEffect } from 'react'
import { CContainer } from '@coreui/react'
import {setCookie, setUser} from '../../../components/Config';
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'

const Login = () => {
  const [email, setEmail] = useState('');

  useEffect(() =>{
    setUser(null)
  })
  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setEmail(value);
    setCookie("login_email", value)
};
  return (
    <>
    <PageHeaderWithoutAvatar />
    <CContainer style={{marginTop: '200px'}}>
        <CRow className="justify-content-center">
          <CCol md={7} lg={5} xl={4}>
                <CForm>
                  <h4>What's your email address?</h4>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Email address here" name="email" id="email" size="lg" autoComplete="email" onChange={handleChange} />
                  </CInputGroup>
                  
                  <div className="d-grid mb-3">
                    <CButton href="/sourcing_app/#/verify" color="dark" size="lg" style={{backgroundColor: 'black'}}>Continue</CButton>
                  </div>
                  <p className="text-medium-emphasis text-center mb-5">Don't have an account? <a href="/sourcing_app/#/register" style={{textDecorationLine: 'none'}}>Sign up</a></p>
                </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Login
