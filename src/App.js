import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components_ui/Header";
import SearchBar from "./components_ui/SearchBar";
import Chracter_grid from "./components_ui/chracters/Chracter_grid";

const App = () => {
  const [items, set_items] = useState([]);
  const [isloading, setisloading] = useState([true]);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      console.log(result.data);
      set_items(result.data);
      setisloading(false);
    };
    fetchItems();
  }, [query]);
  return (
    <div className="container">
      {" "}
      <Header />
      <SearchBar getQuery={(q) => setQuery(q)} />
      <Chracter_grid isloading={isloading} items={items} />
    </div>
  );
};

export default App;
