import React, { lazy, useState} from 'react'
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
  
  const[isChecked, setIsChecked] = useState({
    Flour: false, Sugar : false, Sweetener: false, Milk: false,
    Oil: false, Butter: false,Margarine: false, Eggs: false,
    Salt : false,Fruit: false, Sugar: false, Nuts: false,
    Syrup : false,Honey : false,Spices: false, Molasses : false

  })

  const handleChange = ({target : {id, checked}}) => { 
    setIsChecked({
      ...isChecked,
      [id]: checked
    })
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
                        <input type ="checkbox" id="Flour"/> Flour
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Sugar"/> Sugar
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Sweetener"/> Sweetener
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Milk"/> Milk
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <input type ="checkbox" id="Oil"/> Oil
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Butter"/> Butter
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Margarine"/> Margarine
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Eggs"/> Eggs
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <input type ="checkbox" id="Salt"/> Salt
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Fruits"/> Fruits
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Sugar"/> Sugar
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Nuts"/> Nuts
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="3">
                        <input type ="checkbox" id=" Syrup"/> Syrup
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id=" Honey"/> Honey
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Spices"/> Spices
                      </CCol>
                      <CCol sm="3">
                        <input type ="checkbox" id="Molasses"/> Molasses
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
