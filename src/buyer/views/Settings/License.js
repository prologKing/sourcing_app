import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CBadge,
  CButton,
  CButtonGroup,
  CCollapse,
  CCardHeader,
  CDropdown,
  CDropdownDivider,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CCol,
  CRow,
} from '@coreui/react'
import {
  CSmartTable
} from '@coreui/react-pro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import LicenseForm from './LicenseForm'


const License = () => {
  const [details, setDetails] = useState([])
  const [isNotHidden, setIsNotHidden] = useState(false);
  
  const columns = [
    {
      key: 'license',
      _style: { width: '40%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    {
      key: 'start_date',
      _style: { width: '20%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { key: 'end_date', _style: { width: '20%' } },
    { key: 'number_of_users', filter: true, sorter: false, _style: { width: '20%' } },
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
    { id: 0, license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    _props: { align: 'middle', height: '60px' }, },
    {
      id: 1, license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 2, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
      _props: { align: 'middle', height: '60px' },
      // _cellProps: { all: { className: 'fw-semibold' }, title: { color: 'info' } },
    },
    { id: 3, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    _props: { align: 'middle', height: '60px' }, },
    {
      id: 4, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
      _props: { align: 'middle', height: '60px' },
    },
    { id: 5, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    _props: { align: 'middle', height: '60px' }, },
    { id: 6, license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    _props: { align: 'middle', height: '60px' }, },
    // {
    //   id: 7,
    //   license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    //   //_props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 9, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 10, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 11, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // {
    //   id: 12, license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    //   //_selected: true 
    // },
    // { id: 13, license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // {
    //   id: 14,
    //   license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    // },
    // { id: 15, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 16, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 17, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // {
    //   id: 18,
    //   license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    // },
    // {
    //   id: 19,
    //   license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    // },
    // { id: 20, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 21, license: 'Procure Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 22, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // { id: 23, license: 'Pay Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10 },
    // {
    //   id: 42,
    //   license: 'Source Lite', start_date: 'April 14, 2023', end_date: 'April 13, 2024', number_of_users: 10,
    // },
  ]

  const controlUserForm = (val) => {
    setIsNotHidden(!val)
  }  

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
      {isNotHidden && <LicenseForm controlUserForm={controlUserForm} />}
      <CCol xs={12}>
        <div className="mb-4 mr-2">
          <br />
          <h6>Packages</h6>
          <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
            <CButton style={{ backgroundColor: 'black' }} onClick={() => controlUserForm(false)}> <FontAwesomeIcon icon={faPlus} customClassName="nav-icon" /> Add </CButton>
          </CButtonGroup>
          <p>Understand what licensing has been purchased for your organization.</p>
          <br />
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

export default License
