import React from 'react';
import Webcam from 'react-webcam'
import axios from 'axios';

function blobToFile(theBlob, fileName) {
  return new File([theBlob], fileName, { lastModified: new Date().getTime(), type: theBlob.type })
}

const WebcamStreamCapture = ({ updatePrediction }) => {
    const webcamRef = React.useRef(null);
    const mediaRecorderRef = React.useRef(null);
    const [capturing, setCapturing] = React.useState(false);
    const [recordedChunks, setRecordedChunks] = React.useState([]);
  
    const handleStartCaptureClick = React.useCallback(() => {
      setCapturing(true);
      mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
        mimeType: "video/webm"
      });
      mediaRecorderRef.current.addEventListener(
        "dataavailable",
        handleDataAvailable
      );
      mediaRecorderRef.current.start();
    }, [webcamRef, setCapturing, mediaRecorderRef]);
  
    const handleDataAvailable = React.useCallback(
      ({ data }) => {
        if (data.size > 0) {
          setRecordedChunks((prev) => prev.concat(data));
        }
      },
      [setRecordedChunks]
    );
  
    const handleStopCaptureClick = React.useCallback(async () => {
      await mediaRecorderRef.current.stop();
      setCapturing(false);
    }, [mediaRecorderRef, webcamRef, setCapturing])
  
  
    const handleDownload = React.useCallback(async () => {
      if (recordedChunks.length) {
        console.log("Started")
        const blob = new Blob(recordedChunks, {
          type: "video/mp4"
        });
        console.log("blolb", blob);
        const file = blobToFile(blob, "me.mp4")
        let formData = new FormData();    //formdata object
        formData.append('video', file);
        const videoBlob = await axios("http://54.221.110.157:8000/upload", {
          method: "POST",
          headers: { 'content-type': 'multipart/form-data' },
          data: formData
        }).then((e) => e).catch(err => console.error(err));
        const time = new Date()
        console.log(time)
        updatePrediction(`${videoBlob.data.value} at ${time}` || "")
        setRecordedChunks([]);
      }
    }, [recordedChunks]);

    React.useLayoutEffect(() => {
      setTimeout(() => {
        handleStartCaptureClick()
      }, 1000)
      const timer = window.setInterval(async () => {
        await handleStopCaptureClick()
      }, 6000)
      return () => {
        window.clearInterval(timer)
      }
    }, [])

    React.useEffect(() => {
      if (!capturing && recordedChunks.length > 0) {
        handleDownload();
      }
    }, [capturing, recordedChunks])


    React.useEffect(() => {
      if (!capturing && recordedChunks.length === 0) {
        setTimeout(() => {
          handleStartCaptureClick()
        }, 1000)
      }
    }, [capturing, recordedChunks])
  
    return (
      <>
        <Webcam audio={false} ref={webcamRef} />
        {capturing ? (
          <button className='btn' onClick={handleStopCaptureClick}>Stop Capture</button>
        ) : (
          <button className='btn' onClick={handleStartCaptureClick}>Start Capture</button>
        )}
        {recordedChunks.length > 0 && (
          <button className='btn' onClick={handleDownload}>Download</button>
        )}
      </>
    );
  };
  

export default WebcamStreamCapture;