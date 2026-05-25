export default function Home() {
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
    "EMI Solutions"
  ];

  const packages = [
    {
      name: "VIP Corporate Package",
      price: "₹100000 / yearly"
    },
    {
      name: "Welcome To The Life Package",
      price: "₹50000 / yearly"
    },
    {
      name: "Tier 3 City Package",
      price: "₹30000 / yearly"
    },
    {
      name: "Day To Day Package",
      price: "₹25000 / yearly"
    },
    {
      name: "Smart Investor Package",
      price: "₹75000 / yearly"
    },
    {
      name: "Business Growth Package",
      price: "₹60000 / yearly"
    }
  ];

  return (
    <main style={{ background: "#020617", color: "white", minHeight: "100vh", fontFamily: "Arial", padding: "40px" }}>
      <section style={{ textAlign: "center", padding: "60px 20px" }}>
        <h1 style={{ fontSize: "60px", marginBottom: "20px" }}>
          Shriram Contact Center
        </h1>

        <p style={{ fontSize: "22px", color: "#cbd5e1" }}>
          Complete Financial Services Under One Roof
        </p>
      </section>

      <section style={{ marginTop: "60px" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "25px",
                borderRadius: "20px"
              }}
            >
              <h3>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <h2 style={{ fontSize: "40px", marginBottom: "30px" }}>
          Packages
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px"
          }}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              style={{
                background: "#0f172a",
                padding: "30px",
                borderRadius: "20px"
              }}
            >
              <h3 style={{ fontSize: "28px" }}>{pkg.name}</h3>

              <p style={{ fontSize: "24px", color: "#60a5fa" }}>
                {pkg.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: "80px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px" }}>Contact Us</h2>

        <p style={{ marginTop: "20px" }}>
          customersupport@shriramcontactcenter.co.in
        </p>

        <p>Gachibowli, Hyderabad - 500032</p>
      </section>
    </main>
  );
}
