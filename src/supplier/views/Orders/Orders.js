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
import { faCartPlus, faEdit, faSearch, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Orders = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'order',
      _style: { width: '20%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    {
      key: 'description',
      _style: { width: '30%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { key: 'order_date', _style: { width: '20%' } },
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
    setCookie("orderdetails", JSON.stringify(row));
    window.location.replace("/sourcing_app/#/orders/details");
  } 
  const usersData = [
    {
      id: 0, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 1, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
      // _props: { color: 'primary', align: 'middle' },
    },
    {
      id: 2, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
      // _cellProps: { all: { className: 'fw-semibold' }, title: { color: 'info' } },
    },
    {
      id: 3, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 4, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 5, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 6, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
      _props: { align: 'middle', height: '60px' },
    },
    // {
    //   id: 7,
    //   order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    //   //_props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 9, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 10, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 11, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 12, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    //   //_selected: true 
    // },
    // { id: 13, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 14,
    //   order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
    // { id: 15, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 16, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 17, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 18,
    //   order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
    // {
    //   id: 19,
    //   order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
    // },
    // { id: 20, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 21, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 22, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // { id: 23, order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank' },
    // {
    //   id: 42,
    //   order: 'PO-34001293', description: 'Supply of Lenovo Computers', order_date: '11 Jan 2023', amount: 'GHS 1,685,000', buyer: 'Maize Bank',
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
        <h4 className="mb-5">Orders</h4>
        <div >
          <CRow>
          <CCol xs={5}>
            <CInputGroup>
              <CInputGroupText className='text-muted bg-light border-right-0'><FontAwesomeIcon icon={faSearch} customClassName="nav-icon" /></CInputGroupText>
              <CFormInput type="text" placeholder="search by order ID, name, or buyer" required />
            </CInputGroup>
            </CCol>
          </CRow>
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
            //   time_remaining: (item) => (
            //     <td>
            //       <CBadge color={getBadge(item.time_remaining)}>{item.time_remaining}</CBadge>
            //     </td>
            //   ),
             order: (item) => (
                <td>
                  <span className='text-primary' role="button" onClick={() => getDetails(item)}>{item.order}</span>
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

export default Orders
