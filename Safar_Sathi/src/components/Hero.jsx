import { Link } from "react-router-dom";

function Hero() {
  return (
    <div
      className="relative h-[90vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkUvSlVeONe3SsLRSgFhpfMWfYcJs1EjxvPQ&s)",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Explore Chhattisgarh
          <br />
          with{" "}
          <span className="text-green-400">Safar Sathi CG</span>
        </h1>

        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Smart Eco & Cultural Tourism Platform
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link to="/explore">
            <button className="bg-green-700 hover:bg-green-800 px-8 py-3 rounded-lg font-semibold transition">
               Explore Places
            </button>
          </Link>

          <Link to="/planner">
            <button className="bg-white text-green-900 hover:bg-gray-200 px-8 py-3 rounded-lg font-semibold transition">
               Plan Trip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;