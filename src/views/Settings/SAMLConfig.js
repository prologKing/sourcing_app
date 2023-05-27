import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
    CContainer, CInputGroupText, CButton, CButtonGroup,
    CCard, CCardHeader, CCardBody, CCol, CForm, CFormInput, 
    CInputGroup, CFormSelect, CRow
} from '@coreui/react'

const SAMLConfig = () => {
    return (
        <>
            <CContainer>

                <CCard className="mb-4 mr-2">
                    <CCardHeader>
                        <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                            <CButton color="light" href="/sourcing_app/#/settings" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                        </CButtonGroup>
                        <h4>SAML Configuration</h4>
                    </CCardHeader>
                    <CCardBody style={{ overflow: 'auto', width: '100%' }}>
                        <CRow className="justify-content-center">
                            <CCol md={8} lg={6} xl={5}>
                                <CForm className="row g-3">
                                    <CCol md={12}>
                                        <CInputGroup>
                                            <CInputGroupText id="inputGroup-1">Identity Provider</CInputGroupText>
                                            <CFormSelect id="idprovider" size="lg">
                                                <option></option>
                                                <option>...</option>
                                                <option>\</option>
                                            </CFormSelect>
                                        </CInputGroup>
                                    </CCol>
                                    <CCol xs={12}>
                                        <CFormInput id="replyUrl" placeholder="Reply URL" size="lg" />
                                    </CCol>
                                    <CCol xs={12}>
                                        <CFormInput id="entityId" placeholder="Entity ID" size="lg" />
                                    </CCol>
                                    <CCol xs={12}>
                                        <CFormInput id="metadataUrl" placeholder="Metadata URL" size="lg" autoComplete="email" />
                                    </CCol>
                                    <div className="d-grid mb-3">
                                        <CButton color="dark" style={{ backgroundColor: 'black' }} size="lg"> &nbsp;&nbsp;Add IDP&nbsp;&nbsp; </CButton>
                                    </div>
                                </CForm>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CContainer>
        </>
    )
}

export default SAMLConfig
