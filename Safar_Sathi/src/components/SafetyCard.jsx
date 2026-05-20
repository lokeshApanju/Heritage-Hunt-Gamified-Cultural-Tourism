function SafetyCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition text-center">
      <div className="text-4xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-green-800 mb-2">
        {title}
      </h3>

      <p className="text-gray-600 text-sm">{text}</p>
    </div>
  );
}

export default SafetyCard;