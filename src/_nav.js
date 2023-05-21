import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faCartShopping, faTruck, faSackDollar, faChartColumn, faSignOut } from '@fortawesome/free-solid-svg-icons'

import { CNavItem } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/home',
    icon: <FontAwesomeIcon icon={faHome} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Source',
    to: '/source',
    icon: <FontAwesomeIcon icon={faCartShopping} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Procure',
    to: '/procure',
    icon: <FontAwesomeIcon icon={faTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Pay',
    to: '/pay',
    icon: <FontAwesomeIcon icon={faSackDollar} size="lg" customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Insights',
    to: '/insights',
    icon: <FontAwesomeIcon icon={faChartColumn} size="lg" customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Sign Out',
    to: '/login',
    icon: <FontAwesomeIcon icon={faSignOut} size="lg" customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]

export default _nav
