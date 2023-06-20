/* eslint-disable */
import React from 'react'
import { CContainer, CHeader } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logo } from 'src/assets/brand/logo'
const PageHeaderWithoutAvatar = () => {
  return (
    <CHeader position="sticky" style={{backgroundColor:'black'}}>
      <CContainer fluid>
      <div className="float-left" to="/">
        <CIcon className="sidebar-brand-full" icon={logo} height={40} />
      </div>
      </CContainer>
    </CHeader>
  )
}

export default PageHeaderWithoutAvatar
