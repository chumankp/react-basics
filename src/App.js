
import './App.css';
import Greeting from './componets/Greeting';
import Welcome from './componets/Welcome';
import MyComponets from './componets/MyComponets';
//Nameed componets
import { FirstComponets, SecondComponets } from './componets/MyComponets';
import HelloWorld from './componets/HelloWorld';
import Student from './componets/Student';
import Employee from './componets/Employee';
import User from './componets/User';
import EventHandling from './componets/EventHandling';
import ConditionalRendering from './componets/ConditionalRendering';

function App() {
  const student = {
        firstName :"chuman",
        lastName : "panda",
        email  : "chuman@gamil.com"
  }

  const skills = ['java', 'spring', 'aws'];
  return (
    <div className="App">
      {/* <Welcome name = "chuman"/>
      <Greeting name ="suresh"/>
      <FirstComponets />
      <SecondComponets />
      <MyComponets />
      <HelloWorld /> */}
      {/* <Student student = {student}
        data = {skills}
      /> */}

    {/* <Student firstName="chuman"
    lastName="panda"
    email="chuman@gmail.com"/>

    <Employee />

    <User /> */}
    {/* <EventHandling /> */}

    <ConditionalRendering />

    </div>
  );
}

export default App;
