import './App.css';
import { Characters } from './components/Characters';
import { Character } from './components/Character';
import { SearchCharacter } from './components/SearchCharacter';
import { AddProduct } from './components/AddProduct';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Characters/> */}
        {/* <Character/> */}
        {/* <SearchCharacter/> */}
        <AddProduct/>
      </header>
    </div>
  );
}

export default App;
