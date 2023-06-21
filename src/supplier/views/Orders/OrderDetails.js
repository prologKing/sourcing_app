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


const OrderDetails = () => {
    const [order, setOrder] = useState(JSON.parse(getCookie("orderdetails")));

    return (
        <CRow className="small text-medium-emphasis">
            <CCol xs={12}>
                <div className="m-4 mt-0">
                    <div>
                        
                        <h1>{order.order}</h1>
                        
                        <CButton href='/sourcing_app/#/orders/details/messages' className='lightbg float-end'>
                            Messages <CBadge color="primary">0</CBadge>
                        </CButton>
                        <CCol xs={6}>
                        <h5 className='mb-5'>Lenovo Laptops and Computers</h5>
                        </CCol>
                        <CRow>
                        <h5>Order Details</h5>
                        <CCol xs={6}>
                        <div className='mb-5'>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Buyer</strong></span>
                                <p>{order.buyer}</p>
                            </div>
                            <div className='mb-4'>
                                <span className='text-muted'><strong>Order Date</strong></span>
                                <p>10 June 2023</p>
                            </div>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Order Value</strong></span>
                                <p>1,680,000.00 GHS</p>
                            </div>
                        </div>
                        </CCol>
                        <CCol xs={6}>
                        <div className='mb-5'>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Description</strong></span>
                                <p>Lenovo Laptops and Computers</p>
                            </div>
                            <div className='mb-4'>
                                <span className='text-muted'><strong>Expected Delivery</strong></span>
                                <p>10 August 2023</p>
                            </div>
                            <div className='mb-3'>
                                <span className='text-muted'><strong>Document</strong></span>
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

export default OrderDetails
