import React from "react";
import ServiceCard from "../service-card/service-card";

function CardList({ services,searchInput }) {
  console.log(services);
  const filteredServices = services.filter((service)=>(
    service.city.toLowerCase().includes(searchInput.toLowerCase()) 
  ))

  return (
    <div>
      <div className="row">
        {filteredServices.map((service) => (
          <div className="col">
            <ServiceCard
              key = {service._id}
              providerName={service.placename}
              providerCity={service.city}
              description={service.description}
              location ={service.location}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardList;
