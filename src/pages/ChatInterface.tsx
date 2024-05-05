// Modify ChatInterface.tsx
import { useState } from "react";
import SpeechToText from "./speechtotxt";
import { Link } from "react-router-dom";

export default function ChatInterface() {
  const [transcript, setTranscript] = useState<string>("");

  const handleTranscriptChange = (newTranscript: string) => {
    setTranscript(newTranscript);
  };

  return (
    <section
      className="chatUI p-4"
      style={{ height: "100dvh", width: "100dvw" }}
    >
      <div className="chatInterfaceHead d-flex justify-content-between">
        <h3>EMOTI</h3>
        <Link to="/mem" style={{height: "fit-content"}} className="btn btn-secondary">
          data
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          padding: "20px",
        }}
      >
        <p
          style={{
            width: "fit-content",
            height: "max-content",
            textAlign: "right",
            border: "1px solid black",
            borderRadius: "10px",
            padding: "5px 10px",
          }}
        >
          {transcript}
        </p>
      </div>
      <div className="chat-bottom pb-4">
        <SpeechToText onTranscriptChange={handleTranscriptChange} />
      </div>
    </section>
  );
}
