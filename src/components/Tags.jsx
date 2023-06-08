import React from "react";
import "../styles/Tags.css";

const Tags = ({ allTag }) => {
  return (
    <div className="tag">
      <div className="tag-display"> {allTag} </div>
    </div>
  );
};

export default Tags;
