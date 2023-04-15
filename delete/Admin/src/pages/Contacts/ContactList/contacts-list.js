import React, { useEffect, useMemo, useState, useCallback } from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { isEmpty } from "lodash"
import "bootstrap/dist/css/bootstrap.min.css"
import TableContainer from "../../../components/Common/TableContainer"
import * as Yup from "yup"
import { useFormik } from "formik"

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb"

import {
  getUsers as onGetUsers,
  addNewUser as onAddNewUser,
  updateUser as onUpdateUser,
  deleteUser as onDeleteUser,
} from "../../../store/actions"

import { Position, Email } from "./ContactListCol"

//redux
import { useSelector, useDispatch } from "react-redux"

import {
  Col,
  Row,
  UncontrolledTooltip,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Input,
  FormFeedback,
  Label,
  Card,
  CardBody,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import DeleteModal from "../../../components/Common/DeleteModal"

function DatatableTables() {
  const [modal, setModal] = useState(false)
  const [isEdit, setIsEdit] = useState(false)

  const [user, setUser] = useState([])

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      name: (user && user.name) || "",
      designation: (user && user.designation) || "",
      email: (user && user.email) || "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Please Enter Your Billing Name"),
      designation: Yup.string().required("Please Enter Your Order Date"),
      email: Yup.string().required("Total email"),
    }),
    onSubmit: values => {
      if (isEdit) {
        const updateUser = {
          id: user ? user.id : 0,
          name: values.name,
          designation: values.designation,
          email: values.email,
        }

        // update user
        dispatch(onUpdateUser(updateUser))
        validation.resetForm()
      } else {
        const newUser = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          name: values["name"],
          designation: values["designation"],
          email: values["email"],
        }

        // save new user
        dispatch(onAddNewUser(newUser))
        validation.resetForm()
      }
      toggle()
    },
  })

  const dispatch = useDispatch()
  const { users } = useSelector(state => ({
    users: state.contacts.users,
  }))

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers())
    }
  }, [dispatch, users])

  useEffect(() => {
    if (users && !users.length) {
      dispatch(onGetUsers())
    }
  }, [dispatch, users])

  useEffect(() => {
  }, [users])

  useEffect(() => {
    if (!isEmpty(users)) {
      setIsEdit(false)
    }
  }, [users])

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false)
      setUser(null)
    } else {
      setModal(true)
    }
  }, [modal]);

  const handleUserClick = useCallback((arg) => {
    const user = arg
    setUser({
      id: user.id,
      name: user.name,
      designation: user.designation,
      email: user.email,
    })

    setIsEdit(true)

    toggle()
  }, [toggle])

  //delete user
  const [deleteModal, setDeleteModal] = useState(false)

  const onClickDelete = user => {
    setUser(user)
    setDeleteModal(true)
  }

  const handleDeleteUser = () => {
    if (user.id) {
      dispatch(onDeleteUser(user))
      setDeleteModal(false)
    }
  }
  const handleUserClicks = () => {
    setIsEdit(false)
    toggle()
  }

  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "checkbox",
        disableFilters: true,
        filterable: false,
        Cell: cellProps => {
          return <input type="checkbox" className="selection-input-4" />
        },
      },
      {
        Header: "Name",
        // accessor: "name",
        filterable: true,
        accessor: cellProps => (
          <React.Fragment>
            {!cellProps.img ? (
              <div className="avatar-xs d-inline-block me-2">
                <div className="avatar-title bg-soft-primary rounded-circle text-primary">
                  <i className="mdi mdi-account-circle m-0"></i>
                </div>
              </div>
            ) : (
              <img
                className="avatar-xs rounded-circle me-2"
                src={cellProps.img}
                alt=""
              />
            )}
            <Link to="#" className="text-body">
              {cellProps.name}
            </Link>
          </React.Fragment>
        ),
      },
      {
        Header: "Position",
        accessor: "designation",
        filterable: true,
        Cell: cellProps => {
          return <Position {...cellProps} />
        },
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
        Cell: cellProps => {
          return <Email {...cellProps} />
        },
      },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: cellProps => {
          return (
            <div className="d-flex gap-3 users">
              <ul className="list-inline font-size-20 contact-links mb-0">
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="text-primary"
                    onClick={() => {
                      const users = cellProps.row.original
                      handleUserClick(users)
                    }}
                  >
                    <i className="uil uil-pen font-size-18" id="edittooltip" />
                    <UncontrolledTooltip placement="top" target="edittooltip">
                      Edit
                    </UncontrolledTooltip>
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link
                    to="#"
                    className="text-danger"
                    onClick={() => {
                      const users = cellProps.row.original
                      onClickDelete(users)
                    }}
                  >
                    <i
                      className="uil uil-trash-alt font-size-18"
                      id="deletetooltip"
                    />
                    <UncontrolledTooltip placement="top" target="deletetooltip">
                      Delete
                    </UncontrolledTooltip>
                  </Link>
                </li>
                <li className="list-inline-item dropdown">
                  <UncontrolledDropdown>
                    <DropdownToggle
                      tag="a"
                      className="text-muted font-size-18 px-2"
                      caret
                    >
                      <i className="uil uil-ellipsis-v"></i>
                    </DropdownToggle>
                    <DropdownMenu className="dropdown-menu-end">
                      <DropdownItem href="#">Action</DropdownItem>
                      <DropdownItem href="#">Another action</DropdownItem>
                      <DropdownItem href="#">Something else here</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </li>
              </ul>
            </div>
          )
        },
      },
    ],
    [handleUserClick]
  )

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteUser}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Contacts" breadcrumbItem="User List" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={users}
                    isGlobalFilter={true}
                    isAddUsers={true}
                    isAddTableWithoutBorderStrap={true}
                    handleUserClicks={handleUserClicks}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit User" : "Add Users"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={e => {
                  e.preventDefault()
                  validation.handleSubmit()
                  return false
                }}
              >
                <Row>
                  <Col className="col-12">
                    <div className="mb-3">
                      <Label className="form-label">Position</Label>
                      <Input
                        name="designation"
                        type="designation"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.designation || ""}
                        invalid={
                          validation.touched.designation &&
                          validation.errors.designation
                            ? true
                            : false
                        }
                      />
                      {validation.touched.designation &&
                      validation.errors.designation ? (
                        <FormFeedback type="invalid">
                          {validation.errors.designation}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Name</Label>
                      <Input
                        name="name"
                        type="text"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.name || ""}
                        invalid={
                          validation.touched.name && validation.errors.name
                            ? true
                            : false
                        }
                      />
                      {validation.touched.name && validation.errors.name ? (
                        <FormFeedback type="invalid">
                          {validation.errors.name}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Email</Label>
                      <Input
                        name="email"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.email || ""}
                        invalid={
                          validation.touched.email && validation.errors.email
                            ? true
                            : false
                        }
                      />
                      {validation.touched.email && validation.errors.email ? (
                        <FormFeedback type="invalid">
                          {validation.errors.email}
                        </FormFeedback>
                      ) : null}
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <div className="text-end">
                      <button
                        type="submit"
                        className="btn btn-success save-user"
                      >
                        Save
                      </button>
                    </div>
                  </Col>
                </Row>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  )
}
DatatableTables.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
}

export default DatatableTables
