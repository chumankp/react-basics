
import './App.css';
import Greeting from './componets/Greeting';
import Welcome from './componets/Welcome';
import MyComponets from './componets/MyComponets';
//Nameed componets
import { FirstComponets, SecondComponets } from './componets/MyComponets';
import HelloWorld from './componets/HelloWorld';

function App() {
  return (
    <div className="App">
      <Welcome name = "chuman"/>
      <Greeting name ="suresh"/>
      <FirstComponets />
      <SecondComponets />
      <MyComponets />
      <HelloWorld />
    </div>
  );
}

export default App;
