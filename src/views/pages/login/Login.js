import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import mainLogo from'../../../assets/icons/icon2.png';

async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 } 

 export default function Login({setToken}){
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center" style={{
      backgroundColor: '#922a30'
    }}>
      <CContainer >
        <CRow className="justify-content-center">
          <CCol md="6">
            <CCardGroup>
              <CCard className="p-4" color="primary">
                <CCardBody>
                  <div className="row justify-content-sm-center">
                        <CImg
                          src={mainLogo} 
                          fluid
                          width={200}                   
                        />
                  </div> 
                  <CForm onSubmit={handleSubmit}>       
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="text" placeholder="Username" autoComplete="username" onChange={e => setUsername(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput type="password" placeholder="Password" autoComplete="current-password" onChange={e => setPassword(e.target.value)}/>
                    </CInputGroup>
                    
                      <div className="row justify-content-sm-center">
                        <CButton color="success" className="px-4" type="submit">Login</CButton>
                      </div>
                    
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

