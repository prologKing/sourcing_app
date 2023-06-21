import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { getCookie } from '../../../components/Config';
import {
    CButton, CButtonGroup,
    CCol, CForm, CRow, CFormTextarea
} from '@coreui/react'

const Messages = () => {
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
                            <h2>Messages</h2>
                        </div>
                        <p><strong>Kwame Frimpong (Maize Bank)<br /><small className='text-muted'>4 days ago</small></strong></p>
                        <p>Hello,</p>
                        <p>Thanks for your support.</p>
                        <p>We found that cleanly uninstalling the previous version (including registry keys) works.</p>
                        <p>Kindly leave this ticket open for a week while we test on a few more computers.</p>
                        <p>Regards.</p>
                        <hr />
                        <p><strong>Kwame Frimpong (Maize Bank)<br /><small className='text-muted'>2 days ago</small></strong></p>
                        <p>Hello,</p>
                        <p>Thanks for your support.</p>
                        <p>We found that cleanly uninstalling the previous version (including registry keys) works.</p>
                        <p>Kindly leave this ticket open for a week while we test on a few more computers.</p>
                        <p>Regards.</p>
                        <hr />
                        <CCol md={12}>
                            <CFormTextarea id="description" rows="3" placeholder='Send new message'></CFormTextarea>
                        </CCol>
                        <div className="mb-3">
                            <CButton color="dark" style={{ backgroundColor: 'black' }}> &nbsp;&nbsp;Save&nbsp;&nbsp; </CButton>
                        </div>
                    </CForm>
                </CCol>
            </CRow>
        </div>
    )
}

export default Messages
