import React, { useState } from 'react'
import {
    CBadge,
    CFormCheck,
    CButton,
    CCol,
    CLink,
    CRow,
} from '@coreui/react'
import { getCookie } from '../../../components/Config';


const EventDetails = () => {
    const [event, setEvent] = useState(JSON.parse(getCookie("eventdetails")));

    return (
        <CRow className="small text-medium-emphasis">
            <CCol xs={12}>
                <div className="m-4 mt-0">
                    <div>
                        
                        <h1>{event.source_id}</h1>
                        
                        <CButton href='/sourcing_app/#/events/details/messages' className='lightbg float-end'>
                            Messages <CBadge color="primary">2</CBadge>
                        </CButton>
                        <CButton href='/sourcing_app/#/events/details/response' className='lightbg float-end'>
                            Create Response
                        </CButton>
                        <CCol xs={6}>
                        <h5 className='mb-5'>Supply of Lenovo Laptops and Computers</h5>
                        </CCol>
                        <div className='mb-5'>
                            <h5>Event Details</h5>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Title</strong></span>
                                <p>Supply of Lenovo Laptops and Computers</p>
                            </div>
                            <div className='mb-4'>
                                <span className='text-muted'><strong>Description</strong></span>
                                <p>Processor: Intel® Celeron® Processor N4020 Processor (1.10 GHz up to 2.80 GHz) Windows 11 Home in S mode Single Language 64 4 GB Soldered DDR4 2400MHz Storage: 256 GB SSD M.2 2242 PCIe Gen3/4 Warranty: 2 Year Premium Care</p>
                            </div>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Bid Currency</strong></span>
                                <p>GHS</p>
                            </div>
                        </div>

                        <div className='mb-5'>
                            <h5>Attachments</h5>
                            <h6 className='text-muted'>Related documents and attachments</h6>
                            <div className='mb-1'>
                                <span><CLink href="#" style={{ textDecorationLine: 'none' }}>Revised_RFP_Pack-Supply.zip</CLink></span>
                            </div>
                            <div className='mb-1'>
                                <span><CLink href="#" style={{ textDecorationLine: 'none' }}>General_Terms_Conditions.docx</CLink></span>
                            </div>
                        </div>
                        <div className='mb-5'>
                            <h5>Acknowledgement</h5>
                            <p><CFormCheck id="flexCheckDefault" label="I intend to participate in this event" /></p>
                        </div>
                        <div className='mb-5'>
                            <h5>Timeline</h5>
                            <CRow>
                                <CCol xs={3}>Open Date</CCol>
                                <CCol xs={3}>Closing Date</CCol>
                                <CCol xs={6} />
                            </CRow>
                            <CRow>
                                <CCol xs={3}>15 May 2023 11:59 AM</CCol>
                                <CCol xs={3}>25 May 2023 11:59 AM</CCol>
                                <CCol xs={6} />
                            </CRow>

                        </div>
                    </div>
                </div>
            </CCol>
        </CRow>
    )
}

export default EventDetails
