import React from 'react'
import {
  CContainer, CHeader,
  CHeaderNav, CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logo } from 'src/assets/brand/logo'
import { CAvatar } from '@coreui/react'
import avatar1 from 'src/assets/images/avatars/new_avatar.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { setUser } from "../../components/Config";
/* eslint-disable */
const PageHeaderWithAvatar = () => {
  const navigate = useNavigate();
  const Logout = () => {
    setUser(null);
    navigate("/sourcing_app/#/login", { replace: true });
    window.location.reload(true);
};


  return (
    <CHeader position="sticky" style={{ backgroundColor: 'black' }}>
      <CContainer fluid>
      <div to="/">
          <CIcon className="sidebar-brand-full" icon={logo} height={40} />
        </div>
      <CHeaderNav>
      <CDropdown variant="nav-item">
        <CDropdownToggle placement="bottom-end">
          <CAvatar size="md" src={avatar1} />
        </CDropdownToggle>
        <CDropdownMenu placement="bottom-end">
          <CDropdownHeader>
            <div className="profileImage" style={{ display: 'inline-block' }}>FN</div>
            <div className='float-end mt-1'>Felix Nkansah<br /><small>felixnkansah@yahoo.com</small></div>
          </CDropdownHeader>
          <CDropdownDivider />
          <CDropdownItem href="/sourcing_app/#/login" onClick={Logout}>

            <FontAwesomeIcon icon={faSignOut} size="lg" className="me-3" />
            Logout
          </CDropdownItem>
        </CDropdownMenu>
        </CDropdown>
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default PageHeaderWithAvatar
