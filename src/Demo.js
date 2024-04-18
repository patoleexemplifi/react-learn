import React from "react";
import { data } from "./Data";

const filteredData = data.filter((person) => person.age > 30);

// Adding sort method to the filtered data
const sortedFilteredData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));
const sortedFilteredDataAge = [...filteredData].sort((a, b) => a.name.localeCompare(b.name));

export default function Demo() {
  const filterComponents = sortedFilteredData.map((person) => (
    <div key={person.id}>
      <img src={person.img} alt={person.name} />
      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
    </div>
  ));

  return (
    <div>
      <h1>Filtered and Sorted Data</h1>
      {filterComponents}
    </div>
  );
}
