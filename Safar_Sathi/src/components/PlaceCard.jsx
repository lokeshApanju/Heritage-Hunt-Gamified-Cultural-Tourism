import { useNavigate } from "react-router-dom";

function PlaceCard({ place }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/place/${place.id}`)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
    >
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-56 object-cover"
        loading="lazy"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold text-green-800 mb-2">
          {place.name}
        </h3>

        <p className="text-gray-600 text-sm mb-3">
          {place.description || place.shortDesc}
        </p>

        <div className="flex items-center justify-between">
          <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium">
            📅 {place.bestTime}
          </span>

          <span className="text-green-600 text-sm font-semibold hover:text-green-800">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;