import React, { lazy, useState } from 'react'
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
  const usersData = [
    {id: 0, breadName: 'John Doe',  operatorName: 'Guest', status: 'Pending'},
    {id: 1, breadName: 'Samppa Nori',  operatorName: 'Member', status: 'Approved'},
    {id: 2, breadName: 'Estavan Lykos',  operatorName: 'Staff', status: 'Rejected'},
    {id: 3, breadName: 'Chetan Mohamed',  operatorName: 'Admin', status: 'Rejected'},
    {id: 4, breadName: 'Derick Maximinus',  operatorName: 'Member', status: 'Pending'},
    {id: 5, breadName: 'Friderik Dávid',  operatorName: 'Staff', status: 'Approved'},
    {id: 6, breadName: 'Yiorgos Avraamu',  operatorName: 'Member', status: 'Approved'},
    {id: 7, breadName: 'Avram Tarasios',  operatorName: 'Staff', status: 'Rejected'},
    {id: 8, breadName: 'Quintin Ed',  operatorName: 'Admin', status: 'Rejected'},
    {id: 9, breadName: 'Enéas Kwadwo', operatorName: 'Member', status: 'Pending'},
    {id: 10, breadName: 'Agapetus Tadeáš',  operatorName: 'Staff', status: 'Approved'},
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
      items={usersData}
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
                  <h4>
                    {item.username}
                  </h4>
                  <p className="text-muted">Bread Description: {item.registered}</p>
                  <CButton size="sm" color="success">
                    Approved
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
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
