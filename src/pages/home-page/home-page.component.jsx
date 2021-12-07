import React from "react";
import "./home-page.styles.css";


function Home() {
  return (
    <div>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">
            Queue Manager
          </a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Service Providers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link">Change Settings</a>
              </li>
            </ul>
            <form class="d-flex">
              <input
                class="form-control me-2 searchWidth"
                type="search"
                placeholder="Search service providers"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>

    
    <div class="card cardServices">
        <div class="card-body">
            <h5 class="card-title">Service provider name comes here</h5>
            <h6 class="card-subtitle mb-2 text-muted">Service provider city</h6>
            <p class="card-text">Description</p>
            <a href="#" class="card-link">View VQ stats</a>
            <a href="#" class="card-link">Join VQ</a>
        </div>
        </div>

    </div>
  );
}

export default Home;
