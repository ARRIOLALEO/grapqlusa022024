import './App.css';
import { Characters } from './components/Characters';
import { Character } from './components/Character';
import { SearchCharacter } from './components/SearchCharacter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Characters/> */}
        {/* <Character/> */}
        <SearchCharacter/>
      </header>
    </div>
  );
}

export default App;
