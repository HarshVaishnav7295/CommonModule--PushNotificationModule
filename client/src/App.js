import React, { useEffect, useState } from "react";
import { onMessageListener, requestForNotification } from "./firebase";
import axios from "axios";

function App() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [token, setToken] = useState("");

  const handleSendNotification = async () => {
    console.log("title->",title)
    console.log("message->",message)
    console.log("token->",token)
    if (title?.length == 0 || message?.length == 0 || token?.length == 0) {
      alert("Please Provide Title or message or token !");
    } else {
      const response = await axios.post("http://localhost:8001/api/push-notification/send", {
        title,
        message,
        token,
      });

      console.log('response', response)
    }
  };


  const getToken = async () => {
    console.log("getToken called")
    const tokenData = await requestForNotification();

    console.log('123->',tokenData);
    setToken(tokenData);    
  }

  // Req for a Notification Permission
  useEffect(() => {
    getToken()
  }, []);

  onMessageListener().then((data) => {
    console.log("Notification-->",data)
  })

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "100px",
        gap: "15px",
      }}
    >
      <br />
      <label>Title: </label>
      <input onChange={(e) => setTitle(e.target.value)} type="text" />

      <br />
      <label>Message: </label>
      <input onChange={(e) => setMessage(e.target.value)} type="text" />
      <br />

      <button onClick={handleSendNotification}>Send Notification</button>
    </div>
  );
}

export default App;
