import React from "react"
import { Container, Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Image
import src from "../../assets/images/small/img-1.jpg"

const UiPlaceholders = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Placeholders" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Examples</CardTitle>
                  <p className="card-title-desc">
                    In the example below, we take a typical card component and
                    recreate it with placeholders applied to create a “loading
                    card”. Size and proportions are the same between the two.
                  </p>

                  <Row className="gap-4">
                    <Col lg={5}>
                      <Card className="shadow-none border mb-0">
                        <img src={src} className="card-img-top" alt="..." />

                        <CardBody>
                          <CardTitle className="h5">Card title</CardTitle>
                          <p className="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card&apos;s content.
                          </p>
                          <Link to="/" className="btn btn-primary">
                            Go somewhere
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>

                    <Col lg={5}>
                      <Card
                        className="shadow-none border mb-0"
                        aria-hidden="true"
                      >
                        <img src={src} className="card-img-top" alt="..." />
                        <CardBody>
                          <CardTitle className="h5 placeholder-glow">
                            <span className="placeholder col-6"></span>
                          </CardTitle>
                          <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>{" "}
                            <span className="placeholder col-4"></span>{" "}
                            <span className="placeholder col-4"></span>{" "}
                            <span className="placeholder col-6"></span>{" "}
                            <span className="placeholder col-8"></span>{" "}
                          </p>
                          <Link
                            to="/"
                            tabIndex="-1"
                            className="btn btn-primary disabled placeholder col-6"
                          ></Link>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <div>
                    <CardTitle className="h4">
                      Placeholders with Grid column
                    </CardTitle>
                    <p className="card-title-desc">
                      Create placeholders with the <code>.placeholder</code>{" "}
                      class and a grid column class (e.g., <code>.col-6</code>)
                      to set the <code>width</code>. They can replace the text
                      inside an element or be added as a modifier class to an
                      existing component.
                    </p>

                    <div>
                      <p aria-hidden="true">
                        <span className="placeholder col-6"></span>
                      </p>

                      <Link
                        to="/"
                        tabIndex="-1"
                        className="btn btn-primary disabled placeholder col-4"
                        aria-hidden="true"
                      ></Link>
                    </div>
                  </div>

                  <div className="mt-4">
                    <CardTitle className="h4">Placeholders Width</CardTitle>
                    <p className="card-title-desc">
                      You can change the <code>width</code> through grid column
                      classes, width utilities, or inline styles.
                    </p>

                    <div>
                      <span className="placeholder col-6"></span>
                      <span className="placeholder w-75"></span>
                      <br></br>
                      <span
                        className="placeholder"
                        style={{ width: "25%" }}
                      ></span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <CardTitle className="h4">Placeholders Sizing</CardTitle>
                    <p className="card-title-desc">
                      The size of <code>.placeholder</code>s are based on the
                      typographic style of the parent element. Customize them
                      with sizing modifiers: <code>.placeholder-lg</code>,{" "}
                      <code>.placeholder-sm</code>, or{" "}
                      <code>.placeholder-xs</code>.
                    </p>

                    <div>
                      <Col xs={12} className="placeholder placeholder-lg"></Col>
                      <Col xs={12} className="placeholder placeholder-sm"></Col>
                      <Col xs={12} className="placeholder placeholder-xs"></Col>
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
                  <CardTitle className="h4">Placeholders Color</CardTitle>
                  <p className="card-title-desc">
                    By default, the <code>placeholder</code> uses{" "}
                    <code>currentColor</code>. This can be overridden with a
                    custom color or utility class.
                  </p>

                  <div>
                    <Col xs={12} className="placeholder"></Col>
                    <Col xs={12} className="placeholder bg-primary"></Col>
                    <Col xs={12} className="placeholder bg-secondary"></Col>
                    <Col xs={12} className="placeholder bg-success"></Col>
                    <Col xs={12} className="placeholder bg-danger"></Col>
                    <Col xs={12} className="placeholder bg-warning"></Col>
                    <Col xs={12} className="placeholder bg-info"></Col>
                    <Col xs={12} className="placeholder bg-light"></Col>
                    <Col xs={12} className="placeholder bg-dark"></Col>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">
                    Animation in Placeholders
                  </CardTitle>
                  <p className="card-title-desc">
                    Animate placeholders with <code>.placeholder-glow</code> or{" "}
                    <code>.placeholder-wave</code> to better convey the
                    perception of something being <em>actively</em> loaded.
                  </p>

                  <div className="">
                    <p className="placeholder-glow">
                      <span className="placeholder col-12"></span>
                    </p>

                    <p className="placeholder-wave mb-0">
                      <span className="placeholder col-12"></span>
                    </p>
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

export default UiPlaceholders