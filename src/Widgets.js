import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div class="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("Folabi is back", "Top news - 9099 readers")}
      {newsArticle("Luis Pineda", "Top news - 886 readers")}
      {newsArticle("KSI crashed his lambo", "Cars & auto - 300 readers")}
      {newsArticle("Bitcoin is down", "Crypto - 8000 readers")}
      {newsArticle("Swarmz took an L", "Sport - 123 readers")}
      {newsArticle("Behzingha weight loss journey", "Top news - 6503 readers")}
    </div>
  );
}

export default Widgets;
