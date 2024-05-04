import { useState } from "react";
import { FaMicrophoneAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export default function ChatInterface() {

  const [audio, setAudio] = useState(true)

  return (
    <section className="chatUI">
      <div>
        <h3>ChatBotName</h3>
      </div>
      <div></div>
      <div className="chat-bottom">
        {audio? 
        <button className="microphone" onClick={() => {setAudio(false)}}>
          <FaMicrophoneAlt />
        </button> :
        <div style={{height: "100%", width: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <img style={{height: "100%", width: "100%", objectFit: "contain"}} src="/audio.gif" alt="" />
          <button style={{position: "absolute", right: "10px", border: "0", background: "transparent", color: "blue", fontSize: "24px"}}  onClick={() => {setAudio(true)}}><IoMdSend /></button>
        </div>
        }   
      </div>
    </section>
  );
}
