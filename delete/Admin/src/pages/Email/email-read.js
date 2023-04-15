import React from "react"
import { Link } from "react-router-dom"
import { Container, Row, Col, Card, CardBody } from "reactstrap"

//Import Image
import avatar2 from "../../assets/images/users/avatar-2.jpg"
import img3 from "../../assets/images/small/img-3.jpg"
import img4 from "../../assets/images/small/img-4.jpg"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Email Sidebar
import EmailSideBar from "./email-sidebar"

//Import Email Topbar
import EmailToolbar from "./email-toolbar"

const EmailRead = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Email" breadcrumbItem="Read Email" />
          <Row>
            <Col className="col-12">           
              <EmailSideBar />

              <div className="email-rightbar mb-3">
                <Card>               
                  <EmailToolbar />                  
                  <CardBody>
                    <div className="d-flex align-items-start mb-4">
                      <div className="flex-shrink-0 me-3">
                        <img className="rounded-circle avatar-sm" src={avatar2} alt="Generic placeholder" />
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="font-size-14 my-1">Humberto D. Champion</h5>
                        <small className="text-muted">support@domain.com</small>
                      </div>
                    </div>

                    <h4 className="font-size-16">This Week&apos;s Top Stories</h4>

                    <p>Dear Lorem Ipsum,</p>
                    <p>Praesent dui ex, dapibus eget mauris ut, finibus vestibulum enim. 
                    Quisque arcu leo, facilisis in fringilla id, luctus in tortor. 
                    Nunc vestibulum est quis orci varius viverra. Curabitur dictum volutpat massa vulputate molestie. 
                    In at felis ac velit maximus convallis.
                    </p>
                    <p>Sed elementum turpis eu lorem interdum, sed porttitor eros commodo. 
                    Nam eu venenatis tortor, id lacinia diam. Sed aliquam in dui et porta. Sed bibendum orci non tincidunt ultrices. 
                    Vivamus fringilla, mi lacinia dapibus condimentum, ipsum urna lacinia lacus, vel tincidunt mi nibh sit amet lorem.</p>
                    <p>Sincerly,</p>
                    <hr />

                    <Row>
                      <Col xl={2} className="col-6">
                        <div className="card border shadow-none">
                          <img className="card-img-top img-fluid" src={img3} alt="Card cap" />
                          <div className="py-2 text-center">
                            <Link to="#" className="fw-medium">Download</Link>
                          </div>
                        </div>
                      </Col>
                      <Col xl={2} className="col-6">
                        <div className="card border shadow-none">
                          <img className="card-img-top img-fluid" src={img4} alt="Card cap" />
                          <div className="py-2 text-center">
                            <Link to="#" className="fw-medium">Download</Link>
                          </div>
                        </div>
                      </Col>
                    </Row>

                    <Link to="#" className="btn btn-secondary waves-effect mt-4"><i className="mdi mdi-reply"></i> Reply</Link>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default EmailRead
