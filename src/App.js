// Import data
import {postings} from './postings'
// Import components
import './App.css';
import Gallery from './gallery'
import SideBar from './sidebar';
import SearchBar from './searchbar'

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <SideBar />

        <SearchBar />
        
        <Gallery postings={postings}/>
       
      </div>
    </div>
  );
}

export default App;
