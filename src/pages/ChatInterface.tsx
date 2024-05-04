// Modify ChatInterface.tsx
import { useState } from "react";
import SpeechToText from "./speechtotxt";

export default function ChatInterface() {
  const [transcript, setTranscript] = useState<string>("");

  const handleTranscriptChange = (newTranscript: string) => {
    setTranscript(newTranscript);
  };

  return (
    <section className="chatUI">
      <div className="chatInterfaceHead">
        <h3>ChatBotName</h3>
      </div>
      <div style={{ width: "100dvw", display: "flex", justifyContent: "right", padding: "20px" }}>
        <p style={{ width: "fit-content", height: "max-content", textAlign: "right", border: "1px solid black", borderRadius: "10px", padding: "5px 10px" }}>{transcript}</p>
      </div>
      <div className="chat-bottom">
        <SpeechToText onTranscriptChange={handleTranscriptChange} />
      </div>
    </section>
  );
}
