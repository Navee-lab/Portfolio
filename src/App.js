import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Certificates from "./Pages/Certificates";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#a18cd1] to-[#fbc2eb] text-black" > {/* 👈 Soft lavender bg */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/technologies" element={<Technologies />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
