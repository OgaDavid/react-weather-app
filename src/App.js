import './App.css';
import Search from './components/search/Search';

function App() {

  const handleOnSearchchange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchchange} />
    </div>
  );
}

export default App;
