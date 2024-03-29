/* eslint-disable */
import React, { useState } from 'react'
import { CContainer } from '@coreui/react'
import {setCookie, setUser} from '../../../components/Config';
import { CButton, CCol, CForm, CFormInput, CInputGroup, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'
import { cilArrowLeft, cilArrowRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
const LoginStep3 = () => {
  const [verificationCode, setVerificationCode] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    const { name, value } = e.target;

    setVerificationCode(value);
    setCookie("login_code", value)
};
    return (
        <>
            <PageHeaderWithoutAvatar />
            <CContainer style={{marginTop: '200px'}}>
                <CRow className="justify-content-center">
                    <CCol md={7} lg={5} xl={4}>
                        <CForm>
                            <h4>Verify it's you.</h4>
                            <br />
                            <CInputGroup className="mb-3">
                                <CFormInput
                                    type="password"
                                    size="lg"
                                    name="verificationCode"
                                    id="verificationCode"
                                    onChange={handleChange}
                                    placeholder="6-character code"
                                    autoComplete="new-password"
                                />
                            </CInputGroup>
                            <div className="mb-5">
                                <CButton href="#" shape="rounded-pill" className="lightbg ms-auto">
                                    I didn't receive a code
                                </CButton>
                            </div>
                            <div className="d-flex w-100 justify-content-between">
                                <div>
                                    <CButton href="/sourcing_app/#/verify" className="lightbg" shape="rounded-pill">
                                        <CIcon width={24} icon={cilArrowLeft} size="xl" />
                                    </CButton>
                                </div>
                                <div className="justify-content-md-end">
                                    <CButton href="/sourcing_app/#/companysetup" onClick={()=> setUser(true)} color="dark" shape="rounded-pill" style={{ backgroundColor: 'black' }}>
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

export default LoginStep3
