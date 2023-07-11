import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";

const App = () => {
  return (
    <div className="">
      <Container fluid className="border  ">
        <Row className="vh-100 ">
          <Col className="bg-primary  d-flex align-items-center justify-content-center">
            <div className="sidebar">
              <div className="">
                <ul className="list-unstyled fs-4 d-flex flex-column  gap-3">
                  <li>
                    <a className="text-white text-decoration-none" href="">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none " href="">
                      Search
                    </a>
                  </li>
                  <li>
                    <a className="text-white text-decoration-none" href="">
                      Favorite
                    </a>
                  </li>
                  <li>
                    <a className="text-white  text-decoration-none" href="">
                      Playlist
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={8} lg={9}>
            <div>
              <div>
                <div className="w-80">
                  {/* <img
                    className="w-100"
                    src="https://source.unsplash.com/user/c_v_r/1600x900"
                    alt=""
                  /> */}
                </div>

                <div>
                  <div>
                    <Home></Home>
                  </div>
                </div>
                <div>
                  <div>
                    <Home></Home>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
// d-flex align-items-center justify-content-center
export default App;
