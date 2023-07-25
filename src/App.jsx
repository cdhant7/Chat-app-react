import { useState } from "react";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Login />
      <ChatRoom />
    </div>
  );
}

export default App;
