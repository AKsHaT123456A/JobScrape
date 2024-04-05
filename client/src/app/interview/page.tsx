"use client"
import { useEffect, useState, useRef } from "react";
import axios from "axios";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
  }
}

export default function MicrophoneComponent() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [translationToHindi, setTranslationToHindi] = useState("");
  const [translationToEnglish, setTranslationToEnglish] = useState("");
  const recognitionRef = useRef<any>(null);

  const startRecording = () => {
    setIsRecording(true);
    setTranscript("");
    setTranslationToHindi("");
    setTranslationToEnglish("");
    recognitionRef.current = new window.webkitSpeechRecognition();
    recognitionRef.current.continuous = true;
    recognitionRef.current.interimResults = true;
    recognitionRef.current.onresult = (event: any) => {
      const { transcript } = event.results[event.results.length - 1][0];
      setTranscript(transcript);
    };
    recognitionRef.current.start();
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsRecording(false);
    }
  };

  const translateText = async (text: string, targetLanguage: string,soureLanguage:string) => {
    const encodedParams = new URLSearchParams();
    encodedParams.set("q", text);
    encodedParams.set("target", targetLanguage);
    encodedParams.set("source", soureLanguage);
    console.log(process.env.NEXT_PUBLIC_RAPID_API_KEY);
    console.log(process.env.NEXT_PUBLIC_API_KEY);
    
    const options = {
      method: "POST",
      url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "Accept-Encoding": "application/gzip",
        "X-RapidAPI-Key": process.env.NEXT_RAPID_PUBLIC_API_KEY,
        "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
      },
      data: encodedParams,
    };

    try {
      const response = await axios.request(options);
      return response.data.data.translations[0].translatedText;
    } catch (error) {
      console.error("Translation Error: ", error);
      return "";
    }
  };

  useEffect(() => {
    if (transcript && !isRecording) {
      translateText(transcript, "hi","en").then((translatedText) => {
        setTranslationToHindi(translatedText);
        translateText(translatedText, "en","hi").then((translatedBackText) => {
          setTranslationToEnglish(translatedBackText);
        });
      });
    }
  }, [transcript, isRecording]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full">
        <div className="w-1/2 m-auto rounded-md border p-4 bg-white">
          <div className="flex-1 flex w-full justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                {isRecording ? "Recording" : "Recorded"}
              </p>
              <p className="text-sm text-muted-foreground">
                {isRecording ? "Start speaking..." : "Recording complete."}
              </p>
            </div>
            {isRecording && (
              <button
                onClick={stopRecording}
                className="rounded-full w-6 h-6 bg-red-400"
              />
            )}
          </div>

          {transcript && (
            <div className="border rounded-md p-2 mt-4">
              <p className="mb-2">Transcript: {transcript}</p>
              {translationToHindi && (
                <p className="mb-2">Translation to Hindi: {translationToHindi}</p>
              )}
              {translationToEnglish && (
                <p className="mb-0">Translation to English: {translationToEnglish}</p>
              )}
            </div>
          )}
        </div>

        <div className="flex items-center justify-center mt-4">
          {isRecording ? (
            <button
              onClick={stopRecording}
              className="bg-red-400 text-white py-2 px-4 rounded-full focus:outline-none"
            >
              Stop Recording
            </button>
          ) : (
            <button
              onClick={startRecording}
              className="bg-blue-400 text-white py-2 px-4 rounded-full focus:outline-none"
            >
              Start Recording
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
