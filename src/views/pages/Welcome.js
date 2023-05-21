import React from 'react'
import { CContainer } from '@coreui/react'
import buyer from 'src/assets/images/avatars/buyer.png'
import {setUser} from '../../components/Config';
import supplier from 'src/assets/images/avatars/supplier.png'
import { CAccordion, CAccordionBody, CAccordionHeader, CAccordionItem, CLink, CCol, CForm, CRow } from '@coreui/react'
import PageHeaderWithAvatar from './PageHeaderWithAvatar'

const Welcome = () => {
  return (
    <>
      <PageHeaderWithAvatar />
      <CContainer style={{ marginTop: '70px' }}>
        <CRow className="justify-content-center">
          <CCol md={12} lg={10} xl={9}>
            <CForm>
              <h4>Welcome, Felix.</h4>
              <p className="text-medium-emphasis mb-2">Choose a portal below.</p>
              <CRow>
                <CCol xs={12} sm={6} lg={6}>
                  <CLink href="#" onClick={()=> setUser(true)} style={{ textDecorationLine: 'none' }}>
                    <div className="rounded me-2 mb-4 p-2" style={{ color: 'black', backgroundColor: '#ebedef', wordWrap: 'normal' }}>
                      <img src={buyer} alt="buyer" className="float-end" width="45px" height="40px" />
                      <h6>Buy</h6>
                      <p style={{ wordWrap: 'normal' }}>Modules for sourcing, procurement, invoicing and supplier managment</p>
                    </div>
                  </CLink>
                </CCol>

                <CCol xs={12} sm={6} lg={6}>
                  <CLink href="#" onClick={()=> setUser(true)} style={{ textDecorationLine: 'none', color: 'black' }}>
                    <div className="rounded me-2 mb-4 p-2" style={{ color: 'black', backgroundColor: '#ebedef', wordWrap: 'normal' }}>
                      <img src={supplier} alt="supplier" className="float-end" width="50px" height="30px" />
                      <h6>Supplier</h6>
                      <p style={{ wordWrap: 'normal' }}>Collaborate with your customers on sourcing needs, orders, invoices.</p>
                    </div>
                  </CLink>
                </CCol>
              </CRow>
              <div className="d-grid" style={{ marginTop: '100px', marginBottom: '200px' }}>
                <h6>Questions</h6>
                <CAccordion activeItemKey={2}>
                  <CAccordionItem itemKey={1}>
                    <CAccordionHeader>How do payment and billing work?</CAccordionHeader>
                    <CAccordionBody>
                      <strong>This is the first item&#39;s accordion body.</strong> It is hidden by
                      default, until the collapse plugin adds the appropriate classes that we use to
                      style each element. These classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any of this with custom
                      CSS or overriding our default variables. It&#39;s also worth noting that just
                      about any HTML can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={2}>
                    <CAccordionHeader>How do payment and billing work?</CAccordionHeader>
                    <CAccordionBody>
                      <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                      default, until the collapse plugin adds the appropriate classes that we use to
                      style each element. These classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any of this with custom
                      CSS or overriding our default variables. It&#39;s also worth noting that just
                      about any HTML can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </CAccordionBody>
                  </CAccordionItem>
                  <CAccordionItem itemKey={3}>
                    <CAccordionHeader>How do payment and billing work?</CAccordionHeader>
                    <CAccordionBody>
                      <strong>This is the second item&#39;s accordion body.</strong> It is hidden by
                      default, until the collapse plugin adds the appropriate classes that we use to
                      style each element. These classes control the overall appearance, as well as the
                      showing and hiding via CSS transitions. You can modify any of this with custom
                      CSS or overriding our default variables. It&#39;s also worth noting that just
                      about any HTML can go within the <code>.accordion-body</code>, though the
                      transition does limit overflow.
                    </CAccordionBody>
                  </CAccordionItem>
                </CAccordion>
              </div>

            </CForm>
          </CCol>
        </CRow>
      </CContainer>
    </>
  )
}

export default Welcome