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

const OperatorPrep = () => {
  

  const[breadName, setBreadName] = useState(''); 
  const[isFlourChecked, setFlourIsChecked] = useState(false)
  const[isSugarChecked, setSugarIsChecked] = useState(false)
  const[isSweetenerChecked, setSweetenerIsChecked] = useState(false)
  const[isMilkChecked, setMilkIsChecked] = useState(false)
  const[isButterChecked, setButterIsChecked] = useState(false)
  const[isEggsChecked, setEggsIsChecked] = useState(false)
  const[isNutsChecked, setNutsIsChecked] = useState(false)
  const[isHoneyChecked, setHoneyIsChecked] = useState(false)
  const[isMargarineChecked, setMargarineIsChecked] = useState(false)
  const[isSyrupChecked, setSyrupIsChecked] = useState(false)
  const[isSaltChecked, setSaltIsChecked] = useState(false)
  const[isBakingPowderChecked, setBakingPowderIsChecked] = useState(false)

  function handleSubmit (){
    const rawMaterial = [];
    if(isFlourChecked) {rawMaterial.push("Flour")} ;
    if(isSugarChecked) {rawMaterial.push("Sugar")} ;
    if(isSweetenerChecked) {rawMaterial.push("Sweetener")} ;
    if(isMilkChecked) {rawMaterial.push("Milk")} ;
    if(isButterChecked) {rawMaterial.push("Butter")} ;
    if(isEggsChecked) {rawMaterial.push("Eggs")} ;
    if(isNutsChecked) {rawMaterial.push("Nuts")} ;
    if(isHoneyChecked) {rawMaterial.push("Honey")} ;
    if(isMargarineChecked) {rawMaterial.push("Margarine")} ;
    if(isSyrupChecked) {rawMaterial.push("Syrup")} ;
    if(isSaltChecked) {rawMaterial.push("Salt")} ;
    if(isBakingPowderChecked) {rawMaterial.push("Baking Powder")} ;

      console.log(rawMaterial)
    
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
              <CInput id="input-normal" name="input-normal" placeholder="Enter Bread Name" 
                      value ={breadName} 
                      onChange={(e)=> setBreadName(e.target.value)} />
            </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader>
              <h4>Choose Raw Material</h4>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                   <CFormGroup variant="custom-checkbox" inline>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isFlourChecked} 
                               onChange={(e) => {setFlourIsChecked(e.target.checked)}}
                               id="ck1"/> Flour
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isSugarChecked} 
                               onChange={(e)=>{setSugarIsChecked(e.target.checked)}} 
                               id="ck2"/> Sugar
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isSweetenerChecked} 
                               onChange={(e)=>{setSweetenerIsChecked(e.target.checked)}} 
                               id="ck3"/> Sweetener
                      </CCol>
                      
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                    
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isButterChecked} 
                               onChange={(e)=>{setButterIsChecked(e.target.checked)}} 
                               id="ck4"/> Butter
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isMargarineChecked} 
                               onChange={(e)=>{setMargarineIsChecked(e.target.checked)}} 
                               id="ck5"/> Margarine
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isEggsChecked} 
                               onChange={(e)=>{setEggsIsChecked(e.target.checked)}} 
                               id="ck6"/> Eggs
                      </CCol>
                    </CFormGroup>
                    <CFormGroup variant="custom-checkbox" inline>
                      
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isNutsChecked} 
                               onChange={(e)=>{setNutsIsChecked(e.target.checked)}} 
                               id="ck7"/> Nuts
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isMilkChecked} 
                               onChange={(e)=>{setMilkIsChecked(e.target.checked)}} 
                               id="ck8"/> Milk
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isHoneyChecked} 
                               onChange={(e)=>{setHoneyIsChecked(e.target.checked)}} 
                               id="ck9"/> Honey
                      </CCol>
                    </CFormGroup> 
                    <CFormGroup variant="custom-checkbox" inline>
                      
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isSyrupChecked} 
                               onChange={(e)=>{setSyrupIsChecked(e.target.checked)}} 
                               id="ck10"/> Syrup
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isSaltChecked} 
                               onChange={(e)=>{setSaltIsChecked(e.target.checked)}} 
                               id="ck11"/> Salt
                      </CCol>
                      <CCol sm="4">
                        <input type ="checkbox" 
                               checked={isBakingPowderChecked} 
                               onChange={(e)=>{setBakingPowderIsChecked(e.target.checked)}} 
                               id="ck12"/> Baking Powder
                      </CCol>
                    </CFormGroup>                   
              </CListGroup>
            </CCardBody>
          </CCard>
          <CCol>
            <div className="row justify-content-sm-end">
              <CButton color="info" className="px-5" onClick={handleSubmit} >Next</CButton>
            </div>
          </CCol>
          </CCardBody>
          </CCard>
        </CCol>
      </CRow>
  )
}

export default OperatorPrep
