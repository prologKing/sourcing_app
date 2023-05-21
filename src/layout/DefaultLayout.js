import React from 'react'
import { IsAuthenticated } from "../components/Config";
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components/index'
import Login from 'src/views/pages/login/Login';

const DefaultLayout = () => {
  return (
    <>
    {IsAuthenticated() ? <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>: <Login />}
    </>
  )
}

export default DefaultLayout
