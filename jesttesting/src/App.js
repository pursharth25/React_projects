import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome/Welcome';
import Async from './Async/Async';
function App() {
  return (
    <div className>
      
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React JS
        </a>
      <Welcome />
      <Async />
    </div>
  );
}

export default App;
