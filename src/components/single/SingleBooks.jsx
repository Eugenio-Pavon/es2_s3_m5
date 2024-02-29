import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CommentArea from "../comment/CommentArea";
import { Link } from "react-router-dom";

class SingleBooks extends Component {
  render() {
    return (
      <>
        <Col sm={6} md={4} lg={3}>
          <Card>
            <Card.Img src={this.props.img} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>{this.props.price}</Card.Text>
            </Card.Body>
            <Link to={`/book/${this.props.id}`}>
              <button>Dettagli</button>
            </Link>
            <CommentArea />
          </Card>
        </Col>
      </>
    );
  }
}

export default SingleBooks;
