export default function Partners() {
  const partners = [
    {
      name: "Tesla",
      logo: "/tesla.png",
    },
    {
      name: "Hyundai",
      logo: "/hyundai.png",
    },
    {
      name: "Mahindra",
      logo: "/mahindra.png",
    },
    {
      name: "Tata Motors",
      logo: "/tata.png",
    },
    {
      name: "BMW",
      logo: "/bmw.png",
    },
    {
      name: "Lamborghini",
      logo: "/lambo.png",
    },
    {
      name: "Mercedes",
      logo: "/mercedes.png",
    },
    {
      name: "Toyota",
      logo: "/toyota.png",
    },
    {
      name: "Ford",
      logo: "/ford.png",
    },
    {
      name: "Honda",
      logo: "/honda.png",
    },
    {
      name: "Audi",
      logo: "/audi.png",
    },
    {
      name: "Lexus",
      logo: "/lexus.png",
    },
    {
      name: "Volkswagen",
      logo: "/volkswagen.png",
    },
    {
      name: "Nissan",
      logo: "/nissan.png",
    },
    {
      name: "Suzuki",
      logo: "/suzuki.png",
    },
    {
      name: "Landrover",
      logo: "/landrover.png",
    },
  ];

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Trusted by Leading <span className="text-gradient">Brands</span>
          </h2>
          <p className="mb-12 text-gray-400">
            We partner with top automotive manufacturers to bring you the best
            selection
          </p>
        </div>

        <div className="glass rounded-xl border border-white/10 p-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="h-12 mb-2"
                />
                <span className="text-center font-medium text-blue-400">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
