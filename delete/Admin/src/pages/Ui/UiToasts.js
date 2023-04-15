import React, { useState } from "react";
import {
    Toast,
    ToastBody,
    ToastHeader,
    Button,
    Card,
    Row,
    Col,
    CardBody,
    CardTitle,
    Container,
    Spinner,
    Form,
} from "reactstrap";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";

//import images
import logoSm from "../../assets/images/logo-sm.png";

const UiToasts = () => {
    const [toast, setToast] = useState(false);
    const [toast1, setToast1] = useState(false);
    const [toast2, setToast2] = useState(false);
    const [toast3, setToast3] = useState(false);
    const [toast4, setToast4] = useState(false);
    const [toast5, setToast5] = useState(true);
    const [toast6, setToast6] = useState(true);
    const [toast7, setToast7] = useState(true);
    const [toast8, setToast8] = useState(true);
    const [toast9, setToast9] = useState(true);
    const [toast10, setToast10] = useState(true);
    const [toast11, setToast11] = useState(true);
    const [toast12, setToast12] = useState(true);

    const toggleToast = () => {
        setToast(!toast);
    };


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumbs title="UI Elements" breadcrumbItem="Toasts" />
                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardBody>
                                    <CardTitle className="h5">Live Example</CardTitle>
                                    <p className="card-title-des">
                                        Click the button below to show a toast (positioned with our
                                        utilities in the lower right corner).
                                    </p>

                                    <Button
                                        type="button"
                                        color="primary"
                                        id="liveToastBtn"
                                        onClick={toggleToast}
                                    >
                                        Show live toast
                                    </Button>

                                    <div
                                        className="position-fixed bottom-0 end-0 p-3"
                                        style={{ zIndex: "11" }}
                                    >
                                        <Toast isOpen={toast}>
                                            <ToastHeader toggle={toggleToast}>
                                                <img src={logoSm} alt="" className="me-2" height="18" />
                                                Minible
                                                <small className="text-muted ms-1">- 11 mins ago</small>
                                            </ToastHeader>
                                            <ToastBody>
                                                Hello, world! This is a toast message.
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Basic Toast with Background</h5>
                                    <p className="card-title-des">Push notifications to your visitors with a Toast, a lightweight and easily customizable alert message.</p>
                                    <div>
                                        <div className="p-3 my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a white background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-primary my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a primary background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-secondary my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a secondary background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-success my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a success background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-danger my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a danger background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                        <div className="p-3 bg-warning my-2 rounded">
                                            <Toast>
                                                <ToastHeader>
                                                    Reactstrap
                                                </ToastHeader>
                                                <ToastBody>
                                                    This is a toast on a warning background — check it out!
                                                </ToastBody>
                                            </Toast>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Toast Header Icon</h5>
                                    <p className="card-title-des">Push notifications to your visitors with a Toast, a lightweight and easily customizable alert message.</p>
                                    <div>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="primary" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a primary icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="secondary" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a secondary icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="success" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a success icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="danger" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a danger icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="warning" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a warning icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="info" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with an info icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="light" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a light icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                        <Toast>
                                            <ToastHeader icon={<Spinner type="grow" size="sm" color="dark" />}>
                                                Reactstrap
                                            </ToastHeader>
                                            <ToastBody>
                                                This is a toast with a dark icon — check it out!
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Basic Toast</h5>
                                    <p className="card-title-desc">Toasts are as flexible as you need and have very little
                                        required markup.
                                        At a minimum, we require a single element to contain your
                                        “toasted” content and strongly encourage a dismiss button.</p>
                                    <div style={{ minHeight: "110px" }}>
                                        <Toast isOpen={toast5} className="fade show">
                                            <ToastHeader toggle={() => setToast5(!toast5)}>
                                                <img src={logoSm} alt="" className="me-2" height="18"/>
                                                    <strong className="me-auto">Minible</strong>
                                                    <small style={{ marginLeft: "145px" }}className="text-muted">11 mins ago</small>                                                   
                                            </ToastHeader>
                                            <ToastBody className="toast-body">
                                                Hello, world! This is a toast message.
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Translucent</h5>
                                    <p className="card-title-desc">Toasts are slightly translucent, too, so they blend over
                                        whatever they might appear over. For browsers that
                                        support the <code>backdrop-filter</code> CSS property,
                                        we’ll also attempt to blur the elements under a toast.</p>
                                    <div style={{ minHeight: "110px" }}>
                                        <Toast isOpen={toast6} className="fade show">
                                            <ToastHeader toggle={() => setToast6(!toast6)}>
                                                <img src={logoSm} alt="" className="me-2" height="18" />
                                                <strong className="me-auto">Minible</strong>
                                                <small style={{ marginLeft: "145px" }} className="text-muted">11 mins ago</small>
                                            </ToastHeader>
                                            <ToastBody>
                                                Hello, world! This is a toast message.
                                            </ToastBody>
                                        </Toast>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Stacking</h5>
                                    <p className="card-title-desc">For systems that generate more notifications, consider using
                                        a wrapping element
                                        so they can easily stack.
                                    </p>
                                    <div style={{ minHeight: "230px" }}>
                                        <div aria-live="polite" aria-atomic="true" className="position-relative">
                                            <div className="toast-container position-absolute top-0 end-0 p-2 p-lg-3">
                                                <Toast isOpen={toast7} className="fade show">
                                                    <ToastHeader toggle={() => setToast7(!toast7)}>
                                                        <img src={logoSm} alt="" className="me-2" height="18" />
                                                        <strong className="me-auto">Minible</strong>
                                                        <small style={{ marginLeft: "155px" }} className="text-muted">just now</small>
                                                    </ToastHeader>
                                                    <ToastBody>
                                                        See? Just like this.
                                                    </ToastBody>
                                                </Toast>

                                                <Toast isOpen={toast8} className="fade show" role="alert" aria-live="assertive"
                                                    data-bs-autohide="false" aria-atomic="true">
                                                    <ToastHeader toggle={() => setToast8(!toast8)}>
                                                        <img src={logoSm} alt="" className="me-2" height="18" />
                                                        <strong className="me-auto">Minible</strong>
                                                        <small style={{ marginLeft: "155px" }} className="text-muted">2 sec ago</small>
                                                    </ToastHeader>
                                                    <ToastBody>
                                                        Heads up, toasts will stack automatically
                                                    </ToastBody>
                                                </Toast>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        <Col xl={6}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Custom Content Toasts</h5>
                                    <p className="card-title-desc">Customize your toasts by removing sub-components, tweaking them with utilities, or by adding your own markup.</p>
                                    <div className="d-flex flex-column gap-3">
                                        <div aria-live="polite" aria-atomic="true" className="position-relative">
                                            <Toast isOpen={toast9} className="fade show">
                                                <ToastBody>
                                                    Hello, world! This is a toast message.
                                                    <div className="mt-2 pt-2 border-top">
                                                        <button type="button" className="btn btn-primary btn-sm me-1">Take
                                                            action</button>
                                                        <button onClick={() => setToast9(false)} type="button" className="btn btn-secondary btn-sm"
                                                            data-bs-dismiss="toast">Close</button>
                                                    </div>
                                                </ToastBody>
                                            </Toast>
                                        </div>

                                        <Toast isOpen={toast10} className="align-items-center fade show">
                                            <div className="d-flex">
                                                <ToastBody>
                                                    Hello, world! This is a toast message.
                                                </ToastBody>
                                                <button type="button" onClick={() => setToast10(false)} className="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
                                            </div>
                                        </Toast>

                                        <div aria-live="polite" aria-atomic="true">
                                            <Toast isOpen={toast11} className="toast fade show align-items-center text-white bg-primary border-0"
                                            >
                                                <div className="d-flex">
                                                    <ToastBody>
                                                        Hello, world! This is a toast message.
                                                    </ToastBody>
                                                    <button type="button" onClick={() => setToast11(false)} className="btn-close btn-close-white me-2 m-auto"
                                                        data-bs-dismiss="toast" aria-label="Close"></button>
                                                </div>
                                            </Toast>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Toasts Example</h5>
                                    <p className="card-title-des">Click the button below to show a toast</p>
                                    <div className="d-flex flex-wrap gap-2">
                                        <div className="position-relative">
                                            <div className="hstack flex-wrap gap-2">
                                                <button type="button" className="btn btn-primary" id="borderedToast1Btn" onClick={() => setToast1(!toast1)}>Primary toast</button>
                                                <button type="button" className="btn btn-success" id="borderedToast2Btn" onClick={() => setToast2(!toast2)}>Success toast</button>
                                                <button type="button" className="btn btn-warning" id="borderedTost3Btn" onClick={() => setToast3(!toast3)}>Warning toast</button>
                                                <button type="button" className="btn btn-danger" id="borderedToast4Btn" onClick={() => setToast4(!toast4)}>danger toast</button>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast isOpen={toast1} id="borderedToast1" className="toast overflow-hidden mt-3">
                                                    <div className="align-items-center text-white bg-primary border-0">
                                                        <div className="d-flex">
                                                            <ToastBody>
                                                                Hello, world! This is a toast message.
                                                            </ToastBody>
                                                            <button type="button" onClick={() => setToast1(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                                                aria-label="Close"></button>
                                                        </div>
                                                    </div>
                                                </Toast>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast isOpen={toast2} id="borderedToast2" className="toast overflow-hidden mt-3">
                                                    <div className="align-items-center text-white bg-success border-0">
                                                        <div className="d-flex">
                                                            <ToastBody>
                                                                Hello, world! This is a toast message.
                                                            </ToastBody>
                                                            <button type="button" onClick={() => setToast2(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                                                aria-label="Close"></button>
                                                        </div>
                                                    </div>

                                                </Toast>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast isOpen={toast3} id="borderedToast3" className="toast overflow-hidden mt-3">
                                                    <div className="align-items-center text-white bg-warning border-0">
                                                        <div className="d-flex">
                                                            <ToastBody>
                                                                Hello, world! This is a toast message.
                                                            </ToastBody>
                                                            <button type="button" onClick={() => setToast3(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                                                aria-label="Close"></button>
                                                        </div>
                                                    </div>
                                                </Toast>
                                            </div>

                                            <div style={{ zIndex: "11" }}>
                                                <Toast isOpen={toast4} id="borderedToast4" className="toast overflow-hidden mt-3">
                                                    <div className="align-items-center text-white bg-danger border-0">
                                                        <div className="d-flex">
                                                            <ToastBody>
                                                                Hello, world! This is a toast message.
                                                            </ToastBody>
                                                            <button type="button" onClick={() => setToast4(false)} className="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                                                                aria-label="Close"></button>
                                                        </div>
                                                    </div>
                                                </Toast>
                                            </div>
                                        </div>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col xl={12}>
                            <Card>
                                <CardBody>
                                    <h5 className="card-title">Placement Live Example</h5>
                                    <p className="card-title-desc">Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re
                                        only ever going to show one toast at a time, put the positioning styles right on the <code>.toast</code>.</p>
                                    <Form>
                                        <div className="mb-3">
                                            <select className="form-select mt-2" id="selectToastPlacement">
                                                <option defaultValue="">Select a position...</option>
                                                <option value="top-0 start-0">Top left</option>
                                                <option value="top-0 start-50 translate-middle-x">Top center</option>
                                                <option value="top-0 end-0">Top right</option>
                                                <option value="top-50 start-0 translate-middle-y">Middle left</option>
                                                <option value="top-50 start-50 translate-middle">Middle center</option>
                                                <option value="top-50 end-0 translate-middle-y">Middle right</option>
                                                <option value="bottom-0 start-0">Bottom left</option>
                                                <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                                                <option value="bottom-0 end-0">Bottom right</option>
                                            </select>
                                        </div>
                                    </Form>
                                    <div aria-live="polite" aria-atomic="true" className="bd-example bg-light position-relative" style={{ height: "300px" }}>
                                        <div className="toast-container position-absolute p-3" id="toastPlacement">
                                            <Toast isOpen={toast12}>
                                                <ToastHeader toggle={() => setToast12(!toast12)}>
                                                    <img src={logoSm} className="rounded me-2" alt="..." height="20" />
                                                    <strong className="me-auto">Minible</strong>
                                                    <small style={{ marginLeft: "150px" }}>11 mins ago</small>                                                    
                                                </ToastHeader>
                                                <ToastBody>
                                                    Hello, world! This is a toast message.
                                                </ToastBody>
                                            </Toast>
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

export default UiToasts;
