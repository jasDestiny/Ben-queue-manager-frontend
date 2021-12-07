import React from "react";
import "./home-page.styles.css";

import ServiceCard from "../../components/service-card/service-card";

function Home() {
  return (
    <div>
      <div className="row">
        <div className= "col">
          <ServiceCard />
        </div>
        <div className= "col">
          <ServiceCard />
        </div>
        <div className= "col">
          <ServiceCard />
        </div>
        <div className= "col">
          <ServiceCard />
        </div>
        <div className= "col">
          <ServiceCard />
        </div>
      </div>
    </div>
  );
}

export default Home;
