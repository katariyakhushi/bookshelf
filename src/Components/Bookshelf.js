import React, { useEffect, useState } from "react";
import BookCard from "./BookCard.js";
import { useNavigate } from "react-router-dom";

export default function Bookshelf() {
  const [bookData, setBooksData] = useState([]);
  const [isRemoved, setIsRemoved] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    console.log("data is updated");
    setBooksData(JSON.parse(localStorage.getItem("booksItem")));
  }, []);

  useEffect(() => {
    setBooksData(JSON.parse(localStorage.getItem("booksItem")));
    setIsRemoved(false);
  }, [isRemoved]);

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="container">
      <div className="input-container">
        <h2 style={{ color: "green" }}>My BoodShelf</h2>
      </div>
      <div>
        <button className="button-container" onClick={handleBackToHome}>
          Back To Home
          <i
            class="bi bi-arrow-right-square"
            style={{ whiteSpace: "initial", marginLeft: "8px" }}
          ></i>
        </button>
      </div>
      <div className="card-container">
        {(bookData &&
          bookData.length > 0 &&
          bookData.map((book, index) => (
            <BookCard
              key={index}
              book={book}
              showAddButton={false}
              showAddCross={true}
              setIsRemoved={setIsRemoved}
            />
          ))) ||
          "No books found"}
      </div>
    </div>
  );
}
