import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { getCookie } from '../../../components/Config';
import {
     CInputGroupText, CButton, CButtonGroup,
     CCol, CForm, CFormInput, CInputGroup, 
     CFormSelect, CRow
} from '@coreui/react'

const UserForm = (props) => {
    const [user, setUser] = useState(JSON.parse(getCookie("userdetails")));
    return (
        <div className="full-screen">
            <CRow className="justify-content-center">
                <CCol md={8} lg={6} xl={5}>
                    <CForm className="row g-3 m-5">
                        <div>
                            <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                                <CButton className="lightbg" onClick={() => props.controlUserForm(true)} shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                            </CButtonGroup>
                            <h4>{user.id ? "Edit" : "Add"} a User</h4>
                        </div>
                        <CCol xs={12}>
                            <CFormInput id="firstname" value={user.firstname} placeholder="First name" size="lg" />
                        </CCol>
                        <CCol xs={12}>
                            <CFormInput id="lastname" value={user.lastname} placeholder="Last name" size="lg" />
                        </CCol>
                        <CCol xs={12}>
                            <CFormInput id="email" value={user.email} placeholder="Email" size="lg" autoComplete="email" />
                        </CCol>

                        <CCol md={12}>
                            <CInputGroup>
                                <CInputGroupText id="inputGroup-1">Role</CInputGroupText>
                                <CFormSelect id="role" size="lg" value={user.role}>
                                    <option></option>
                                    <option value="Full Admin">Full Admin</option>
                                    <option value="Read Only">Read Only</option>
                                </CFormSelect>
                            </CInputGroup>
                        </CCol>

                        <div className="d-grid mb-3">
                            <CButton color="dark" style={{ backgroundColor: 'black' }} size="lg"> &nbsp;&nbsp;{user.id ? "Save" : "Add User"}&nbsp;&nbsp; </CButton>
                        </div>
                    </CForm>
                </CCol>
            </CRow>
        </div>

    )
}

export default UserForm
