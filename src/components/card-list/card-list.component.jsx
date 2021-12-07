import React from "react";
import ServiceCard from "../service-card/service-card";

function CardList() {
  return (
    <div>
      <div className="row">
        <div className="col">
          <ServiceCard />
        </div>
        <div className="col">
          <ServiceCard />
        </div>
        <div className="col">
          <ServiceCard />
        </div>
        <div className="col">
          <ServiceCard />
        </div>
        <div className="col">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default CardList;
