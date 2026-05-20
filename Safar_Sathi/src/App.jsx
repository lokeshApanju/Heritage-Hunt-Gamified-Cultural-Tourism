import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import OngoingEvents from "./pages/OngoingEvents";
import Explore from "./pages/Explore";
import PlaceDetail from "./pages/PlaceDetail";
import Planner from "./pages/Planner";
import Safety from "./pages/Safety";
import Marketplace from "./pages/Marketplace";
import About from "./pages/About";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/events" element={<OngoingEvents />} />
        <Route path="/place/:id" element={<PlaceDetail />} />
        <Route path="/planner" element={<Planner />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/marketplace" element={<Marketplace />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
      <ChatBot />
    </BrowserRouter>
  );
}

export default App;