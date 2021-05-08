import React, { lazy, useState } from 'react'
import {
  CCardHeader,
  CCard,
  CCardBody,
  CCol,
  CListGroup,
  CRow,
  CListGroupItem,
  CFormGroup,
  CInputCheckbox,
  CLabel,
  CInput,
  CButton
 
} from '@coreui/react'

import { DocsLink } from '../../../src/reusable'

const OptDashboard = () => {
  const usersData = [
    {id: 0, name: 'John Doe', registered: '2018/01/01', role: 'Guest', status: 'Pending'},
    {id: 1, name: 'Samppa Nori', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 2, name: 'Estavan Lykos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 3, name: 'Chetan Mohamed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 4, name: 'Derick Maximinus', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 5, name: 'Friderik Dávid', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 6, name: 'Yiorgos Avraamu', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 7, name: 'Avram Tarasios', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 8, name: 'Quintin Ed', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 9, name: 'Enéas Kwadwo', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 10, name: 'Agapetus Tadeáš', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 11, name: 'Carwyn Fachtna', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 12, name: 'Nehemiah Tatius', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 13, name: 'Ebbe Gemariah', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 14, name: 'Eustorgios Amulius', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 15, name: 'Leopold Gáspár', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 16, name: 'Pompeius René', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 17, name: 'Paĉjo Jadon', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 18, name: 'Micheal Mercurius', registered: '2018/02/01', role: 'Admin', status: 'Inactive'},
    {id: 19, name: 'Ganesha Dubhghall', registered: '2018/03/01', role: 'Member', status: 'Pending'},
    {id: 20, name: 'Hiroto Šimun', registered: '2018/01/21', role: 'Staff', status: 'Active'},
    {id: 21, name: 'Vishnu Serghei', registered: '2018/01/01', role: 'Member', status: 'Active'},
    {id: 22, name: 'Zbyněk Phoibos', registered: '2018/02/01', role: 'Staff', status: 'Banned'},
    {id: 23, name: 'Aulus Agmundr', registered: '2018/01/01', role: 'Member', status: 'Pending'},
    {id: 42, name: 'Ford Prefect', registered: '2001/05/25', role: 'Alien', status: 'Don\'t panic!'}
  ]

  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }


  const fields = [
    { key: 'name', _style: { width: '40%'} },
    'registered',
    { key: 'role', _style: { width: '20%'} },
    { key: 'status', _style: { width: '20%'} },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (status)=>{
    switch (status) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'dark'
    }
  }

  return (
    <CRow>
        <CCol sm="12" xl="9">
          <CCard>
          <CCardHeader color="light"> 
              <h2 className="d-flex justify-content-center">Preperation (1/2)</h2>
          </CCardHeader>
          <CCardBody>
          <CCard>

            <CCardHeader> 
              <h4>Bread Name</h4>
            </CCardHeader>
            <CCardBody>
              <CInput id="input-normal" name="input-normal" placeholder="Enter Bread Name" />
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <h4>Choose Raw Material</h4>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox1" name="inline-checkbox1" value="option1" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox1">Flour</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox2" name="inline-checkbox2" value="option2" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox2">Baking Powder</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox3" name="inline-checkbox3" value="option3" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox3">Sweetener</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox4" name="inline-checkbox4" value="option4" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox4">Milk</CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox5" name="inline-checkbox5" value="option5" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox5">Oil</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox6" name="inline-checkbox6" value="option6" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox6">Butter</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox7" name="inline-checkbox7" value="option7" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox7">Margarine</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox8" name="inline-checkbox8" value="option8" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox8">Eggs</CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox9" name="inline-checkbox9" value="option9" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox9">Salt</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox10" name="inline-checkbox10" value="option10" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox10">Fruits</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox11" name="inline-checkbox11" value="option11" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox11">Exracts</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox12" name="inline-checkbox12" value="option12" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox12">Nuts</CLabel>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox13" name="inline-checkbox13" value="option13" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox13">Corn Syrup</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox14" name="inline-checkbox14" value="option14" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox14">Honey</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox15" name="inline-checkbox15" value="option15" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox15">Brown Sugar</CLabel>
                      </CCol>
                      <CCol sm="3">
                        <CInputCheckbox custom id="inline-checkbox16" name="inline-checkbox16" value="option16" />
                        <CLabel variant="custom-checkbox" htmlFor="inline-checkbox16">Molasses</CLabel>
                      </CCol>
                    </CFormGroup>
              </CListGroup>
            </CCardBody>
          </CCard>
          <CCol>
            <div className="row justify-content-sm-end">
              <CButton color="info" className="px-5">Next</CButton>
            </div>
          </CCol>
          </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  )
}

export default OptDashboard
