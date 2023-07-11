import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import { CiMenuFries } from "react-icons/ci";
import { BiSearchAlt2 } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";
import { RiPlayListLine } from "react-icons/ri";
import animationData from "./assets/Girl listening podcast music.json";
import Lottie from "react-lottie";

const App = () => {
  const menuList = [
    {
      label: "Home",
      icon: <CiMenuFries></CiMenuFries>,
    },
    {
      label: "Search",
      icon: <BiSearchAlt2></BiSearchAlt2>,
    },
    {
      label: "Favorite",
      icon: <MdFavorite></MdFavorite>,
    },
    {
      label: "Playlist",
      icon: <RiPlayListLine></RiPlayListLine>,
    },
  ];
  const menu = (
    <>
      {menuList.map((item) => (
        <li>
          <a className="text-white text-decoration-none" href="">
            {item.icon} <span className="ps-2">{item.label}</span>
          </a>
        </li>
      ))}
    </>
  );
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  return (
    <div className="">
      <Container fluid className="border  ">
        <Row className="vh-100 ">
          <Col className="bg-primary  d-flex align-items-center justify-content-center">
            <div className="sidebar">
              <div className="">
                <ul className="list-unstyled fs-4 d-flex flex-column  gap-3">
                  {menu}
                </ul>
              </div>
            </div>
          </Col>
          <Col md={8} lg={9}>
            <div className="">
              <div>
                <div
                  className=" pt-5  bg-success rounded-bottom d-flex align-items-center justify-content-between"
                  style={{ height: "300px" }}
                >
                  <Lottie options={defaultOptions} />
                  <h4>
                    Your Favorite tunes <br />
                    All and All
                  </h4>
                </div>

                {/* song list */}
                <div>
                  <div className="my-5 d-flex align-items-center justify-content-center">
                    <h6 className="text-secondary " style={{ width: "250px" }}>
                      RELEASED THIS WEEK
                    </h6>
                    <div className="w-100 ">
                      <hr />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Home></Home>
                    </div>
                  </div>
                  <div className="my-5 d-flex align-items-center justify-content-center">
                    <h6 className="text-secondary " style={{ width: "250px" }}>
                      FEATURED PLAYLISTS
                    </h6>
                    <div className="w-100 ">
                      <hr />
                    </div>
                  </div>
                  <div>
                    <div>
                      <Home></Home>
                    </div>
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
