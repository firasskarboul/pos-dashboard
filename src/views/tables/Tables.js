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
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CSelect
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

const Tables = () => {

  // const [data, setData] = React.useState([]);

  // fetch('http://localhost:8080/table/all')
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
      <CModal
        show={success}
        onClose={() => setSuccess(!success)}
        color="success"
        size="lg"
      >
        <CModalHeader closeButton>
          <CModalTitle>Ajouter une table</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CForm action="http://localhost:8080/table/newTable/" method="post" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="title">Table</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="title" name="title" placeholder="Nom du table" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup>
                    <CLabel htmlFor="ccmonth">Serveur</CLabel>
                    <CSelect custom name="user" id="user">
                      <option value="1">John Doe</option>
                      <option value="2">Firas Karboul</option>
                      <option value="3">Hamza Rebai</option>
                      <option value="4">Zack</option>
                    </CSelect>
                  </CFormGroup>

                    {/* <CFormGroup row>
                      <CCol tag="label" sm="3" className="col-form-label">
                        Status
                      </CCol>
                      <CCol sm="9">
                        <CSwitch
                          name="status"
                          className="mr-1"
                          color="success"
                          defaultChecked
                          shape="pill"
                        />
                      </CCol>
                    </CFormGroup> */}
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="success" type="submit">Enregistrer</CButton>
          <CButton color="secondary" onClick={() => setSuccess(!success)}>Annuler</CButton>
        </CModalFooter>
      </CModal>

      <CRow>
        <CCol col="12" sm="12" md="12" xl className="mb-3 mb-xl-10">
          <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Ajouter Table</CButton>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Tables
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={usersData}
                fields={fields}
                hover
                striped
                bordered
                size="sm"
                itemsPerPage={10}
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

export default Tables
