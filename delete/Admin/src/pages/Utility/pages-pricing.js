import React from "react"
import { Container, Row, Col } from "reactstrap";
import { pricings } from "../../common/data/utility";

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

//Import Pricing Cards
import CardPricing from "./card-pricing"

const PagesPricing = () => {

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Utility" breadcrumbItem="Pricing" />

          <Row className="justify-content-center">
            <Col lg={5}>
              <div className="text-center mb-5">
                <h4>Choose your Pricing plan</h4>
                <p className="text-muted mb-4">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo veritatis
                </p>
              </div>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={9}>
              <Row>
                {pricings.map((pricing, key) => (
                  <CardPricing pricing={pricing} key={"_pricing_" + key} />
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}
export default PagesPricing
