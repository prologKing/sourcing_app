/* eslint-disable */
import React from 'react'
import { CContainer } from '@coreui/react'
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'
import { cilArrowLeft, cilArrowRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const Activate = () => {
    return (
        <>
            <PageHeaderWithoutAvatar />
            <CContainer style={{marginTop: '200px'}}>
                <CRow className="justify-content-center">
                    <CCol md={7} lg={5} xl={4}>
                        <CForm>
                            <h4>Activate your new account.</h4>
                            <br />
                            <CInputGroup className="mb-3">
                                <CFormInput placeholder="Enter activation code here" size="lg" autoComplete="firstname" />
                            </CInputGroup>
                            <div className="mb-5">
                                <CButton href="#" color="light" shape="rounded-pill" className="ms-auto">
                                    I didn't receive a code
                                </CButton>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <div>
                                        <CButton href="/sourcing_app/#/register" color="light" shape="rounded-pill">
                                            <CIcon width={24} icon={cilArrowLeft} size="xl" />
                                        </CButton>
                                </div>
                                <div className="justify-content-md-end">
                                        <CButton href="#" color="dark" shape="rounded-pill" style={{backgroundColor: 'black'}}>
                                            Next&nbsp;&nbsp;<CIcon width={15} icon={cilArrowRight} size="xl" />
                                        </CButton>
                                </div>
                            </div>
                        </CForm>
                    </CCol>
                </CRow>
            </CContainer>
        </>
    )
}

export default Activate
