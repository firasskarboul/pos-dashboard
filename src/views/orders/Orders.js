import React from 'react'
import {
  CButton,
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
} from '@coreui/react'

import usersData from '../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'ttt': return 'success'
    case 'tests': return 'secondary'
    case 'ADMIIIIIN': return 'warning'
    case 'dsd': return 'danger'
    default: return 'primary'
  }
}
const fields = ['id', 'name', 'registered', 'role', 'status']

const Orders = () => {

  // const [data, setData] = React.useState([]);

  // fetch('http://localhost:8080/orders/all')
  //   .then(response => response.json())
  //   .then(data => {
  //     setData(data);
  //   })
  //   .catch(e => {
  //     console.log(e);
  //   });

  const [success, setSuccess] = React.useState(false)
  
  return (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Commandes
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={100}
                pagination
                scopedSlots={{
                  'status':
                    (item) => (
                      <td>
                        <CBadge color={getBadge(item.status)}>
                          {item.status}
                        </CBadge>
                      </td>
                    )
                }
                // , {
                //   'action':
                //     (item) => (
                //       <CDropdown className="m-1 d-inline-block">
                //         <CDropdownToggle color="secondary">
                //           Action
                //   </CDropdownToggle>
                //         <CDropdownMenu
                //           placement="bottom"
                //           modifiers={[{ name: 'flip', enabled: false }]}
                //         >
                //           <CDropdownItem>Modifier</CDropdownItem>
                //           <CDropdownItem>Supprimer</CDropdownItem>
                //         </CDropdownMenu>
                //       </CDropdown>
                //     )
                // }
              }
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Orders
