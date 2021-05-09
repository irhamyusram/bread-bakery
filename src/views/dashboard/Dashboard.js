import React, { useState, useEffect } from 'react'
import axios from 'axios';

import {
  CButton,
  CDataTable,
  CCardBody,
  CBadge,
  CCol,
  CCollapse,
  CRow,
  CCard,
  CCardHeader
} from '@coreui/react'



const Dashboard = () => {

  const [breads, setBreads] = useState();

  //fetcing Data from database Breads (mongoDB)
      useEffect(()=>{
         fetch("/breads/").then( res=>{
              if(res.ok){
                  return res.json()
              }
          }).then(jsonRes => setBreads(jsonRes))
      },[breads])
      

  const [details, setDetails] = useState([])
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

  function handleClickApproved (item) { 
    const newStatus ={
      status: "Approved"
    }
    axios.patch('http://localhost:5000/breads/update/'+item._id, newStatus);

  }

  function handleClickRejected (item) { 
    const newStatus ={
      status: "Rejected"
    }
    axios.patch('http://localhost:5000/breads/update/'+item._id, newStatus);

  }



  const fields = [
    { key:'id', show:false},
    { key: 'breadName', _style: { width: '40%'} },
    { key: 'operatorName', _style: { width: '20%'} },
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
      case 'Approved': return 'success'
      case 'Rejected': return 'danger'
      case 'Pending': return 'warning'
      default: return 'dark'
    }
  }


  return (
    
    <CCard>
      <CCardHeader color="light">
        <h1 className="d-flex justify-content-center"> Bread Making Process Monitor </h1>
      </CCardHeader>
      <CCardBody>
    <CDataTable
      items={breads}
      fields={fields}
      columnFilter
      itemsPerPageSelect
      itemsPerPage={6}
      hover
      sorter
      pagination
      scopedSlots = {{
        'status':
          (item)=>(
            <td>
              <CBadge color={getBadge(item.status)}>
                {item.status}
              </CBadge>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <CButton
                  color="info"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index)}}
                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
          },
        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4><u>
                    {item.breadName} by {item.operatorName}
                  </u></h4>
                  <p><i>Bread Description : </i></p>
                  <CRow>
                    <CCol>
                      <h5>Raw Material </h5>
                      {item.rawMaterial.map((value, index)=>{
                        return <li>{value}</li>
                      })}
                    </CCol>

                    <CCol>
                    <h5>Dough & Backing Process</h5>
                      {item.process.map((value, index)=>{
                        
                        return (
                          index == 0 ? <p>1. Water volume {value} ml</p> :
                          index == 1 ? <p>2. Mixing time {value} minutes</p> :
                          index == 2 ? <p>3. Resting time {value} minutes</p> :
                          index == 3 ? <p>4. kneeding time {value} minutes</p> :
                          index == 4 ? <p>5. Oven Degree {value} °C</p> :
                          index == 5 ? <p>6. Oven time {value} minutes</p> :
                          <li>{value}</li> 
                        )
                      })}
                      
                    </CCol>
                  </CRow>
                  <CButton id="approvedButton" 
                            onClick={() => handleClickApproved(item)} 
                            type="submit"
                            size="sm" 
                            color="success">
                    Approved
                  </CButton>
                  <CButton id="rejectedButton"
                            onClick={() => handleClickRejected(item)} type="submit" 
                            size="sm" 
                            color="danger" 
                            className="ml-1">
                    Reject
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />
    </CCardBody>
    </CCard>
  )
}

export default Dashboard
