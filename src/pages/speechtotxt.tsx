import axios from "axios";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";


const SpeechToText: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");

  const [audio, setAudio] = useState(true)


  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:5000/run",
        {
          speech: transcript,
        }
      );

      setTranscript(response.data.message);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";

    recognition.onstart = () => {
      console.log("Speech recognition started");
    };

    recognition.onresult = (event) => {
      const speechResult = event.results[0][0].transcript;
      setTranscript(speechResult);
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error", event.error);
    };

    recognition.onend = () => {
      console.log("Speech recognition ended");
    };

    recognition.start();
  };

  const buttonAction = () => {
    startListening();
    setAudio(false);
  }

  return (
    <div>
      <div><h6>{transcript}</h6></div>
      <div>
        {audio? 
         <FaMicrophoneAlt onClick={() => {buttonAction()}} />:
        <div style={{height: "100%", width: "100%", position: "relative", display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <img style={{height: "100%", width: "100%", objectFit: "contain"}} src="/audio.gif" alt="" />
          <button style={{position: "absolute", right: "10px", border: "0", background: "transparent", color: "blue", fontSize: "24px"}}  onClick={() => {setAudio(true)}}><IoMdSend onClick={() => {handleSubmit}}/></button>
        </div>
        }
      </div>
    </div>
  );
};

export default SpeechToText;
