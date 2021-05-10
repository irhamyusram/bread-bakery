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
    name: 'Bread Making',
    to: '/dashoperator',
    icon: <CIcon name="cil-factory" customClasses="c-sidebar-nav-icon"/>,
  },
]

export default _nav
