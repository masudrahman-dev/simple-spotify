import MusicCard from "../../components/Card/MusicCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Home = () => {
  return (
    <div>
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-3">
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
        <Col>
          <MusicCard></MusicCard>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
