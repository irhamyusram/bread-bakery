import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Bread Making Approval',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Bread Making Prep',
    to: '/optdashboard',
    icon: <CIcon name="cil-factory" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Bread Making Process',
    to: '/optdashboard2',
    icon: <CIcon name="cil-factory" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      }
      
    ]
  }
]

export default _nav
