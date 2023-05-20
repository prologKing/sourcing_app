/* eslint-disable */
import React from 'react'
import { CContainer } from '@coreui/react'
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'

const PasswordReset = () => {
  return (
    <>
    <PageHeaderWithoutAvatar />
    <CContainer style={{marginTop: '200px'}}>
        <CRow className="justify-content-center">
          <CCol md={7} lg={5} xl={4}>
                <CForm>
                  <h4>Felix, set a new password.</h4>
                  <br />
                  <CInputGroup className="mb-3">
                    <CFormInput
                      type="password"
                      size="lg"
                      placeholder="Password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                  <CFormInput
                      type="password"
                      size="lg"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CFormInput placeholder="Reset code" size="lg" autoComplete="reset" />
                  </CInputGroup>
                  <div className="d-grid mb-3">
                    <CButton href="/#/activate" color="dark" size="lg" style={{backgroundColor: 'black'}}>Proceed</CButton>
                  </div>
                </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default PasswordReset
