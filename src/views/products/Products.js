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
  CInputFile,
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

const Products = () => {

  // const [data, setData] = React.useState([]);

  // fetch('http://localhost:8080/product/all')
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
          <CModalTitle>Ajouter un produit</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="12" md="12">
              <CCard>
                <CCardBody>
                  <CForm action="http://localhost:8080/product/newProduct/" method="post" className="form-horizontal">
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="produit">Produit</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="produit" name="produit" placeholder="Titre du produit" />
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
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="categorie">Categorie</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CSelect custom name="categorie" id="categorie">
                          <option value="1">Food</option>
                          <option value="2">Juice</option>
                          <option value="3">Plats</option>
                          <option value="4">Coffee</option>
                        </CSelect>
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="prix">Prix</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="prix" name="prix" placeholder="Saisir le prix du produit" required />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="cost">Coût</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="cost" name="cost" placeholder="Saisir le coût du produit" required />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="options">Options</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CTextarea
                          name="options"
                          id="options"
                          rows="9"
                          placeholder="Séparer chaque option par un virgule ' , '"
                        />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="tax">Tax</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="tax" name="tax" placeholder="Saisir le tax du produit" required />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CCol md="3">
                        <CLabel htmlFor="unit">Unité</CLabel>
                      </CCol>
                      <CCol xs="12" md="9">
                        <CInput id="unit" name="unit" placeholder="Unit du produit" />
                      </CCol>
                    </CFormGroup>
                    <CFormGroup row>
                      <CLabel col md="3" htmlFor="image">Image</CLabel>
                      <CCol xs="12" md="9">
                        <CInputFile id="image" name="image" />
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
          <CButton color="success" onClick={() => setSuccess(!success)} className="mr-1">Ajouter Produit</CButton>
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

export default Products
