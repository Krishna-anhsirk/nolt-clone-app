import { Navbar, MobileNav, Hero, Testimonials, Footer } from "./components";
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
