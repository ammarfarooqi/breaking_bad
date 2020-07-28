import React from "react";
import CharacterItems from "./CharacterItems";
const Chracter_grid = ({ items, isloading }) => {
  return isloading ? (
    <h1> loading..</h1>
  ) : (
    <section className="cards ">
      {items.map((item) => (
        <CharacterItems key={item.char_id} item={item}></CharacterItems>
      ))}
    </section>
  );
};
export default Chracter_grid;
