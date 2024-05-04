import SpeechToText from "./speechtotxt";

export default function ChatInterface() {


  return (
    <section className="chatUI">
      <div>
        <h3>ChatBotName</h3>
      </div>
      <div></div>
      <div className="chat-bottom">
        <SpeechToText />   
      </div>
    </section>
  );
}
