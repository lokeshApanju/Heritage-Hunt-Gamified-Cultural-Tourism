import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-cyan-900 text-white px-6 py-4 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">
          Safar Sathi CG
        </h1>

        {/* Desktop */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-cyan-300 transition">
            Home
          </Link>
          <Link to="/explore" className="hover:text-cyan-300 transition">
            Explore
          </Link>
          <Link to="/events" className="hover:text-cyan-300 transition">
            Events
          </Link>
          <Link to="/planner" className="hover:text-cyan-300 transition">
            Planner
          </Link>
          <Link to="/safety" className="hover:text-cyan-300 transition">
            Safety
          </Link>
          <Link
            to="/marketplace"
            className="hover:text-cyan-300 transition"
          >
            Marketplace
          </Link>
          <Link to="/about" className="hover:text-cyan-300 transition">
            About
          </Link>
          <Link
            to="/login"
            className="bg-white text-cyan-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-100 transition"
          >
            Login
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-300"
          >
            Home
          </Link>
          <Link
            to="/explore"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-300"
          >
            Explore
          </Link>
          <Link
            to="/planner"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-300"
          >
            Planner
          </Link>
          <Link
            to="/safety"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-300"
          >
            Safety
          </Link>
          <Link
            to="/marketplace"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-300"
          >
            Marketplace
          </Link>
          <Link
            to="/about"
            onClick={() => setOpen(false)}
            className="hover:text-cyan-300"
          >
            About
          </Link>
          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="bg-white text-cyan-900 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-100 transition"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;