import React from 'react'

import {
  CContainer,
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'


const Dashboard = () => {


  return (
    <>

      <CContainer>
        <CRow>
          <CCol sm={5}>
            <h4 id="home" className="card-title mb-0">
              Home
            </h4>
            <div className="small text-medium-emphasis">Some Text here</div>
          </CCol>
          <CCol sm={7} className="d-none d-md-block">

          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Dashboard
