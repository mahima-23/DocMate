import React, { useState } from 'react';
import "../styles/TextToSpeechButton.css"
import volumeIcon from "../images/volume-on.png";
import volumeIconOff from "../images/volume-off.png";


const TextToSpeechButton = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeak = () => {
    const synth = window.speechSynthesis;
    const text = document.body.innerText;
    const utterance = new SpeechSynthesisUtterance(text);
    
    if (!isSpeaking) {
      // Start speaking
      synth.speak(utterance);
      setIsSpeaking(true);
    } else {
      // Stop speaking
      synth.cancel();
      setIsSpeaking(false);
    }
  };

  return (
    <button onClick={handleSpeak} className='TextToSpeechButton'>
      {isSpeaking ? <img src={volumeIconOff} alt="Stop Speaking" /> : <img src={volumeIcon} alt="Start Speaking"/>}
    </button>
  );
};

export default TextToSpeechButton;
