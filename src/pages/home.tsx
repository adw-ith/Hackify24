// import axios from "axios";
// import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  // const [message, setMessage] = useState<string>("");

  // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // const handleSubmit = async (e: any) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post<{ message: string }>(
  //       "http://localhost:5000/run",
  //       {
  //         speech: "i feel sad",
  //       }
  //     );

  //     setMessage(response.data.message);
  //     console.log(response);
  //     console.log(response.data);
  //     console.log(message);
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // };
  return (
    <section className="home">
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
