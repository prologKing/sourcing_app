import React from 'react'
import { CRow, CCol, CCard, CCardBody } from '@coreui/react'

const Colors = () => {
  return (
    <>
      
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="source" className="card-title mb-0">
                Source
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

export default Colors
