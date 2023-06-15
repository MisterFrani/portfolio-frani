import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "../Layout/Header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
