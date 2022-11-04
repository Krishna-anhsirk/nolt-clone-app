import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import MobileNav from "./components/MobileNav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/menu" element={<MobileNav />} />
        <Route path="/" element={<></>} />
      </Routes>
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
