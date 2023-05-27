import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {
    CContainer, CButton, CButtonGroup,CCard, CCardHeader, CCardBody, CCol, CForm, CFormInput, CRow
} from '@coreui/react'

const LicenseForm = () => {
    return (
        <>
            <CContainer>

                <CCard className="mb-4 mr-2">
                    <CCardHeader>
                        <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                            <CButton color="light" href="/sourcing_app/#/settings" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                        </CButtonGroup>
                        <h4>Activate a License</h4>
                    </CCardHeader>
                    <CCardBody style={{ overflow: 'auto', width: '100%' }}>
                        <CRow className="justify-content-center">
                            <CCol md={8} lg={6} xl={5}>
                                <CForm className="row g-3">
                                    
                                    <CCol xs={12}>
                                        <CFormInput id="firstname" placeholder="XXXX-XXXX-XXXX-XXXX" size="lg" />
                                    </CCol>

                                    <div className="d-grid mb-3">
                                        <CButton color="dark" style={{ backgroundColor: 'black' }} size="lg"> &nbsp;&nbsp;Activate License&nbsp;&nbsp; </CButton>
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

export default LicenseForm
