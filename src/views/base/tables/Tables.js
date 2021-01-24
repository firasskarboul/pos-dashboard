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
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem
} from '@coreui/react'
import { DocsLink } from 'src/reusable'

import usersData from '../../users/UsersData'

const getBadge = status => {
  switch (status) {
    case 'ttt': return 'success'
    case 'tests': return 'secondary'
    case 'ADMIIIIIN': return 'warning'
    case 'dsd': return 'danger'
    default: return 'primary'
  }
}
const fields = ['id','Title', 'description', 'status', 'action']

const Tables = () => {

  const [data, setData] = React.useState([]);

  const [formData, setFormData] = React.useState([]);

  fetch('http://localhost:8080/role/all')
  .then(response => response.json())
  .then(data => {
    setData(data);
  })
  .catch(e => {
    console.log(e);
  });

  return (
    <>
      <CRow>
        
        <CCol col="12" sm="12" md="12" xl className="mb-3 mb-xl-10">
          <CButton color="success">Ajouter</CButton>
        </CCol>
      </CRow>
      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Rôles
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={data}
              fields={fields}
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              },
              {'action':
              (item)=>(
                <CDropdown className="m-1 d-inline-block">
                  <CDropdownToggle color="secondary">
                    Action
                  </CDropdownToggle>
                  <CDropdownMenu
                    placement="bottom"
                    modifiers={[{name: 'flip', enabled: false }]}
                  >
                    <CDropdownItem>Modifier</CDropdownItem>
                    <CDropdownItem>Supprimer</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              )
            }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      
      <CRow>
        <CCol xs="12" lg="12">
          <CCard>
            <CCardHeader>
              Rôles
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={data}
              fields={fields}
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              },
              {'action':
                (item)=>(
                  <CDropdown className="m-1 d-inline-block">
                    <CDropdownToggle color="secondary">
                      Action
                    </CDropdownToggle>
                    <CDropdownMenu
                      placement="bottom"
                      modifiers={[{name: 'flip', enabled: false }]}
                    >
                      <CDropdownItem>Modifier</CDropdownItem>
                      <CDropdownItem>Supprimer</CDropdownItem>
                    </CDropdownMenu>
                  </CDropdown>
                )
              }
            }
            />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Striped Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              striped
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              },
              {'action':
              (item)=>(
                <CDropdown className="m-1 d-inline-block">
                  <CDropdownToggle color="secondary">
                    Action
                  </CDropdownToggle>
                  <CDropdownMenu
                    placement="bottom"
                    modifiers={[{name: 'flip', enabled: false }]}
                  >
                    <CDropdownItem>Modifier</CDropdownItem>
                    <CDropdownItem>Supprimer</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              )
            }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CRow>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Condensed Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              size="sm"
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              },{'action':
              (item)=>(
                <CDropdown className="m-1 d-inline-block">
                  <CDropdownToggle color="secondary">
                    Action
                  </CDropdownToggle>
                  <CDropdownMenu
                    placement="bottom"
                    modifiers={[{name: 'flip', enabled: false }]}
                  >
                    <CDropdownItem>Modifier</CDropdownItem>
                    <CDropdownItem>Supprimer</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              )
            }}
            />
            </CCardBody>
          </CCard>
        </CCol>

        <CCol xs="12" lg="6">
          <CCard>
            <CCardHeader>
              Bordered Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              bordered
              itemsPerPage={5}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )

              },{'action':
              (item)=>(
                <CDropdown className="m-1 d-inline-block">
                  <CDropdownToggle color="secondary">
                    Action
                  </CDropdownToggle>
                  <CDropdownMenu
                    placement="bottom"
                    modifiers={[{name: 'flip', enabled: false }]}
                  >
                    <CDropdownItem>Modifier</CDropdownItem>
                    <CDropdownItem>Supprimer</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              )
            }}
            />
            </CCardBody>
          </CCard>
        </CCol>

      </CRow>

      
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Combined All dark Table
            </CCardHeader>
            <CCardBody>
            <CDataTable
              items={usersData}
              fields={fields}
              dark
              hover
              striped
              bordered
              size="sm"
              itemsPerPage={10}
              pagination
              scopedSlots = {{
                'status':
                  (item)=>(
                    <td>
                      <CBadge color={getBadge(item.status)}>
                        {item.status}
                      </CBadge>
                    </td>
                  )
              },{'action':
              (item)=>(
                <CDropdown className="m-1 d-inline-block">
                  <CDropdownToggle color="secondary">
                    Action
                  </CDropdownToggle>
                  <CDropdownMenu
                    placement="bottom"
                    modifiers={[{name: 'flip', enabled: false }]}
                  >
                    <CDropdownItem>Modifier</CDropdownItem>
                    <CDropdownItem>Supprimer</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              )
            }}
            />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Tables
