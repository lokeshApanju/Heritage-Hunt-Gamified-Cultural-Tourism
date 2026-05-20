import PlannerForm from "../components/PlannerForm";

function Planner() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-green-900 text-center mb-4">
           Trip Planner
        </h1>

        <p className="text-gray-600 text-center mb-10 max-w-2xl mx-auto">
          Enter your budget number of days and interest type to get a
          sample itinerary for your Chhattisgarh trip.
        </p>

        <PlannerForm />
      </div>
    </div>
  );
}

export default Planner;