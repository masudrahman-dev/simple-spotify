import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MusicCard() {
  return (
    <Card className="">
      <Card.Img
        variant="top"
        src="	https://source.unsplash.com/user/c_v_r/1600x900"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    // <div className="card">
    //   <img
    //     src="https://source.unsplash.com/user/c_v_r/1600x900"
    //     className="card-img-top"
    //     alt="..."
    //   />
    //   <div className="card-body">
    //     <h5 className="card-title">Card title</h5>
    //     <p className="card-text">
    //       Some quick example text to build on the card title and make up the
    //       bulk of the card's content.
    //     </p>
    //     <a href="#" className="btn btn-primary">
    //       Go somewhere
    //     </a>
    //   </div>
    // </div>
  );
}

export default MusicCard;
