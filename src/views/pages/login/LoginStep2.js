/* eslint-disable */
import React, { useState } from 'react'
import { CContainer } from '@coreui/react'
import {setCookie} from '../../../components/Config';
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'
import { cilArrowLeft, cilArrowRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const LoginStep2 = () => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setPassword(value);
    setCookie("login_password", value)
};
    return (
        <>
            <PageHeaderWithoutAvatar />
            <CContainer style={{marginTop: '200px'}}>
                <CRow className="justify-content-center">
                    <CCol md={7} lg={5} xl={4}>
                        <CForm>
                            <h4>Welcome back, Felix.</h4>
                            <br />
                            <CInputGroup className="mb-3">
                                <CFormInput
                                    type="password"
                                    size="lg"
                                    name="password"
                                    id="password"
                                    onChange={handleChange}
                                    placeholder="Enter your password"
                                    autoComplete="new-password"
                                />
                            </CInputGroup>
                            <div className="mb-5">
                                <CButton href="/sourcing_app/#/passrecovery" color="light" shape="rounded-pill" className="ms-auto">
                                    I forgot my password
                                </CButton>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <div>
                                    <CButton href="/sourcing_app/#/login" color="light" shape="rounded-pill">
                                        <CIcon width={24} icon={cilArrowLeft} size="xl" />
                                    </CButton>
                                </div>
                                <div className="justify-content-md-end">
                                    <CButton href="/sourcing_app/#/codeverify" color="dark" shape="rounded-pill" style={{ backgroundColor: 'black' }}>
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

export default LoginStep2
