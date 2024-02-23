import Tracker from './components/Tracker';
import './App.css';
import styled from 'styled-components';
import GlobalStyles from './components/globalStyles';


function App() {
  return (
    <div className="App">
      <h2> Expense Tracker</h2>

      <Tracker />
      <GlobalStyles />
    </div>
  );
}

export default App;
