import { Component } from "react";
import ListGroup from "react-bootstrap/ListGroup";

class CommentList extends Component {
  render() {
    return (
      <>
        <ListGroup.Item as="li" active>
          {this.props.commentText}
        </ListGroup.Item>
      </>
    );
  }
}
export default CommentList;
