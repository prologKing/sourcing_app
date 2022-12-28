import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Logout } from "../../components/Config";

class Sidebar extends Component {
  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true});
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/advanced-ui', state: 'advancedUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/maps', state: 'mapsMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
      {path:'/general-pages', state: 'generalPagesMenuOpen'},
      {path:'/ecommerce', state: 'ecommercePagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  } 
  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar" style={{position:'fixed'}}>
        <ul className="nav">
          <li className={ this.isPathActive('/home') ? 'nav-item active' : 'nav-item' }>
            <Link className="nav-link" to="/home">
              <span className="icon-bg"><i className={ this.isPathActive('/home') ? 'mdi mdi-home menu-icon' : 'mdi mdi-home' }></i></span>
              <span className="menu-title">Home</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/source') ? 'nav-item active' : 'nav-item' }>
            <Link className={ this.isPathActive('/source') ? 'nav-link active' : 'nav-link' } to="/source">
              <span className="icon-bg"><i className={ this.isPathActive('/source') ? 'mdi mdi-crosshairs-gps menu-icon' : 'mdi mdi-crosshairs-gps' }></i></span>
              <span className="menu-title">Source</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/procure') ? 'nav-item active' : 'nav-item' }>
          <Link className={ this.isPathActive('/procure') ? 'nav-link active' : 'nav-link' } to="/procure">
              <span className="icon-bg"><i className={ this.isPathActive('/procure') ? 'mdi mdi-cart menu-icon' : 'mdi mdi-cart' }></i></span>
              <span className="menu-title">Procure</span>
            </Link>
          </li>
          <li className={ this.isPathActive('/pay') ? 'nav-item active' : 'nav-item' }>
         <Link className={ this.isPathActive('/pay') ? 'nav-link active' : 'nav-link' } to="/pay"> 
              <span className="icon-bg"><i className={ this.isPathActive('/pay') ? 'mdi mdi-cash menu-icon' : 'mdi mdi-cash' }></i></span>
              <span className="menu-title">Pay</span>
              </Link>
          </li>
          <li className={ this.isPathActive('/reports') ? 'nav-item active' : 'nav-item' }>
          <Link className={ this.isPathActive('/reports') ? 'nav-link active' : 'nav-link' } to="/reports">
              <span className="icon-bg"><i className={ this.isPathActive('/reports') ? 'mdi mdi-book-multiple menu-icon' : 'mdi mdi-book-multiple' }></i></span>
              <span className="menu-title">Reports</span>
              </Link>
          </li>
          <li className={ this.isPathActive('/admin') ? 'nav-item active' : 'nav-item' }>
          <Link className={ this.isPathActive('/admin') ? 'nav-link active' : 'nav-link' } to="/admin">
              <span className="icon-bg"><i className={ this.isPathActive('/admin') ? 'mdi mdi-apps menu-icon' : 'mdi mdi-apps' }></i></span>
              <span className="menu-title">Admin</span>
              </Link>
          </li>
          
         
          <li className={ this.isPathActive('/login') ? 'nav-item active' : 'nav-item' }>
          <a className={ this.isPathActive('/login') ? 'nav-link active' : 'nav-link' } onClick={Logout}>
              <span className="icon-bg"><i className={ this.isPathActive('/login') ? 'mdi mdi-logout menu-icon' : 'mdi mdi-logout' }></i></span>
              <span className="menu-title">Log Out</span>
              </a>
          </li>
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add className 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);