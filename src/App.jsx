import './App.css'
import Startapp from './components/Startapp'
import React from "react";
// import /Components.css from './Component/Components.css'
import Quiz from './components/Quiz';
import Result from './components/Result';

class App extends React.Component {

  render() {
    return (
      <>
        <div>
          <Startapp />
        </div>
        <div>
          <Quiz />
        </div>
        <div>
          <Result/>
        </div>
      </>
    )
  }
}
export default App
