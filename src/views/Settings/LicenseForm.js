import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import {
    CButton, CButtonGroup, CCol, CForm, CFormInput, CRow
} from '@coreui/react'

const LicenseForm = (props) => {
    return (
        <div className="full-screen">

            <CRow className="justify-content-center">
                <CCol md={8} lg={6} xl={5}>
                    <CForm className="row g-3 m-5">
                    <div>
                        <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                            <CButton className="lightbg" onClick={() => props.controlUserForm(true)} shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                        </CButtonGroup>
                        <h4>Activate a License</h4>
                    </div>
                        <CCol xs={12}>
                            <CFormInput id="firstname" placeholder="XXXX-XXXX-XXXX-XXXX" size="lg" />
                        </CCol>

                        <div className="d-grid mb-3">
                            <CButton color="dark" style={{ backgroundColor: 'black' }} size="lg"> &nbsp;&nbsp;Activate License&nbsp;&nbsp; </CButton>
                        </div>
                    </CForm>
                </CCol>
            </CRow>
        </div>
    )
}

export default LicenseForm
