import React from 'react'
import { CContainer } from '@coreui/react'
import { CButton, CCol, CForm, CRow } from '@coreui/react'
import PageHeaderWithoutAvatar from '../PageHeaderWithoutAvatar'

const TimeOut = () => {
  return (
      <>
          <PageHeaderWithoutAvatar />
          <CContainer style={{ marginTop: '70px' }}>
            <CRow className="justify-content-center">
              <CCol md={12} lg={10} xl={9}>
                <CForm>
                  <h4>Are you still using the site?</h4>
                  <p className="text-medium-emphasis mb-2">To continue using the site, enter your login information.</p>
                  
                    <div className="col-5">
                      <CButton href="/sourcing_app/#/login" color="dark" size="lg" style={{ backgroundColor: 'black' }}>&nbsp;&nbsp;&nbsp;Continue&nbsp;&nbsp;&nbsp;</CButton>
                    </div>
                      
                </CForm>
              </CCol>
            </CRow>
          </CContainer>
      </>
   )
}
        
export default TimeOut
