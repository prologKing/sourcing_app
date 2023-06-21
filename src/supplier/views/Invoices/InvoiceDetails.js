import React, { useState } from 'react'
import {
    CBadge,
    CFormInput,
    CButton,
    CCol,
    CTable,
    CTableBody, CTableDataCell, CTableHead,
    CTableHeaderCell, CTableRow,
    CRow,
} from '@coreui/react'
import { getCookie } from '../../../components/Config';


const InvoiceDetails = () => {
    const [invoice, setInvoice] = useState(JSON.parse(getCookie("invoicedetails")));

    return (
        <CRow className="small text-medium-emphasis">
            <CCol xs={12}>
                <div className="m-4 mt-0">
                    <div>
                        
                        <h1>{invoice.invoice}</h1>
                        
                    
                        <CCol xs={6}>
                        <h5 className='mb-5'>Lenovo Laptops and Computers</h5>
                        </CCol>
                        <CRow>
                        <h5>Invoice Details</h5>
                        <CCol xs={6}>
                        <div className='mb-5'>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Payer</strong></span>
                                <p>{invoice.buyer}</p>
                            </div>
                            <div className='mb-4'>
                                <span className='text-muted'><strong>Invoice Date</strong></span>
                                <p>15 August 2023</p>
                            </div>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Invoice Amount</strong></span>
                                <p>1,680,000.00 GHS</p>
                            </div>
                        </div>
                        </CCol>
                        <CCol xs={6}>
                        <div className='mb-5'>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Status</strong></span>
                                <p>Approved</p>
                            </div>
                            <div className='mb-4'>
                                <span className='text-muted'><strong>Payment Due Date</strong></span>
                                <p>15 September 2023</p>
                            </div>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Attachment</strong></span>
                                <p className='text-primary' role="button">View PDF</p>
                            </div>
                        </div>
                        </CCol>
                        </CRow>
                        <h5>Items</h5>
                        <CCol md={12} className="mb-5">
                            <CTable hover>
                                <CTableHead>
                                    <CTableRow>
                                        <CTableHeaderCell scope="col">Line</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">UOM</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Unit Price</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Total Price</CTableHeaderCell>
                                        <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                                    </CTableRow>
                                </CTableHead>
                                <CTableBody>
                                    <CTableRow>
                                    <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>24" LED Monitors with TFT</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>EA</CTableDataCell> 
                                        <CTableDataCell>16,750</CTableDataCell>
                                        <CTableDataCell>167,500</CTableDataCell>
                                        <CTableDataCell>Open</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                        <CTableDataCell>2</CTableDataCell>
                                        <CTableDataCell>Wireless Keyboard</CTableDataCell>
                                        <CTableDataCell>10</CTableDataCell>
                                        <CTableDataCell>EA</CTableDataCell> 
                                        <CTableDataCell>7,500</CTableDataCell>
                                        <CTableDataCell>75,000</CTableDataCell>
                                        <CTableDataCell>Open</CTableDataCell>
                                    </CTableRow>
                                    <CTableRow>
                                    <CTableDataCell>3</CTableDataCell>
                                        <CTableDataCell>Installation Service</CTableDataCell>
                                        <CTableDataCell>1</CTableDataCell>
                                        <CTableDataCell>Value</CTableDataCell> 
                                        <CTableDataCell>90,000</CTableDataCell>
                                        <CTableDataCell>90,000</CTableDataCell>
                                        <CTableDataCell>Open</CTableDataCell>
                                    </CTableRow>
                                </CTableBody>
                            </CTable>
                        </CCol>
                    </div>
                </div>
            </CCol>
        </CRow>
    )
}

export default InvoiceDetails
