import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TeamList from "./components/TeamList";
import Store from "./components/Store";
import Favoriler from "./components/Favoriler";
import Sepet from "./components/Sepet";
import Anasayfa from "./components/Anasayfa";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/anasayfa" element={<Anasayfa />} />
        <Route path="/takimlistesi" element={<TeamList />} />
        <Route path="/store" element={<Store />} />
        <Route path="/favoriler" element={<Favoriler />} />
        <Route path="/sepetim" element={<Sepet />} />

        <Route />
      </Routes>
    </div>
  );
}

export default App;
