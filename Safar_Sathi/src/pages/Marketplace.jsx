import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Marketplace() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? products
      : products.filter((p) =>
          p.name.toLowerCase().includes(filter.toLowerCase())
        );

  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-4">
          🛒 Marketplace
        </h1>

        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Support local artisans by exploring handcrafted tribal
          products from Chhattisgarh.
        </p>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {["All", "Art", "Crafts", "Silk", "Jewelry"].map(
            (item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  filter === item
                    ? "bg-green-700 text-white"
                    : "bg-white text-green-800 border border-green-300 hover:bg-green-100"
                }`}
              >
                {item}
              </button>
            )
          )}
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Marketplace;