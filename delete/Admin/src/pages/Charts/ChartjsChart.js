import React from "react"
import { Row, Col, Card, CardBody, Container } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

// import chartJs
import LineChart from "../AllCharts/chartjs/linechart"
import DountChart from "../AllCharts/chartjs/dountchart"
import PieChart from "../AllCharts/chartjs/piechart"
import BarChart from "../AllCharts/chartjs/barchart"
import RadarChart from "../AllCharts/chartjs/radarchart"
import PolarChart from "../AllCharts/chartjs/polarchart"

const ChartjsChart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="Charts" breadcrumbItem="Chartjs" />
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Line Chart</h4>
                  <LineChart />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Bar Chart</h4>
                  <BarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Pie Chart</h4>
                  <PieChart />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Donut Chart</h4>
                  <DountChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Polar Chart</h4>
                  <PolarChart />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Radar Chart</h4>
                  <RadarChart />
                </CardBody>
              </Card>
            </Col>
          </Row>{" "}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default ChartjsChart
