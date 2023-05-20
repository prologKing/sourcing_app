import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const LoginStep2 = React.lazy(() => import('./views/pages/login/LoginStep2'))
const LoginStep3 = React.lazy(() => import('./views/pages/login/LoginStep3'))
const PasswordRecovery = React.lazy(() => import('./views/pages/login/PasswordRecovery'))
const PasswordReset = React.lazy(() => import('./views/pages/login/PasswordReset'))
const TimeOut = React.lazy(() => import('./views/pages/sessiontimeout/TimeOut'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Activate = React.lazy(() => import('./views/pages/register/Activate'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<Login />} />
            <Route exact path="/verify" name="Login Page" element={<LoginStep2 />} />
            <Route exact path="/codeverify" name="Login Page" element={<LoginStep3 />} />
            <Route exact path="/passrecovery" name="Login Page" element={<PasswordRecovery />} />
            <Route exact path="/passreset" name="Login Page" element={<PasswordReset />} />
            <Route exact path="/session-timeout" name="Session Timeout" element={<TimeOut />} />
            <Route exact path="/register" name="Register Page" element={<Register />} />
            <Route exact path="/activate" name="Activation Page" element={<Activate />} />
            <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} />
            <Route path="*" name="Home" element={<DefaultLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}

export default App
