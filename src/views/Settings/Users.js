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
import { faEdit, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Users = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'name',
      _style: { width: '20%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    {
      key: 'email',
      _style: { width: '40%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { key: 'role', _style: { width: '20%' } },
    { key: 'last_login', filter: true, sorter: false, _style: { width: '20%' } },
    //{ key: 'role', filter: false, sorter: false, _style: { width: '20%' } },
    
    {
      key: 'show_details',
      label: '',
      _style: { width: '20%' },
      filter: false,
      sorter: false,
      // _props: { color: 'secondary', className: 'fw-semibold' },
    },
  ]
  const usersData = [
    { id: 0, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    {
      id: 1, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51',
      // _props: { color: 'primary', align: 'middle' },
    },
    {
      id: 2, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51',
      // _cellProps: { all: { className: 'fw-semibold' }, title: { color: 'info' } },
    },
    { id: 3, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51' },
    {
      id: 4, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51'
    },
    { id: 5, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    { id: 6, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    {
      id: 7,
      name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51',
      //_props: { color: 'warning', align: 'middle' },
    },
    { id: 8, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51' },
    { id: 9, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51' },
    { id: 10, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    { id: 11, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    {
      id: 12, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51',
      //_selected: true 
    },
    { id: 13, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    {
      id: 14,
      name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51',
    },
    { id: 15, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51' },
    { id: 16, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    { id: 17, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    {
      id: 18,
      name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51',
    },
    {
      id: 19,
      name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51',
    },
    { id: 20, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51' },
    { id: 21, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Read Only', last_login: '11 Jan 2023 15:51' },
    { id: 22, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    { id: 23, name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51' },
    {
      id: 42,
      name: 'Dorothy Asare', email: 'dorothy.asare@hello.com', role: 'Full Admin', last_login: '11 Jan 2023 15:51',
    },
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
        <CCard className="mb-4 mr-2">
          <CCardBody style={{ overflow: 'auto', width: '100%' }}>
            <div>
              <CButtonGroup role="group" className="float-end" aria-label="Basic mixed styles example">
                <CButton color="dark"> <FontAwesomeIcon icon={faUserPlus} customClassName="nav-icon" /> Add</CButton>
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
                itemsPerPageSelect
                itemsPerPage={5}
                pagination
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
                tableFilter
                tableHeadProps={{
                  color: 'secondary',
                }}
                tableProps={{
                  hover: true,
                }}
              />
            </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Users
