import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import TryNoltBoard from "./components/TryNoltBoard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Testimonials />
      <TryNoltBoard />
    </div>
  );
}

export default App;
