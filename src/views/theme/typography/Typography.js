import React from 'react'
import { CCard, CRow, CCol, CCardBody } from '@coreui/react'

const Typography = () => {
  return (
    <>
      
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="procure" className="card-title mb-0">
                Procure
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

export default Typography
