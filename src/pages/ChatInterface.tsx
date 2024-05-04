import { FaMicrophoneAlt } from "react-icons/fa";

export default function ChatInterface() {
  return (
    <section className="chatUI">
      <div>
        <h3>ChatBotName</h3>
      </div>
      <div></div>
      <div className="chat-bottom">
        <button className="microphone">
          <FaMicrophoneAlt />
        </button>
        
      </div>
    </section>
  );
}
