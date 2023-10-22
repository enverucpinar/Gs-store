import React, { useContext } from "react";
import { AppContext } from "../GlobalContext";
import { Link } from "react-router-dom";

function Navbar() {
  const { favoriler } = useContext(AppContext);
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid bg-danger" style={{ height: "100px" }}>
          <Link className="navbar-brand" to="#">
            <img
              src="https://akn-gsstore-static.a-cdn.akinoncloud.com/static_omnishop/gsstore-29.3/img/gs-logo.svg"
              alt=""
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/anasayfa"
                >
                  <strong>Anasayfa</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/takimlistesi"
                >
                  <strong>Futbol Takımı</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/store"
                >
                  <strong>Store</strong>
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-2 text-center">
                <Link className="nav-link" to="#">
                  <img
                    style={{ fontSize: "30px" }}
                    src="https://akn-gsstore-static.a-cdn.akinoncloud.com/static_omnishop/gsstore-29.3/img/account.svg"
                    alt=""
                  />

                  <p style={{ fontSize: "10px" }}>HESABIM</p>
                </Link>
              </li>
              <li className="nav-item mx-2 text-center">
                <Link className="nav-link" to="/favoriler">
                  <i
                    class="fa-regular fa-star"
                    style={{ fontSize: "30px" }}
                  ></i>

                  <p style={{ fontSize: "10px" }}>FAVORİLERİM</p>
                </Link>
              </li>
              <li className="nav-item mx-2 text-center">
                <Link className="nav-link" to="/sepetim">
                  <i
                    class="fa-solid fa-cart-shopping"
                    style={{ fontSize: "30px" }}
                  ></i>
                  <p style={{ fontSize: "10px" }}>SEPETİM</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
