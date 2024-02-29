import { Component } from "react";
import SingleBooks from "../single/SingleBooks";
import fantasy from "../bookJson/fantasy.json";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

class AllTheBooks extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            {fantasy.map((card) => (
              <SingleBooks
                key={card.asin}
                img={card.img}
                title={card.title}
                price={card.price}
                id={card.asin}
              />
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default AllTheBooks;
