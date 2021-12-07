import React from "react";
import "./service-card.styles.scss";

function ServiceCard() {
  return (
    <div class="card-body service-card">
      <h5 class="card-title">Service provider name comes here</h5>
      <h6 class="card-subtitle mb-2 text-muted">Service provider city</h6>
      <p class="card-text">Description</p>
      <button className="btn btn-primary card-link">
          View VQ stats
      </button>
      <button className="btn btn-success card-link">
          Join VQ
      </button>
    </div>
  );
}

export default ServiceCard;
