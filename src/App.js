
import './App.css';
import io from 'socket.io-client';
import { useState } from 'react';
import Chat from './Chat';
const socket=io.connect('http://localhost:5000/');

function App() {
  const [userName,setUserName]=useState("")
  const [roomId,setRoomId]=useState("")
  const [joinRoom,setJoinRoom]=useState(false);
  const handleJoinARoom= ()=>{
      if(userName !== "" && roomId !== ""){
        socket.emit("join_room",roomId);
        setJoinRoom(true);
        }
      }
  
  return (
    <div className="App">
      {!joinRoom ?
       <div className='join-room-container'>
        <h2>Join A Room</h2>
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
        :
         <Chat socket={socket} userName={userName} roomId={roomId}></Chat>
      }
    </div>
  );
}

export default App;
