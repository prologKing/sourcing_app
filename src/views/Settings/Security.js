import React, { useState } from 'react'
import {
    CCard,
    CCardBody,
    CButton,
    CFormCheck,
    CFormTextarea,
    CCol,
    CLink,
    CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilCopy, cilReload } from '@coreui/icons'


const Security = () => {
    
    return (
        <CRow>
            <CCol xs={12}>
                <CCard className="mb-4 ml-2">
                    <CCardBody style={{ overflow: 'auto', width: '100%' }}>
                        <div>
                            <h6>Authentication</h6>
                            <p><CFormCheck id="flexCheckDefault" label="Enable two-step verification for this organization" /></p>
                            <p>
                                <CFormCheck id="flexCheckDefault" label="Enable single sign-on for this organization" />
                                <CLink href="#" style={{ textDecorationLine: 'none', marginLeft: '20px' }}>SAML IdP Configuration</CLink>
                            </p>
                        </div>
                        <div className="mt-5">
                            <h6 >Login IP Range</h6>
                            <p>Limit Dashboard and API access to these IP ranges</p>
                            <p>This computer is using IP address 196.19.65.19</p>
                            <CCol xs={12} md={5} lg={5} xl={5}>
                                <CFormTextarea id="exampleFormControlTextarea1" rows="5"></CFormTextarea>
                            </CCol>
                        </div>
                        <div className="mt-5">
                            <h6 >API Access</h6>
                            <p><CFormCheck id="flexCheckDefault" label="Enable API key for Dashboard access" /></p>
                            <p className="text-medium-emphasis">Key<br />
                                1d1621456bf64fb**************** &nbsp;&nbsp;<CLink href="/sourcing_app/#/procure" style={{ textDecorationLine: 'none' }}><CIcon width={18} icon={cilCopy} size="xl" /></CLink> &nbsp;&nbsp;<CLink href="/sourcing_app/#/procure" style={{ textDecorationLine: 'none' }}><CIcon width={18} icon={cilReload} size="xl" /></CLink></p>

                        </div>
                        <div className="mt-5">

                        <CButton  color="dark" style={{ backgroundColor: 'black' }}> Save Changes </CButton>
                        &nbsp; &nbsp;
                        <CButton  color="light" > Cancel </CButton>
                        </div>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default Security
