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

const Categories = () => {

  // const [data, setData] = React.useState([]);

  // fetch('http://localhost:8080/categories/all')
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
          <CModalTitle>Ajouter une catégorie</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CForm action="http://localhost:8080/role/newRole/" method="post" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="title">Catégorie</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="title" name="title" placeholder="Nom du catégorie" />
                      </CCol>
                    </CFormGroup>
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
          <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Ajouter une catégorie</CButton>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Catégories
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

export default Categories
