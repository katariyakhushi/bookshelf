import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function BookCard({
  book,
  showAddButton,
  showAddCross,
  setIsRemoved,
}) {
  const addBooksToStorage = (data) => {
    console.log("data for storage", data);
    let booksData = JSON.parse(localStorage.getItem("booksItem")) || [];
    const isThere = booksData.some((b) => b.isbn === data.isbn);

    if (!isThere) {
      booksData.push(data);
      localStorage.setItem("booksItem", JSON.stringify(booksData));
      window.alert(`Book added: ${data.title}`);
    } else {
      window.alert(`Book with title ${data.title} is already in storage`);
    }
  };
  const removeBookFromStorage = (data) => {
    let booksData = JSON.parse(localStorage.getItem("booksItem")) || [];
    const updatedBooksData = booksData.filter((b) => b.isbn !== data.isbn);
    localStorage.setItem("booksItem", JSON.stringify(updatedBooksData));
    setIsRemoved(true);
  };

  return (
    <Card className="custom-card">
      <Card.Body className="card-body">
        {showAddCross && (
          <i
            className="bi bi-x-square"
            style={{
              cursor: "pointer",
              marginLeft: "95%",
              marginBottom: "0px",
              color: "green",
            }}
            onClick={() => removeBookFromStorage(book)}
          ></i>
        )}
        <Card.Title className="card-title">
          <b>Book Title :</b> {book.title}
        </Card.Title>
        <Card.Text className="card-title">
          <b>Edition Count:</b> {book.edition}
        </Card.Text>
        <Card.Text className="card-title">
          <b>Published Date:</b>
          {book.first_publish_year}
        </Card.Text>

        {showAddButton && (
          <Button
            variant="primary"
            className="btn-primary"
            onClick={() => {
              addBooksToStorage(book);
            }}
          >
            Add to Bookshelf
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
