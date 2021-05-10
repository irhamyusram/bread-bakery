import React, { lazy, useState, useRef} from 'react'
import axios from 'axios';
import {
  CCardHeader,
  CCard,
  CCardBody,
  CCol,
  CListGroup,
  CRow,
  CListGroupItem,
  CFormGroup,
  CLabel,
  CInput,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter
 
} from '@coreui/react'

const Operator = () => {
  
  const[breadName, setBreadName] = useState(''); 

  const nextRef = useRef(null);
  const rawMaterial = [];
  const bakingProcess =[];

  const [small, setSmall] = useState(false)
  
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

  const[waterVolume, setWaterVolume] = useState();
  const[mixingTime, setMixingTime] = useState();
  const[restingTime, setRestingTime] = useState();
  const[kneedingTime, setKneedingTime] = useState();
  const[ovenDegree, setOvenDegree] = useState();
  const[ovenTime, setOvenTime] = useState();

  const operatorString = localStorage.getItem('username');
  const operatorName = JSON.parse(operatorString);

  function handleSubmit(){
    
    wrappedRawMaterial();
    wrappedProcess();

    const newBread ={
        operatorName : operatorName,
        breadName : breadName,
        rawMaterial : rawMaterial,
        process : bakingProcess,
        status : "Pending"
    } 

    axios.post('http://localhost:5000/breads/new', newBread);
    //window.location.reload()
    setSmall(!small)

  }

  const handleScroll = ref => {
    ref.current.scrollIntoView({
      behavior: "smooth"
    });
  };

  function wrappedRawMaterial (){
    
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

      console.log(rawMaterial);
     
      
  }

  function wrappedProcess(){
    bakingProcess.push (waterVolume, mixingTime, restingTime, kneedingTime, ovenDegree, ovenTime);
    console.log(bakingProcess);
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
              <CInput id="input-normal" name="input-normal" placeholder="Enter Bread Name" required="required" pattern="[A-Za-z]{1,20}"
                      value ={breadName} 
                      onChange={(e)=> setBreadName(e.target.value)} required/>
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
              <CButton color="info" className="px-5" onClick={() => handleScroll(nextRef)}>Next </CButton>
            </div>
          </CCol>
          </CCardBody>
          </CCard>
          <CCard>
            <CCardHeader color="light" >
              <h2 className="d-flex justify-content-center" ><div ref={nextRef}>Dough & Baking Process (2/2) </div></h2>
            </CCardHeader>
            <CCardBody>
              <CListGroup>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">1. Water Needed</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" 
                             name="input-normal" 
                             placeholder="Enter Water Volume" required="required" type="number"  
                             onChange={(e) => setWaterVolume(e.target.value)} required/>
                    </CCol>
                    <CLabel col>( mL )</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal" color="dark">2. Mixing Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" 
                             name="input-normal" 
                            placeholder="Enter Mixing Time" required="required" type="number"  
                            onChange={(e) => setMixingTime(e.target.value)} required/>
                    </CCol>
                    <CLabel col>( minutes )</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">3. Resting Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" 
                             name="input-normal" 
                             placeholder="Enter Resting Time" required="required" type="number" 
                             onChange={(e) => setRestingTime(e.target.value)} required/>
                    </CCol>
                    <CLabel col>( minutes )</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">4. Kneeding Time</CLabel>
                    <CCol sm="7">
                     <CInput id="input-normal" 
                             name="input-normal" 
                             placeholder="Enter Kneeding Time" required="required" type="number"  
                             onChange={(e) => setKneedingTime(e.target.value)} required/>
                    </CCol>
                    <CLabel col>( minutes )</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">5. Oven Degree</CLabel>
                    <CCol sm="7">
                    <CInput id="input-normal" 
                             name="input-normal" 
                             placeholder="Enter Oven Degree" type="number"  
                             onChange={(e) => setOvenDegree(e.target.value)} required/>
                    </CCol>
                    <CLabel col>( °c )</CLabel>
                  </CFormGroup>
                </CListGroupItem>
                <CListGroupItem>
                  <CFormGroup row>
                    <CLabel sm="3" col htmlFor="input-normal">6. Oven Time</CLabel>
                    <CCol sm="7">
                    <CInput id="input-normal" 
                             name="input-normal" 
                             placeholder="Enter Oven Time" type="number"  
                             onChange={(e) => setOvenTime(e.target.value)} required/>
                    </CCol>
                    <CLabel col >( minutes )</CLabel>
                  </CFormGroup>
                </CListGroupItem>
              
              <CCol>
              <div className="d-flex row justify-content-end">
                <CButton color="success" className="px-5" onClick={handleSubmit} >Submit</CButton>
              </div>

              <CModal 
              show={small} 
              onClose={() => setSmall(!small)}
              size="sm"
            >
              <CModalHeader closeButton>
                <CModalTitle>Success !</CModalTitle>
              </CModalHeader>
              <CModalBody>
                Your Data Has been Updated
              </CModalBody>
              <CModalFooter>
                <CButton color="success" onClick={() => setSmall(!small)}>close</CButton>{' '}
              </CModalFooter>
            </CModal>

              </CCol>
              </CListGroup>
            </CCardBody> 
          </CCard> 
        </CCol>
      </CRow>
  )
}

export default Operator
