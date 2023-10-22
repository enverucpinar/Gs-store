import React, { useContext } from "react";
import { AppContext } from "../GlobalContext";
import FavorilerBos from "./FavorilerBos";

function Favoriler() {
  const { favoriler, favorilerdenCikar } = useContext(AppContext);

  return (
    <div>
      <div className="container favorilersayfa" style={{ minHeight: "100vh" }}>
        {favoriler.length > 0 ? (
          <div className="row">
            {favoriler.map((product) => (
              <div className="col-md-4 my-3">
                <div
                  className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                  style={{ width: "22rem", height: "550px" }}
                >
                  <img
                    src={product.image}
                    alt=""
                    className="card-img-top m-auto"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title">{product.name}</h6>
                    <p className="card-text">{product.price}</p>

                    <button
                      className="btn btn-warning"
                      onClick={() => favorilerdenCikar(product.id)}
                    >
                      FAVORİLERDEN ÇIKAR
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <FavorilerBos />
        )}
      </div>
    </div>
  );
}

export default Favoriler;
