import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { CHeaderDivider, CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logo } from 'src/assets/brand/full-white-logo'

import { whitelogo } from 'src/assets/brand/white-logo'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../../_nav2'

const App2Sidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: 'set', sidebarShow: visible })
      }}
    >
      <CSidebarBrand className="d-none blackbg d-md-flex" to="/" >
        <CIcon className="sidebar-brand-full" icon={logo} height={40} />
        <CIcon className="sidebar-brand-narrow" icon={whitelogo} height={40} />
      </CSidebarBrand>
      <CSidebarNav className='blackbg' >
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler className="d-none border border-top-0 d-lg-flex" onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })} />
    </CSidebar>
  )
}

export default React.memo(App2Sidebar)
