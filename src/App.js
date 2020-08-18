import React, { Component } from 'react';
// import FirstComponent from './Components/Learning-example/FirstComponent';
// import SecondComponent from './Components/Learning-example/SecondComponent';
// import ThirdComponent from './Components/Learning-example/ThirdComponent';
//import Counter from './Components/counter/Counter'
import Todo from './Components/todo/Todo'
//import logo from './logo.svg';
import './App.css';
import './bootstrap.css';

class App extends Component {
  render(){
    return(
      <div className="App">
        {/*<Counter/>*/}
        <Todo/>
      </div>
    )
 
  } 
}


// function LearningComponents() {
//   return (
//     <div className="LearningComponents">
//        My Hello world
//         <FirstComponent/>
//         <SecondComponent/>
//         <ThirdComponent/>
//     </div>
//   );
  
// }


export default App;
