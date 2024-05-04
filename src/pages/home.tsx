import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section className="home">
      <h1 style={{fontSize: "30px", fontWeight: "700", marginBottom: "-20px"}}>APP NAME</h1>
      <div className="card-container">
        <div className="card">
          <h3>MENTAL HEALTH THAT MEETS PEOPLE WHERE THEY ARE</h3>
          <p>CLINICALLY VALIDATED AI GIVES IMMEDIATE SUPPORT AS  FIRST STEP OF CARE</p>
          <Link to="/signup"><button style={{padding: "10px", marginTop: "0px", fontSize: "16px", width: "fit-content", height: "max-content", background: "lightblue", borderRadius: "10px"}}>Login/Signup</button></Link>
        </div>
      </div>
      <Link to="/contact" style={{display: "flex", justifyContent: "center"}}><button className="next contact-btn">Contact</button></Link>
      <Link to="/chat" style={{display: "flex", justifyContent: "center"}}><button className="next">NEXT</button></Link>
    </section>
  );
}
