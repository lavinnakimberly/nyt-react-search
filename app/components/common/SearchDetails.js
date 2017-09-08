import React from "react";
const SearchDetails = props =>
  <div className="text-center">
    {props.map(result =>
    <h3>
      Article Title: {result}
    </h3>
    )}
  </div>;
export default SearchDetails;