import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import Card from "../../components/Card/Card.jsx";

import style from "./Home.module.css";
import api from "../../api.js";

export default function Home() {
  //const allBooks = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const allBooks = api.books;

  useEffect(() => {
    /* if(!allBooks.length) dispatch(getBooks()) */
  }, []);

  return (
    <>
      <header>
        <SearchBar />
      </header>
      {/* //aca el navbar */}

      <div className={style.grid}>
        {allBooks.length ? (
          allBooks.map((el, index) => {
            return (
              <Card
                key={index}
                image={el.image}
                price={el.price}
                name={el.name}
                author={el.author}
              />
            );
          })
        ) : (
          <span className={style.span}>404 not found</span>
        )}
      </div>
    </>
  );
}
