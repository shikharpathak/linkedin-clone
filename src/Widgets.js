import React from "react";
import "./Widgets.css";
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return <div className="Widgets">
    <div className="widgets_Header">
      <h2>Linkedin News</h2>
      <InfoIcon/>   
       </div>
       {newsArticle("React is awesome", "I love React")}
       {newsArticle("Redux is amazing", "React-Redux are buddies")}
       {newsArticle("Front-end is the best", "I will be a Front end developer")}
  </div>;
}

export default Widgets;
