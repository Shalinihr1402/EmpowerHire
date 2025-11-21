export default function Features() {
  return (
    <section className="py-20 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-14">
        What Makes EmpowerHire Different?
      </h2>

      <div className="grid sm:grid-cols-3 gap-10 px-10">
        
        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Inclusive Hiring</h3>
          <p className="text-gray-600">We focus on equal opportunity and empowerment.</p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Smart Job Matching</h3>
          <p className="text-gray-600">AI-driven recommendations based on your skills.</p>
        </div>

        <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
          <h3 className="text-xl font-bold mb-2">Verified Recruiters</h3>
          <p className="text-gray-600">Only trusted companies and quality job postings.</p>
        </div>

      </div>
    </section>
  );
}
