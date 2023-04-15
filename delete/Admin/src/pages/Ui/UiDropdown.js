import React, { useState } from "react"
import {
  Col,
  Row,
  Card,
  CardBody,
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  ButtonDropdown,
  CardTitle,
  Container,
  Label,
  Input
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiDropdown = () => {
  const [singlebtn, setSinglebtn] = useState(false)
  const [singlebtn1, setSinglebtn1] = useState(false)
  const [btnprimary1, setBtnprimary1] = useState(false)
  const [btnsecondary1, setBtnsecondary1] = useState(false)
  const [btnsuccess1, setBtnsuccess1] = useState(false)
  const [btnInfo1, setBtnInfo1] = useState(false)
  const [btnWarning1, setBtnWarning1] = useState(false)
  const [btnDanger1, setBtnDanger1] = useState(false)
  const [drp_primary1, setDrp_primary1] = useState(false)
  const [drp_secondary1, setDrp_secondary1] = useState(false)
  const [drp_success1, setDrp_success1] = useState(false)
  const [drp_info1, setDrp_info1] = useState(false)
  const [drp_warning1, setDrp_warning1] = useState(false)
  const [drp_danger1, setDrp_danger1] = useState(false)
  const [drp_secondary, setDrp_secondary] = useState(false)
  const [drp_secondary_lg, setDrp_secondary_lg] = useState(false)
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false)
  const [drp_secondary_sm1, setDrp_secondary_sm1] = useState(false)
  const [drp_menu_end, setDrp_menu_end] = useState(false)
  const [dropup1, setDropup1] = useState(false)
  const [drp_up11, setDrp_up11] = useState(false)
  const [drp_left_right_align, setDrp_left_right_align] = useState(false)
  const [drp_right_left_align, setDrp_right_left_align] = useState(false)
  const [info_dropup1, setInfo_dropup1] = useState(false)
  const [infodrp_up11, setInfodrp_up11] = useState(false)
  const [info_dropup111, setInfo_dropup111] = useState(false)
  const [infodrp_up1111, setInfodrp_up1111] = useState(false)
  const [drp_default_dropdown, setDrp_default_dropdown] = useState(false)
  const [drp_clickable_inside, setDrp_clickable_inside] = useState(false)
  const [drp_with_header, setDrp_with_header] = useState(false)
  const [drp_with_text, setDrp_with_text] = useState(false)
  const [drp_with_form, setDrp_with_form] = useState(false)
  const [drp_menu_dark, setDrp_menu_dark] = useState(false)
  
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Dropdowns" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Single button dropdowns</CardTitle>
                  <p className="card-title-desc">
                    Any single <code className="highlighter-rouge">.btn</code>{" "}
                    can be turned into a dropdown toggle with some markup
                    changes. Here’s how you can put them to work with either{" "}
                    <code className="highlighter-rouge">&lt;button&gt;</code>{" "}
                    elements:
                  </p>
                  <Row>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn}
                        toggle={() => setSinglebtn(!singlebtn)}
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                          caret
                        >
                          Dropdown button <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>{" "}
                    </Col>
                    <Col sm={6}>
                      <Dropdown
                        isOpen={singlebtn1}
                        toggle={() => setSinglebtn1(!singlebtn1)}
                        className="mt-4 mt-sm-0"
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-light"
                          caret
                        >
                          Dropdown link <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Variant</CardTitle>
                  <p className="card-title-desc mb-3">
                    The best part is you can do this with any button variant,
                    too:
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnprimary1}
                        toggle={() => setBtnprimary1(!btnprimary1)}
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-primary"
                        >
                          Primary <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnsecondary1}
                        toggle={() => setBtnsecondary1(!btnsecondary1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-light">
                          Light <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnsuccess1}
                        toggle={() => setBtnsuccess1(!btnsuccess1)}
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-success"
                        >
                          Success <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnInfo1}
                        toggle={() => setBtnInfo1(!btnInfo1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-info">
                          Info <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnWarning1}
                        toggle={() => setBtnWarning1(!btnWarning1)}
                      >
                        <DropdownToggle
                          tag="button"
                          className="btn btn-warning"
                        >
                          Warning <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <Dropdown
                        isOpen={btnDanger1}
                        toggle={() => setBtnDanger1(!btnDanger1)}
                      >
                        <DropdownToggle tag="button" className="btn btn-danger">
                          Danger <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Split button dropdowns</CardTitle>
                  <p className="card-title-desc mb-3">
                    The best part is you can do this with any button variant,
                    too:
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_primary1}
                        toggle={() => setDrp_primary1(!drp_primary1)}
                      >
                        <Button id="caret" color="primary">
                          Primary
                        </Button>
                        <DropdownToggle
                          caret
                          color="primary"
                          className="dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary1}
                        toggle={() => setDrp_secondary1(!drp_secondary1)}
                      >
                        <Button id="caret" color="light">
                          Light
                        </Button>
                        <DropdownToggle
                          caret
                          color="light"
                          className="dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_success1}
                        toggle={() => setDrp_success1(!drp_success1)}
                      >
                        <Button id="caret" color="success">
                          Success
                        </Button>
                        <DropdownToggle
                          caret
                          color="success"
                          className="dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_info1}
                        toggle={() => setDrp_info1(!drp_info1)}
                      >
                        <Button id="caret" color="info">
                          Info
                        </Button>
                        <DropdownToggle
                          caret
                          color="info"
                          className="dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_warning1}
                        toggle={() => setDrp_warning1(!drp_warning1)}
                      >
                        <Button id="caret" color="warning">
                          Warning
                        </Button>
                        <DropdownToggle
                          caret
                          color="warning"
                          className="dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_danger1}
                        toggle={() => setDrp_danger1(!drp_danger1)}
                      >
                        <Button id="caret" color="danger">
                          Danger
                        </Button>
                        <DropdownToggle
                          caret
                          color="danger"
                          className="dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem header>Header</DropdownItem>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>{" "}
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Sizing</CardTitle>
                  <p className="card-title-desc mb-3">
                    Button dropdowns work with buttons of all sizes, including
                    default and split dropdown buttons.
                  </p>
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary}
                        toggle={() => setDrp_secondary(!drp_secondary)}
                      >
                        <DropdownToggle
                          caret
                          color="primary"
                          className="btn btn-primary btn-lg"
                        >
                          Large button <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary_lg}
                        toggle={() => setDrp_secondary_lg(!drp_secondary_lg)}
                      >
                        <Button color="light" className="btn btn-light btn-lg">
                          {" "}
                          Large button{" "}
                        </Button>
                        <DropdownToggle
                          caret
                          color="light"
                          className="btn btn-light btn-lg dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary_sm}
                        toggle={() => setDrp_secondary_sm(!drp_secondary_sm)}
                      >
                        <DropdownToggle
                          caret
                          color="primary"
                          className="btn btn-primary btn-sm"
                        >
                          Small button <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_secondary_sm1}
                        toggle={() => setDrp_secondary_sm1(!drp_secondary_sm1)}
                      >
                        <Button color="light" className="btn btn-light btn-sm">
                          Small button
                        </Button>
                        <DropdownToggle
                          caret
                          color="light"
                          className="btn btn-light btn-sm dropdown-toggle-split"
                        >
                          <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Menu Alignment</h4>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">.dropdown-menu-end</code>
                    to a <code className="highlighter-rouge">
                      .dropdown-menu
                    </code>{" "}
                    to right align the dropdown menu.
                  </p>

                  <div className="d-flex flex-wrap gap-3">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_menu_end}
                        toggle={() => setDrp_menu_end(!drp_menu_end)}
                        >
                        <Button className="btn btn-secondary">
                          Right-aligned menu example{" "}
                        </Button>
                        <DropdownToggle
                            caret
                            className="btn btn-secondary btn-sm dropdown-toggle-split"
                        >
                            <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end">
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_left_right_align}
                        toggle={() => setDrp_left_right_align(!drp_left_right_align)}
                      >
                      <Button className="btn btn-secondary">
                        Left-aligned but right aligned when large screen{" "}
                      </Button>
                        <DropdownToggle
                            caret
                            className="btn btn-secondary btn-sm dropdown-toggle-split"
                        >
                            <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-lg-end">
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_right_left_align}
                        toggle={() => setDrp_right_left_align(!drp_right_left_align)}
                      >
                      <Button className="btn btn-secondary">
                        Right-aligned but left aligned when large screen{" "}
                      </Button>
                        <DropdownToggle
                            caret
                            className="btn btn-secondary btn-sm dropdown-toggle-split"
                        >
                            <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-end dropdown-menu-lg-start">
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Auto Close Behavior</h4>
                  <p className="card-title-desc">
                    By default, the dropdown menu is closed when clicking inside
                    or outside the dropdown menu. You can use the{" "}
                    <code>autoClose</code> option to change this behavior of the
                    dropdown.
                  </p>

                  <div className="d-flex gap-2 flex-wrap">
                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_default_dropdown}
                        toggle={() => setDrp_default_dropdown(!drp_default_dropdown)}
                      >
                     
                        <DropdownToggle
                            caret
                            className="btn btn-secondary"
                        >
                           Default dropdown{" "}
                            <i className="mdi mdi-chevron-down" />
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_clickable_inside}
                        toggle={() => setDrp_clickable_inside(!drp_clickable_inside)}
                      >
                     
                        <DropdownToggle
                            caret
                            className="btn btn-secondary"
                        >
                            Clickable outside <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_clickable_inside}
                        toggle={() => setDrp_clickable_inside(!drp_clickable_inside)}
                      >
                     
                        <DropdownToggle
                            caret
                            className="btn btn-secondary"
                        >
                           Clickable inside <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_clickable_inside}
                        toggle={() => setDrp_clickable_inside(!drp_clickable_inside)}
                      >
                     
                        <DropdownToggle
                            caret
                            className="btn btn-secondary"
                        >
                           Manual close <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                            <DropdownItem>Menu Icon</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Menu Content</h4>
                  <p className="card-title-desc">
                    Example of dropdown menu Headers, Text, Forms content
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <div className="btn-group">

                      <ButtonDropdown
                        isOpen={drp_with_header}
                        toggle={() => setDrp_with_header(!drp_with_header)}
                      >
                        <DropdownToggle
                          color="primary"
                          className="dropdown-toggle"
                        >
                           Header <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <div className="dropdown-header noti-title">
                            <h5 className="font-size-13 text-muted text-truncate mn-0">
                              Welcome Jessie!
                            </h5>
                          </div>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                    </div>

                    <div className="btn-group">

                      <ButtonDropdown
                        isOpen={drp_with_text}
                        toggle={() => setDrp_with_text(!drp_with_text)}
                      >
                        <DropdownToggle
                          color="success"
                          className="dropdown-toggle"
                        >
                          Text <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-md p-3">
                          <p>
                            Some example text that&apos;s free-flowing within the
                            dropdown menu.
                          </p>
                          <p className="mb-0">And this is more example text.</p>
                        </DropdownMenu>
                      </ButtonDropdown>

                    </div>

                    <div className="btn-group">
                      <ButtonDropdown
                        isOpen={drp_with_form}
                        toggle={() => setDrp_with_form(!drp_with_form)}
                      >
                        <DropdownToggle
                          color="light"
                          className="dropdown-toggle"
                        >
                           Forms <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-md p-3">
                        <form>
                          <div className="mb-2">
                            <Label
                              className="form-label"
                              htmlFor="exampleDropdownFormEmail"
                            >
                              Email address
                            </Label>
                            <Input
                              type="email"
                              className="form-control"
                              id="exampleDropdownFormEmail"
                              placeholder="email@example.com"
                            />
                          </div>
                          <div className="mb-2">
                            <Label
                              className="form-label"
                              htmlFor="exampleDropdownFormPassword"
                            >
                              Password
                            </Label>
                            <Input
                              type="password"
                              className="form-control"
                              id="exampleDropdownFormPassword"
                              placeholder="Password"
                            />
                          </div>
                          <div className="mb-2">
                            <div className="form-check custom-checkbox">
                              <Input
                                type="checkbox"
                                className="form-check-input"
                                id="rememberdropdownCheck"
                              />
                              <Label
                                className="form-check-label"
                                htmlFor="rememberdropdownCheck"
                              >
                                Remember me
                              </Label>
                            </div>
                          </div>
                          <Button type="submit" color="primary">
                            Sign in
                          </Button>
                        </form>
                        </DropdownMenu>
                      </ButtonDropdown>

                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Dropdown Menu Dark</h4>
                  <p className="card-title-desc">
                    Opt into darker dropdowns to match a dark navbar or custom
                    style by adding <code>.dropdown-menu-dark</code> onto an
                    existing <code>.dropdown-menu</code>. No changes are
                    required to the dropdown items.
                  </p>

                  <div className="btn-group">
                    <ButtonDropdown
                        isOpen={drp_menu_dark}
                        toggle={() => setDrp_menu_dark(!drp_menu_dark)}
                      >
                        <DropdownToggle
                          color="secondary"
                          className="dropdown-toggle"
                        >
                          Menu is right-aligned <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-dark">
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dropup Variation</CardTitle>
                  <p className="card-title-desc">
                    Trigger dropdown menus above elements by adding{" "}
                    <code className="highlighter-rouge">.dropup</code> to the
                    parent element.
                  </p>
                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      className="btn-group dropup"
                      isOpen={dropup1}
                      direction="up"
                      toggle={() => setDropup1(!dropup1)}
                    >
                      <DropdownToggle
                        color="light"
                        className="btn btn-light waves-effect"
                      >
                        Dropup <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                   
                    <ButtonDropdown
                      direction="up"
                      isOpen={drp_up11}
                      toggle={() => setDrp_up11(!drp_up11)}
                      className="btn-group"
                    >
                      <Button id="caret" color="light">
                        Split dropup
                      </Button>
                      <DropdownToggle caret color="light">
                        <i className="mdi mdi-chevron-up" />
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dropleft variation</CardTitle>
                  <p className="card-title-desc">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>.dropstart</code> to the parent element.
                  </p>

                  <div className="d-flex gap-2 flex-wrap">
                    <Dropdown
                      isOpen={info_dropup111}
                      direction="left"
                      toggle={() => setInfo_dropup111(!info_dropup111)}
                    >
                      <DropdownToggle color="light" className="btn btn-light">
                        <i className="mdi mdi-chevron-left" /> Dropleft
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another action</DropdownItem>
                        <DropdownItem>Something else here</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
               
                    <ButtonDropdown
                      direction="left"
                      isOpen={infodrp_up1111}
                      toggle={() => setInfodrp_up1111(!infodrp_up1111)}
                    >
                      <DropdownToggle color="light">
                        <i className="mdi mdi-chevron-left" />
                      </DropdownToggle>
                      <Button id="caret" color="light">
                        Split dropstart
                      </Button>
                      <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem>Action</DropdownItem>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Dropright variation</CardTitle>
                  <p className="card-title-desc mb-3">
                    Trigger dropdown menus at the right of the elements by
                    adding <code>.dropend</code> to the parent element.
                  </p>

                  <div>
                    <div className="btn-group mt-2 me-1 dropend">
                      <Dropdown
                        isOpen={info_dropup1}
                        direction="right"
                        toggle={() => setInfo_dropup1(!info_dropup1)}
                      >
                        <DropdownToggle
                          color="light"
                          className="btn btn-light"
                          caret
                        >
                          Dropright <i className="mdi mdi-chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </div>{" "}
                    <div className="btn-group mt-2 me-1 dropend">
                      <ButtonDropdown
                        direction="right"
                        isOpen={infodrp_up11}
                        toggle={() => setInfodrp_up11(!infodrp_up11)}
                      >
                        <Button
                          id="caret"
                          color="light"
                          className="btn-light waves-effect waves-light"
                        >
                          Split dropend
                        </Button>
                        <DropdownToggle
                          caret
                          color="light"
                          className="waves-effect waves-light dropdown-toggle-split dropdown-toggle"
                        >
                          <i className="mdi mdi-chevron-right" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another action</DropdownItem>
                          <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
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

export default UiDropdown
