export default function MarketingDesign() {
  const items = Array(3).fill(null);

  return (
    <section className="w-full bg-[#E1DFC7] py-16 px-8 md:px-16">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Marketing Section */}
        <div>
          <h3 className="text-center text-gray-600 font-sans text-sm underline mb-6">
            Marketing
          </h3>
          <div className="relative flex items-center justify-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 text-2xl font-bold">
              &lt;
            </button>
            <div className="flex gap-4">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="w-48 h-48 bg-gray-300 rounded-lg"
                ></div>
              ))}
            </div>
            <button className="text-gray-600 hover:text-gray-800 text-2xl font-bold">
              &gt;
            </button>
          </div>
        </div>

        {/* Design Section */}
        <div>
          <h3 className="text-center text-gray-600 font-sans text-sm underline mb-6">
            Design
          </h3>
          <div className="relative flex items-center justify-center gap-4">
            <button className="text-gray-600 hover:text-gray-800 text-2xl font-bold">
              &lt;
            </button>
            <div className="flex gap-4">
              {items.map((_, index) => (
                <div
                  key={index}
                  className="w-48 h-48 bg-gray-300 rounded-lg"
                ></div>
              ))}
            </div>
            <button className="text-gray-600 hover:text-gray-800 text-2xl font-bold">
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

