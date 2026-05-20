function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-105 transition duration-300">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-5">
        <h3 className="text-lg font-bold text-green-800 mb-2">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mb-3">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <span className="text-green-700 font-bold text-lg">
            {product.price}
          </span>

          <button className="bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-medium hover:bg-green-200 transition">
            View
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;