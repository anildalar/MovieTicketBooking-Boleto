import React, { useState } from "react"

import {
  TabContent,
  TabPane,
  Collapse,
  NavLink,
  NavItem,
  Nav,
  Card,
  Row,
  Col,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap"

import { Link } from "react-router-dom"

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

import classnames from "classnames"

const UiTabsAccordions = () => {
  const [activeTab, setactiveTab] = useState("1")
  const [activeTab1, setactiveTab1] = useState("5")
  const [activeTabV, setactiveTabV] = useState("15")
  //const [activeTab2, setactiveTab2] = useState("9");
  //const [activeTab3, setactiveTab3] = useState("13");
  const [activeTabJustify, setactiveTabJustify] = useState("5")
  const [activeTabJustify1, setactiveTabJustify1] = useState("20")
  const [activeTabJustify2, setactiveTabJustify2] = useState("25")
  const [col1, setcol1] = useState(true)
  const [col2, setcol2] = useState(false)
  const [col3, setcol3] = useState(false)
  const [col5, setcol5] = useState(true)
  const [col6, setcol6] = useState(true)
  const [col7, setcol7] = useState(true)
  const [col8, setcol8] = useState(true)
  const [col9, setcol9] = useState(false)
  const [col10, setcol10] = useState(false)
  const [col11, setcol11] = useState(false);

  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab)
    }
  }
  function toggle1(tab) {
    if (activeTab1 !== tab) {
      setactiveTab1(tab)
    }
  }

  function togglecol1() {
    setcol1(!col1)
    setcol2(false)
    setcol3(false)
  }

  function togglecol2() {
    setcol1(false)
    setcol2(!col2)
    setcol3(false)
  }

  function togglecol3() {
    setcol1(false)
    setcol2(false)
    setcol3(!col3)
  }

  function togglecol8() {
    setcol8(!col8)
    setcol9(false)
    setcol10(false)
  }

  function togglecol9() {
    setcol8(false)
    setcol9(!col9)
    setcol10(false)
  }

  function togglecol10() {
    setcol8(false)
    setcol9(false)
    setcol10(!col10)
  }

  function togglecol11() {
    setcol11(!col11)
  }

  function toggleV(tab) {
    if (activeTabV !== tab) {
      setactiveTabV(tab)
    }
  }

  function toggleCustomJustified(tab) {
    if (activeTabJustify !== tab) {
      setactiveTabJustify(tab)
    }
  }

  function toggleCustomJustified1(tab) {
    if (activeTabJustify1 !== tab) {
      setactiveTabJustify1(tab)
    }
  }

  function toggleCustomJustified2(tab) {
    if (activeTabJustify2 !== tab) {
      setactiveTabJustify2(tab)
    }
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Tabs & Accordions" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Tabs</CardTitle>
                  <p className="card-title-desc">Example of Nav Tabs</p>

                  <Nav tabs>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "1",
                        })}
                        onClick={() => {
                          toggle("1")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "2",
                        })}
                        onClick={() => {
                          toggle("2")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab === "3",
                        })}
                        onClick={() => {
                          toggle("3")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab} className="p-3 text-muted">
                    <TabPane tabId="1">
                      <p className="mb-0">
                        Raw denim you probably haven&apos;t heard of them jean
                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Cosby sweater
                        eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis
                        cardigan american apparel, butcher voluptate nisi qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="2" className="p-3">
                      <p className="mb-0">
                        Food truck fixie locavore, accusamus mcsweeney&apos;s
                        marfa nulla single-origin coffee squid. Exercitation +1
                        labore velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus.
                      </p>
                    </TabPane>
                    <TabPane tabId="3" className="p-3">
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney&apos;s organic lomo retro fanny
                        pack lo-fi farm-to-table readymade. Messenger bag
                        gentrify pitchfork tattooed craft beer, iphone
                        skateboard locavore carles etsy salvia banksy hoodie
                        helvetica. DIY synth PBR banksy irony. Leggings gentrify
                        squid 8-bit cred pitchfork. Williamsburg banh mi
                        whatever gluten yr.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Nav pills</CardTitle>
                  <p className="card-title-desc">Example of Nav pills</p>

                  <Nav pills>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "5",
                        })}
                        onClick={() => {
                          toggle1("5")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "6",
                        })}
                        onClick={() => {
                          toggle1("6")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTab1 === "7",
                        })}
                        onClick={() => {
                          toggle1("7")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTab1} className="p-3 text-muted">
                    <TabPane tabId="5">
                      <p className="mb-0">
                        Raw denim you probably haven&apos;t heard of them jean
                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Cosby sweater
                        eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis
                        cardigan american apparel, butcher voluptate nisi qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="6">
                      <p className="mb-0">
                        Food truck fixie locavore, accusamus mcsweeney&apos;s
                        marfa nulla single-origin coffee squid. Exercitation +1
                        labore velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus mollit. Keytar helvetica VHS salvia yr,
                        vero magna velit sapiente labore stumptown. Vegan fanny
                        pack odio cillum wes anderson 8-bit.
                      </p>
                    </TabPane>
                    <TabPane tabId="7">
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney&apos;s organic lomo retro fanny
                        pack lo-fi farm-to-table readymade. Messenger bag
                        gentrify pitchfork tattooed craft beer, iphone
                        skateboard locavore carles etsy salvia banksy hoodie
                        helvetica. DIY synth PBR banksy irony. Leggings gentrify
                        squid 8-bit cred pitchfork. Williamsburg banh mi
                        whatever gluten-free, carles pitchfork biodiesel fixie
                        etsy retro mlkshk vice blog. Scenester cred you probably
                        haven&apos;t heard of them, vinyl craft beer blog
                        stumptown. Pitchfork sustainable tofu synth chambray yr.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Vertical Nav Tabs</CardTitle>
                  <p className="card-title-desc">
                    Example of Vertical nav tabs
                  </p>
                  <Row>
                    <Col md={3}>
                      <Nav pills className="flex-column">
                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames("mb-2", {
                            active: activeTabV === "15",
                          })}
                          onClick={() => {
                            toggleV("15")
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="fas fa-home"></i>
                          </span>
                          <span className="d-none d-sm-block">Home</span>
                        </NavLink>

                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames("mb-2", {
                            active: activeTabV === "16",
                          })}
                          onClick={() => {
                            toggleV("16")
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-user"></i>
                          </span>
                          <span className="d-none d-sm-block">Profile</span>
                        </NavLink>

                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames("mb-2", {
                            active: activeTabV === "17",
                          })}
                          onClick={() => {
                            toggleV("17")
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-envelope"></i>
                          </span>
                          <span className="d-none d-sm-block">Messages</span>
                        </NavLink>

                        <NavLink
                          style={{ cursor: "pointer" }}
                          className={classnames("mb-2", {
                            active: activeTabV === "18",
                          })}
                          onClick={() => {
                            toggleV("18")
                          }}
                        >
                          <span className="d-block d-sm-none">
                            <i className="far fa-envelope"></i>
                          </span>
                          <span className="d-none d-sm-block">Settings</span>
                        </NavLink>
                      </Nav>
                    </Col>
                    <Col md={9}>
                      <TabContent
                        activeTab={activeTabV}
                        className="text-muted mt-4 mt-md-0"
                      >
                        <TabPane tabId="15">
                          <p>
                            Raw denim you probably haven&apos;t heard of them
                            jean shorts Austin. Nesciunt tofu stumptown aliqua,
                            retro synth master cleanse. Mustache cliche tempor,
                            williamsburg carles vegan helvetica. Reprehenderit
                            butcher retro keffiyeh dreamcatcher synth. Cosby
                            sweater eu banh mi, qui irure terry richardson ex
                            squid. Aliquip placeat salvia cillum iphone. Seitan
                            aliquip quis cardigan.
                          </p>
                          <p>
                            Reprehenderit butcher retro keffiyeh dreamcatcher
                            synth. Cosby sweater eu banh mi, qui irure terry
                            richardson ex squid.
                          </p>
                        </TabPane>
                        <TabPane tabId="16">
                          <p>
                            Food truck fixie locavore, accusamus
                            mcsweeney&apos;s marfa nulla single-origin coffee
                            squid. Exercitation +1 labore velit, blog sartorial
                            PBR leggings next level wes anderson artisan four
                            loko farm-to-table craft beer twee. Qui photo booth
                            letterpress, commodo enim craft beer mlkshk.
                          </p>
                          <p className="mb-0">
                            {" "}
                            Qui photo booth letterpress, commodo enim craft beer
                            mlkshk aliquip jean shorts ullamco ad vinyl cillum
                            PBR. Homo nostrud organic, assumenda labore
                            aesthetic magna 8-bit
                          </p>
                        </TabPane>
                        <TabPane tabId="17">
                          <p>
                            Etsy mixtape wayfarers, ethical wes anderson tofu
                            before they sold out mcsweeney&apos;s organic lomo
                            retro fanny pack lo-fi farm-to-table readymade.
                            Messenger bag gentrify pitchfork tattooed craft
                            beer, iphone skateboard locavore carles etsy salvia
                            banksy hoodie helvetica. DIY synth PBR banksy irony.
                            Leggings gentrify squid 8-bit cred.
                          </p>
                          <p className="mb-0">
                            DIY synth PBR banksy irony. Leggings gentrify squid
                            8-bit cred pitchfork. Williamsburg banh mi whatever
                            gluten-free.
                          </p>
                        </TabPane>
                        <TabPane tabId="18">
                          <p>
                            Trust fund seitan letterpress, keytar raw denim
                            keffiyeh etsy art party before they sold out master
                            cleanse gluten-free squid scenester freegan cosby
                            sweater. Fanny pack portland seitan DIY, art party
                            locavore wolf cliche high life echo park Austin.
                            Cred vinyl keffiyeh DIY salvia PBR, banh mi before
                            they sold out farm-to-table.
                          </p>
                          <p className="mb-0">
                            Fanny pack portland seitan DIY, art party locavore
                            wolf cliche high life echo park Austin. Cred vinyl
                            keffiyeh DIY salvia PBR, banh mi before they sold
                            out farm-to-table.
                          </p>
                        </TabPane>
                      </TabContent>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Custom Tabs</CardTitle>
                  <p className="card-title-desc">Example of custom tabs</p>

                  <Nav tabs className="nav-tabs-custom nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "5",
                        })}
                        onClick={() => {
                          toggleCustomJustified("5")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "6",
                        })}
                        onClick={() => {
                          toggleCustomJustified("6")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "7",
                        })}
                        onClick={() => {
                          toggleCustomJustified("7")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify === "8",
                        })}
                        onClick={() => {
                          toggleCustomJustified("8")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">Settings</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent activeTab={activeTabJustify}>
                    <TabPane tabId="5" className="p-3">
                      <p className="mb-0">
                        Raw denim you probably haven&apos;t heard of them jean
                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Cosby sweater
                        eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis
                        cardigan american apparel, butcher voluptate nisi qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="6" className="p-3">
                      <p className="mb-0">
                        Food truck fixie locavore, accusamus mcsweeney&apos;s
                        marfa nulla single-origin coffee squid. Exercitation +1
                        labore velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus.
                      </p>
                    </TabPane>
                    <TabPane tabId="7" className="p-3">
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney&apos;s organic lomo retro fanny
                        pack lo-fi farm-to-table readymade. Messenger bag
                        gentrify pitchfork tattooed craft beer, iphone
                        skateboard locavore carles etsy salvia banksy hoodie
                        helvetica. DIY synth PBR banksy irony. Leggings gentrify
                        squid 8-bit cred pitchfork. Williamsburg banh mi
                        whatever gluten-free carles.
                      </p>
                    </TabPane>

                    <TabPane tabId="8" className="p-3">
                      <p className="mb-0">
                        Trust fund seitan letterpress, keytar raw denim keffiyeh
                        etsy art party before they sold out master cleanse
                        gluten-free squid scenester freegan cosby sweater. Fanny
                        pack portland seitan DIY, art party locavore wolf cliche
                        high life echo park Austin. Cred vinyl keffiyeh DIY
                        salvia PBR, banh mi before they sold out farm-to-table
                        VHS viral locavore cosby sweater. Lomo wolf viral,
                        mustache readymade keffiyeh craft.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Nav tabs justify</CardTitle>
                  <p className="card-title-desc">
                    Example of Nav Tabs justified
                  </p>

                  <Nav tabs className="nav-justified">
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify1 === "20",
                        })}
                        onClick={() => {
                          toggleCustomJustified1("20")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify1 === "21",
                        })}
                        onClick={() => {
                          toggleCustomJustified1("21")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify1 === "22",
                        })}
                        onClick={() => {
                          toggleCustomJustified1("22")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify1 === "23",
                        })}
                        onClick={() => {
                          toggleCustomJustified1("23")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">Settings</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent
                    activeTab={activeTabJustify1}
                    className="p-3 text-muted"
                  >
                    <TabPane tabId="20">
                      <p className="mb-0">
                        Raw denim you probably haven&apos;t heard of them jean
                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Cosby sweater
                        eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis
                        cardigan american apparel, butcher voluptate nisi qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="21">
                      <p className="mb-0">
                        Food truck fixie locavore, accusamus mcsweeney&apos;s
                        marfa nulla single-origin coffee squid. Exercitation +1
                        labore velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus.
                      </p>
                    </TabPane>
                    <TabPane tabId="22">
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney&apos;s organic lomo retro fanny
                        pack lo-fi farm-to-table readymade. Messenger bag
                        gentrify pitchfork tattooed craft beer, iphone
                        skateboard locavore carles etsy salvia banksy hoodie
                        helvetica. DIY synth PBR banksy irony. Leggings gentrify
                        squid 8-bit cred pitchfork. Williamsburg banh mi
                        whatever gluten yr.
                      </p>
                    </TabPane>

                    <TabPane tabId="23">
                      <p className="mb-0">
                        Trust fund seitan letterpress, keytar raw denim keffiyeh
                        etsy art party before they sold out master cleanse
                        gluten-free squid scenester freegan cosby sweater. Fanny
                        pack portland seitan DIY, art party locavore wolf cliche
                        high life echo park Austin. Cred vinyl keffiyeh DIY
                        salvia PBR, banh mi before they sold out farm-to-table
                        VHS.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Nav pills justify</CardTitle>
                  <p className="card-title-desc">
                    Example of Nav pills justified
                  </p>

                  <Nav pills className="nav-justified bg-light">
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "25",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("25")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-home"></i>
                        </span>
                        <span className="d-none d-sm-block">Home</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "26",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("26")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-user"></i>
                        </span>
                        <span className="d-none d-sm-block">Profile</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "27",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("27")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="far fa-envelope"></i>
                        </span>
                        <span className="d-none d-sm-block">Messages</span>
                      </NavLink>
                    </NavItem>
                    <NavItem className="waves-effect waves-light">
                      <NavLink
                        style={{ cursor: "pointer" }}
                        className={classnames({
                          active: activeTabJustify2 === "28",
                        })}
                        onClick={() => {
                          toggleCustomJustified2("28")
                        }}
                      >
                        <span className="d-block d-sm-none">
                          <i className="fas fa-cog"></i>
                        </span>
                        <span className="d-none d-sm-block">Settings</span>
                      </NavLink>
                    </NavItem>
                  </Nav>

                  <TabContent
                    activeTab={activeTabJustify2}
                    className="p-3 text-muted"
                  >
                    <TabPane tabId="25">
                      <p className="mb-0">
                        Raw denim you probably haven&apos;t heard of them jean
                        shorts Austin. Nesciunt tofu stumptown aliqua, retro
                        synth master cleanse. Mustache cliche tempor,
                        williamsburg carles vegan helvetica. Reprehenderit
                        butcher retro keffiyeh dreamcatcher synth. Cosby sweater
                        eu banh mi, qui irure terry richardson ex squid. Aliquip
                        placeat salvia cillum iphone. Seitan aliquip quis
                        cardigan american apparel, butcher voluptate nisi qui.
                      </p>
                    </TabPane>
                    <TabPane tabId="26">
                      <p className="mb-0">
                        Food truck fixie locavore, accusamus mcsweeney&apos;s
                        marfa nulla single-origin coffee squid. Exercitation +1
                        labore velit, blog sartorial PBR leggings next level wes
                        anderson artisan four loko farm-to-table craft beer
                        twee. Qui photo booth letterpress, commodo enim craft
                        beer mlkshk aliquip jean shorts ullamco ad vinyl cillum
                        PBR. Homo nostrud organic, assumenda labore aesthetic
                        magna delectus.
                      </p>
                    </TabPane>
                    <TabPane tabId="27">
                      <p className="mb-0">
                        Etsy mixtape wayfarers, ethical wes anderson tofu before
                        they sold out mcsweeney&apos;s organic lomo retro fanny
                        pack lo-fi farm-to-table readymade. Messenger bag
                        gentrify pitchfork tattooed craft beer, iphone
                        skateboard locavore carles etsy salvia banksy hoodie
                        helvetica. DIY synth PBR banksy irony. Leggings gentrify
                        squid 8-bit cred pitchfork. Williamsburg banh mi
                        whatever gluten yr.
                      </p>
                    </TabPane>

                    <TabPane tabId="28">
                      <p className="mb-0">
                        Trust fund seitan letterpress, keytar raw denim keffiyeh
                        etsy art party before they sold out master cleanse
                        gluten-free squid scenester freegan cosby sweater. Fanny
                        pack portland seitan DIY, art party locavore wolf cliche
                        high life echo park Austin. Cred vinyl keffiyeh DIY
                        salvia PBR, banh mi before they sold out farm-to-table
                        VHS.
                      </p>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Default Collapse</CardTitle>
                  <p className="card-title-desc mb-3">
                    You can use a link with the{" "}
                    <code className="highlighter-rouge">href</code> attribute,
                    or a button with the{" "}
                    <code className="highlighter-rouge">data-target</code>{" "}
                    attribute. In both cases, the{" "}
                    <code className="highlighter-rouge">
                      {" "}
                      data-toggle=&quot;collapse&quot;
                    </code>{" "}
                    is required.
                  </p>

                  <p className="d-flex flex-wrap gap-2">
                    <Link
                      to="#"
                      onClick={() => {
                        setcol5(!col5)
                      }}
                      style={{ cursor: "pointer" }}
                      className="btn btn-primary"
                    >
                      Link with href
                    </Link>
                    <button
                      onClick={() => {
                        setcol5(!col5)
                      }}
                      className="btn btn-primary"
                      type="button"
                      style={{ cursor: "pointer" }}
                    >
                      Button with data-target
                    </button>
                  </p>
                  <Collapse isOpen={col5}>
                    <Card>
                      <CardBody>
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. Nihil anim
                        keffiyeh helvetica, craft beer labore wes anderson cred
                        nesciunt sapiente ea proident.
                      </CardBody>
                    </Card>
                  </Collapse>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Multiple targets</CardTitle>
                  <p>
                    A <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
                    show and hide multiple elements by referencing them with a
                    selector in its <code>href</code> or
                    <code>data-bs-target</code> attribute. Multiple{" "}
                    <code>&lt;button&gt;</code> or <code>&lt;a&gt;</code> can
                    show and hide an element if they each reference it with
                    their <code>href</code> or
                    <code>data-bs-target</code> attribute
                  </p>

                  <p className="d-flex flex-wrap gap-2">
                    <Link
                      to="#"
                      onClick={() => {
                        setcol6(!col6)
                      }}
                      style={{ cursor: "pointer" }}
                      className="btn btn-primary"
                    >
                      Toggle first element{" "}
                    </Link>
                    <button
                      onClick={() => {
                        setcol7(!col7)
                      }}
                      className="btn btn-primary"
                      type="button"
                      style={{ cursor: "pointer" }}
                    >
                      Toggle second element
                    </button>
                    <button
                      onClick={() => {
                        setcol6(!col6)
                        setcol7(!col7)
                      }}
                      className="btn btn-primary"
                      type="button"
                      style={{ cursor: "pointer" }}
                    >
                      Toggle both elements
                    </button>
                  </p>
                  <Row>
                    <Col>
                      <Collapse isOpen={col6}>
                        <Card className="card-body mb-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </Card>
                      </Collapse>
                    </Col>
                    <Col>
                      <Collapse isOpen={col7}>
                        <Card className="card-body mb-0">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. Nihil anim
                          keffiyeh helvetica, craft beer labore wes anderson
                          cred nesciunt sapiente ea proident.
                        </Card>
                      </Collapse>
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
                  <CardTitle className="h4">Accordion example</CardTitle>
                  <p className="card-title-desc">
                    Extend the default collapse behavior to create an accordion.
                  </p>

                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className={classnames(
                            "accordion-button",
                            "fw-medium",
                            { collapsed: !col1 }
                          )}
                          type="button"
                          onClick={togglecol1}
                          style={{ cursor: "pointer" }}
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <Collapse
                        id="collapseOne"
                        className="accordion-collapse"
                        isOpen={col1}
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the first item&apos;s accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingTwo">
                        <button
                          className={classnames(
                            "accordion-button",
                            "fw-medium",
                            { collapsed: !col2 }
                          )}
                          type="button"
                          onClick={togglecol2}
                          style={{ cursor: "pointer" }}
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <Collapse
                        id="collapseTwo"
                        className="accordion-collapse"
                        isOpen={col2}
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the second item&apos;s accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingThree">
                        <button
                          className={classnames(
                            "accordion-button",
                            "fw-medium",
                            { collapsed: !col3 }
                          )}
                          type="button"
                          onClick={togglecol3}
                          style={{ cursor: "pointer" }}
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <Collapse
                        id="collapseThree"
                        className="accordion-collapse"
                        isOpen={col3}
                      >
                        <div className="accordion-body">
                          <strong>
                            This is the third item&apos;s accordion body.
                          </strong>{" "}
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It&apos;s also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle className="h4">Accordion example Flush</CardTitle>
                  <p>
                    Add <code>.accordion-flush</code> to remove the default
                    <code>background-color</code>, some borders, and some
                    rounded corners to render accordions edge-to-edge with their
                    parent container.
                  </p>
                  <div
                    className="accordion accordion-flush"
                    id="accordionFlushExample"
                  >
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button
                          className={classnames(
                            "accordion-button",
                            { collapsed: !col8 }
                          )}
                          type="button"
                          onClick={togglecol8}
                          style={{ cursor: "pointer" }}
                        >
                          Accordion Item #1
                        </button>
                      </h2>
                      <Collapse
                        id="flush-collapseOne"
                        className="accordion-collapse"
                        isOpen={col8}
                      >
                        <div className="accordion-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven&apos;t heard of them accusamus
                          labore sustainable VHS.
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button
                          className={classnames(
                            "accordion-button",
                            { collapsed: !col9 }
                          )}
                          type="button"
                          onClick={togglecol9}
                          style={{ cursor: "pointer" }}
                        >
                          Accordion Item #2
                        </button>
                      </h2>
                      <Collapse
                        id="flush-collapseTwo"
                        className="accordion-collapse"
                        isOpen={col9}
                      >
                        <div className="accordion-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven&apos;t heard of them accusamus
                          labore sustainable VHS.
                        </div>
                      </Collapse>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button
                          className={classnames(
                            "accordion-button",
                            "fw-medium",
                            { collapsed: !col10 }
                          )}
                          type="button"
                          onClick={togglecol10}
                          style={{ cursor: "pointer" }}
                        >
                          Accordion Item #3
                        </button>
                      </h2>
                      <Collapse
                        id="flush-collapseThree"
                        className="accordion-collapse"
                        isOpen={col10}
                      >
                        <div className="accordion-body">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven&apos;t heard of them accusamus
                          labore sustainable VHS.
                        </div>
                      </Collapse>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title">Horizontal Collapse</h4>
                  <p className="card-title-desc">The collapse plugin also supports horizontal collapsing. Add the <code>.collapse-horizontal</code> modifier class to transition the <code>width</code> instead of <code>height</code> and set a <code>width</code> on the immediate child element.</p>

                  <p>
                    <button
                      className={classnames(
                        "btn btn-primary",
                        { collapsed: !col11 }
                      )}
                      type="button"
                      onClick={togglecol11}
                      style={{ cursor: "pointer" }}
                    >
                      Toggle width collapse
                    </button>
                  </p>
                  <div style={{ minHeight: "110px" }}>
                    <Collapse
                      horizontal
                      className="collapse-horizontal"
                      id="collapseWidthExample"
                      isOpen={col11}
                    >
                      <div className="card border shadow-none card-body text-muted mb-0" style={{ width: "300px" }}>
                        This is some placeholder content for a horizontal collapse. It&apos;s hidden by default and shown when
                        triggered.
                      </div>
                    </Collapse>
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

export default UiTabsAccordions
