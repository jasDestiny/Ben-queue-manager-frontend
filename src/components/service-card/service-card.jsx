import React from "react";
import "./service-card.styles.scss";

function ServiceCard() {
  return (
    //View VQ stats modal
    <div>
      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    {/* The card */}
    <div class="card-body service-card">
      <h5 class="card-title">Service provider name comes here</h5>
      <h6 class="card-subtitle mb-2 text-muted">Service provider city</h6>
      <p class="card-text">Description</p>
      <button className="btn btn-primary card-link" data-toggle="modal" data-target="#exampleModal">
          Crowd stats
      </button>
      <button className="btn btn-success card-link">
          Join VQ
      </button>
    </div>
    </div>
  );
}

export default ServiceCard;
