
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
    <main style={{
  background:"#000",
  color:"white",
  fontFamily:"Arial",
  minHeight:"100vh",
  width:"100%",
  margin:"0",
  boxSizing:"border-box",
  overflowX:"hidden"
}}>

      <section style={{
        background:"#facc15",
        color:"black",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        flexWrap:"wrap",
        gap:"15px"
        padding:"20px"
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

  <h1 style={{
  fontSize:"clamp(24px,6vw,40px)",
  fontWeight:"bold",
  margin:"0"
}}>
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
          fontSize:"clamp(40px,8vw,70px)",
          color:"white",
          marginBottom:"20px"
        }}>
          Trusted Financial & Customer Support Services
        </h2>

        <p style={{
          color:"#ddd",
          fontSize:"clamp(16px,4vw,22px)",
          maxWidth:"1000px",
          margin:"auto"
        }}>
          We provide professional support for claims, maturity services,
          financial management, tax planning, and loan facilities with trusted customer assistance.
        </p>

 <div style={{
  marginTop:"40px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center",
  gap:"15px",
  flexWrap:"wrap"
}}>
          <a
            href="mailto:customersupport@shriramcontactcenter.co.in"
            style={{
              background:"#facc15",
              color:"black",
              padding:"18px 35px",
              textDecoration:"none",
              borderRadius:"14px",
              fontWeight:"bold",
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
          fontSize:"clamp(38px,7vw,55px)",
          color:"#ca8a04",
          marginBottom:"50px"
        }}>
          Our Services
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(min(250px,100%),1fr))",
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
                  <p style={{
  marginTop:"10px",
  color:"#555",
  fontSize:"15px",
  lineHeight:"24px"
}}>
Professional assistance and customer support for {service.toLowerCase()} services.
</p>      
            </div>
          ))}
        </div>
      </section>
<section style={{
  background:"#facc15",
  color:"#000",
  padding:"80px 20px",
  textAlign:"center"
}}>

<h2 style={{
  fontSize:"50px",
  marginBottom:"50px",
  fontWeight:"bold"
}}>
Why Choose Us
</h2>

<div style={{
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(min(250px,100%),1fr))",
  gap:"30px",
  maxWidth:"1200px",
  margin:"auto"
}}>

<div style={{
  background:"#000",
  color:"#fff",
  padding:"30px",
  borderRadius:"20px"
}}>
<h3 style={{color:"#facc15"}}>Trusted Services</h3>
<p>
We provide reliable and trusted customer support with professional assistance.
</p>
</div>

<div style={{
  background:"#000",
  color:"#fff",
  padding:"30px",
  borderRadius:"20px"
}}>
<h3 style={{color:"#facc15"}}>Experienced Team</h3>
<p>
Our experienced staff helps customers with smooth and fast processing.
</p>
</div>

<div style={{
  background:"#000",
  color:"#fff",
  padding:"30px",
  borderRadius:"20px"
}}>
<h3 style={{color:"#facc15"}}>Customer Satisfaction</h3>
<p>
We focus on customer support and complete assistance for every service.
</p>
</div>

</div>
</section>
      <section style={{
        background:"#000",
        padding:"80px 20px"
      }}>
        <h2 style={{
          textAlign:"center",
          fontSize:"clamp(38px,7vw,55px)",
          color:"#facc15",
          marginBottom:"50px"
        }}>
          Packages
        </h2>

        <div style={{
          display:"grid",
          gridTemplateColumns:"repeat(auto-fit,minmax(min(250px,100%),1fr))",
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
       <h2 style={{fontSize:"clamp(32px,7vw,45px)"}}>
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
        <h2 style={{
          fontSize:"clamp(35px,7vw,50px)",
          color:"#facc15"
        }}>
          Contact Information
        </h2>

      <p style={{
        fontSize:"clamp(16px,4vw,22px)",
        overflowWrap:"anywhere",
        wordBreak:"break-word",
        maxWidth:"100%",
        margin:"20px auto"
    }}>
      customersupport@shriramcontactcenter.co.in
    </p>

        <p style={{fontSize:"20px",color:"#ccc"}}>
          Gachibowli, Hyderabad - 500032
        </p>
      </section>

    </main>
  );
}
