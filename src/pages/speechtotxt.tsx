import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { FaMicrophoneAlt } from "react-icons/fa";

// eslint-disable-next-line react-refresh/only-export-components
export const datapd = [
  {
    date: "01-05-2024",
    score: 1.1102117,
  },
  {
    date: "02-05-2024",
    score: 2.1902191,
  },
  {
    date: "03-05-2024",
    score: 1.4905111,
  },
  {
    date: "04-05-2024",
    score: 1.0003213,
  },
  {
    date: "05-05-2024",
    score: 0.9891196,
  },
];

interface SpeechToTextProps {
  onTranscriptChange: (transcript: string) => void;
}

const SpeechToText: React.FC<SpeechToTextProps> = ({ onTranscriptChange }) => {
  const [transcript, setTranscript] = useState<string>("");
  const [emo, setEmo] = useState<string>("");
  const [emoValue, setEmoValue] = useState<number>(0);

  const [audio, setAudio] = useState(true);

  useEffect(() => {
    onTranscriptChange(transcript);
  }, [transcript, onTranscriptChange]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async () => {
    console.log(transcript);
    try {
      const response = await axios.post<{ message: string }>(
        "http://localhost:5000/run",
        {
          speech: transcript,
        }
      );
      console.log(response);
      setEmo(response.data.toString());
      console.log(emo);
      setEmoValue(emoValue + +emo);
      console.log(emoValue);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    setTranscript("");

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
      setAudio(true);
      handleSubmit();
      console.log("Speech recognition ended");
    };

    recognition.start();
  };

  const buttonAction = () => {
    startListening();
    setAudio(false);
  };

  return (
    <div>
      <div>
        <h6>{transcript}</h6>
      </div>
      <div className="writebox px-4 d-flex">
        <input
          type="text"
          className="w-100"
          // value={transcript}
          onChange={(e) => {
            setTranscript(e.target.value);
          }}
        />
        <button className="btn btn-primary">
          <IoMdSend onClick={handleSubmit} />{" "}
        </button>
      </div>
      <div
        style={{
          height: "8dvh",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <div style={{ height: "100%" }} className="mb-4">
          {audio ? (
            <FaMicrophoneAlt
              className="microphone"
              style={{ fontSize: "36px" }}
              onClick={() => {
                buttonAction();
              }}
            />
          ) : (
            <div
              style={{
                height: "100%",
                width: "100%",
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                src="/audio.gif"
                alt=""
              />
              <button
                style={{
                  position: "absolute",
                  right: "10px",
                  border: "0",
                  background: "transparent",
                  color: "blue",
                  fontSize: "24px",
                }}
                onClick={() => {
                  setAudio(true);
                }}
              >
                <IoMdSend onClick={handleSubmit} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeechToText;
