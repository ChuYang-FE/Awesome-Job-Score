import logo from './logo.svg';
import './App.css';

import MyClass from './components/MyClass'
import MyFunc from './components/MyFunc'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyClass />
        {/* <MyFunc /> */}
      </header>
    </div>
  );
}

export default App;
