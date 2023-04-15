import React from "react"

// import apexChart
import LineApexChart from "../AllCharts/apex/chartapex"
import DashedLine from "../AllCharts/apex/dashedLine"
import SplineArea from "../AllCharts/apex/SplineArea"
import Apaexlinecolumn from "../AllCharts/apex/apaexlinecolumn"
import ColumnWithDataLabels from "../AllCharts/apex/ColumnWithDataLabels"
import BarChart from "../AllCharts/apex/barchart"
import LineColumnArea from "../AllCharts/apex/LineColumnArea"
import RadialChart from "../AllCharts/apex/RadialChart"
import PieChart from "../AllCharts/apex/PieChart"
import DonutChart from "../AllCharts/apex/dountchart"

import { Row, Col, Card, CardBody } from "reactstrap"
//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb"

const Apexchart = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <div className="container-fluid">
          <Breadcrumbs title="Charts" breadcrumbItem="Apex" />

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Line with Data Labels</h4>
                  <LineApexChart />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Dashed Line</h4>
                  <DashedLine />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4"> Spline Area </h4>
                  <SplineArea />
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4"> Column Chart </h4>
                  <Apaexlinecolumn />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">
                    Column with Data Labels{" "}
                  </h4>
                  <ColumnWithDataLabels />
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
                  <h4 className="card-title mb-4">
                    Line, Column & Area Chart{" "}
                  </h4>
                  <LineColumnArea />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Radial Chart</h4>
                  <RadialChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Pie Chart </h4>
                  <PieChart />
                </CardBody>
              </Card>
            </Col>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <h4 className="card-title mb-4">Donut Chart</h4>
                  <DonutChart />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Apexchart
