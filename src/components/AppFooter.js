import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter className="justify-content-center">
      <div>
        <a href="/sourcing_app/#/home" rel="noopener noreferrer">
          Kotage
        </a>
        <span className="ms-1">&copy; 2023.</span>
      </div>
      
    </CFooter>
  )
}

export default React.memo(AppFooter)
