import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignupForm() {

  const [state, setState] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const signin =  (
      <section style={{width: "100dvw", height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden"}}>
        <div className="signin-container" style={{width: "90dvw", height: "60dvh", display: "flex", flexDirection: "column", alignItems:"center", justifyContent: "center",  gap: "20px", borderRadius: "10px", padding: "20px 10px"}}>
          <div style={{width: "90%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "10px"}}>
            <button className={`switch-btn ${state ? "":"switch-btn-active"}`} onClick={() => {
              setState(true);
            }}>Login</button>
            <button className="switch-btn">SignUp</button>
          </div>
          <form className="signUpForm" onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter UserName"/>
            <input type="email" placeholder="Enter E-Mail"/>
            <input type="password" placeholder="Enter a password"/>
            <input type="password" placeholder="Confirm password"/>
            <Link to='/preferences'><button className="signupSubmit" type="submit">SignUp</button></Link>
          </form>
        </div>
      </section>
  );
  const login =  (
      <section style={{width: "100dvw", height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div className="signin-container" style={{width: "90dvw", height: "60dvh", display: "flex",flexDirection: "column", alignItems:"center", justifyContent: "center",  gap: "20px", borderRadius: "10px", padding: "20px 10px"}}>
            <div style={{width: "90%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: "10px"}}>
              <button className="switch-btn">Login</button>
              <button className={`switch-btn ${(state)? "switch-btn-active":""}`} onClick={() =>{
                setState(false)
              }}>SignUp</button>
            </div>
          <form className="signUpForm" style={{padding: "80px 10px"}} onSubmit={handleSubmit}>
            <input type="email" placeholder="Enter E-Mail"/>
            <input type="password" placeholder="Enter a password"/>
            <button className="signupSubmit" type="submit">Login</button>
          </form>
        </div>
      </section>
  );

  return state ? login: signin;
}

