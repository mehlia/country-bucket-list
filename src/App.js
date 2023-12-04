import './App.css';
import CountryContainer from './containers/CountryContainer';

function App() {
  return (
    <>
      <h1>Country Bucket List</h1>
      <CountryContainer/>

      <div>
        <h2>Countries I want to visit</h2>
        <ul>

        </ul>
      </div>

      <div>
        <h2>Countries I have visited</h2>
      </div>
    </>
  );
}

export default App;
