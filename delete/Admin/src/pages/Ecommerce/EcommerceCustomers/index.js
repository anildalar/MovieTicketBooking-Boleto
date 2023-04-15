import React, { useEffect, useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "../../../components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";

//import components
import Breadcrumbs from "../../../components/Common/Breadcrumb";

import {
  getCustomers as onGetCustomers,
  addNewCustomer as onAddNewCustomer,
  updateCustomer as onUpdateCustomer,
  deleteCustomer as onDeleteCustomer,
} from "../../../store/actions";

import {
  CustomerId,
  Date,
  Email,
  CustomerStatus,
} from "./EcommerceCustomerCol";

//redux
import { useSelector, useDispatch } from "react-redux";

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
} from "reactstrap";
import DeleteModal from "../../../components/Common/DeleteModal";

function DatatableTables() {
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [customer, setCustomer] = useState([]);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      customerid: (customer && customer.customerid) || "",
      customerName: (customer && customer.customerName) || "",
      joiningDate: (customer && customer.joiningDate) || "",
      email: (customer && customer.email) || "",
      customerStatus: (customer && customer.customerStatus) || "Active",
      badgeclass: (customer && customer.badgeclass) || "success",
    },
    validationSchema: Yup.object({
      customerid: Yup.string().required("Please Enter Your Order Id"),
      customerName: Yup.string().required("Please Enter Your Billing Name"),
      joiningDate: Yup.string().required("Please Enter Your Order Date"),
      email: Yup.string().required("Total Amount"),
      customerStatus: Yup.string().required("Please Enter Your Payment Status"),
      badgeclass: Yup.string().required("Please Enter Your Badge Class"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateCustomer = {
          id: customer ? customer.id : 0,
          customerid: values.customerid,
          customerName: values.customerName,
          joiningDate: values.joiningDate,
          email: values.email,
          customerStatus: values.customerStatus,
          badgeclass: values.badgeclass,
        };

        // update customer
        dispatch(onUpdateCustomer(updateCustomer));
        validation.resetForm();
      } else {
        const newCustomer = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          customerid: values["customerid"],
          customerName: values["customerName"],
          joiningDate: values["joiningDate"],
          email: values["email"],
          customerStatus: values["customerStatus"],
          badgeclass: values["badgeclass"],
        };

        // save new customer
        dispatch(onAddNewCustomer(newCustomer));
        validation.resetForm();
      }
      toggle();
    },
  });

  const dispatch = useDispatch();
  const { customers } = useSelector((state) => ({
    customers: state.ecommerce.customers,
  }));
  useEffect(() => {
    if (customers && !customers.length) {
      dispatch(onGetCustomers());
    }
  }, [dispatch, customers]);

  useEffect(() => {
    if (customers && !customers.length) {
      dispatch(onGetCustomers());
    }
  }, [dispatch, customers]);  

  useEffect(() => {
    if (!isEmpty(customers)) {    
      setIsEdit(false);
    }
  }, [customers]);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setCustomer(null);
    } else {
      setModal(true);
    }
  }, [modal]);

 
   
  const handleCustomerClick = useCallback((arg) => {
    const customer = arg;
    setCustomer({
      id: customer.id,
      customerid: customer.customerid,
      customerName: customer.customerName,
      joiningDate: customer.joiningDate,
      email: customer.email,
      customerStatus: customer.customerStatus,
      badgeclass: customer.badgeclass,
    });

    setIsEdit(true);
    toggle();
  }, [toggle]);

  //delete customer
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (customer) => {
    setCustomer(customer);
    setDeleteModal(true);
  };

  const handleDeleteCustomer = () => {
    if (customer.id) {
      dispatch(onDeleteCustomer(customer));
      setDeleteModal(false);
    }
  };
  const handleCustomerClicks = () => {
    setIsEdit(false);
    toggle();
  };


  const columns = useMemo(
    () => [
      {
        Header: "Id",
        accessor: "checkbox",
        disableFilters: true,
        filterable: false,
        Cell: () => {
          return <input type="checkbox" className="selection-input-4" />;
        },
      },
      {
        Header: "Customer ID",
        accessor: "customerid",
        disableGlobalFilter: true,
        filterable: true,
        Cell: (cellProps) => {
          return <CustomerId {...cellProps} />;
        },
      },
      {
        Header: "Customer",
        accessor: "customerName",
        filterable: true,
        Cell: (cellProps) => {
          return (
            <React.Fragment>
              {cellProps.row.original.img ?
                (<img src={cellProps.row.original.img} alt="" className="avatar-xs rounded-circle me-2" />) : (<div className="avatar-xs d-inline-block me-2">
                  <span className="avatar-title rounded-circle bg-light text-body">
                  {cellProps.row.original.customerName.charAt()}
                  </span>
                </div>)
              }
              <span>{cellProps.row.original.customerName}</span>
            </React.Fragment>
          )
        },
      },
      {
        Header: "Email",
        accessor: "email",
        filterable: true,
        Cell: (cellProps) => {
          return <Email {...cellProps} />;
        },
      },
      {
        Header: "Join Date",
        accessor: "joiningDate",
        filterable: true,
        // formatter: (cellContent, row) => handleValidDate(row.joiningDate),
        Cell: (cellProps) => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Status",
        accessor: "customerStatus",
        filterable: true,
        Cell: (cellProps) => {
          return <CustomerStatus {...cellProps} />;
        },
      },
      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: (cellProps) => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-primary"
                onClick={() => {
                  const customerData = cellProps.row.original;
                  handleCustomerClick(customerData);
                }}
              >
                <i className="uil uil-pen font-size-18" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const customerData = cellProps.row.original;
                  onClickDelete(customerData);
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
            </div>
          );
        },
      },
    ],
    [handleCustomerClick]
  );

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteCustomer}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Customers" />
          <Row>
            <Col xs="12">
              <TableContainer
                columns={columns}
                data={customers}
                isGlobalFilter={true}
                isAddCustomer={true}
                isAddTableBorderStrap={true}
                handleCustomerClicks={handleCustomerClicks}
              />
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Customer" : "Add Customer"}
            </ModalHeader>
            <ModalBody>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  validation.handleSubmit();
                  return false;
                }}
              >
                <Row>
                  <Col className="col-12">
                    <div className="mb-3">
                      <Label className="form-label">Customer Id</Label>
                      <Input
                        name="customerid"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.customerid || ""}
                        invalid={
                          validation.touched.customerid &&
                            validation.errors.customerid
                            ? true
                            : false
                        }
                      />
                      {validation.touched.customerid &&
                        validation.errors.customerid ? (
                        <FormFeedback type="invalid">
                          {validation.errors.customerid}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Customer Name</Label>
                      <Input
                        name="customerName"
                        type="text"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.customerName || ""}
                        invalid={
                          validation.touched.customerName &&
                            validation.errors.customerName
                            ? true
                            : false
                        }
                      />
                      {validation.touched.customerName &&
                        validation.errors.customerName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.customerName}
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
                    <div className="mb-3">
                      <Label className="form-label">Customer Status</Label>
                      <Input
                        name="customerStatus"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.customerStatus || ""}
                      >
                        <option>Active</option>
                        <option>Deactive</option>
                      </Input>
                      {validation.touched.customerStatus &&
                        validation.errors.customerStatus ? (
                        <FormFeedback type="invalid">
                          {validation.errors.customerStatus}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Joining Date</Label>
                      <Input
                        name="joiningDate"
                        type="date"
                        // value={customerList.joiningDate || ""}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.joiningDate || ""}
                        invalid={
                          validation.touched.joiningDate &&
                            validation.errors.joiningDate
                            ? true
                            : false
                        }
                      />
                      {validation.touched.joiningDate &&
                        validation.errors.joiningDate ? (
                        <FormFeedback type="invalid">
                          {validation.errors.joiningDate}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Badge Class</Label>
                      <Input
                        name="badgeclass"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.badgeclass || ""}
                      >
                        <option>success</option>
                        <option>danger</option>
                      </Input>
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
  );
}
DatatableTables.propTypes = {
  preGlobalFilteredRows: PropTypes.any,
};

export default DatatableTables;
