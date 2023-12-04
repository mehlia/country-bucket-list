import './App.css';
import CountryContainer from './containers/CountryContainer';
import CountryComponent from './components/CountryComponent';

function App({countries}) {
  return (
    <>
      <h1>Country Bucket List</h1>
      <CountryContainer/>

      <div>
      <h2>Countries I want to visit</h2>
      </div>
      
      <div>
      <h2>Countries Visited</h2>
      </div>
    </>

    
  );
}

export default App;
