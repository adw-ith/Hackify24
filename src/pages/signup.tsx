import { useState } from "react";

export function SignupFormDemo() {

  const [state, setState] = useState(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  const signin =  (
      <section style={{width: "100dvw", height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "90dvw", height: "60dvh", display: "flex",flexDirection: "column", alignItems:"center", justifyContent: "center",  gap: "20px",  background: "rgba(33, 53, 71, 0.5)", borderRadius: "20px", padding: "20px 10px"}}>
            <div style={{width: "90%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <button className={`switch-btn ${state ? "":"switch-btn-active"}`} onClick={() => {
                setState(true);
              }}>Login</button>
              <button className="switch-btn">SignUp</button>
            </div>
          <form className="signUpForm" onSubmit={handleSubmit}>
            <input type="text" name="" id="" placeholder="Enter UserName"/>
            <input type="email" name="" id="" placeholder="Enter E-Mail"/>
            <input type="password" name="" id="" placeholder="Enter a password"/>
            <input type="password" name="" id="" placeholder="Confirm password"/>
            <button className="signupSubmit" type="submit">SignUp</button>
          </form>
        </div>
      </section>
  );
  const login =  (
      <section style={{width: "100dvw", height: "100dvh", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <div style={{width: "90dvw", height: "60dvh", display: "flex",flexDirection: "column", alignItems:"center", justifyContent: "center",  gap: "20px",  background: "rgba(33, 53, 71, 0.5)", borderRadius: "20px", padding: "20px 10px"}}>
            <div style={{width: "90%", display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between"}}>
              <button className="switch-btn">Login</button>
              <button className={`switch-btn ${(state)? "switch-btn-active":""}`} onClick={() =>{
                setState(false)
              }}>SignUp</button>
            </div>
          <form className="signUpForm" onSubmit={handleSubmit}>
            <input type="email" name="" id="" placeholder="Enter E-Mail"/>
            <input type="password" name="" id="" placeholder="Enter a password"/>
            <button className="signupSubmit" type="submit">Login</button>
          </form>
        </div>
      </section>
  );

  return state ? login: signin;
}

