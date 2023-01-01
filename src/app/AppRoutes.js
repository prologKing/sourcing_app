import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));

const Source = lazy(() => import('./Source/Source'));

const EventForm = lazy(() => import('./Source/EventForm'));

const Reports = lazy(() => import('./Reports/Reports'));

const Pay = lazy(() => import('./Pay/Pay'));

const Admin = lazy(() => import('./Admin/Admin'));

const Users = lazy(() => import('./Admin/Users'));

const UserForm = lazy(() => import('./Admin/UserForm'));

const ProfileForm = lazy(() => import('./Admin/ProfileForm'));

const CompanyDetails = lazy(() => import('./Admin/CompanyDetails'));

const Suppliers = lazy(() => import('./Admin/Suppliers'));

const SupplierForm = lazy(() => import('./Admin/SupplierForm'));

const SupplierDetails = lazy(() => import('./Admin/SupplierDetails'));

const IPRange = lazy(() => import('./Admin/IPRange'));

const APIAccess = lazy(() => import('./Admin/APIAccess'));

const Licenses = lazy(() => import('./Admin/Licenses'));

const LicenseActivationForm = lazy(() => import('./Admin/LicenseActivationForm'));

const Authentication = lazy(() => import('./Admin/Authentication'));

const SingleSignOn = lazy(() => import('./Admin/SingleSignOn'));

const Procure = lazy(() => import('./Procure/Procure'));

// const Error404 = lazy(() => import('./error-pages/Error404'));
// const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));
const SessionTimeOut = lazy(() => import('./user-pages/SessionTimeOut'));


class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/home" component={ Dashboard } />
          <Route exact path="/source" component={ Source } />
          <Route exact path="/source/new" component={ EventForm } />
          <Route path="/pay" component={ Pay } />
          <Route path="/reports" component={ Reports } />
          <Route exact path="/admin" component={ Admin } />
          <Route exact path="/admin/users" component={ Users } />
          <Route exact path="/admin/userform" component={ UserForm } />
          <Route exact path="/admin/profileform" component={ ProfileForm } />
          <Route exact path="/admin/companyinfo" component={ CompanyDetails } />
          <Route exact path="/admin/iprange" component={ IPRange } />
          <Route exact path="/admin/apiaccess" component={ APIAccess } />
          <Route exact path="/admin/suppliers" component={ Suppliers } />
          <Route exact path="/admin/licenses" component={ Licenses } />
          <Route exact path="/admin/licenseform" component={ LicenseActivationForm } />
          <Route exact path="/admin/supplier/details" component={ SupplierDetails } />
          <Route exact path="/admin/supplierform" component={ SupplierForm } />
          <Route exact path="/admin/auth" component={ Authentication } />
          <Route exact path="/admin/auth/configform" component={ SingleSignOn } />
          <Route path="/procure" component={ Procure } />
          <Route path="/session-timeout" component={ SessionTimeOut } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register1 } />
          
          {/* <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } /> */}

          <Redirect to="/" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;