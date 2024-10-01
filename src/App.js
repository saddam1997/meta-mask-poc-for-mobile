import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <a href="https://metamask.app.link/send/0x4081444763A8d6E2f1476C4357b6E46292Fa5feC">Send ETH with MetaMask</a>

        <a href="https://link.trustwallet.com/send?address=0x4081444763A8d6E2f1476C4357b6E46292Fa5feC">Send ETH with Trust Wallet</a>

      </header>
    </div>
  );
}

export default App;
