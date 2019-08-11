import { Row, Col } from "reactstrap";
import "./university.scss";

export default () => {
  return (
    <Row>
      <Col sm={{ size: 0 }} md={4}>
        <div className="university__student" />
      </Col>
      <Col md={8}>
        <div className="university__main">
          <img className="img-fluid" src="/static/images/footer/bmu.png" />
          <h2>STARTING SOON</h2>
        </div>
      </Col>
    </Row>
  );
};
