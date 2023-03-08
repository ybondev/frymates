import React from "react";

// ICONS
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container py-3">
        <a class="navbar-brand" href="#">
          FRYMATES
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars className="icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Gallery
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Roadmap
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/manifesto">
                Mainfesto
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="overlay"></div>
    </nav>
  );
};

export default Navbar;
