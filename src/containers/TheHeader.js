import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CHeader,
  CToggler,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CSubheader,
  CBreadcrumbRouter,
  CImg,
  CLink

} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import mainLogo from'../assets/icons/icon.png';

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
  TheHeaderDropdownMssg,
  TheHeaderDropdownNotif,
  TheHeaderDropdownTasks
}  from './index'

const TheHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector(state => state.sidebarShow)

  const toggleSidebar = () => {
    const val = [true, 'responsive'].includes(sidebarShow) ? false : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  const toggleSidebarMobile = () => {
    const val = [false, 'responsive'].includes(sidebarShow) ? true : 'responsive'
    dispatch({type: 'set', sidebarShow: val})
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
        onClick={toggleSidebar}
      />
      <CHeaderBrand className="mx-auto d-lg-none" to="/">
        <CImg 
          src={mainLogo} 
          fluid 
          width={150}
         />
      </CHeaderBrand>

      <CHeaderNav className="d-md-down-none mr-auto px-4 mt-4 mb-3">
        <h1 className = "text-white"><i>Supervisor</i></h1>
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>

    </CHeader>
  )
}

export default TheHeader
