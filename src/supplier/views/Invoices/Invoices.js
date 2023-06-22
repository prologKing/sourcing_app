import React, { useState } from 'react'
import {
  CButton,
  CInputGroupText,
  CButtonGroup,
  CInputGroup,
  CFormInput,
  CCol,
  CRow,
} from '@coreui/react'
import {
  CSmartTable
} from '@coreui/react-pro'
import {setCookie} from '../../../components/Config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faEdit, faPlus, faSearch, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Invoices = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'invoice',
      _style: { width: '30%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { label: 'Date', key: 'invoice_date', _style: { width: '20%' } },
    {
      label: 'Purchase Order',
      key: 'order',
      _style: { width: '20%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { key: 'amount', _style: { width: '20%' } },
    { key: 'buyer', filter: true, sorter: false, _style: { width: '10%' } },
    //{ key: 'role', filter: false, sorter: false, _style: { width: '20%' } },

    // {
    //   key: 'show_details',
    //   label: '',
    //   _style: { width: '20%' },
    //   filter: false,
    //   sorter: false,
    //   // _props: { color: 'secondary', className: 'fw-semibold' },
    // },
  ]

  const getDetails =(row) => {
    setCookie("invoicedetails", JSON.stringify(row));
    window.location.replace("/sourcing_app/#/invoices/details");
  } 
  const usersData = [
    {
      id: 0, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 1, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
      // _props: { color: 'primary', align: 'middle' },
    },
    {
      id: 2, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
      // _cellProps: { all: { className: 'fw-semibold' }, title: { color: 'info' } },
    },
    {
      id: 3, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 4, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 5, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 6, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    // {
    //   id: 7,
    //   invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    //   //_props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 9, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 10, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 11, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 12, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    //   //_selected: true 
    // },
    // { id: 13, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 14,
    //   invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
    // { id: 15, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 16, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 17, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 18,
    //   invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
    // {
    //   id: 19,
    //   invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
    // { id: 20, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 21, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 22, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 23, invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 42,
    //   invoice: 'APL/05/2023', invoice_date: '11 January 2023', order: 'PO-34001293', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
  ]
  const getBadge = (time_remaining) => {
    switch (time_remaining) {
      case 'Open':
        return 'success'
      case 'Closed':
        return 'secondary'
      case 'Draft':
        return 'warning'
      case 'Banned':
        return 'danger'
      default:
        return 'primary'
    }
  }
  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }
  return (
    <CRow>
      <CCol xs={12} className="small text-medium-emphasis">
        <h4 className="mb-5">Invoice</h4>
        <div >
          <CButton style={{backgroundColor: 'black'}} href="/sourcing_app/#/invoices/form" className="float-end"> <FontAwesomeIcon icon={faPlus} customClassName="nav-icon" /> Add</CButton>
          <CCol xs={5}>
            <CInputGroup>
              <CInputGroupText className='text-muted bg-light border-right-0'><FontAwesomeIcon icon={faSearch} customClassName="nav-icon" /></CInputGroupText>
              <CFormInput type="text" placeholder="search by order ID, name, or buyer" required />
            </CInputGroup>
            </CCol>
          <br />
          <CSmartTable
            activePage={1}
            //cleaner
            //clickableRows
            columns={columns}
            //columnFilter
            columnSorter
            //footer
            items={usersData}
            //itemsPerPageSelect
            // itemsPerPage={5}
            // pagination
            scopedColumns={{
                order: (item) => (
                    <td>
                      <span className='text-primary'>{item.order}</span>
                    </td>
                  ),
            invoice: (item) => (
                <td>
                  <span className='text-primary' role="button" onClick={() => getDetails(item)}>{item.invoice}</span>
                </td>
              ),
              show_details: (item) => {
                return (
                  <td className="py-2">
                    <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                      <CButton
                        color="warning"
                        href="/sourcing_app/#/source/details"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}
                      >
                        <FontAwesomeIcon icon={faEdit} customClassName="nav-icon" />
                      </CButton>
                      <CButton
                        color="danger"
                        size="sm"
                        onClick={() => {
                          toggleDetails(item.id)
                        }}>
                        <FontAwesomeIcon icon={faTrash} customClassName="nav-icon" />
                      </CButton>
                    </CButtonGroup>
                  </td>
                )
              },
              // details: (item) => {
              //   return (
              //     <CCollapse visible={details.includes(item.id)}>
              //       <CCardBody className="p-3">
              //         <h4>{item.username}</h4>
              //         <p className="text-muted">User since: {item.registered}</p>
              //         <CButton size="sm" color="info">
              //           User Settings
              //         </CButton>
              //         <CButton size="sm" color="danger" className="ml-1">
              //           Delete
              //         </CButton>
              //       </CCardBody>
              //     </CCollapse>
              //   )
              // },
            }}

            //selectable
            sorterValue={{ column: 'name', state: 'asc' }}
            tableHeadProps={{
              color: 'light',
            }}
            tableProps={{
              hover: true,
            }}
          />
        </div>
      </CCol>
    </CRow>
  )
}

export default Invoices
