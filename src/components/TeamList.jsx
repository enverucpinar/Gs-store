import React, { useContext, useState } from "react";
import { players } from "../team";
import { AppContext } from "../GlobalContext";

function UrunListesi() {
  const { favoriler, favorilereEkle, favorilerdenCikar } =
    useContext(AppContext);

  const [searchText, setSearchText] = useState(""); // Store the search input text
  const [filteredPlayers, setFilteredPlayers] = useState(players);

  const playerHandler = (e) => {
    const inputValue = e.target.value.toLowerCase();
    setSearchText(inputValue);
    if (inputValue) {
      const result = players.filter(
        (item) =>
          item.name.toLowerCase().includes(inputValue) ||
          item.role.toLowerCase().includes(inputValue)
      );
      setFilteredPlayers(result);
    } else {
      setFilteredPlayers([]);
    }
  };

  const displayItems = searchText ? filteredPlayers : players;

  return (
    <div>
      <h3 className="text-danger">GALATASARAY SK</h3>
      <h5 className="text-danger">Futbol A Takım Kadrosu</h5>
      <input
        type="text"
        className="form-control my-3 w-50 m-auto"
        placeholder="About Player"
        value={searchText}
        onChange={playerHandler}
      />
      <div className="row">
        {displayItems.map((player) => (
          <div className="col-md-3 my-3">
            <div
              className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
              style={{ width: "22rem", height: "450px" }}
            >
              <img
                src={player.image}
                alt=""
                className="card-img-top m-auto btn-modal"
                style={{ cursor: "pointer" }}
              />

              <div className="card-body">
                <button
                  style={{ width: "300px" }}
                  type="button"
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target={`#playerModal${player.id}`} // Unique target for each player
                >
                  INFO
                </button>
                {/* Modal */}
                <div
                  className="modal fade"
                  id={`playerModal${player.id}`} // Unique ID for each player
                  tabIndex={-1}
                  aria-labelledby={`playerModalLabel${player.id}`} // Unique label for each player
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id={`playerModalLabel${player.id}`}
                        >
                          {player.name}
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        />
                      </div>
                      <div className="modal-body d-flex">
                        <div className="">
                          <img
                            src={player.image}
                            alt=""
                            style={{ maxHeight: "300px", maxWidth: "250px" }}
                          />
                        </div>
                        {/* Player details here */}

                        <div className="mx-4 text-start">
                          <p>
                            <strong>Name: </strong> {player.name}
                          </p>
                          <p>
                            <strong>Nationality:</strong> {player.nationality}
                          </p>
                          <p>
                            <strong>Role:</strong> {player.role}
                          </p>
                          <p>
                            <strong>Number:</strong> {player.number}
                          </p>
                          <p>
                            <strong>Goal: </strong> {player.goal}
                          </p>
                          <p>
                            <strong>Asist: </strong> {player.asist}
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UrunListesi;
