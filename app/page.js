
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
    <main style={{background:"#000",color:"white",fontFamily:"Arial",minHeight:"100vh"}}>

      <section style={{
        background:"#facc15",
        color:"black",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        padding:"20px 40px"
      }}>
        <div style={{display:"flex",alignItems:"center",gap:"15px"}}>
  <img
    src="/logo.png"
    alt="Logo"
    style={{
      width:"55px",
      height:"55px",
      objectFit:"contain"
    }}
  />

  <h1 style={{fontSize:"40px",fontWeight:"bold"}}>
    Shriram Contact Center
  </h1>
</div>

        <a
          href="mailto:customersupport@shriramcontactcenter.co.in"
          style={{
            background:"black",
            color:"#facc15",
            textDecoration:"none",
            padding:"15px 30px",
            borderRadius:"12px",
            fontWeight:"bold"
          }}
        >
          Contact Us
        </a>
      </section>

      <section style={{
        textAlign:"center",
        padding:"100px 20px"
      }}>
        <h2 style={{
          fontSize:"70px",
          color:"white",
          marginBottom:"20px"
        }}>
          Trusted Financial & Customer Support Services
        </h2>

        <p style={{
          color:"#ddd",
          fontSize:"22px",
          maxWidth:"1000px",
          margin:"auto"
        }}>
          We provide professional support for claims, maturity services,
          financial management, tax planning, and loan facilities with trusted customer assistance.
        </p>

        <div style={{marginTop:"40px"}}>
          <a
            href="mailto:customersupport@shriramcontactcenter.co.in"
            style={{
              background:"#facc15",
              color:"black",
              padding:"18px 35px",
              textDecoration:"none",
              borderRadius:"14px",
              fontWeight:"bold",
              marginRight:"20px"
            }}
          >
            Explore Services
          </a>

          <a
            href="mailto:customersupport@shriramcontactcenter.co.in"
            style={{
              border:"2px solid #facc15",
              color:"#facc15",
              padding:"18px 35px",
              textDecoration:"none",
              borderRadius:"14px",
              fontWeight:"bold"
            }}
          >
            Get Support
          </a>
        </div>
      </section>

      <section style={{
        background:"white",
        color:"black",
        padding:"80px 20px"
      }}>
        <h2 style={{
          textAlign:"center",
          fontSize:"55px",
          color:"#ca8a04",
          marginBottom:"50px"
        }}>
          Our Services
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>
          {services.map((service,index)=>(
            <div key={index} style={{
              background:"#f3f4f6",
              padding:"30px",
              borderRadius:"20px",
              border:"2px solid #facc15"
            }}>
              <h3 style={{fontSize:"24px"}}>{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        background:"#000",
        padding:"80px 20px"
      }}>
        <h2 style={{
          textAlign:"center",
          fontSize:"55px",
          color:"#facc15",
          marginBottom:"50px"
        }}>
          Packages
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
          gap:"20px"
        }}>
          {packages.map((pkg,index)=>(
            <div key={index} style={{
              background:"white",
              color:"black",
              borderRadius:"20px",
              padding:"30px"
            }}>
              <h3 style={{fontSize:"28px"}}>{pkg.name}</h3>

              <p style={{
                color:"#ca8a04",
                fontSize:"32px",
                fontWeight:"bold"
              }}>
                {pkg.price}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section style={{
        background:"#facc15",
        color:"black",
        textAlign:"center",
        padding:"60px 20px"
      }}>
        <h2 style={{fontSize:"45px"}}>
          Important Notice
        </h2>

        <p style={{
          maxWidth:"1000px",
          margin:"20px auto",
          fontSize:"20px",
          fontWeight:"500"
        }}>
          All services provided by Shriram Contact Center are available only through our authorized branches.
          Online purchase or direct activation of services is not available.
          Customers are requested to visit their nearest branch for complete assistance and processing.
        </p>
      </section>

      <section style={{
        background:"#000",
        color:"white",
        textAlign:"center",
        padding:"70px 20px"
      }}>
        <h2 style={{fontSize:"50px",color:"#facc15"}}>
          Contact Information
        </h2>

        <p style={{fontSize:"22px"}}>
          customersupport@shriramcontactcenter.co.in
        </p>

        <p style={{fontSize:"20px",color:"#ccc"}}>
          Gachibowli, Hyderabad - 500032
        </p>
      </section>

    </main>
  );
}
