import React from 'react'
import { CContainer } from '@coreui/react'
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'
/* eslint-disable */
const Register = () => {
  return (
    <>
    <PageHeaderWithoutAvatar />
    <CContainer style={{marginTop: '200px'}}>
        <CRow className="justify-content-center">
          <CCol md={7} lg={5} xl={4}>
                <CForm>
                  <h4>Tell me about yourself.</h4>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="First lame" size="lg" autoComplete="firstname" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Last lame" size="lg" autoComplete="lastname" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Email" size="lg" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      size="lg"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <div className="d-grid mb-3">
                    <CButton href="/#/activate" color="dark" size="lg" style={{backgroundColor: 'black'}}>Get Started</CButton>
                  </div>
                  <p className="text-medium-emphasis text-center mb-5">Already have an account? <a href="/#/login">Sign in</a></p>
                </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Register
