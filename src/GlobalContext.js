import { createContext, useState } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [favoriler, setFavoriler] = useState([]);

  const favorilereEkle = (player) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.concat(player);

    setFavoriler(yeniFavoriler);
  };

  const favorilerdenCikar = (id) => {
    const eskiFavoriler = [...favoriler];
    const yeniFavoriler = eskiFavoriler.filter((player) => player.id !== id);

    setFavoriler(yeniFavoriler);
  };

  return (
    <AppContext.Provider
      value={{ favoriler, favorilereEkle, favorilerdenCikar }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
