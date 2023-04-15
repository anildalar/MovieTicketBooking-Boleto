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
  getOrders as onGetOrders,
  addNewOrder as onAddNewOrder,
  updateOrder as onUpdateOrder,
  deleteOrder as onDeleteOrder,
} from "../../../store/actions";

import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
} from "./EcommerceOrderCol";

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
  Card,
  CardBody,
} from "reactstrap";
import DeleteModal from "../../../components/Common/DeleteModal";

function DatatableTables() {
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [order1, setOrder1] = useState([]);

  // validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      orderId: (order1 && order1.orderId) || "",
      billingName: (order1 && order1.billingName) || "",
      orderdate: (order1 && order1.orderdate) || "",
      total: (order1 && order1.total) || "",
      paymentStatus: (order1 && order1.paymentStatus) || "Paid",
      badgeclass: (order1 && order1.badgeclass) || "success",
    },
    validationSchema: Yup.object({
      orderId: Yup.string().required("Please Enter Your Order Id"),
      billingName: Yup.string().required("Please Enter Your Billing Name"),
      orderdate: Yup.string().required("Please Enter Your Order Date"),
      total: Yup.string().required("Total Amount"),
      paymentStatus: Yup.string().required("Please Enter Your Payment Status"),
      badgeclass: Yup.string().required("Please Enter Your Badge Class"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updateOrder = {
          id: order1 ? order1.id : 0,
          orderId: values.orderId,
          billingName: values.billingName,
          orderdate: values.orderdate,
          total: values.total,
          paymentStatus: values.paymentStatus,
          badgeclass: values.badgeclass,
        };
       
        dispatch(onUpdateOrder(updateOrder));
        validation.resetForm();
      } else {
        const newOrder = {
          id: Math.floor(Math.random() * (30 - 20)) + 20,
          orderId: values["orderId"],
          billingName: values["billingName"],
          orderdate: values["orderdate"],
          total: values["total"],
          paymentStatus: values["paymentStatus"],
          badgeclass: values["badgeclass"],
        };
       
        // save new order1
        dispatch(onAddNewOrder(newOrder));
        validation.resetForm();
      }
      toggle();
    },
  });


  const dispatch = useDispatch();
  const { orders } = useSelector((state) => ({
    orders: state.ecommerce.orders,
  }));
  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders());
    }
  }, [dispatch, orders]);

  useEffect(() => {
    if (orders && !orders.length) {
      dispatch(onGetOrders());
    }
  }, [dispatch, orders]);

  useEffect(() => {
  }, [orders]);

  useEffect(() => {
    if (!isEmpty(orders)) {
      setIsEdit(false);
    }
  }, [orders]);

  const toggle = useCallback(() => {
    if (modal) {
      setModal(false);
      setOrder1(null);
    } else {
      setModal(true);
    }
  }, [modal]);

  const handleOrderClick = useCallback((arg) => {
    const order1 = arg;
    setOrder1({
      id: order1.id,
      orderId: order1.orderId,
      billingName: order1.billingName,
      orderdate: order1.orderdate,
      total: order1.total,
      paymentStatus: order1.paymentStatus,
      badgeclass: order1.badgeclass,
    });

    setIsEdit(true);

    toggle();
  }, [toggle]);

  //delete order1
  const [deleteModal, setDeleteModal] = useState(false);

  const onClickDelete = (order1) => {
    setOrder1(order1);
    setDeleteModal(true);
  };

  const handleDeleteOrder = () => {
    if (order1.id) {
      dispatch(onDeleteOrder(order1));
      setDeleteModal(false);
    }
  };
  const handleOrderClicks = () => {
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
        Cell: (cellProps) => {
          return (
            <input type="checkbox" className="selection-input-4" />
            );
        },
      },
      {
        Header: "Order ID",
        accessor: "orderId",
        disableGlobalFilter : true,
        filterable: true,
        Cell: (cellProps) => {
          return <OrderId {...cellProps} />;
        },
      },
      {
        Header: "Date",
        accessor: "orderdate",
        filterable: true,
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
        Header: "Total",
        accessor: "total",
        filterable: true,
        Cell: (cellProps) => {
          return <Total {...cellProps} />;
        },
      },
      {
        Header: "Payment Status",
        accessor: "paymentStatus",
        filterable: true,
        Cell: (cellProps) => {
          return <PaymentStatus {...cellProps} />;
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
                className="text-success"
                onClick={() => {
                  const orderData = cellProps.row.original;
                  handleOrderClick(orderData);
                }}
              >
                <i className="mdi mdi-pencil font-size-18" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const orderData = cellProps.row.original;
                  onClickDelete(orderData)
                }}
              >
                <i className="mdi mdi-delete font-size-18" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>
            </div>
          );
        },
      },
    ],
    [handleOrderClick]
  );

  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteOrder}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Orders" />
          <Row>
            <Col xs="12">
              <Card>
                <CardBody>
                  <TableContainer
                    columns={columns}
                    data={orders}
                    isGlobalFilter={true}
                    isAddTableWithoutBorderStrap={true}
                    isAddOrder={true}
                    handleOrderClicks={handleOrderClicks}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle} tag="h4">
              {!!isEdit ? "Edit Order" : "Add Order"}
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
                      <Label className="form-label">Order Id</Label>
                      <Input
                        name="orderId"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderId || ""}
                        invalid={
                          validation.touched.orderId &&
                          validation.errors.orderId
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderId &&
                      validation.errors.orderId ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderId}
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
                      <Label className="form-label">Order Date</Label>
                      <Input
                        name="orderdate"
                        type="date"
                        // value={orderList1.orderdate || ""}
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.orderdate || ""}
                        invalid={
                          validation.touched.orderdate &&
                          validation.errors.orderdate
                            ? true
                            : false
                        }
                      />
                      {validation.touched.orderdate &&
                      validation.errors.orderdate ? (
                        <FormFeedback type="invalid">
                          {validation.errors.orderdate}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Total</Label>
                      <Input
                        name="total"
                        type="text"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.total || ""}
                        invalid={
                          validation.touched.total && validation.errors.total
                            ? true
                            : false
                        }
                      />
                      {validation.touched.total && validation.errors.total ? (
                        <FormFeedback type="invalid">
                          {validation.errors.total}
                        </FormFeedback>
                      ) : null}
                    </div>
                    <div className="mb-3">
                      <Label className="form-label">Payment Status</Label>
                      <Input
                        name="paymentStatus"
                        type="select"
                        className="form-select"
                        onChange={validation.handleChange}
                        onBlur={validation.handleBlur}
                        value={validation.values.paymentStatus || ""}
                      >
                        <option>Paid</option>
                        <option>Chargeback</option>
                        <option>Refund</option>
                      </Input>
                      {validation.touched.paymentStatus &&
                      validation.errors.paymentStatus ? (
                        <FormFeedback type="invalid">
                          {validation.errors.paymentStatus}
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
