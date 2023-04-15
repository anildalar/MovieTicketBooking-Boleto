import React, { useEffect, useMemo, useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { isEmpty } from "lodash";
import "bootstrap/dist/css/bootstrap.min.css";
import TableContainer from "../../components/Common/TableContainer";
import * as Yup from "yup";
import { useFormik } from "formik";

//import components
import Breadcrumbs from "../../components/Common/Breadcrumb";

import {
  getInvoices as onGetInvoices,
  addNewInvoice as onAddNewInvoice,
  updateInvoice as onUpdateInvoice,
  deleteInvoice as onDeleteInvoice,
} from "../../store/actions";

import {
  InvoiceId,
  BillingName,
  Date,
  Amount,
  InvoiceStatus,
  DownloadPdf,
} from "./InvoiceCol";

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
import DeleteModal from "../../components/Common/DeleteModal";

function DatatableTables() {
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [invoice, setInvoice] = useState([]);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      invoiceID: (invoice && invoice.invoiceID) || "",
      billingName: (invoice && invoice.billingName) || "",
      date: (invoice && invoice.date) || "",
      Amount: (invoice && invoice.Amount) || "",
      status: (invoice && invoice.status) || "Paid",
      color: (invoice && invoice.color) || "success",
    },
    validationSchema: Yup.object({
      invoiceID: Yup.string().required("Please Enter Your Order Id"),
      billingName: Yup.string().required("Please Enter Your Billing Name"),
      date: Yup.string().required("Please Enter Your Order Date"),
      Amount: Yup.string().required("Total Amount"),
      status: Yup.string().required("Please Enter Your Payment Status"),
      color: Yup.string().required("Please Enter Your Badge Class"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateInvoice = {
          id: invoice ? invoice.id : 0,
          invoiceID: values.invoiceID,
          billingName: values.billingName,
          date: values.date,
          Amount: values.Amount,
          status: values.status,
          color: values.color,
        };
  
        // update invoice
        dispatch(onUpdateInvoice(updateInvoice));
        validation.resetForm();
      } else {
        const newInvoice = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          invoiceID: values["invoiceID"],
          billingName: values["billingName"],
          date: values["date"],
          Amount: values["Amount"],
          status: values["status"],
          paymentMethod: values["paymentMethod"],
          color: values["color"],
        };
       
        // save new invoice
        dispatch(onAddNewInvoice(newInvoice));
        validation.resetForm();
      }
      toggle();
    },
  });

  const dispatch = useDispatch();
  const { invoices } = useSelector((state) => ({
    invoices: state.invoices.invoices,
  }));
  useEffect(() => {
    if (invoices && !invoices.length) {
      dispatch(onGetInvoices());
    }
  }, [dispatch, invoices]);  

  useEffect(() => {
    setInvoice(invoices);
  }, [invoices]);

  useEffect(() => {
    if (!isEmpty(invoices)) {
      setIsEdit(false);
    }
  }, [invoices]);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setInvoice(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleInvoiceClick = useCallback((arg) => {
    const invoice = arg;
    setInvoice({
      id: invoice.id,
      invoiceID: invoice.invoiceID,
      billingName: invoice.billingName,
      date: invoice.date,
      Amount: invoice.Amount,
      status: invoice.status,
      color: invoice.color,
    });

    setIsEdit(true);

    toggle();
  }, [toggle]);

  //delete invoice
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (invoice) => {
    setInvoice(invoice);
    setDeleteModal(true);
  };

  const handleDeleteInvoice = () => {
    if (invoice.id) {
      dispatch(onDeleteInvoice(invoice));
      setDeleteModal(false);
    }
  };
  const handleInvoiceClicks = () => {
    setIsEdit(false);
    toggle();
  };


  const columns = useMemo(
    () => [
      {
        Header: "Invoice ID",
        accessor: "invoiceID",
        disableGlobalFilter: true,
        filterable: true,
        Cell: (cellProps) => {
          return <InvoiceId {...cellProps} />;
        },
      },
      {
        Header: "Date",
        accessor: "date",
        filterable: true,
        // formatter: (cellContent, row) => handleValidDate(row.date),
        Cell: (cellProps) => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Billing Name",
        accessor: "billingName",
        filterable: true,
        Cell: (cellProps) => {
          return <BillingName {...cellProps} />;
        },
      },
      {
        Header: "Amount",
        accessor: "Amount",
        filterable: true,
        Cell: (cellProps) => {
          return <Amount {...cellProps} />;
        },
      },
      {
        Header: "Status",
        accessor: "status",
        filterable: true,
        Cell: (cellProps) => {
          return <InvoiceStatus {...cellProps} />;
        },
      },
      {
        Header: "Download Pdf",
        disableFilters: true,
        filterable: true,
        Cell: (cellProps) => {
          return <DownloadPdf {...cellProps} />;
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
                  const invoiceList = cellProps.row.original;
                  handleInvoiceClick(invoiceList);
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
                  const invoiceList = cellProps.row.original;
                  onClickDelete(invoiceList);
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
    [handleInvoiceClick]
  );

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteInvoice}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Invoices" breadcrumbItem="Invoice List" />
          <Row>
            <Col xs={12}>
              <TableContainer
                columns={columns}
                data={invoices}
                isGlobalFilter={true}
                isAddInvoice={true}
                isAddTableBorderStrap={true}
                handleInvoiceClicks={handleInvoiceClicks}
              />
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Invoice" : "Add Invoice"}
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
                      <Label className="form-label">Invoice Id</Label>
                      <Input
                        name="invoiceID"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.invoiceID || ""}
                        invalid={
                          validation.touched.invoiceID &&
                          validation.errors.invoiceID
                            ? true
                            : false
                        }
                      />
                      {validation.touched.invoiceID &&
                      validation.errors.invoiceID ? (
                        <FormFeedback type="invalid">
                          {validation.errors.invoiceID}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Date</Label>
                      <Input
                        name="date"
                        type="date"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.date || ""}
                        invalid={
                          validation.touched.date && validation.errors.date
                            ? true
                            : false
                        }
                      />
                      {validation.touched.date && validation.errors.date ? (
                        <FormFeedback type="invalid">
                          {validation.errors.date}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Billing Name</Label>
                      <Input
                        name="billingName"
                        type="text"
                        validate={{
                          required: { value: true },
                        }}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.billingName || ""}
                        invalid={
                          validation.touched.billingName &&
                          validation.errors.billingName
                            ? true
                            : false
                        }
                      />
                      {validation.touched.billingName &&
                      validation.errors.billingName ? (
                        <FormFeedback type="invalid">
                          {validation.errors.billingName}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Amount</Label>
                      <Input
                        name="Amount"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.Amount || ""}
                        invalid={
                          validation.touched.Amount && validation.errors.Amount
                            ? true
                            : false
                        }
                      />
                      {validation.touched.Amount && validation.errors.Amount ? (
                        <FormFeedback type="invalid">
                          {validation.errors.Amount}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Invoice Status</Label>
                      <Input
                        name="status"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.status || ""}
                      >
                        <option>Paid</option>
                        <option>Pending</option>
                      </Input>
                      {validation.touched.status && validation.errors.status ? (
                        <FormFeedback type="invalid">
                          {validation.errors.status}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Badge Class</Label>
                      <Input
                        name="color"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.color || ""}
                      >
                        <option>success</option>
                        <option>warning</option>
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
