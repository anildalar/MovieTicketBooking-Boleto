import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Col, Row, Card, CardBody, CardTitle, Container } from "reactstrap";
import {
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  ButtonDropdown,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiButtons = () => {
  const [drp_link, setdrp_link] = useState(false);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Buttons" />

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Buttons</CardTitle>
                  <p className="card-title-desc">
                    Reactstrap includes six predefined button styles, each
                    serving its own semantic purpose.
                  </p>
                  <div className="d-flex flex-wrap gap-3">
                    <Button
                      color="primary"
                      className="waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button color="light" className="waves-effect">
                      Light
                    </Button>{" "}
                    <Button
                      color="success"
                      className="waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button color="info" className="waves-effect waves-light">
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button color="danger" className="waves-effect waves-light">
                      Danger
                    </Button>{" "}
                    <Button color="dark" className="waves-effect waves-light">
                      Dark
                    </Button>{" "}
                    <Button color="link" className="waves-effect">
                      Link
                    </Button>{" "}
                    <Button color="secondary" className="waves-effect">
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Outline Buttons</CardTitle>
                  <p className="card-title-desc">
                    Replace the default modifier classes with the{" "}
                    <code className="highlighter-rouge">.btn-outline-*</code>{" "}
                    ones to remove all background images and colors on any
                    button.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      outline
                      className="waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button color="light" outline className="waves-effect">
                      Light
                    </Button>{" "}
                    <Button
                      color="success"
                      outline
                      className="waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      outline
                      className="waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      outline
                      className="waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      outline
                      className="waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      outline
                      className="waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="secondary" outline className="waves-effect">
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Rounded Buttons</CardTitle>
                  <p className="card-title-desc">
                    Use class <code>.btn-rounded</code> for button round border.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button color="light" className="btn-rounded waves-effect">
                      Light
                    </Button>{" "}
                    <Button
                      color="success"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button color="link" className="btn-rounded waves-effect">
                      Link
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn-rounded waves-effect waves-light"
                    >
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Soft background Buttons</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.btn-soft-*</code> class with <code>.btn-*</code>{" "}
                    color button for a Soft background buttons.
                  </p>
                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="btn-soft-primary waves-effect waves-light"
                    >
                      Primary
                    </Button>{" "}
                    <Button
                      color="success"
                      className="btn-soft-success waves-effect waves-light"
                    >
                      Success
                    </Button>{" "}
                    <Button
                      color="info"
                      className="btn-soft-info waves-effect waves-light"
                    >
                      Info
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="btn-soft-warning waves-effect waves-light"
                    >
                      Warning
                    </Button>{" "}
                    <Button
                      color="danger"
                      className="btn-soft-danger waves-effect waves-light"
                    >
                      Danger
                    </Button>{" "}
                    <Button
                      color="dark"
                      className="btn-soft-dark waves-effect waves-light"
                    >
                      Dark
                    </Button>{" "}
                    <Button
                      color="secondary"
                      className="btn-soft-secondary waves-effect waves-light"
                    >
                      Secondary
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Buttons with Icon</CardTitle>
                  <p className="card-title-desc">Add icon in button.</p>

                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="waves-effect waves-light"
                    >
                      Primary <i className="uil uil-arrow-right ms-2"></i>
                    </Button>{" "}
                    <Button
                      color="success"
                      className="waves-effect waves-light"
                    >
                      <i className="uil uil-check me-2"></i> Success
                    </Button>{" "}
                    <Button
                      color="warning"
                      className="waves-effect waves-light"
                    >
                      <i className="uil uil-exclamation-triangle me-2"></i>{" "}
                      Warning
                    </Button>{" "}
                    <Button color="danger" className="waves-effect waves-light">
                      <i className="uil uil-exclamation-octagon me-2"></i>{" "}
                      Danger
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Buttons Sizes</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.btn-lg</code> or <code>.btn-sm</code> for
                    additional sizes.
                  </p>

                  <div className="d-flex flex-wrap gap-2 align-items-center">
                    <Button
                      color="primary"
                      className="btn-lg waves-effect waves-light"
                    >
                      Large button
                    </Button>{" "}
                    <Button
                      color="light"
                      className="btn-lg waves-effect waves-light"
                    >
                      Large button
                    </Button>{" "}
                    <Button
                      color="primary"
                      className="btn-sm waves-effect waves-light"
                    >
                      Small button
                    </Button>{" "}
                    <Button
                      color="light"
                      className="btn-sm waves-effect waves-light"
                    >
                      Small button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Buttons width</CardTitle>
                  <p className="card-title-desc">
                    Add <code>.w-xs</code>, <code>.w-sm</code>,{" "}
                    <code>.w-md</code> and <code> .w-lg</code> className for
                    additional buttons width.
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      type="button"
                      color="primary"
                      className="w-xs waves-effect waves-light"
                    >
                      Xs
                    </Button>{" "}
                    <Button
                      type="button"
                      color="danger"
                      className="w-sm waves-effect waves-light"
                    >
                      Small
                    </Button>{" "}
                    <Button
                      type="button"
                      color="warning"
                      className="w-md waves-effect waves-light"
                    >
                      Medium
                    </Button>{" "}
                    <Button
                      type="button"
                      color="success"
                      className="w-lg waves-effect waves-light"
                    >
                      Large
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Button Tags</CardTitle>
                  <p className="card-title-desc">The <code className="highlighter-rouge">.btn</code>
                    classes are designed to be used with the <code
                      className="highlighter-rouge">&lt;button&gt;</code> element.
                    However, you can also use these classes on <code
                      className="highlighter-rouge">&lt;a&gt;</code> or <code
                      className="highlighter-rouge">&lt;input&gt;</code> elements (though
                    some browsers may apply a slightly different rendering).</p>

                  <div className="d-flex flex-wrap gap-2">
                    <Link
                      className="btn btn-primary waves-effect waves-light"
                      to="#"
                      role="button"
                    >
                      Link
                    </Link>{" "}
                    <Button
                      color="success"
                      className="btn btn-success waves-effect waves-light"
                      type="submit"
                    >
                      Button
                    </Button>{" "}
                    <input
                      className="btn btn-info"
                      type="button"
                      value="Input"
                    />{" "}
                    <input
                      className="btn btn-danger"
                      type="submit"
                      value="Submit"
                    />{" "}
                    <input
                      className="btn btn-warning"
                      type="reset"
                      value="Reset"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Toggle States</CardTitle>
                  <p className="card-title-desc">
                    Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle=&quot;button&quot;
                    </code>
                    to toggle a button’s{" "}
                    <code className="highlighter-rouge">active</code> state. If
                    you’re pre-toggling a button, you must manually add the{" "}
                    <code className="highlighter-rouge">.active</code> class{" "}
                    <strong>and</strong>{" "}
                    <code className="highlighter-rouge">
                      aria-pressed=&quot;true&quot;
                    </code>{" "}
                    to the
                    <code className="highlighter-rouge">&lt;button&gt;</code>.
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    <Button
                      color="primary"
                      className="btn btn-primary waves-effect waves-light"
                      data-toggle="button"
                      aria-pressed="false"
                    >
                      Single toggle
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Block Buttons</CardTitle>
                  <p className="card-title-desc">
                    Create block level buttons—those that span the full width of
                    a parent—by adding{" "}
                    <code className="highlighter-rouge">gap-2</code>.
                  </p>

                  <div className="d-grid gap-2">
                    <Button
                      color="primary"
                      className="btn-lg btn-block waves-effect waves-light mb-1"
                    >
                      Block level button
                    </Button>
                    <Button
                      color="light"
                      className="btn-sm btn-block waves-effect waves-light"
                    >
                      Block level button
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Checkbox & Radio Buttons</CardTitle>
                  <p className="card-title-desc">
                    Reactstrap’s{" "}
                    <code className="highlighter-rouge">.button</code> styles
                    can be applied to other elements, such as{" "}
                    <code className="highlighter-rouge">&lt;label&gt;</code>s,
                    to provide checkbox or radio style button toggling. Add{" "}
                    <code className="highlighter-rouge">
                      data-toggle=&quot;buttons&quot;
                    </code>{" "}
                    to a<code className="highlighter-rouge">.btn-group</code>{" "}
                    containing those modified buttons to enable toggling in
                    their respective styles.
                  </p>

                  <Row>
                    <Col xl={6}>
                      <div className="btn-group" data-toggle="buttons">
                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck1"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn btn-primary" htmlFor="btncheck1">
                          Checkbox 1
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck2"
                          autoComplete="off"
                        />
                        <label className="btn btn-primary" htmlFor="btncheck2">
                          Checkbox 2
                        </label>

                        <input
                          type="checkbox"
                          className="btn-check"
                          id="btncheck3"
                          autoComplete="off"
                        />
                        <label className="btn btn-primary" htmlFor="btncheck3">
                          Checkbox 3
                        </label>
                      </div>
                    </Col>
                    <Col xl={6}>
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Basic radio toggle button group"
                      >
                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio1"
                          autoComplete="off"
                          defaultChecked
                        />
                        <label className="btn btn-light" htmlFor="btnradio1">
                          Radio 1
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio2"
                          autoComplete="off"
                        />
                        <label className="btn btn-light" htmlFor="btnradio2">
                          Radio 2
                        </label>

                        <input
                          type="radio"
                          className="btn-check"
                          name="btnradio"
                          id="btnradio3"
                          autoComplete="off"
                        />
                        <label className="btn btn-light" htmlFor="btnradio3">
                          Radio 3
                        </label>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Button Group</CardTitle>
                  <p className="card-title-desc">
                    Wrap a series of buttons with{" "}
                    <code className="highlighter-rouge">.btn</code> in{" "}
                    <code className="highlighter-rouge">.btn-group</code>.
                  </p>

                  <Row>
                    <Col md={6}>
                      <div className="d-flex flex-wrap gap-2">
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Button color="primary">Left</Button>
                          <Button color="primary">Middle</Button>
                          <Button color="primary">Right</Button>
                        </div>
                        <div
                          className="btn-group"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Link
                            to="/"
                            className="btn btn-outline-primary active"
                          >
                            Left
                          </Link>
                          <Link
                            to="/"
                            className="btn btn-outline-primary"
                          >
                            Middle
                          </Link>
                          <Link
                            to="/"
                            className="btn btn-outline-primary"
                          >
                            Right
                          </Link>
                        </div>
                      </div>
                    </Col>

                    <Col md={6}>
                      <div className="d-flex flex-wrap gap-3">
                        <div
                          className="btn-group mt-4 mt-md-0"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Button
                            color="light"
                            className="btn-light"
                          >
                            <i className="bx bx-menu-alt-right"></i>
                          </Button>
                          <Button
                            color="light"
                            className="btn-light"
                          >
                            <i className="bx bx-menu"></i>
                          </Button>
                          <Button
                            color="light"
                            className="btn-light"
                          >
                            <i className="bx bx-menu-alt-left"></i>
                          </Button>
                        </div>
                        <div
                          className="btn-group mt-4 mt-md-0"
                          role="group"
                          aria-label="Basic example"
                        >
                          <Button
                            color="secondary"
                            outline
                          >
                            <i className="bx bx-menu-alt-right"></i>
                          </Button>
                          <Button
                            color="secondary"
                            outline
                          >
                            <i className="bx bx-menu"></i>
                          </Button>
                          <Button
                            color="secondary"
                            outline
                          >
                            <i className="bx bx-menu-alt-left"></i>
                          </Button>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Button Toolbar</CardTitle>
                  <p className="card-title-desc">
                    Combine sets of button groups into button toolbars for more
                    complex components. Use utility className as needed to space
                    out groups, buttons, and more.
                  </p>

                  <div
                    className="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                  >
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="First group"
                    >
                      <Button color="light">1</Button>
                      <Button color="light">2</Button>
                      <Button color="light">3</Button>
                      <Button color="light">4</Button>
                    </div>
                    <div
                      className="btn-group me-2"
                      role="group"
                      aria-label="Second group"
                    >
                      <Button color="light">5</Button>
                      <Button color="light">6</Button>
                      <Button color="light">7</Button>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Third group"
                    >
                      <Button color="light">8</Button>
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
                  <CardTitle className="h4">Button Group Sizing</CardTitle>
                  <p className="card-title-desc">
                    Instead of applying button sizing classes to every button in
                    a group, just add{" "}
                    <code className="highlighter-rouge">.btn-group-*</code> to
                    each <code className="highlighter-rouge">.btn-group</code>,
                    including each one when nesting multiple groups.
                  </p>
                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div
                      className="btn-group btn-group-lg"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="primary">Left</Button>
                      <Button color="primary">Middle</Button>
                      <Button color="primary">Right</Button>
                    </div>


                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="light">Left</Button>
                      <Button color="light">Middle</Button>
                      <Button color="light">Right</Button>
                    </div>


                    <div
                      className="btn-group btn-group-sm"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="danger">Left</Button>
                      <Button color="danger">Middle</Button>
                      <Button color="danger">Right</Button>
                    </div>
                  </div>
                  <div className="d-flex flex-wrap gap-3 align-items-center mt-3">
                    <div
                      className="btn-group btn-group-lg"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="primary" outline>Left</Button>
                      <Button color="primary" outline>Middle</Button>
                      <Button color="primary" outline>Right</Button>
                    </div>


                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="dark" outline>Left</Button>
                      <Button color="dark" outline>Middle</Button>
                      <Button color="dark" outline>Right</Button>
                    </div>


                    <div
                      className="btn-group btn-group-sm"
                      role="group"
                      aria-label="Basic example"
                    >
                      <Button color="danger" outline>Left</Button>
                      <Button color="danger" outline>Middle</Button>
                      <Button color="danger" outline>Right</Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Vertical variation</CardTitle>
                  <p className="card-title-desc">
                    Make a set of buttons appear vertically stacked rather than
                    horizontally. Split button dropdowns are not supported here.
                  </p>

                  <div className="d-flex flex-wrap gap-3 align-items-center">
                    <div
                      className="btn-group-vertical"
                      role="group"
                      aria-label="Vertical button group"
                    >
                      <Button type="button" color="light">
                        Button
                      </Button>

                      <ButtonDropdown
                        isOpen={drp_link}
                        toggle={() => {
                          setdrp_link(!drp_link);
                        }}
                      >
                        <DropdownToggle caret color="light">
                          Dropdown <i className="mdi mdi-chevron-down"></i>
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Dropdown link</DropdownItem>
                          <DropdownItem>Dropdown link</DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>

                      <Button color="light" type="button">
                        Button
                      </Button>
                    </div>

                    <div className="btn-group-vertical" role="group" aria-label="Vertical radio toggle button group">
                      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" defaultChecked />
                      <label className="btn btn-outline-danger" htmlFor="vbtn-radio1">Radio 1</label>
                      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" />
                      <label className="btn btn-outline-danger" htmlFor="vbtn-radio2">Radio 2</label>
                      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" />
                      <label className="btn btn-outline-danger" htmlFor="vbtn-radio3">Radio 3</label>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiButtons;
