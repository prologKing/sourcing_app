import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilMenu } from '@coreui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUserGroup } from '@fortawesome/free-solid-svg-icons'

import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/min-logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon className="light" icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        
        <CHeaderNav className="ms-3">
        <CHeaderNav>
        <CNavItem>
            <CNavLink href="#">
              <FontAwesomeIcon icon={faUserGroup} />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
            <FontAwesomeIcon icon={faBell} />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
