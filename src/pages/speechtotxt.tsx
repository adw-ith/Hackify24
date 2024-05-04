import axios from "axios";
import React, { useState } from "react";

const SpeechToText: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");

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

  return (
    <div>
      <button onClick={startListening}>Start Listening</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SpeechToText;
