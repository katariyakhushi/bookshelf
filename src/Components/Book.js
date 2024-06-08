import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Book.css";
import BookCard from "./BookCard.js";
import axios from "axios";

export default function Book() {
  const [booksData, setBooksData] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState("");

  const navigate = useNavigate(); 

  const searchQuery = async (search) => {
    try {
      setIsLoading(true);
      const data = await axios.get(
        `https://openlibrary.org/search.json?q=${search}&limit=10&page=1`
      );

      setIsLoading(false);

      console.log("data", data);
      let parsedData = data.data.docs.map((d) => ({
        title: d.title || "",
        edition: d.edition_count || "",
        author: d.author_name || "",
        first_publish_year: d.first_publish_year || "",
        isbn: (d && d.isbn && d.isbn[0]) || "",
      }));

      console.log("parsedData", parsedData);
      setBooksData(parsedData);
    } catch (e) {
      setIsLoading(false);
      console.log("Error fetching data, pls try again", e);
    }
  };

  useEffect(() => {
    console.log("search changed", search);
    if (search && search.length > 3) {
      searchQuery(search);
    }
  }, [search]);

  const handleButtonClick = () => {
    navigate("/bookshelf"); 
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <h2>Search by book name:</h2>
          <div className="input-wrapper">
            <input
              name="firstName"
              className="border-round"
              placeholder="Search Book"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <i className="bi bi-search"></i>
          </div>
        </div>
        <div>
          <button className="button-container" onClick={handleButtonClick}>
            My Bookshelf
            <i
              className="bi bi-book"
              style={{ whiteSpace: "initial", marginLeft: "8px" }}
            ></i>
          </button>
        </div>
      </div>
      <div
        className="card-wrapper"
        style={{
          margin: "50px",
        }}
      >
        <div className="card-container">
          {(!isLoading &&
            booksData &&
            booksData.length > 0 &&
            booksData.map((book, index) => (
              <BookCard
                key={index}
                book={book}
                showAddButton={true}
                showAddCross={false}
              />
            ))) ||
            (!isLoading && "No Data found")}
          {isLoading && <div className="loader"></div>}
        </div>
      </div>
    </>
  );
}
