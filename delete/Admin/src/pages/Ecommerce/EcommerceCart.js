import React, { useState } from "react";

import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Table,
  Input,
  InputGroup,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";
import { productListvar } from "../../common/data/ecommerce";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const EcommerceCart = () => {
  const [productList, setproductList] = useState(productListvar);

  function countUP(id, prev_data_attr) {
    setproductList(
      productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr + 1 } : p
      )
    );
  }

  function countDown(id, prev_data_attr) {
    setproductList(
      productList.map((p) =>
        p.id === id ? { ...p, data_attr: prev_data_attr - 1 } : p
      )
    );
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ecommerce" breadcrumbItem="Cart" />

          <Row className="mb-3">
            <Col xl={8}>
              {productList.map((product) => (
                <Card className="border shadow-none" key={product.id}>
                  <CardBody>
                    <div className="d-flex align-items-start border-bottom pb-3">
                      <div className="flex-shrink-0 me-4">
                        <img src={product.img} alt="" className="avatar-lg" />
                      </div>
                      <div className="flex-grow-1 align-self-center overflow-hidden">
                        <div>
                          <h5 className="text-truncate font-size-16">
                            <Link
                              to={"/ecommerce-product-detail"}
                              className="text-dark"
                            >
                              {product.name}
                            </Link>
                          </h5>
                          <p className="mb-1">
                            Color :{" "}
                            <span className="fw-medium">{product.color}</span>
                          </p>
                          <p>
                            Size : <span className="fw-medium">{[product.size]}</span>
                          </p>
                        </div>
                      </div>
                      <div className="ms-2">
                        <ul className="list-inline mb-0 font-size-16">
                          <li className="list-inline-item">
                            <Link to="#" className="text-muted px-2">
                              <i className="uil uil-trash-alt"></i>
                            </Link>{" "}
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link to="#" className="text-muted px-2">
                              <i className="uil uil-heart"></i>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div>
                      <Row>
                        <Col md={4}>
                          <div className="mt-3">
                            <p className="text-muted mb-2">Price</p>
                            <h5 className="font-size-16">${product.price}</h5>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="mt-3">
                            <p className="text-muted mb-2">Quantity</p>
                            <div
                              style={{ width: "110px" }}
                              className="product-cart-touchspin"
                            >
                              <InputGroup className="bootstrap-touchspin bootstrap-touchspin-injected">
                                <span className="input-group-btn input-group-append">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      countDown(product.id, product.data_attr);
                                    }}
                                    className="bootstrap-touchspin-up"
                                  >
                                    -
                                  </Button>
                                </span>

                                <Input
                                  type="text"
                                  value={product.data_attr}
                                  name="demo_vertical"
                                  readOnly
                                />
                                <span className="input-group-btn input-group-prepend">
                                  <Button
                                    color="primary"
                                    onClick={() => {
                                      countUP(product.id, product.data_attr);
                                    }}
                                    className="bootstrap-touchspin-down"
                                  >
                                    +
                                  </Button>
                                </span>
                              </InputGroup>
                            </div>
                          </div>
                        </Col>
                        <Col md={4}>
                          <div className="mt-3">
                            <p className="text-muted mb-2">Total</p>
                            <h5 className="font-size-16">${product.total}</h5>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
              ))}
              <Row className="mt-4">
                <Col sm={6}>
                  <Link to="ecommerce-products" className="btn btn-link text-muted">
                    <i className="uil uil-arrow-left me-1"></i> Continue Shopping </Link>
                </Col>
                <Col sm={6}>
                  <div className="text-sm-end mt-2 mt-sm-0">
                    <Link to="ecommerce-checkout" className="btn btn-success">
                      <i className="uil uil-shopping-cart-alt me-1"></i> Checkout </Link>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={4}>
              <div className="mt-5 mt-lg-3">
                <Card className="border shadow-none">
                  <div className="card-header bg-transparent border-bottom py-3 px-4">
                    <h5 className="font-size-16 mb-0">
                      Order Summary <span className="float-end">#MN0124</span>
                    </h5>
                  </div>
                  <CardBody className="p-4">
                    <div className="table-responsive">
                      <Table className="table mb-0">
                        <tbody>
                          <tr>
                            <td>Sub Total :</td>
                            <td className="text-end">$ 780</td>
                          </tr>
                          <tr>
                            <td>Discount : </td>
                            <td className="text-end">- $ 78</td>
                          </tr>
                          <tr>
                            <td>Shipping Charge :</td>
                            <td className="text-end">$ 25</td>
                          </tr>
                          <tr>
                            <td>Estimated Tax : </td>
                            <td className="text-end">$ 18.20</td>
                          </tr>
                          <tr className="bg-light">
                            <th>Total :</th>
                            <td className="text-end">
                              <span className="fw-bold">$ 745.2</span>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EcommerceCart;
