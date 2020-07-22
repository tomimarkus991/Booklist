import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ book }) => {
  const { dispatch } = useContext(BookContext);
  const { title, author, id } = book;
  return (
    <li key={id} onClick={() => dispatch({ type: "REMOVE_BOOK", id })}>
      <div className="title">{title}</div>
      <div className="author">{author}</div>
    </li>
  );
};

export default BookDetails;
