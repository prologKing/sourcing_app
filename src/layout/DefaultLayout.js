import React from 'react'
import { IsAuthenticated, getAppSection } from "../components/Config";
import { AppContent, AppFooter, AppHeader, AppSidebar } from '../components/buyer/index'
import { App2Content, App2Footer, App2Header, App2Sidebar } from '../components/supplier/index'
import Login from 'src/shared_views/pages/login/Login';

const DefaultLayout = () => {
  return (
    <>
    {IsAuthenticated() ? (getAppSection() == 0 ? 
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
    :
    <div>
      <App2Sidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <App2Header />
        <div className="body flex-grow-1 px-3">
          <App2Content />
        </div>
        <App2Footer />
      </div>
    </div>)
    : <Login />}
    </>
  )
}

export default DefaultLayout
