import React, { useState } from 'react'
import {
    CCard,
    CCardBody,
    CButton,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CFormSelect,
    CCol,
    CRow,
} from '@coreui/react'


const Account = () => {

    return (
        <CRow>
            <CCol xs={12}>
                <div className="mb-4 ml-2">
                    <div>
                        <CRow className="justify-content-left">
                            <CCol md={8} lg={6} xl={5} style={{marginBottom: '40px'}}>
                                <br />
                                <CForm className="row g-3">
                                    <h5>Company Details</h5>
                                    <span className="text-medium-emphasis text-muted">This information is required for billing.</span>
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
                                    <div className="mb-3">
                                        <CButton color="dark" size='md' style={{ backgroundColor: 'black' }}>&nbsp;&nbsp; Save &nbsp;&nbsp;</CButton>
                                    </div>
                                </CForm>
                                </CCol>
                                <CCol md={12} lg={12} xl={12}>
                                <div>
                                    <h6>Deactivate Account</h6>
                                    <p>You can delete this organization only if it has no users, active licenses, or open events.</p>
                                </div>
                                <div className="mb-3">
                                    <CButton className="lightbg" size='md'>&nbsp;&nbsp; Delete &nbsp;&nbsp;</CButton>
                                </div>
                            </CCol>
                        </CRow>
                    </div>
                </div>
            </CCol>
        </CRow>
    )
}

export default Account
