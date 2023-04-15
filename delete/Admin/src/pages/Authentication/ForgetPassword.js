import PropTypes from 'prop-types'
import React, { useEffect } from "react"
import { Row, Col, Alert, Card, CardBody, Container, FormFeedback, Input, Label, Form } from "reactstrap";

// Redux
import { useSelector, useDispatch } from "react-redux";
import { withRouter, Link } from "react-router-dom"

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { userForgetPassword } from "../../store/actions"

// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png"

const ForgetPasswordPage = props => {
  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Email"),
    }),
    onSubmit: (values) => {
      dispatch(userForgetPassword(values, props.history));
    }
  });


  useEffect(() => {
    document.body.className = "authentication-bg";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });
  const { forgetError, forgetSuccessMsg } = useSelector(state => ({
    forgetError: state.ForgetPassword.forgetError,
    forgetSuccessMsg: state.ForgetPassword.forgetSuccessMsg,
  }));


  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="mdi mdi-home-variant h2"></i>
        </Link>
      </div>

      <div className="account-pages my-5  pt-sm-5">
        <Container>
          <Row className="justify-content-center">

            <Col md={8} lg={6} xl={5}>
              <div>

                <a href="/" className="mb-5 d-block auth-logo">
                  <img src={logo} alt="" height="22" className="logo logo-dark" />
                  <img src={logolight} alt="" height="22" className="logo logo-light" />
                </a>
                <Card>

                  <CardBody className="p-4">

                    <div className="text-center mt-2">
                      <h5 className="text-primary">Reset Password</h5>
                      <p className="text-muted">Reset Password with Minible.</p>
                    </div>
                    <div className="p-2 mt-4">
                      <div className="alert alert-success text-center mb-4" role="alert">
                        Enter your Email and instructions will be sent to you!
                                        </div>
                                        {forgetError && forgetError ? (
                        <Alert color="danger" className="text-center mb-4" style={{ marginTop: "13px" }}>
                          {forgetError}
                        </Alert>
                      ) : null}
                       {forgetSuccessMsg ? (
                        <Alert color="success" className="text-center mb-4" style={{ marginTop: "13px" }}>
                         {forgetSuccessMsg}
                        </Alert>
                      ) : null}

                    <Form
                      className="form-horizontal"
                      onSubmit={(e) => {
                        e.preventDefault();
                        validation.handleSubmit();
                        return false;
                      }}
                    >
                        <div className="mb-3">
                        <Label className="form-label">Email</Label>
                        <Input
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
                        <Row className="mb-0">
                          <Col xs={12} className="text-end">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Reset
                          </button>
                          </Col>
                        </Row>
                        <div className="mt-4 text-center">
                          <p className="mb-0">Remember It ? <Link to="/login" className="fw-medium text-primary"> Signin </Link></p>
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
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

ForgetPasswordPage.propTypes = {
  forgetError: PropTypes.any,
  forgetSuccessMsg: PropTypes.any,
  history: PropTypes.object,
  userForgetPassword: PropTypes.func
}

export default withRouter(ForgetPasswordPage);