import React, { useState } from "react"
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Modal,
  Container,
} from "reactstrap"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const UiModal = () => {
  const [modal_standard, setmodal_standard] = useState(false)
  const [modal_large, setmodal_large] = useState(false)
  const [modal_xlarge, setmodal_xlarge] = useState(false)
  const [modal_small, setmodal_small] = useState(false)
  const [modal_center, setmodal_center] = useState(false)
  const [modal_scroll, setmodal_scroll] = useState(false)
  const [modal_fullscreen, setmodal_fullscreen] = useState(false)
  const [modal_backdrop, setmodal_backdrop] = useState(false)
  const [modal_long_scroll, setmodal_long_scroll] = useState(false)
  const [modal_toggle, setmodal_toggle] = useState(false)
  const [second_modal_toggle, setsecond_modal_toggle] = useState(false)
  const [modal_mdotoggle, setmodal_mdotoggle] = useState(false)
  const [modal_toggle_fullscreen, setmodal_toggle_fullscreen] = useState(false)
  const [fullscreen_sm, setfullscreen_sm] = useState(false)
  const [fullscreen_md, setfullscreen_md] = useState(false)
  const [fullscreen_lg, setfullscreen_lg] = useState(false)
  const [fullscreen_xl, setfullscreen_xl] = useState(false)
  const [fullscreen_xxl, setfullscreen_xxl] = useState(false)

  function tog_standard() {
    setmodal_standard(!modal_standard)
    removeBodyCss()
  }

  function tog_fullscreen() {
    setmodal_fullscreen(!modal_fullscreen)
    removeBodyCss()
  }

  function tog_backdrop() {
    setmodal_backdrop(!modal_backdrop)
    removeBodyCss()
  }

  function removeBodyCss() {
    document.body.classList.add("no_padding")
  }

  function tog_large() {
    setmodal_large(!modal_large)
    removeBodyCss()
  }

  function tog_xlarge() {
    setmodal_xlarge(!modal_xlarge)
    removeBodyCss()
  }

  function tog_small() {
    setmodal_small(!modal_small)
    removeBodyCss()
  }

  function tog_center() {
    setmodal_center(!modal_center)
    removeBodyCss()
  }

  function tog_scroll() {
    setmodal_scroll(!modal_scroll)
    removeBodyCss()
  }

  function tog_long_scroll() {
    setmodal_long_scroll(!modal_long_scroll)
    removeBodyCss()
  }

  function toggle_modal() {
    setmodal_toggle(!modal_toggle)
    setsecond_modal_toggle(false)
    removeBodyCss()
  }

  function second_toggle_modal() {
    toggle_modal(false)
    setsecond_modal_toggle(!second_modal_toggle)
    removeBodyCss()
  }

  function mdo_modal() {
    setmodal_mdotoggle(!modal_mdotoggle)
    removeBodyCss()
  }

  function toggle_fullscreen() {
    setmodal_toggle_fullscreen(!modal_toggle_fullscreen)
    removeBodyCss()
  }

  function toggle_fullscreen_sm() {
    setfullscreen_sm(!fullscreen_sm)
    removeBodyCss()
  }

  function toggle_fullscreen_md() {
    setfullscreen_md(!fullscreen_md)
    removeBodyCss()
  }

  function toggle_fullscreen_lg() {
    setfullscreen_lg(!fullscreen_lg)
    removeBodyCss()
  }

  function toggle_fullscreen_xl() {
    setfullscreen_xl(!fullscreen_xl)
    removeBodyCss()
  }

  function toggle_fullscreen_xxl() {
    setfullscreen_xxl(!fullscreen_xxl)
    removeBodyCss()
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Modals" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Modals Examples</CardTitle>
                  <p className="card-title-desc">
                    Modals are streamlined, but flexible dialog prompts powered
                    by JavaScript. They support a number of use cases from user
                    notification to completely custom content and feature a
                    handful of helpful subcomponents, sizes, and more.
                  </p>

                  <div
                    className="modal bs-example-modal"
                    tabIndex="-1"
                    role="dialog"
                  >
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title">Modal Title</h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <p>One fine body&hellip;</p>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                          <button
                            type="button"
                            className="btn btn-light"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Row className="mt-4">
                    <Col lg={6} className="mt-4">
                      <CardTitle className="h4">Default Modal</CardTitle>
                      <p className="card-title-desc">
                        Toggle a working modal demo by clicking the button
                        below. It will slide down and fade in from the top of
                        the page.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          tog_standard()
                        }}
                        className="btn btn-primary waves-effect waves-light"
                        data-toggle="modal"
                        data-target="#myModal"
                      >
                        Standard Modal
                      </button>

                      <Modal
                        isOpen={modal_standard}
                        toggle={() => {
                          tog_standard()
                        }}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0" id="myModalLabel">
                            Modal Heading
                          </h5>
                          <button
                            type="button"
                            onClick={() => {
                              setmodal_standard(false)
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <h5>Overflowing text to show scroll behavior</h5>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            onClick={() => {
                              tog_standard()
                            }}
                            className="btn btn-secondary waves-effect"
                            data-dismiss="modal"
                          >
                            Close
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                          >
                            Save changes
                          </button>
                        </div>
                      </Modal>
                    </Col>
                    <Col lg={6} className="mt-4">
                      <CardTitle className="h4">Optional Sizes</CardTitle>
                      <p className="card-title-desc">
                        Modals have three optional sizes, available via modifier
                        classes to be placed on a <code>.modal-dialog</code>.
                      </p>
                      <div className="d-flex flex-wrap gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            tog_xlarge()
                          }}
                          className="btn btn-primary waves-effect waves-light"
                          data-toggle="modal"
                          data-target=".bs-example-modal-xl"
                        >
                          Extra large modal
                        </button>{" "}
                        <button
                          type="button"
                          onClick={() => {
                            tog_large()
                          }}
                          className="btn btn-success waves-effect"
                          data-toggle="modal"
                          data-target=".bs-example-modal-lg"
                        >
                          Large modal
                        </button>{" "}
                        <button
                          type="button"
                          onClick={() => {
                            tog_small()
                          }}
                          className="btn btn-danger waves-effect waves-light"
                          data-toggle="modal"
                          data-target=".bs-example-modal-sm"
                        >
                          Small modal
                        </button>{" "}
                        <button
                          type="button"
                          onClick={() => {
                            tog_fullscreen()
                          }}
                          className="btn btn-light waves-effect waves-light"
                          data-toggle="modal"
                        >
                          Fullscreen Modal
                        </button>
                      </div>

                      <div>
                        <Modal
                          size="xl"
                          isOpen={modal_xlarge}
                          toggle={() => {
                            tog_fullscreen()
                          }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title mt-0"
                              id="myExtraLargeModalLabel"
                            >
                              Extra large modal
                            </h5>
                            <button
                              onClick={() => {
                                setmodal_xlarge(false)
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p className="mb-0">
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                        </Modal>
                        <Modal
                          size="lg"
                          isOpen={modal_large}
                          toggle={() => {
                            tog_large()
                          }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title mt-0"
                              id="myLargeModalLabel"
                            >
                              Large Modal
                            </h5>
                            <button
                              onClick={() => {
                                setmodal_large(false)
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p className="mb-0">
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                        </Modal>
                        <Modal
                          size="sm"
                          isOpen={modal_small}
                          toggle={() => {
                            tog_small()
                          }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title mt-0"
                              id="mySmallModalLabel"
                            >
                              Small Modal
                            </h5>
                            <button
                              onClick={() => {
                                setmodal_small(false)
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p className="mb-0">
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                          </div>
                        </Modal>
                        <Modal
                          size="xl"
                          isOpen={modal_fullscreen}
                          toggle={() => {
                            tog_fullscreen()
                          }}
                          className="modal-fullscreen"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title mt-0"
                              id="exampleModalFullscreenLabel"
                            >
                              Fullscreen Modal
                            </h5>
                            <button
                              onClick={() => {
                                setmodal_fullscreen(false)
                              }}
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body">
                            <h5>Overflowing text to show scroll behavior</h5>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              onClick={() => {
                                tog_fullscreen()
                              }}
                              className="btn btn-secondary waves-effect"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary waves-effect waves-light"
                            >
                              Save changes
                            </button>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                  </Row>

                  <Row>
                    <Col lg={6}>
                      <div className="mt-4">
                        <CardTitle className="h5">
                          Vertically Centered
                        </CardTitle>
                        <p className="card-title-desc">
                          Add <code>.modal-dialog-centered</code> to{" "}
                          <code>.modal-dialog</code> to vertically center the
                          modal.
                        </p>
                      </div>
                      <button
                        type="button"
                        className="btn btn-primary waves-effect waves-light"
                        onClick={() => {
                          tog_center()
                        }}
                        data-toggle="modal"
                        data-target=".bs-example-modal-center"
                      >
                        Center modal
                      </button>
                      <Modal
                        isOpen={modal_center}
                        toggle={() => {
                          tog_center()
                        }}
                        centered={true}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">Center Modal</h5>
                          <button
                            type="button"
                            onClick={() => {
                              setmodal_center(false)
                            }}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p className="mb-0">
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                        </div>
                      </Modal>
                    </Col>
                    <Col lg={6}>
                      <div className="mt-4">
                        <h5 className="card-title">Scrollable modal</h5>
                        <p className="card-title-desc">
                          You can also create a scrollable modal that allows
                          scroll the modal body by adding{" "}
                          <code>.modal-dialog-scrollable</code> to{" "}
                          <code>.modal-dialog</code>.
                        </p>
                        <div className="d-flex flex-wrap gap-3">
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            onClick={() => {
                              tog_scroll()
                            }}
                            data-toggle="modal"
                          >
                            Scrollable modal
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            onClick={() => {
                              tog_long_scroll()
                            }}
                            data-toggle="modal"
                          >
                            Scrolling Long Content
                          </button>
                        </div>
                      </div>

                      <Modal
                        isOpen={modal_scroll}
                        toggle={() => {
                          tog_scroll()
                        }}
                        scrollable={true}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title mt-0">Scrollable modal</h5>
                          <button
                            type="button"
                            onClick={() => setmodal_scroll(false)}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <p>
                            Cras mattis consectetur purus sit amet fermentum.
                            Cras justo odio, dapibus ac facilisis in, egestas
                            eget quam. Morbi leo risus, porta ac consectetur ac,
                            vestibulum at eros.
                          </p>
                          <p>
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Vivamus sagittis lacus vel augue
                            laoreet rutrum faucibus dolor auctor.
                          </p>
                          <p>
                            Aenean lacinia bibendum nulla sed consectetur.
                            Praesent commodo cursus magna, vel scelerisque nisl
                            consectetur et. Donec sed odio dui. Donec
                            ullamcorper nulla non metus auctor fringilla.
                          </p>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => setmodal_scroll(false)}
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Save changes
                            </button>
                          </div>
                        </div>
                      </Modal>

                      <Modal
                        isOpen={modal_long_scroll}
                        toggle={() => {
                          tog_long_scroll()
                        }}
                      >
                        <div className="modal-header">
                          <h5 className="modal-title">Modal title</h5>
                          <button
                            type="button"
                            onClick={() => setmodal_long_scroll(false)}
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div
                          className="modal-body"
                          style={{ minHeight: "1500px" }}
                        >
                          <p>
                            This is some placeholder content to show the
                            scrolling behavior for modals. Instead of repeating
                            the text the modal, we use an inline style set a
                            minimum height, thereby extending the length of the
                            overall modal and demonstrating the overflow
                            scrolling. When content becomes longer than the
                            height of the viewport, scrolling will move the
                            modal as needed.
                          </p>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => setmodal_long_scroll(false)}
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-primary">
                            Save changes
                          </button>
                        </div>
                      </Modal>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col lg={6}>
                      <div className="mt-4">
                        <CardTitle className="h5">Static Backdrop</CardTitle>
                        <p className="card-title-desc">
                          When backdrop is set to static, the modal will not
                          close when clicking outside it. Click the button below
                          to try it.
                        </p>
                        <button
                          type="button"
                          className="btn btn-primary waves-effect waves-light"
                          onClick={() => {
                            tog_backdrop()
                          }}
                          data-toggle="modal"
                        >
                          Static backdrop modal
                        </button>
                        <Modal
                          isOpen={modal_backdrop}
                          toggle={() => {
                            tog_backdrop()
                          }}
                          backdrop={"static"}
                          scrollable={true}
                          id="staticBackdrop"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Modal title
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setmodal_backdrop(false)
                              }}
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              I will not close if you click outside me.
                              Don&apos;t even try to press escape key.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-light"
                              onClick={() => {
                                setmodal_backdrop(false)
                              }}
                            >
                              Close
                            </button>
                            <button type="button" className="btn btn-primary">
                              Understood
                            </button>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                    <Col lg={6}>
                      <div className="mt-4">
                        <h4 className="card-title">Toggle between modals</h4>
                        <p className="card-title-desc">
                          Toggle between multiple modals with some clever
                          placement of the <code>data-bs-target</code> and{" "}
                          <code>data-bs-toggle</code> attributes.
                        </p>

                        <div>
                          <button
                            type="button"
                            className="btn btn-primary waves-effect waves-light"
                            onClick={() => {
                              toggle_modal()
                            }}
                          >
                            Open First Modal
                          </button>
                        </div>

                        <Modal
                          isOpen={modal_toggle}
                          toggle={() => {
                            toggle_modal()
                          }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Modal 1
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setmodal_toggle(false)
                              }}
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <p>
                              Show a second modal and hide this one with the
                              button below.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                second_toggle_modal()
                              }}
                            >
                              Open Second Modal
                            </button>
                          </div>
                        </Modal>

                        <Modal
                          isOpen={second_modal_toggle}
                          toggle={() => {
                            second_toggle_modal()
                          }}
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="staticBackdropLabel"
                            >
                              Modal 2
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setsecond_modal_toggle(false)
                              }}
                              aria-label="Close"
                            ></button>
                          </div>

                          <div className="modal-body">
                            <p>
                              Hide this modal and show the first with the button
                              below.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_modal()
                              }}
                            >
                              Back to First
                            </button>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                  </Row>

                  <Row className="mt-4">
                    <Col lg={6}>
                      <div className="mt-4">
                        <h5 className="card-title">Varying Modal Content</h5>
                        <p className="card-title-desc">
                          Use <code>event.relatedTarget</code> and HTML{" "}
                          <code>data-bs-*</code> attributes to vary the contents
                          of the modal depending on which button was clicked.
                        </p>
                        <div className="d-flex flex-wrap gap-2">
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              mdo_modal()
                            }}
                          >
                            Open modal for @mdo
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              mdo_modal()
                            }}
                          >
                            Open modal for @fat
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => {
                              mdo_modal()
                            }}
                          >
                            Open modal for @getbootstrap
                          </button>

                          <Modal
                            isOpen={modal_mdotoggle}
                            toggle={() => {
                              mdo_modal()
                            }}
                          >
                            <div className="modal-header">
                              <h5
                                className="modal-title"
                                id="exampleModalLabel"
                              >
                                New message
                              </h5>
                              <button
                                type="button"
                                className="btn-close"
                                onClick={() => {
                                  setmodal_mdotoggle(false)
                                }}
                              ></button>
                            </div>
                            <div className="modal-body">
                              <form>
                                <div className="mb-3">
                                  <label
                                    htmlFor="recipient-name"
                                    className="col-form-label"
                                  >
                                    Recipient:
                                  </label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="recipient-name"
                                  />
                                </div>
                                <div className="mb-3">
                                  <label
                                    htmlFor="message-text"
                                    className="col-form-label"
                                  >
                                    Message:
                                  </label>
                                  <textarea
                                    className="form-control"
                                    id="message-text"
                                  ></textarea>
                                </div>
                              </form>
                            </div>
                            <div className="modal-footer">
                              <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={() => {
                                  mdo_modal()
                                }}
                              >
                                Close
                              </button>
                              <button type="button" className="btn btn-primary">
                                Send message
                              </button>
                            </div>
                          </Modal>
                        </div>
                      </div>
                    </Col>

                    <Col lg={6}>
                      <div className="mt-4">
                        <h4 className="card-title">Fullscreen Modal</h4>
                        <p className="card-title-desc">
                          Another override is the option to pop up a modal that
                          covers the user viewport, available via modifier
                          classes that are placed on a{" "}
                          <code>.modal-dialog</code>.
                        </p>

                        <div>
                          <div className="d-flex flex-wrap gap-2">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen()
                              }}
                            >
                              Full screen
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen_sm()
                              }}
                            >
                              Full screen below sm
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen_md()
                              }}
                            >
                              Full screen below md
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen_lg()
                              }}
                            >
                              Full screen below lg
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen_xl()
                              }}
                            >
                              Full screen below xl
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen_xxl()
                              }}
                            >
                              Full screen below xxl
                            </button>
                          </div>
                        </div>

                        <Modal
                          isOpen={modal_toggle_fullscreen}
                          toggle={() => {
                            toggle_fullscreen()
                          }}
                          className="modal-fullscreen"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title h4"
                              id="exampleModalFullscreenLabel"
                            >
                              Full screen modal
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setmodal_toggle_fullscreen(false)
                              }}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => {
                                toggle_fullscreen()
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </Modal>

                        <Modal
                          isOpen={fullscreen_sm}
                          toggle={() => {
                            toggle_fullscreen_sm()
                          }}
                          className="modal-fullscreen-sm-down"
                        >
                          <div className="modal-header">
                            <h5 className="modal-title h4">
                              Full screen below sm
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setfullscreen_sm(false)
                              }}
                            ></button>
                          </div>

                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              className="btn btn-primary"
                              onClick={() => {
                                toggle_fullscreen_sm()
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </Modal>

                        <Modal
                          isOpen={fullscreen_md}
                          toggle={() => {
                            toggle_fullscreen_md()
                          }}
                          className="modal-fullscreen-md-down"
                        >
                          <div className="modal-header">
                            <h5 className="modal-title h4">
                              Full screen below md
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setfullscreen_md(false)
                              }}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => {
                                toggle_fullscreen_md()
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </Modal>

                        <Modal
                          isOpen={fullscreen_lg}
                          toggle={() => {
                            toggle_fullscreen_lg()
                          }}
                          className="modal-fullscreen-lg-down"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title h4"
                              id="exampleModalFullscreenLgLabel"
                            >
                              Full screen below lg
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setfullscreen_lg(false)
                              }}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => {
                                toggle_fullscreen_lg()
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </Modal>

                        <Modal
                          isOpen={fullscreen_xl}
                          toggle={() => {
                            toggle_fullscreen_xl()
                          }}
                          className="modal-fullscreen-xl-down"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title h4"
                              id="exampleModalFullscreenXlLabel"
                            >
                              Full screen below xl
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setfullscreen_xl(false)
                              }}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => {
                                toggle_fullscreen_xl()
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </Modal>

                        <Modal
                          isOpen={fullscreen_xxl}
                          toggle={() => {
                            toggle_fullscreen_xxl()
                          }}
                          className="modal-fullscreen-xxl-down"
                        >
                          <div className="modal-header">
                            <h5
                              className="modal-title h4"
                              id="exampleModalFullscreenXxlLabel"
                            >
                              Full screen below xxl
                            </h5>
                            <button
                              type="button"
                              className="btn-close"
                              onClick={() => {
                                setfullscreen_xxl(false)
                              }}
                            ></button>
                          </div>
                          <div className="modal-body">
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                            <p>
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Vivamus sagittis lacus vel
                              augue laoreet rutrum faucibus dolor auctor.
                            </p>
                            <p>
                              Aenean lacinia bibendum nulla sed consectetur.
                              Praesent commodo cursus magna, vel scelerisque
                              nisl consectetur et. Donec sed odio dui. Donec
                              ullamcorper nulla non metus auctor fringilla.
                            </p>
                            <p>
                              Cras mattis consectetur purus sit amet fermentum.
                              Cras justo odio, dapibus ac facilisis in, egestas
                              eget quam. Morbi leo risus, porta ac consectetur
                              ac, vestibulum at eros.
                            </p>
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              onClick={() => {
                                toggle_fullscreen_xxl()
                              }}
                            >
                              Close
                            </button>
                          </div>
                        </Modal>
                      </div>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default UiModal
