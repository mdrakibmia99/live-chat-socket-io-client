
import './App.css';
import io from 'socket.io-client';
const socket=io.connect('http://localhost:5000');

function App() {
  return (
    <div className="App">
       live chat application
    </div>
  );
}

export default App;
