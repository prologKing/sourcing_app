import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { getCookie } from '../../../components/Config';
import {
    CFormLabel, CButton, CTable,
    CTableBody, CTableDataCell, CTableHead,
    CTableHeaderCell, CTableRow, CButtonGroup,
    CCol, CForm, CLink,
    CFormInput, CInputGroup, CFormSelect, CRow, CFormTextarea
} from '@coreui/react'

const Response = () => {
    const [event, setEvent] = useState(JSON.parse(getCookie("eventdetails")));
    return (
        <div className="small text-medium-emphasis text-muted full-screen">
            <CRow className="justify-content-center ">
                <CCol md={10} lg={8} xl={7}>
                    <CForm className="row g-3 m-5">
                        <div>
                            <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                                <CButton className="lightbg" href="/sourcing_app/#/events" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                            </CButtonGroup>
                            <small className='text-primary'>{event.source_id}</small><br />
                            <h4>{event.title}</h4>
                        </div>
                        <h5>Bid Summary</h5>
                        <CCol md={6}>
                            <CFormLabel htmlFor="eventtype">Quote Number</CFormLabel>
                            <CFormInput id="title" size="lg" />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="currency">Quote Validity</CFormLabel>
                            <CFormInput type="date" id="submissionDate" size="lg" />
                        </CCol>
                        <CCol md={12} className="mt-5 mb-5">
                            <CTable hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">Lot #</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">My Price</CTableHeaderCell>
                                        <CTableHeaderCell scope="col"></CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell><CFormInput id="title" size="sm" /></CTableDataCell>
                                        <CTableDataCell><CFormInput id="title" size="sm" /></CTableDataCell> 
                                        <CTableDataCell><CButton color="transparent" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="sm" customClassName="nav-icon" /></CButton></CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                            <span role="button" className='text-primary'>Add another</span>
                        </CCol>
                        <h5>Attachments</h5>
                        <CCol md={12}>
                            <CFormLabel htmlFor="formFile">Attach Files</CFormLabel>
                            <CFormInput type="file" size="lg" id="formFile" />
                            <br />
                            <span role="button" className='text-primary'>Attach another</span>
                        </CCol>
                
                        <CCol md={12}>
                        <h5 className="mt-5">Notes</h5>
                            <CFormTextarea id="description" rows="3"></CFormTextarea>
                        </CCol>
                        <div className="mb-3">
                            <CButton color="dark" style={{ backgroundColor: 'black' }}> &nbsp;&nbsp;Save&nbsp;&nbsp; </CButton>
                            <CButton className='lightbg m-2'> &nbsp;&nbsp;Submit Response&nbsp;&nbsp; </CButton>
                        </div>
                    </CForm>
                </CCol>
            </CRow>
        </div>
    )
}

export default Response
