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
      
    <div className="mb-4">
      <div>
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
        </div>
    </div>
  </>
  )
}

export default Widgets
