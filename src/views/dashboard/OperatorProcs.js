import React, { lazy, useState } from 'react'
import {
  CCardHeader,
  CCard,
  CCardBody,
  CCol,
  CListGroup,
  CRow,
  CListGroupItem,
  CInputCheckbox,
  CLabel,
  CFormGroup,
  CInput,
  CFormText,
  CButton
 
} from '@coreui/react'

import { DocsLink } from '../../reusable'

const OperatorProcs = () => {
  

  return (
    <CRow>
        <CCol sm="12" xl="9">

          <CCard>
            <CCardHeader color="light">
              <h2 className="d-flex justify-content-center">Dough & Baking Process (2/2) </h2>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">1. Water Needed</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" name="input-normal" placeholder="Enter Water Size" />
                    </CCol>
                    <CLabel col>ml</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal" color="dark">2. Mixing Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" name="input-normal" placeholder="Enter Mixing Time" />
                    </CCol>
                    <CLabel col>minutes</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">3. Resting Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" name="input-normal" placeholder="Enter Resting Time" />
                    </CCol>
                    <CLabel col>minutes</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">4. Kneeding Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" name="input-normal" placeholder="Enter Resting Time" />
                    </CCol>
                    <CLabel col>minutes</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">5. Oven Degree</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" name="input-normal" placeholder="Enter Oven Degree" />
                    </CCol>
                    <CLabel col>°c</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">6. Oven Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" name="input-normal" placeholder="Enter Oven Time" />
                    </CCol>
                    <CLabel col>minutes</CLabel>
                  </CFormGroup>
                </CListGroupItem>
              
              <CCol>
              <div className="d-flex row justify-content-end">
                <CButton color="success" className="px-5">Submit</CButton>
              </div>
              </CCol>
              </CListGroup>
            </CCardBody> 
          </CCard> 

          
        </CCol>
      </CRow>
  )
}

export default OperatorProcs
