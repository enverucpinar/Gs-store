import React, { useContext, useState } from "react";
import { AppContext } from "../GlobalContext";
import { products } from "../gsStore";

function Store() {
  const { favoriler, favorilereEkle, favorilerdenCikar } =
    useContext(AppContext);
  const [searchText, setSearchText] = useState(""); // Store the search input text
  const [filteredPlayers, setFilteredPlayers] = useState(products);

  const playerHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchText(inputValue);
    if (inputValue) {
      const result = products.filter((item) =>
        // item.name.toLowerCase().includes(inputValue) ||
        item.category.toLowerCase().includes(inputValue)
      );
      setFilteredPlayers(result);
    } else {
      setFilteredPlayers([]);
    }
  };

  const displayItems = searchText ? filteredPlayers : products;

  const favoriKontrol = (x) => {
    const secim = favoriler.some((p) => p.id === x);
    return secim;
  };
  return (
    <div>
      <div>
        <input
          type="text"
          className="form-control my-3 w-50 m-auto"
          placeholder="Search"
          value={searchText}
          onChange={playerHandler}
        />
      </div>
      <div className="row">
        {displayItems.map((product) => (
          <div className="col-md-3 my-3">
            <div
              className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              style={{ width: "22rem", height: "650px" }}
            >
              <img src={product.image} alt="" className="card-img-top m-auto" />
              <div className="card-body">
                <h6 className="card-title">{product.name}</h6>
                <p className="card-text">{product.price} </p>

                {favoriKontrol(product.id) ? (
                  <button
                    className="btn btn-warning"
                    onClick={() => favorilerdenCikar(product.id)}
                  >
                    <i class="fa-regular fa-heart"></i>
                  </button>
                ) : (
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => favorilereEkle(product)}
                  >
                    <i class="fa-regular fa-heart"></i>
                  </button>
                )}
                <button className="btn btn-danger mx-3">Sepete Ekle</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
