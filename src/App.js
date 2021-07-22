import logo from './logo.svg';
import './App.css';

import MyClass from './components/MyClass'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyClass />
      </header>
    </div>
  );
}

export default App;
