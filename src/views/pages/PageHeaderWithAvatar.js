import React from 'react'
import { CContainer, CHeader } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logo } from 'src/assets/brand/logo'
import { CAvatar } from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/new_avatar.jpg'
/* eslint-disable */
const PageHeaderWithAvatar = () => {
  return (
    <CHeader position="sticky" style={{backgroundColor:'black'}}>
      <CContainer fluid>
      <div className="float-left" to="/">
        <CIcon className="sidebar-brand-full" icon={logo} height={40} />
        </div>
        <div className="float-right">
          <CAvatar size="md" src={avatar1} />
        </div>
      </CContainer>
    </CHeader>
  )
}

export default PageHeaderWithAvatar
