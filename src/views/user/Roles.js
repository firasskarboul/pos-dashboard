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
  CDropdownItem,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CTextarea,
  CSwitch,
  CInputRadio
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

const Roles = () => {

  // const [data, setData] = React.useState([]);

  // fetch('http://localhost:8080/role/all')
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
          <CModalTitle>Ajouter un rôle</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CForm action="http://localhost:8080/role/newRole/" method="post"  className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="title">Rôle</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="title" name="title" placeholder="Titre du rôle" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="description">Description</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="description"
                          id="description"
                          rows="9"
                          placeholder="Description..."
                        />
                      </CCol>
                    </CFormGroup>

                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="status1" name="status" value="option1" />
                      <CLabel variant="checkbox" htmlFor="radio1">Option 1</CLabel>
                    </CFormGroup>
                    <CFormGroup variant="checkbox">
                      <CInputRadio className="form-check-input" id="status2" name="status" value="option2" />
                      <CLabel variant="checkbox" htmlFor="radio2">Option 2</CLabel>
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
          <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Ajouter Rôle</CButton>
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

export default Roles
