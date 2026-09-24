"use client";

export default function Home() {
  const logo = "/logo.png";

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
      name: "Day To Day Package",
      price: "₹25000 / yearly"
    },
    {
      name: "Tier 3 City Package",
      price: "₹30000 / yearly"
    }
  ];

  return (
    <main
      style={{
        background: "#111827",
        color: "#FFFFFF",
        fontFamily: "Arial",
        minHeight: "100vh",
        width: "100%",
        margin: "0",
        boxSizing: "border-box",
        overflowX: "hidden"
      }}
    >

      {/* 50 YEARS BANNER */}
      <div
        style={{
          width: "100%",
          background: "#FFFFFF",
          overflow: "hidden"
        }}
      >
        <img
          src="/Celebration-50.png"
          alt="Shriram 50 Years Celebration"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain"
          }}
        />
      </div>

      {/* HEADER */}
      <section
        style={{
          background: "#111827",
          color: "#FFFFFF",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "15px",
          padding: "20px",
          borderBottom: "1px solid #2563EB"
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px"
          }}
        >
          <h1
            style={{
              fontSize: "clamp(24px,6vw,40px)",
              fontWeight: "bold",
              margin: "0",
              color: "#FFFFFF"
            }}
          >
            Shriram Contact Center
          </h1>
        </div>

        <a
          href="mailto:customersupport@shriramcontactcenter.co.in"
          style={{
            background: "#2563EB",
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "15px 30px",
            borderRadius: "12px",
            fontWeight: "bold",
            boxShadow: "0 5px 15px rgba(37,99,235,0.3)"
          }}
        >
          Contact Us
        </a>
      </section>

      {/* HERO SECTION */}
      <section
        style={{
          background: "#111827",
          textAlign: "center",
          padding: "100px 20px"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(40px,8vw,70px)",
            color: "#FFFFFF",
            marginBottom: "20px"
          }}
        >
          Trusted Financial & Customer Support Services
        </h2>

        <p
          style={{
            color: "#CBD5E1",
            fontSize: "clamp(16px,4vw,22px)",
            maxWidth: "1000px",
            margin: "auto",
            lineHeight: "1.7"
          }}
        >
          We provide professional support for claims, maturity services,
          financial management, tax planning, and loan facilities with trusted
          customer assistance.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap"
          }}
        >
          <a
            href="mailto:customersupport@shriramcontactcenter.co.in"
            style={{
              background: "#2563EB",
              color: "#FFFFFF",
              padding: "18px 35px",
              textDecoration: "none",
              borderRadius: "14px",
              fontWeight: "bold",
              boxShadow: "0 8px 20px rgba(37,99,235,0.3)"
            }}
          >
            Explore Services
          </a>

          <a
            href="mailto:customersupport@shriramcontactcenter.co.in"
            style={{
              border: "2px solid #2563EB",
              color: "#60A5FA",
              padding: "18px 35px",
              textDecoration: "none",
              borderRadius: "14px",
              fontWeight: "bold"
            }}
          >
            Get Support
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section
        style={{
          background: "#F8FAFC",
          color: "#111827",
          padding: "80px 20px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(38px,7vw,55px)",
            color: "#2563EB",
            marginBottom: "50px"
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(250px,100%),1fr))",
            gap: "20px"
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                background: "#FFFFFF",
                padding: "30px",
                borderRadius: "20px",
                border: "1px solid #CBD5E1",
                boxShadow: "0 8px 20px rgba(15,23,42,0.06)"
              }}
            >
              <h3
                style={{
                  fontSize: "24px",
                  color: "#111827"
                }}
              >
                {service}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  color: "#64748B",
                  fontSize: "15px",
                  lineHeight: "24px"
                }}
              >
                Professional assistance and customer support for{" "}
                {service.toLowerCase()} services.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        style={{
          background: "#111827",
          color: "#FFFFFF",
          padding: "80px 20px",
          textAlign: "center"
        }}
      >
        <h2
          style={{
            fontSize: "50px",
            marginBottom: "50px",
            fontWeight: "bold",
            color: "#FFFFFF"
          }}
        >
          Why Choose Us
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(250px,100%),1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "auto"
          }}
        >
          <div
            style={{
              background: "#1F2937",
              color: "#FFFFFF",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #2563EB"
            }}
          >
            <h3 style={{ color: "#60A5FA" }}>
              Trusted Services
            </h3>

            <p style={{ color: "#CBD5E1" }}>
              We provide reliable and trusted customer support with
              professional assistance.
            </p>
          </div>

          <div
            style={{
              background: "#1F2937",
              color: "#FFFFFF",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #2563EB"
            }}
          >
            <h3 style={{ color: "#60A5FA" }}>
              Experienced Team
            </h3>

            <p style={{ color: "#CBD5E1" }}>
              Our experienced staff helps customers with smooth and fast
              processing.
            </p>
          </div>

          <div
            style={{
              background: "#1F2937",
              color: "#FFFFFF",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #2563EB"
            }}
          >
            <h3 style={{ color: "#60A5FA" }}>
              Customer Satisfaction
            </h3>

            <p style={{ color: "#CBD5E1" }}>
              We focus on customer support and complete assistance for every
              service.
            </p>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section
        style={{
          background: "#0F172A",
          padding: "80px 20px"
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(38px,7vw,55px)",
            color: "#60A5FA",
            marginBottom: "50px"
          }}
        >
          Packages
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(min(250px,100%),1fr))",
            gap: "20px"
          }}
        >
          {packages.map((pkg, index) => (
            <div
              key={index}
              style={{
                background: "#FFFFFF",
                color: "#111827",
                borderRadius: "20px",
                padding: "30px",
                border: "1px solid #CBD5E1",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)"
              }}
            >
              <h3
                style={{
                  fontSize: "28px",
                  color: "#111827"
                }}
              >
                {pkg.name}
              </h3>

              <p
                style={{
                  color: "#2563EB",
                  fontSize: "32px",
                  fontWeight: "bold"
                }}
              >
                {pkg.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* IMPORTANT NOTICE */}
      <section
        style={{
          background: "#2563EB",
          color: "#FFFFFF",
          textAlign: "center",
          padding: "60px 20px"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(32px,7vw,45px)"
          }}
        >
          Important Notice
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "20px auto",
            fontSize: "20px",
            fontWeight: "500",
            lineHeight: "1.7"
          }}
        >
          All services provided by Shriram Contact Center are available only
          through our authorized branches. Online purchase or direct
          activation of services is not available. Customers are requested to
          visit their nearest branch for complete assistance and processing.
        </p>
      </section>

      {/* CONTACT */}
      <section
        style={{
          background: "#111827",
          color: "#FFFFFF",
          textAlign: "center",
          padding: "70px 20px"
        }}
      >
        <h2
          style={{
            fontSize: "clamp(35px,7vw,50px)",
            color: "#60A5FA"
          }}
        >
          Contact Information
        </h2>

        <p
          style={{
            fontSize: "clamp(16px,4vw,22px)",
            overflowWrap: "anywhere",
            wordBreak: "break-word",
            maxWidth: "100%",
            margin: "20px auto",
            color: "#FFFFFF"
          }}
        >
          customersupport@shriramcontactcenter.co.in
        </p>

        <p
          style={{
            fontSize: "20px",
            color: "#94A3B8"
          }}
        >
          Gachibowli, Hyderabad - 500032
        </p>
      </section>

    </main>
  );
}
