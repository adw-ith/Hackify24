import React, { useState } from "react";

const SpeechToText: React.FC = () => {
  const [transcript, setTranscript] = useState<string>("");

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
      <p>Transcript: {transcript}</p>
    </div>
  );
};

export default SpeechToText;
