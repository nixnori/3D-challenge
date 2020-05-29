import React from "react";
import "./Card.scss";
import graph1 from '../../assets/images/graph1.svg';
import graph2 from '../../assets/images/graph2.svg';

function Card() {
  return (
    <>
      <div className="card">
        <h4 className="card-title">Safety Standard Compliance Checklist</h4>
        <div className="card-score">93%</div>
        <div className="card-details">
          <button className="card-button">Details</button>
        </div>
      </div>
      <div className="card">
        <h4 className="card-title">Customer Ratings</h4>
        <div className="card-score">92%</div>
        <div className="card-details">
          <button className="card-button">Details</button>
        </div>
      </div>
    </>
  );
}

export default Card;