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
  CFormText,
  CInputFile,
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

const Waiters = () => {

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
          <CModalTitle>Ajouter un Utilisateur</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CForm action="http://localhost:8080/role/newRole/" method="post" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="username">Utilisateur</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="username" name="username" placeholder="Entrer Username" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="last_name">Nom</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="last_name" name="last_name" placeholder="Entrer Nom" />
                        <CFormText className="help-block">Saisir le nom de l'utilisateur</CFormText>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="first_name">Prénom</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="first_name" name="first_name" placeholder="Entrer Prénom" />
                        <CFormText className="help-block">Saisir le prénom de l'utilisateur</CFormText>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="email">Email</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="email" id="email" name="email" placeholder="Entrer Email" autoComplete="email" />
                        <CFormText className="help-block">Saisir l'email de l'utilisateur</CFormText>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="password">Mot de passe</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput type="password" id="password" name="password" placeholder="Entrer Mot de passe" autoComplete="new-password" />
                        <CFormText className="help-block">Entrer le mot de passe</CFormText>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CLabel col md="3" htmlFor="avatar">Photo</CLabel>
                      <CCol xs="12" md="9">
                        <CInputFile id="avatar" name="avatar" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CLabel col md="3" htmlFor="phone">Numéro téléphone</CLabel>
                      <CCol xs="12" md="9">
                        <CInput id="phone" name="phone" placeholder="00 000 000" required />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CLabel col md="3" htmlFor="role">Month</CLabel>
                      <CCol xs="12" md="9">
                        <CSelect custom name="role" id="role">
                          <option value="1">Administrateur</option>
                          <option value="2">Caissier</option>
                          <option value="3">Serveur</option>
                        </CSelect>
                      </CCol>
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
          <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Ajouter Utilisateur</CButton>
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

export default Waiters
