export default function Companies() {
  return (
    <section className="py-16 bg-white text-center">
      
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Trusted by Leading Companies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 px-10">
        <img src="/tcs.png" className="h-12 opacity-70 hover:opacity-100" />
        <img src="/wipro.png" className="h-12 opacity-70 hover:opacity-100" />
        <img src="/infosys.png" className="h-12 opacity-70 hover:opacity-100" />
        <img src="/accenture.png" className="h-12 opacity-70 hover:opacity-100" />
      </div>

    </section>
  );
}
