import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { Routes, Route } from "react-router-dom";
import "./styles.css";

export default function App() {
  return (
    <>
      <div className="App" id="outer-container">
        <Navbar />
      </div>
      <div className="App-container">
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}
