import React from "react";

export default function Filter({ category, onCategoryChange }) {
  return (
    <div className="filter">
      <select name="filter" value={category} onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="All">Filter by category</option>
        <option value="General">General</option>
        <option value="Code">Code</option>
        <option value="Leisure">Leisure</option>
        <option value="Family">Family</option>
      </select>
    </div>
  );
}
