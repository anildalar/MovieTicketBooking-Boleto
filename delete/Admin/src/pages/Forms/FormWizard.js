import React, { useState } from "react"

import {
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane
} from "reactstrap"

import classnames from "classnames"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const FormWizard = () => {
  const [activeTab, setactiveTab] = useState(1)
  const [activeTabVartical, setoggleTabVertical] = useState(1)

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab)
      }
    }
  }

  function toggleTabVertical(tab) {
    if (activeTabVartical !== tab) {
      if (tab >= 1 && tab <= 4) {
        setoggleTabVertical(tab)
      }
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Forms" breadcrumbItem="Form Wizard" />

          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Basic Wizard</h4>
                  <div className="wizard clearfix">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({ current: activeTab === 1 })}>
                          <NavLink
                            className={classnames({ current: activeTab === 1 })}
                            onClick={() => {
                              setactiveTab(1)
                            }}
                          >
                            <span className="number">1.</span>{" "}
                            Seller Details
                          </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 2 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 2 })}
                            onClick={() => {
                              setactiveTab(2)
                            }}
                          >
                            <span className="number me-2">2.</span>{" "}
                            Company Document
                          </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 3 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 3 })}
                            onClick={() => {
                              setactiveTab(3)
                            }}
                          >
                            <span className="number">3.</span>{" "}
                          Bank Details
                        </NavLink>
                        </NavItem>
                        <NavItem className={classnames({ current: activeTab === 4 })}>
                          <NavLink
                            className={classnames({ active: activeTab === 4 })}
                            onClick={() => {
                              setactiveTab(4)
                            }}
                          >
                            <span className="number">4.</span>{" "}
                          Confirm Detail
                        </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <div className="body">
                        <TabContent
                          activeTab={activeTab}
                        >
                          <TabPane tabId={1}>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-firstname-input1">
                                      First name
                                </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-firstname-input1"
                                      placeholder="Enter your First name"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-lastname-input2">
                                      Last name
                                </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-lastname-input2"
                                      placeholder="Enter your Last Name"
                                    />
                                  </div>
                                </Col>
                              </Row>

                              <Row>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-phoneno-input3">
                                      Phone
                                </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-phoneno-input3"
                                      placeholder="Enter your Phone Number"
                                    />
                                  </div>
                                </Col>
                                <Col lg="6">
                                  <div className="mb-3">
                                    <Label for="basicpill-email-input4">
                                      Email
                                </Label>
                                    <Input
                                      type="email"
                                      className="form-control"
                                      id="basicpill-email-input4"
                                      placeholder="Enter your email address"
                                    />
                                  </div>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="12">
                                  <div className="mb-3">
                                    <Label for="basicpill-address-input1">
                                      Address
                                </Label>
                                    <textarea
                                      id="basicpill-address-input1"
                                      className="form-control"
                                      placeholder="Enter your Address"
                                      rows="2"
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Form>
                          </TabPane>
                          <TabPane tabId={2}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-pancard-input5">
                                        PAN Card
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-pancard-input5"
                                        placeholder="Enter your Pancard Number"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-vatno-input6">
                                        VAT/TIN No.
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-vatno-input6"
                                        placeholder="Enter your VAT/TIN number."
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cstno-input7">
                                        CST No.
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cstno-input7"
                                        placeholder="Enter your CST number"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-servicetax-input8">
                                        Service Tax No.
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-servicetax-input8"
                                        placeholder="Enter your Service Tax number"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-companyuin-input9">
                                        Company UIN
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-companyuin-input9"
                                        placeholder="Enter your Company UIN number"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-declaration-input10">
                                        Declaration
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-Declaration-input10"
                                        placeholder="Enter your Declaration"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={3}>
                            <div>
                              <Form>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-namecard-input11">
                                        Name on Card
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-namecard-input11"
                                        placeholder="Enter your Name on Card"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label>Credit Card Type</Label>
                                      <select className="form-select">
                                        <option defaultValue></option>
                                        <option value="AE">American Express</option>
                                        <option value="VI">Visa</option>
                                        <option value="MC">MasterCard</option>
                                        <option value="DI">Discover</option>
                                      </select>
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-cardno-input12">
                                        Credit Card Number
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-cardno-input12"
                                        placeholder="Enter your Enter your Credit Card Number"
                                      />
                                    </div>
                                  </Col>

                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-card-verification-input">
                                        Card Verification Number
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-card-verification-input"
                                        placeholder="Enter your Card Verification Number"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col lg="6">
                                    <div className="mb-3">
                                      <Label for="basicpill-expiration-input13">
                                        Expiration Date
                                  </Label>
                                      <Input
                                        type="text"
                                        className="form-control"
                                        id="basicpill-expiration-input13"
                                        placeholder="Enter your Expiration Date"
                                      />
                                    </div>
                                  </Col>
                                </Row>
                              </Form>
                            </div>
                          </TabPane>
                          <TabPane tabId={4}>
                            <div className="row justify-content-center">
                              <Col lg="6">
                                <div className="text-center">
                                  <div className="mb-4">
                                    <i className="mdi mdi-check-circle-outline text-success display-4" />
                                  </div>
                                  <div>
                                    <h5>Confirm Detail</h5>
                                    <p className="text-muted">
                                      If several languages coalesce, the grammar of
                                      the resulting
                                </p>
                                  </div>
                                </div>
                              </Col>
                            </div>
                          </TabPane>
                        </TabContent>
                      </div>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTab === 1 ? "previous disabled" : "previous"
                          }
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={activeTab === 4 ? "next disabled" : "next"}
                        >
                          <Link
                            to="#"
                            className="btn btn-primary"
                            onClick={() => {
                              toggleTab(activeTab + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>

                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="12">
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Vertical Wizard</h4>
                  <div className="vertical-wizard wizard clearfix vertical">
                    <div className="steps clearfix">
                      <ul>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 1,
                          })}>
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 1,
                            })}
                            onClick={() => {
                              toggleTabVertical(1)
                            }}
                          >
                            <span className="number">1.</span>{" "}
                            Seller Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 2,
                          })}>
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 2,
                            })}
                            onClick={() => {
                              toggleTabVertical(2)
                            }}
                          >
                            <span className="number">2.</span>{" "}
                            <span>Company Document</span>
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 3,
                          })}>
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 3,
                              'done': true,
                            })}
                            onClick={() => {
                              toggleTabVertical(3)
                            }}
                          >
                            <span className="number">3.</span>{" "}
                            Bank Details
                          </NavLink>
                        </NavItem>
                        <NavItem
                          className={classnames({
                            current: activeTabVartical === 4,
                          })}>
                          <NavLink
                            className={classnames({
                              active: activeTabVartical === 4,
                              'done': true,
                            })}
                            onClick={() => {
                              toggleTabVertical(4)
                            }}
                          >
                            <span className="number">4.</span>{" "}
                            Confirm Detail
                          </NavLink>
                        </NavItem>
                      </ul>
                    </div>
                    <div className="content clearfix">
                      <TabContent
                        activeTab={activeTabVartical}
                        className="body"
                      >
                        <TabPane tabId={1}>
                          <Form>
                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-firstname-input1">
                                    First name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-firstname-input1"
                                    placeholder="Enter your First Name"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-lastname-input2">
                                    Last name
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-lastname-input2"
                                    placeholder="Enter your Last Name"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>

                            <Row>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-phoneno-input3">
                                    Phone
                                  </Label>
                                  <Input
                                    type="text"
                                    className="form-control"
                                    id="basicpill-phoneno-input3"
                                    placeholder="Enter your Phone"
                                  />
                                </FormGroup>
                              </Col>
                              <Col lg="6">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-email-input4">
                                    Email
                                  </Label>
                                  <Input
                                    type="email"
                                    className="form-control"
                                    id="basicpill-email-input4"
                                    placeholder="Enter your Email address"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                              <Col lg="12">
                                <FormGroup className="mb-3">
                                  <Label htmlFor="basicpill-address-input1">
                                    Address
                                  </Label>
                                  <textarea
                                    id="basicpill-address-input1"
                                    className="form-control"
                                    placeholder="Enter your Address"
                                    rows="2"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </Form>
                        </TabPane>
                        <TabPane tabId={2}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-pancard-input5">
                                      PAN Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-pancard-input5"
                                      placeholder="Enter your PAN Card number"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-vatno-input6">
                                      VAT/TIN No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-vatno-input6"
                                      placeholder="Enter your VAT/TIN number"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-cstno-input7">
                                      CST No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cstno-input7"
                                      placeholder="Enter your CST number"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-servicetax-input8">
                                      Service Tax No.
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-servicetax-input8"
                                      placeholder="Enter your Service Tax number"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-companyuin-input9">
                                      Company UIN
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-companyuin-input9"
                                      placeholder="Enter your Company UIN number"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-declaration-input10">
                                      Declaration
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-Declaration-input10"
                                      placeholder="Enter your Declaration"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={3}>
                          <div>
                            <Form>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-namecard-input11">
                                      Name on Card
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-namecard-input11"
                                      placeholder="Enter your Name on Card"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label>Credit Card Type</Label>
                                    <select className="form-select">
                                      <option>
                                        Select Card Type
                                      </option>
                                      <option>
                                        American Express
                                      </option>
                                      <option>Visa</option>
                                      <option>MasterCard</option>
                                      <option>Discover</option>
                                    </select>
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-cardno-input12">
                                      Credit Card Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-cardno-input12"
                                      placeholder="Enter your Enter Credit Card Number"
                                    />
                                  </FormGroup>
                                </Col>

                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-card-verification-input">
                                      Card Verification Number
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-card-verification-input"
                                      placeholder="Enter your Card Verification Number"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                              <Row>
                                <Col lg="6">
                                  <FormGroup className="mb-3">
                                    <Label htmlFor="basicpill-expiration-input13">
                                      Expiration Date
                                    </Label>
                                    <Input
                                      type="text"
                                      className="form-control"
                                      id="basicpill-expiration-input13"
                                      placeholder="Enter your Expiration Date"
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Form>
                          </div>
                        </TabPane>
                        <TabPane tabId={4}>
                          <div className="row justify-content-center">
                            <Col lg="6">
                              <div className="text-center">
                                <div className="mb-4">
                                  <i className="mdi mdi-check-circle-outline text-success display-4" />
                                </div>
                                <div>
                                  <h5>Confirm Detail</h5>
                                  <p className="text-muted">
                                    If several languages coalesce, the grammar
                                    of the resulting
                                  </p>
                                </div>
                              </div>
                            </Col>
                          </div>
                        </TabPane>
                      </TabContent>
                    </div>
                    <div className="actions clearfix">
                      <ul>
                        <li
                          className={
                            activeTabVartical === 1
                              ? "previous disabled"
                              : "previous"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical - 1)
                            }}
                          >
                            Previous
                          </Link>
                        </li>
                        <li
                          className={
                            activeTabVartical === 4
                              ? "next disabled"
                              : "next"
                          }
                        >
                          <Link
                            to="#"
                            onClick={() => {
                              toggleTabVertical(activeTabVartical + 1)
                            }}
                          >
                            Next
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default FormWizard
