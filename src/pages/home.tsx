import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="home">
      <div style={{position: "fixed", top: "0", left: "0" ,display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100dvw", height: "5dvh", padding: "10px 20px"}}>
        <div>LOGO</div>
        <div style={{ height: "100%"}}>
          <ul style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", gap: "10px"}}>
            <li style={{listStyle: "none"}}><Link to="/blog">Blog</Link></li>
            <li style={{listStyle: "none"}}><Link to="/signup">Login</Link></li>
          </ul>
        </div>
      </div>
      <h1 className="h1 text-muted">EMOTICARE</h1>
      <div className="card-container">
        <div className="card">
          <h3>Your Own Personalized Virtual Companion</h3>
          <p></p>
          <Link to="/signup">
            <button
              style={{
                padding: "10px",
                marginTop: "0px",
                fontSize: "16px",
                width: "fit-content",
                height: "max-content",
                background: "lightblue",
                borderRadius: "10px",
              }}
            >
              Login/Signup
            </button>
          </Link>
        </div>
      </div>

      {/* <button onClick={handleSubmit}>submit</button>
      <h1>{message}</h1> */}
      <Link to="/contact" style={{ display: "flex", justifyContent: "center" }}>
        <button className="next contact-btn">Contact</button>
      </Link>
      <Link to="/chat" style={{ display: "flex", justifyContent: "center" }}>
        <button className="next">NEXT</button>
      </Link>
    </section>
  );
}
