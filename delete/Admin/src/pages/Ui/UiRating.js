import React, { useState } from "react"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"
import { Row, Col, Card, CardBody, Container, Badge } from "reactstrap"

// Rating Plugin
import Rating from "react-rating"

const UiRating = () => {
  const [customize, setcustomize] = useState("");
  const starStyle = {} 

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <Breadcrumbs title="UI Elements" breadcrumbItem="Rating" />

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <Row>
                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Default rating</h5>
                        <Rating
                          max={5}
                          ActiveComponent={
                            <i
                              key={"active_1"}
                              className="mdi mdi-star text-primary"
                            style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              key={"active_01"}
                              className="mdi mdi-star-outline text-muted"
                            style={starStyle}
                            />
                          }
                        />{" "}
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Disabled rating</h5>
                        <Rating
                          ActiveComponent={
                            <i
                              key={"active_2"}
                              className="mdi mdi-star text-primary"
                            style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              key={"active_02"}
                              className="mdi mdi-star-outline text-muted"
                            style={starStyle}
                            />
                          }
                          readonly={true}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Readonly rating with a value
                        </h5>
                        <Rating
                          stop={16}
                          emptySymbol="mdi mdi-star-outline text-muted"
                          fullSymbol="mdi mdi-star text-primary"
                          initialRating={4.5}
                          readonly
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Customized heart rating
                        </h5>
                        <Rating
                          emptySymbol="mdi mdi-heart-outline text-danger "
                          fullSymbol="mdi mdi-heart text-danger "
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Handle events</h5>
                        <Rating
                          onChange={rate => alert("Rating : " + rate)}
                          ActiveComponent={
                            <i
                              key={"active_5"}
                              className="mdi mdi-star text-primary"
                            style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              key={"active_05"}
                              className="mdi mdi-star-outline text-muted"
                            style={starStyle}
                            />
                          }
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Customize tooltips</h5>
                        <Rating
                          emptySymbol="mdi mdi-star-outline text-primary "
                          fullSymbol="mdi mdi-star text-muted "
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Rater with Step</h5>
                        <Rating
                          initialRating={1.5}
                          fractions={2}
                          emptySymbol="mdi mdi-star-outline text-primary "
                          fullSymbol="mdi mdi-star text-primary "
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start rate to 5 [6..10]
                        </h5>
                        <Rating
                          initialRating={3}
                          emptySymbol="mdi mdi-star-outline text-primary "
                          fullSymbol="mdi mdi-star text-muted "
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          Set start and stop rate [2..10]
                        </h5>
                        <Rating
                          emptySymbol="mdi mdi-star-outline text-muted"
                          fullSymbol="mdi mdi-star text-primary "
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">
                          On Hover Event
                        </h5>
                        <Rating
                          stop={5}
                          emptySymbol="mdi mdi-star-outline text-muted "
                          fullSymbol="mdi mdi-star text-primary "
                          onChange={(customize) => setcustomize(customize)}
                        />
                        <Badge color="info" className="ms-2">{customize}</Badge>
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Custom icons</h5>
                        <Rating
                          stop={5}                         
                          emptySymbol="mdi mdi-battery-outline fa-2x text-muted"
                          fullSymbol={[
                            "mdi mdi-battery-20 fa-2x text-primary",
                            "mdi mdi-battery-50 fa-2x text-primary",
                            "mdi mdi-battery-70 fa-2x text-primary",
                            "mdi mdi-battery-90 fa-2x text-primary",
                          ]}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Fractional rating</h5>
                        <Rating                          
                          ActiveComponent={
                            <i
                              key={"active_11"}
                              className="mdi mdi-star text-primary"
                            style={starStyle}
                            />
                          }
                          InActiveComponent={
                            <i
                              key={"active_11"}
                              className="mdi mdi-star-outline text-muted"
                            style={starStyle}
                            />
                          }
                          fractions={6}
                        />
                      </div>
                    </Col>

                    <Col xl="3" md="4" sm="6">
                      <div className="p-4 text-center">
                        <h5 className="font-16 m-b-15">Custom CSS icons</h5>
                        <Rating fractions={2} />
                      </div>
                    </Col>
                  </Row>{" "}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default UiRating