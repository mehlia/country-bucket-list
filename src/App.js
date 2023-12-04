import './App.css';
import CountryContainer from './containers/CountryContainer';

function App({countries}) {
  return (
    <>
      <h1>Country Bucket List</h1>
      <CountryContainer/>
    </>

  );
}

export default App;
