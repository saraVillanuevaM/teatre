import React,{ Component } from'react';
import './App.css';
import text from'./data/text.json';

class App extends Component {

state = {
 text: text

}


   render () {
  return <div>
    { this.state.text.map (e=> <p>{e}</p>)}

  </div> 



 }

}



export default App;
