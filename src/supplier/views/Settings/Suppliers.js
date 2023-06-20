import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CBadge,
  CButton,
  CButtonGroup,
  CCol,
  CRow,
} from '@coreui/react'
import {
  CSmartTable
} from '@coreui/react-pro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faPlus } from '@fortawesome/free-solid-svg-icons'


const Suppliers = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'name',
      _style: { width: '30%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    {
      key: 'email',
      _style: { width: '30%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { key: 'industry', _style: { width: '20%' } },
    { key: 'location', filter: true, sorter: false, _style: { width: '20%' } },
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
  const usersData = [
    { id: 0, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    _props: { align: 'middle', height: '60px' }, },
    {
      id: 1, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 2, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
      _props: { align: 'middle', height: '60px' },
      // _cellProps: { all: { className: 'fw-semibold' }, title: { color: 'info' } },
    },
    { id: 3, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana', 
    _props: { align: 'middle', height: '60px' }, },
    {
      id: 4, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
      _props: { align: 'middle', height: '60px' },
    },
    { id: 5, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    _props: { align: 'middle', height: '60px' }, },
    { id: 6, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    _props: { align: 'middle', height: '60px' }, },
    // {
    //   id: 7,
    //   name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    //   //_props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 9, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 10, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 11, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // {
    //   id: 12, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    //   //_selected: true 
    // },
    // { id: 13, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // {
    //   id: 14,
    //   name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    // },
    // { id: 15, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 16, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 17, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // {
    //   id: 18,
    //   name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    // },
    // {
    //   id: 19,
    //   name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    // },
    // { id: 20, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 21, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 22, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // { id: 23, name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana' },
    // {
    //   id: 42,
    //   name: 'ACME Corp', email: 'kofi.kingston@acme.com', industry: 'Information Technology', location: 'Accra, Ghana',
    // },
  ]
  const getBadge = (status) => {
    switch (status) {
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
      <CCol xs={12}>
        <br />
        <div className="mb-4 mr-2">
          <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
            <CButton style={{ backgroundColor: 'black', marginBottom: '15px' }}> <FontAwesomeIcon icon={faPlus} customClassName="nav-icon" /> Add</CButton>
          </CButtonGroup>
          <CSmartTable
            activePage={1}
            //cleaner
            clickableRows
            columns={columns}
            //columnFilter
            columnSorter
            //footer
            items={usersData}
            // itemsPerPageSelect
            // itemsPerPage={5}
            // pagination
            scopedColumns={{
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
              show_details: (item) => {
                return (
                  <td className="py-2">
                    <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                      <CButton
                        color="warning"
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
            selectable
            sorterValue={{ column: 'name', state: 'asc' }}
            //tableFilter
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

export default Suppliers
