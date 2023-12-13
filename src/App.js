import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Climb from "./pages/Climb";
import History from "./pages/History";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/history" element={<History />} />
          <Route path="/team" element={<Climb />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
