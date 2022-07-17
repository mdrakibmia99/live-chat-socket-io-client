
import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
const socket=io.connect('http://localhost:5000');

function App() {
  const [userName,setUserName]=useState("")
  const [roomId,setRoomId]=useState("")
  const handleJoinARoom= ()=>{
      if(userName !== "" && roomId !== ""){
        socket.emit("join_room",roomId);
        }
      }
  
  return (
    <div className="App">
        <input 
         type="text"
         placeholder='Name...' 
         onChange={(event)=>setUserName(event.target.value)}
         />
        <input 
         type="text"
         placeholder='Room Id...' 
         onChange={(event)=>setRoomId(event.target.value)}
         />
         <button onClick={handleJoinARoom}> Join A Room </button>
    </div>
  );
}

export default App;
