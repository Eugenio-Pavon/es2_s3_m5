import { Component } from "react";
import InputComment from "./InputComment";
import CommentList from "./CommentList";
import ListGroup from "react-bootstrap/ListGroup";

class CommentArea extends Component {
  render() {
    // let getComment = async () => {
    //   try {
    //     let response = await fetch(
    //       "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
    //       {
    //         headers: {
    //           Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI4MTNjNTg5OWIxZDAwMTlhNDFjMzUiLCJpYXQiOjE3MDg5NjY5NTcsImV4cCI6MTcxMDE3NjU1N30.BAYVk_ZMI6Q0f3U0b5YVxl1G5tZkuV0QyDXxXqvwMDc",
    //         },
    //       }
    //     );
    //     let comments = await response.json();
    //     console.log(comments);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };
    // getComment();

    // let postComment = async (commentsData) => {
    //   try {
    //     let response = await fetch(
    //       "https://striveschool-api.herokuapp.com/api/put-your-endpoint-here/",
    //       {
    //         method: "POST",
    //         body: JSON.stringify(commentsData),
    //         headers: {
    //           "Content-type": "application/json",
    //           Authorization:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWI4MTNjNTg5OWIxZDAwMTlhNDFjMzUiLCJpYXQiOjE3MDg5NjY5NTcsImV4cCI6MTcxMDE3NjU1N30.BAYVk_ZMI6Q0f3U0b5YVxl1G5tZkuV0QyDXxXqvwMDc",
    //         },
    //       }
    //     );
    //     let comments = await response.json();

    //     console.log(comments);
    //   } catch (e) {
    //     console.log(e);
    //   }
    // };

    // let commentsData = {
    //   test: "ciao ...........",
    // };

    // postComment(commentsData);

    return (
      <>
        <ListGroup as="ul">
          <CommentList />
        </ListGroup>

        <InputComment />
      </>
    );
  }
}
export default CommentArea;
