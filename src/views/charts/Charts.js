import React from 'react'
import { CCard, CCardBody, CCol, CRow } from '@coreui/react'

const Charts = () => {

  return (
    <>
      
    <CCard className="mb-4">
      <CCardBody>
        <CRow>
          <CCol sm={5}>
            <h4 id="insights" className="card-title mb-0">
              Insights
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

export default Charts
