import React, { useState } from 'react'
import { CCard, CCardBody, CRow, CCol, CCardHeader } from '@coreui/react'
import Source from 'src/buyer/views/Source/Source'

const Typography = () => {
  const [isActive, setActiveKey] = useState(1)
  return (
    <>

      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4 mr-2">
            <CCardHeader>
              <h4>Procure</h4>
            </CCardHeader>
            <CCardBody style={{ overflow: 'auto', width: '100%' }}>
              <div className="small text-medium-emphasis">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className={isActive == 1 ? "nav-link active" : "nav-link"} onClick={() => setActiveKey(1)} id="users-tab" data-toggle="tab" role="tab" aria-controls="users" aria-selected="true">Users</a>
                  </li>
                  <li className="nav-item">
                    <a className={isActive == 2 ? "nav-link active" : "nav-link"} onClick={() => setActiveKey(2)} id="security-tab" data-toggle="tab" role="tab" aria-controls="security" aria-selected="false">Security</a>
                  </li>
                  <li className="nav-item">
                    <a className={isActive == 3 ? "nav-link active" : "nav-link"} onClick={() => setActiveKey(3)} id="account-tab" data-toggle="tab" role="tab" aria-controls="account" aria-selected="false">Account</a>
                  </li>
                  <li className="nav-item">
                    <a className={isActive == 4 ? "nav-link active" : "nav-link"} onClick={() => setActiveKey(4)} id="license-tab" data-toggle="tab" role="tab" aria-controls="license" aria-selected="false">License</a>
                  </li>
                  <li className="nav-item">
                    <a className={isActive == 5 ? "nav-link active" : "nav-link"} onClick={() => setActiveKey(5)} id="suppliers-tab" data-toggle="tab" role="tab" aria-controls="suppliers" aria-selected="false">Suppliers</a>
                  </li>
                </ul>
                <div className="d-grid mb-3 tab-content" id="myTabContent">
                  <div className={isActive == 1 ? "tab-pane fade show active" : "tab-pane fade"} id="users" role="tabpanel" aria-labelledby="nav-users-tab"><Source /></div>
                  <div className={isActive == 2 ? "tab-pane fade show active" : "tab-pane fade"} id="security" role="tabpanel" aria-labelledby="nav-security-tab">a</div>
                  <div className={isActive == 3 ? "tab-pane fade show active" : "tab-pane fade"} id="account" role="tabpanel" aria-labelledby="nav-account-tab">b</div>
                  <div className={isActive == 4 ? "tab-pane fade show active" : "tab-pane fade"} id="license" role="tabpanel" aria-labelledby="nav-license-tab">b</div>
                  <div className={isActive == 5 ? "tab-pane fade show active" : "tab-pane fade"} id="suppliers" role="tabpanel" aria-labelledby="nav-suppliers-tab">b</div>
                </div>
              </div>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Typography
