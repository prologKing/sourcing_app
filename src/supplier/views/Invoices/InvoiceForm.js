import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { getCookie } from '../../../components/Config';
import {
    CFormLabel, CButton, CTable,
    CTableBody, CTableDataCell, CTableHead,
    CTableHeaderCell, CTableRow, CButtonGroup,
    CCol, CForm, CLink,
    CFormInput, CInputGroup, CFormSelect, CRow, CFormTextarea
} from '@coreui/react'

const InvoiceForm = () => {
    const [invoice, setInvoice] = useState(JSON.parse(getCookie("invoicedetails")));
    return (
        <div className="small text-medium-emphasis text-muted full-screen">
            <CRow className="justify-content-center ">
                <CCol md={10} lg={8} xl={7}>
                    <CForm className="row g-3 m-5">
                        <div>
                            
                            <small className='text-primary'>{invoice.invoice}</small><br />
                            <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                                <CButton className="lightbg" href="/sourcing_app/#/invoices" shape="rounded-pill"> <FontAwesomeIcon icon={faTimes} size="lg" customClassName="nav-icon" /></CButton>
                            </CButtonGroup>
                            <h4>Supply of Lenovo Laptops and Computers</h4>
                        </div>
                        <h5>Invoice Summary</h5>
                        <CCol md={6}>
                            <CFormLabel htmlFor="eventtype">Buyer</CFormLabel>
                            <CFormSelect id="eventType" size="lg">
                                <option></option>
                                <option>Maize Bank</option>
                            </CFormSelect>
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="currency">Purchase Order</CFormLabel>
                            <CFormSelect id="currency" size="lg">
                                <option></option>
                                <option>GHS</option>
                            </CFormSelect>
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="eventtype">Invoice Number</CFormLabel>
                            <CFormInput id="title" size="lg" />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="currency">Invoice Date</CFormLabel>
                            <CFormInput type="date" id="submissionDate" size="lg" />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="eventtype">Invoice Currency</CFormLabel>
                            <CFormInput id="title" size="lg" />
                        </CCol>
                        <CCol md={6}>
                            <CFormLabel htmlFor="formFile">Attachment</CFormLabel>
                            <CFormInput type="file" size="lg" id="formFile"  />
                        </CCol>
                        <h5 className='mt-5'>Items</h5>
                        <CCol md={12} className="mb-5">
                            <CTable hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">Line</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Unit Price</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Total Price</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>24" LED Monitors with TFT</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>16,750</CTableDataCell>
                                        <CTableDataCell>167,500</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>Wireless Keyboard</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>7,500</CTableDataCell>
                                        <CTableDataCell>75,000</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                    <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>Installation Service</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell> 
                                        <CTableDataCell>90,000</CTableDataCell>
                                        <CTableDataCell>90,000</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCol>
                        <div className="mb-3">
                            <CButton color="dark" style={{ backgroundColor: 'black' }}> &nbsp;&nbsp;Create Invoice&nbsp;&nbsp; </CButton>
                        </div>
                    </CForm>
                </CCol>
            </CRow>
        </div>
    )
}

export default InvoiceForm
