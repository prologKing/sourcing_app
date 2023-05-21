/* eslint-disable */
import React from 'react'
import { CContainer } from '@coreui/react'
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'

const PasswordRecovery = () => {
  return (
    <>
    <PageHeaderWithoutAvatar />
    <CContainer style={{marginTop: '200px'}}>
        <CRow className="justify-content-center">
          <CCol md={7} lg={5} xl={4}>
                <CForm>
                  <h4>I forgot my password.</h4>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Email address here" size="lg" autoComplete="email" />
                  </CInputGroup>
                  <div className="d-grid mb-3">
                    <CButton href="/sourcing_app/#/passreset" color="dark" size="lg" style={{backgroundColor: 'black'}}>Continue</CButton>
                  </div>
                  <p className="text-medium-emphasis text-center mb-5">Already have an account? <a href="/sourcing_app/#/login">Sign in</a></p>
                </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default PasswordRecovery
