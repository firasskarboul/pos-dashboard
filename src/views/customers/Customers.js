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

const Customers = () => {

  // const [data, setData] = React.useState([]);

  // fetch('http://localhost:8080/customer/all')
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
          <CModalTitle>Ajouter un client</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CForm action="http://localhost:8080/customer/newCustomer/" method="post" className="form-horizontal">
                    <CFormGroup className="pr-1">
                        <CLabel htmlFor="first_name" className="pr-1">Prénom</CLabel>
                        <CInput id="first_name" name="first_name" placeholder="Prénom du client" />
                    </CFormGroup>

                    <CFormGroup className="pr-1">
                        <CLabel htmlFor="last_name" className="pr-1">Nom</CLabel>
                        <CInput id="last_name" name="last_name" placeholder="Nom du client" />
                    </CFormGroup>

                    <CFormGroup className="pr-1">
                      <CLabel htmlFor="email" className="pr-1">Email</CLabel>
                      <CInput type="email" id="email" name="email" placeholder="Email du client" required />
                    </CFormGroup>

                    <CFormGroup className="pr-1">
                      <CLabel htmlFor="phone" className="pr-1">Phone</CLabel>
                      <CInput type="number" id="phone" name="phone" placeholder="Email du client" required />
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
          <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Ajouter Client</CButton>
        </CCol>
      </CRow>

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              Clients
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

export default Customers
