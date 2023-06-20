import React from 'react'
import { CFooter } from '@coreui/react'

const App2Footer = () => {
  return (
    <CFooter className="justify-content-center">
      <div>
        <a href="/sourcing_app/#/supplier-home" rel="noopener noreferrer">
          Kotage
        </a>
        <span className="ms-1">&copy; 2023.</span>
      </div>
      
    </CFooter>
  )
}

export default React.memo(App2Footer)
