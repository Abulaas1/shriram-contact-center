export default function ShriramContactCenter() {
  const services = [
    "Fund Management",
    "Financial Advisory",
    "Maturity Assistance",
    "Claim Services",
    "Holiday Packages",
    "Children Education Planning",
    "Children Education Benefits",
    "Higher Education Planning",
    "Free Education Assistance",
    "Tax Planning",
    "PAN Card Assistance",
    "Health Insurance",
    "New Business Ideas",
    "Credit Card Services",
    "Loan Assistance",
    "Insurance",
    "GST Services",
    "Investment Support",
    "EMI Solutions",
    "Retirement Planning",
    "Business Financial Consulting",
    "Wealth Management",
  ];

  const packages = [
    {
      name: "VIP Corporate Package",
      price: "₹100000 / yearly",
      features: [
        "Complete Financial Assistance",
        "Priority Corporate Support",
        "Dedicated Financial Advisory",
        "Investment & Tax Planning",
      ],
    },
    {
      name: "Welcome To The Life Package",
      price: "₹50000 / yearly",
      features: [
        "Family Financial Planning",
        "Insurance Guidance",
        "Children Education Planning",
        "Investment Support",
      ],
    },
    {
      name: "Tier 3 City Package",
      price: "₹30000 / yearly",
      features: [
        "Affordable Financial Services",
        "Loan & EMI Support",
        "GST & PAN Assistance",
        "Claim Services",
      ],
    },
    {
      name: "Day To Day Package",
      price: "₹25000 / yearly",
      features: [
        "Daily Financial Assistance",
        "Basic Tax Planning",
        "EMI & Credit Support",
        "Maturity Assistance",
      ],
    },
    {
      name: "Smart Investor Package",
      price: "₹75000 / yearly",
      features: [
        "Advanced Investment Planning",
        "Fund Management",
        "Retirement Guidance",
        "Priority Support",
      ],
    },
    {
      name: "Business Growth Package",
      price: "₹60000 / yearly",
      features: [
        "Business Advisory",
        "GST Services",
        "New Business Ideas",
        "Financial Planning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-slate-900 to-slate-950">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Shriram Contact Center
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Complete Financial Services Under One Roof.
          Professional support for loans, credit cards, investments,
          insurance, GST services, and more.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg">
            Get Started
          </button>

          <button className="border border-slate-600 hover:bg-slate-800 px-8 py-4 rounded-2xl text-lg font-semibold">
            Contact Us
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Financial Services</h2>
          <p className="text-slate-400 text-lg">
            Trusted solutions tailored for individuals and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <h3 className="text-2xl font-semibold mb-4">{service}</h3>
              <p className="text-slate-400 mb-6">
                Professional and reliable assistance for {service.toLowerCase()}.
              </p>

              <button className="bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-xl font-medium">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-slate-900 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">Packages & Pricing</h2>
            <p className="text-slate-400 text-lg">
              Flexible plans designed for every customer need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className="bg-slate-950 border border-slate-800 rounded-3xl p-8 text-center shadow-2xl"
              >
                <h3 className="text-3xl font-bold mb-4">{pkg.name}</h3>
                <p className="text-5xl font-extrabold text-blue-500 mb-6">
                  {pkg.price}
                </p>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <p key={i} className="text-slate-300">
                      ✓ {feature}
                    </p>
                  ))}
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl font-semibold w-full">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-slate-400 text-lg">
            Professional financial assistance with trusted customer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Trusted Services",
            "Fast Processing",
            "Affordable Charges",
            "24/7 Support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gradient-to-t from-slate-900 to-slate-950 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
          Contact Shriram Contact Center today for reliable financial and business solutions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl px-8 py-4 text-lg font-semibold">
            customersupport@shriramcontactcenter.co.in
          </div>

          <div className="bg-blue-600 px-8 py-4 rounded-2xl text-lg font-semibold">
            Gachibowli, Hyderabad - 500032
          </div>
        </div>
      </section>
    </div>
  );
}
