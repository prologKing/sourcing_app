import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {
    CContainer, CFormLabel, CButton, CTable,
    CTableBody, CTableDataCell, CTableHead,
    CTableHeaderCell, CTableRow, CButtonGroup,
    CCard, CCardHeader, CCardBody, CCol, CForm, CLink,
    CFormInput, CInputGroup, CFormSelect, CRow, CFormTextarea
} from '@coreui/react'

const SourceDetails = () => {
    return (
        <>
            <CContainer>

                <CCard className="mb-4 mr-2">
                    <CCardHeader>
                        <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                            <CButton color="light" href="/sourcing_app/#/source" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                        </CButtonGroup>
                        <h4>Sourcing</h4>
                    </CCardHeader>
                    <CCardBody style={{ overflow: 'auto', width: '100%' }}>
                        <CRow className="justify-content-center">
                            <CCol md={10} lg={8} xl={7}>
                                <CForm className="row g-3">
                                    <h4>Create an Event</h4>
                                    <span className="text-medium-emphasis text-muted">Event Details.</span>
                                    <CCol xs={12}>
                                        <CFormLabel htmlFor="title">Title</CFormLabel>
                                        <CFormInput id="title" size="lg" />
                                    </CCol>
                                    <CCol md={12}>
                                        <CFormLabel htmlFor="description">Description</CFormLabel>
                                        <CFormTextarea id="description" rows="5"></CFormTextarea>
                                    </CCol>
                                    <CCol md={12}>
                                        <CFormLabel htmlFor="formFile">Attach Files</CFormLabel>
                                        <CFormInput type="file" size="lg" id="formFile" multiple />
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="eventtype">Event Type</CFormLabel>
                                        <CFormSelect id="eventType" size="lg">
                                            <option></option>
                                            <option>Request for Quote</option>
                                        </CFormSelect>
                                    </CCol>
                                    <CCol md={6}>
                                        <CFormLabel htmlFor="currency">Currency</CFormLabel>
                                        <CFormSelect id="currency" size="lg">
                                            <option></option>
                                            <option>GHS</option>
                                        </CFormSelect>
                                    </CCol>
                                    <CCol md={12} className="mt-5">
                                        <h5>Timeline</h5>
                                        <CFormLabel htmlFor="eventtype">Bid Submission Deadline</CFormLabel>
                                        <CInputGroup className="mb-2">
                                            <CFormInput type="date" id="submissionDate" size="lg" />
                                            <CFormInput type="time" id="submissionTime" size="lg" />
                                        </CInputGroup>
                                        <CLink href="#" style={{ textDecorationLine: 'none', color: '#585bf2' }}>Advanced ...</CLink>
                                    </CCol>
                                    <CCol md={12} className="mt-5">
                                        <h5>Suppliers</h5>
                                        <CButton color="light" className="float-end"> Add </CButton>
                                        <span>Invite suppliers to this event</span>
                                        <CTable hover>
                                            <CTableHead>
                                                <CTableRow>
                                                    <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col">Contact</CTableHeaderCell>
                                                    <CTableHeaderCell scope="col"></CTableHeaderCell>
                                                </CTableRow>
                                            </CTableHead>
                                            <CTableBody>
                                                <CTableRow>
                                                    <CTableDataCell>Acme Corp</CTableDataCell>
                                                    <CTableDataCell>Kofi Kingston, kofi@acmecorp.com</CTableDataCell>
                                                    <CTableDataCell><CButton color="transparent" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="sm" customClassName="nav-icon" /></CButton></CTableDataCell>
                                                </CTableRow>
                                                <CTableRow>
                                                    <CTableDataCell>Brunder Works</CTableDataCell>
                                                    <CTableDataCell>Tilly Mensah, tilly@brunderworks.net</CTableDataCell>
                                                    <CTableDataCell><CButton color="transparent" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="sm" customClassName="nav-icon" /></CButton></CTableDataCell>
                                                </CTableRow>
                                                <CTableRow>
                                                    <CTableDataCell>Forward, Inc</CTableDataCell>
                                                    <CTableDataCell>Sandy Dick, dsandy@forwardinc.com</CTableDataCell>
                                                    <CTableDataCell><CButton color="transparent" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="sm" customClassName="nav-icon" /></CButton></CTableDataCell>
                                                </CTableRow>
                                            </CTableBody>
                                        </CTable>
                                    </CCol>
                                    <div className="mb-3">
                                        <CButton color="dark" style={{ backgroundColor: 'black' }}> &nbsp;&nbsp;Create Event&nbsp;&nbsp; </CButton>
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

export default SourceDetails
