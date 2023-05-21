import React from 'react'
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
} from '@coreui/react'

const Widgets = () => {
 

  return (
    <>
      
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={5}>
            <h4 id="pay" className="card-title mb-0">
              Pay
            </h4>
            <div className="small text-medium-emphasis">Some Text here</div>
          </CCol>
          <CCol sm={7} className="d-none d-md-block">
            
          </CCol>
        </CRow>
        </CCardBody>
    </CCard>
  </>
  )
}

export default Widgets
