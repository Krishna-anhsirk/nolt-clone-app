import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
