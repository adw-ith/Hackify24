import React, { useState } from 'react';
import './style.css'; // Import your CSS file
import { languages } from '../../public/data/languages'; // Import your languages.js file
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

interface Language {
  no: string;
  name: string;
  native: string;
  code: string;
}

function Speech(): JSX.Element {
  const [recording, setRecording] = useState<boolean>(false);
  const [resultText, setResultText] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('');

  let recognition: any ;

  const startRecording = (): void => {
    try {
      if (window.SpeechRecognition || window.webkitSpeechRecognition) {
        recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = selectedLanguage;
        recognition.interimResults = true;

        recognition.onstart = () => {
          setRecording(true);
        };

        recognition.onresult = (event:any) => {
          const speechResult = event.results[0][0]?.transcript;
          if (speechResult) {
            setResultText(prevResultText => prevResultText + ' ' + speechResult);
          }
        };

        recognition.onend = () => {
          setRecording(false);
        };

        recognition.start();
      } else {
        throw new Error('SpeechRecognition API not supported');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const stopRecording = (): void => {
    if (recognition) {
      recognition.stop();
    }
    setRecording(false);
  };

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectedLanguage(event.target.value);
  };

  const handleClearResult = (): void => {
    setResultText('');
  };

  const handleDownload = (): void => {
    const filename = 'speech.txt';
    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(resultText)
    );
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <div className="container">
        <p className="heading">Speech to Text</p>
        <div className="options">
          <div className="language">
            <p>Language</p>
            <select
              name="input-language"
              id="language"
              value={selectedLanguage}
              onChange={handleLanguageChange}
            >
              {languages.map((lang: Language) => (
                <option key={lang.code} value={lang.code}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="line"></div>
        <button className={`btn record ${recording ? 'recording' : ''}`} onClick={recording ? stopRecording : startRecording}>
          <div className="icon">
            <i className="mic-outline"></i>
            <img src="bars.svg" alt="" />
          </div>
          <p>{recording ? 'Listening...' : 'Start Listening'}</p>
        </button>
        <p className="heading">Result :</p>
        <div className="result" spellCheck={false} aria-placeholder="Text will be shown here" defaultValue={resultText}>
          <p>{resultText}</p>
        </div>
        <div className="buttons">
          <button className="btn clear" onClick={handleClearResult}>
            <i className="trash-outline"></i>
            <p>Clear</p>
          </button>
          <button className="btn download" onClick={handleDownload} disabled={!resultText}>
            <i className="cloud-download-outline"></i>
            <p>Download</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Speech;
