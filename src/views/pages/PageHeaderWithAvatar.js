import React from 'react'
import { CContainer, CHeader } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logoNegative } from 'src/assets/brand/logo-negative'
import { CAvatar } from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/1.jpg'
/* eslint-disable */
const PageHeaderWithAvatar = () => {
  return (
    <CHeader position="sticky" style={{backgroundColor:'black', marginBottom: '200px'}}>
      <CContainer fluid>
      <div className="float-left" to="/">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={40} />
        </div>
        <div className="float-right">
          <CAvatar size="md" src={avatar1} />
        </div>
      </CContainer>
    </CHeader>
  )
}

export default PageHeaderWithAvatar