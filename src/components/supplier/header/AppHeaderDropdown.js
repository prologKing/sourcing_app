import React from 'react'
import {
  CAvatar,
  CLink,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight, faFaceMehBlank, faGear, faGlobeAmericas, faSignOut } from '@fortawesome/free-solid-svg-icons'
import { LoadBuyerSection, setUser } from "../../Config";
import { cilMediaPlay } from '@coreui/icons';
import CIcon from '@coreui/icons-react'


const AppHeaderDropdown = () => {
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <div className="profileImage">FN</div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader>
        <span className='float-end mt-1' >Felix Nkansah<br /><small>felixnkansah@yahoo.com</small></span>
        <div className="profileImage m-0 p-0">FN</div>
        </CDropdownHeader>
        <CDropdownDivider />
        <CDropdownItem >
        <FontAwesomeIcon icon={faFaceMehBlank} className="me-3" />
          My Profile
        </CDropdownItem>
        <CDropdownItem >
        <FontAwesomeIcon icon={faGear} className="me-3" />
          Settings
        </CDropdownItem>
        <CDropdownItem >
        <FontAwesomeIcon icon={faGlobeAmericas} className="me-3" />
          Language (EN)
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem onClick={LoadBuyerSection}>
        <FontAwesomeIcon icon={faCaretLeft} /><FontAwesomeIcon icon={faCaretRight} className="me-3" />
          Switch Portal
          <CIcon icon={cilMediaPlay} className="float-end mt-2" />
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem href="/sourcing_app/#/login" onClick={() => setUser(null)}>
        
        <FontAwesomeIcon icon={faSignOut} size="lg" className="me-3" />
          Logout 
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
