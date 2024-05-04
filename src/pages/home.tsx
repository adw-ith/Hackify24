import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <section className="home">
      <div style={{position: "fixed", top: "0", left: "0" ,display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", width: "100dvw", height: "5dvh", padding: "10px 20px"}}>
        <div>LOGO-IMAGE</div>
        <div style={{ height: "100%"}}>
          <ul style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexDirection: "row", gap: "10px"}}>
            <li style={{listStyle: "none"}}><Link to="/blog">Blog</Link></li>
            <li style={{listStyle: "none"}}><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>
      <h1 className="home-heading text-muted">EMOTICARE</h1>
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
    </section>
  );
}
