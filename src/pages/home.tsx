import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <section className="home">
      <div className="card-container">
        <div className="card">
          <h3>MENTAL HEALTH THAT MEETS PEOPLE WHERE THEY ARE</h3>
          <p>CLINICALLY VALIDATED AI GIVES IMMEDIATE SUPPORT AS  FIRST STEP OF CARE</p>
          <Link to="/signup"><button style={{padding: "10px", marginTop: "20px", fontSize: "16px", background: "lightblue", borderRadius: "10px"}}>Login/Signup</button></Link>
        </div>
      </div>
      <Link to="/chat" style={{display: "flex", justifyContent: "center"}}><button className="next">NEXT</button></Link>
    </section>
  );
}
