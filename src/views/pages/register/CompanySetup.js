import React from 'react'
import { CContainer } from '@coreui/react'
import { CButton, CCol, CForm, CFormInput, CInputGroup, CInputGroupText, CFormSelect, CRow } from '@coreui/react'
import PageHeaderWithAvatar from '../PageHeaderWithAvatar'
/* eslint-disable */
const CompanySetup = () => {
  return (
    <>
      <PageHeaderWithAvatar />
      <CContainer style={{ marginTop: '60px',marginBottom: '100px' }}>
        <CRow className="justify-content-center">
          <CCol md={8} lg={6} xl={5}>
            <CForm className="row g-3">
              <h4>Initial setup</h4>
              <span className="text-medium-emphasis text-muted">You only do this once.</span>
              <CCol xs={12}>
                <CFormInput id="inputAddress" placeholder="Company name" />
              </CCol>
              <CCol md={12}>
                <CInputGroup>
                  <CInputGroupText id="inputGroup-1">Industry</CInputGroupText>
                  <CFormSelect id="inputState1">
                    <option></option>
                    <option>...</option>
                  </CFormSelect>
                </CInputGroup>
              </CCol>
              <CCol md={12}>
                <CInputGroup>
                  <CInputGroupText id="inputGroup-2">Language</CInputGroupText>
                  <CFormSelect id="inputState2">
                    <option></option>
                    <option>...</option>
                  </CFormSelect>
                </CInputGroup>
              </CCol>
              <CCol xs={12}>
                <CFormInput id="inputAddress1" placeholder="Street Address 1" />
              </CCol>
              <CCol xs={12}>
                <CFormInput id="inputAddress2" placeholder="Street Address 2" />
              </CCol>
              <CCol md={6}>
                <CFormInput id="inputCity" placeholder="City" />
              </CCol>
              <CCol md={6}>
                <CFormInput id="inputRegion" placeholder="State/Region" />
              </CCol>
              <CCol md={6}>
                <CFormInput id="inputPostal" placeholder="Postal code" />
              </CCol>
              <CCol md={6}>
                <CInputGroup>
                  <CInputGroupText id="inputGroup-4">Country</CInputGroupText>
                  <CFormSelect id="inputState4">
                    <option></option>
                    <option>...</option>
                  </CFormSelect>
                </CInputGroup>
              </CCol>
              <div className="d-grid mb-3">
                <CButton href="/sourcing_app/#/welcome" color="dark" style={{ backgroundColor: 'black' }}>Finish</CButton>
              </div>
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default CompanySetup
