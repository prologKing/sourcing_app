import React, { useState } from 'react'
import {
  CBadge,
  CButton,
  CInputGroupText,
  CButtonGroup,
  CInputGroup,
  CFormInput,
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
import { faCartPlus, faEdit, faSearch, faTrash, faUserPlus } from '@fortawesome/free-solid-svg-icons'


const Source = () => {
  const [details, setDetails] = useState([])
  const columns = [
    {
      key: 'source_id',
      label: 'ID',
      _style: { width: '20%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    {
      key: 'title',
      _style: { width: '40%' },
      //_props: { color: 'secondary', className: 'fw-semibold' },
    },
    { key: 'status', _style: { width: '20%' } },
    { key: 'close_date', filter: true, sorter: false, _style: { width: '40%' } },
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
    {
      id: 0, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 1, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
      // _props: { color: 'primary', align: 'middle' },
    },
    {
      id: 2, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
      // _cellProps: { all: { className: 'fw-semibold' }, title: { color: 'info' } },
    },
    {
      id: 3, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 4, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 5, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
    },
    {
      id: 6, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
      _props: { align: 'middle', height: '60px' },
    },
    // {
    //   id: 7,
    //   source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
    //   //_props: { color: 'warning', align: 'middle' },
    // },
    // { id: 8, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51' },
    // { id: 9, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51' },
    // { id: 10, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51' },
    // { id: 11, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51' },
    // {
    //   id: 12, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
    //   //_selected: true 
    // },
    // { id: 13, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51' },
    // {
    //   id: 14,
    //   source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51',
    // },
    // { id: 15, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51' },
    // { id: 16, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51' },
    // { id: 17, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51' },
    // {
    //   id: 18,
    //   source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
    // },
    // {
    //   id: 19,
    //   source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
    // },
    // { id: 20, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51' },
    // { id: 21, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Draft', close_date: '11 Jan 2023 15:51' },
    // { id: 22, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51' },
    // { id: 23, source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Closed', close_date: '11 Jan 2023 15:51' },
    // {
    //   id: 42,
    //   source_id: 'RFX-34001293', title: 'Supply of Lenovo Laptops', status: 'Open', close_date: '11 Jan 2023 15:51',
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
      <CCol xs={12} className="small text-medium-emphasis">
        <h4 className="mb-5">Sourcing</h4>
        <div>
          <CButton style={{ backgroundColor: 'black' }} className="float-end" href="/sourcing_app/#/source/details"> <FontAwesomeIcon icon={faCartPlus} customClassName="nav-icon" /> Add</CButton>
          <CRow>
          <CCol xs={6}>
            <CInputGroup>
              <CInputGroupText className='text-muted bg-light border-right-0'><FontAwesomeIcon icon={faSearch} customClassName="nav-icon" /></CInputGroupText>
              <CFormInput type="text" placeholder="search by event ID, name, or supplier" required />
            </CInputGroup>
            </CCol>
            <CCol xs={4}>
            <CDropdown variant="btn-group ml-2">
              <CDropdownToggle className="lightbg">All Events</CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Action</CDropdownItem>
                <CDropdownItem href="#">Another action</CDropdownItem>
                <CDropdownItem href="#">Something else here</CDropdownItem>
                <CDropdownDivider />
                <CDropdownItem href="#">Separated link</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

          </CCol>
          </CRow>
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
            //itemsPerPageSelect
            // itemsPerPage={5}
            // pagination
            scopedColumns={{
              status: (item) => (
                <td>
                  <CBadge color={getBadge(item.status)}>{item.status}</CBadge>
                </td>
              ),
              source_id: (item) => (
                <td>
                  <span className='text-primary'>{item.source_id}</span>
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

            selectable
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

export default Source
