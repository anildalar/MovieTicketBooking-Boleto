import React, { useEffect } from "react"

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

import { Link } from "react-router-dom"

import { Row, Col, CardBody, Card, Container, Form, Label, Input, FormFeedback } from "reactstrap";

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

const Register = () => {
   //form validation
   const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
      username: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      console.log(values);
    }
  });
  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <Link to="/" className="mb-5 d-block auth-logo">
                  <img src={logo} alt="" height="22" className="logo logo-dark" />
                  <img src={logolight} alt="" height="22" className="logo logo-light" />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>
                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Register Account</h5>
                    <p className="text-muted">Get your free Minible account now.</p>
                  </div>
                  <div className="p-2 mt-4">
                  <Form className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                      <div className="mb-3">
                      <Label className="form-label">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.email || ""}
                          invalid={
                            validation.touched.email && validation.errors.email ? true : false
                          }
                        />
                        {validation.touched.email && validation.errors.email ? (
                          <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="mb-3">
                      <Label className="form-label">Username</Label>
                        <Input
                          name="username"
                          type="text"
                          placeholder="Enter username"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.username || ""}
                          invalid={
                            validation.touched.username && validation.errors.username ? true : false
                          }
                        />
                        {validation.touched.username && validation.errors.username ? (
                          <FormFeedback type="invalid">{validation.errors.username}</FormFeedback>
                        ) : null}
                      </div>
                      <div className="mb-3">
                      <Label className="form-label">Password</Label>
                        <Input
                          name="password"
                          type="password"
                          placeholder="Enter password"
                          onChange={validation.handleChange}
                          onBlur={validation.handleBlur}
                          value={validation.values.password || ""}
                          invalid={
                            validation.touched.password && validation.errors.password ? true : false
                          }
                        />
                        {validation.touched.password && validation.errors.password ? (
                          <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                        ) : null}
                      </div>

                      <div className="form-check">
                        <input type="checkbox" className="form-check-input" id="auth-terms-condition-check" />
                        <label className="form-check-label" htmlFor="auth-terms-condition-check">I accept <Link to="#" className="text-dark">Terms and Conditions</Link></label>
                      </div>

                      <div className="mt-3 text-end">
                        <button
                          className="btn btn-primary w-sm waves-effect waves-light"
                          type="submit"
                        >
                          Register
                          </button>
                      </div>

                      <div className="mt-4 text-center">
                        <div className="signin-other-title">
                          <h5 className="font-size-14 mb-3 title">Sign up using</h5>
                        </div>

                        <ul className="list-inline">
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-primary text-white border-primary"
                            >
                              <i className="mdi mdi-facebook" />
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-info text-white border-info"
                            >
                              <i className="mdi mdi-twitter" />
                            </Link>
                          </li>{" "}
                          <li className="list-inline-item">
                            <Link
                              to="#"
                              className="social-list-item bg-danger text-white border-danger"
                            >
                              <i className="mdi mdi-google" />
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-4 text-center">
                        <p className="text-muted mb-0">Already have an account ? <Link to="/pages-login" className="fw-medium text-primary"> Login</Link></p>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  © {new Date().getFullYear()} Minible. Crafted with{" "}
                  <i className="mdi mdi-heart text-danger" /> by Themesbrand
                  </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Register
