import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
super();

this.state = {
  monsters:[ {
    name:'Linda',
    id:'12o31n2312'
  },
 {
    name:'Frank',
    id :'i1j23lasd'
  },{
    name:'Jack',
    id:'1odksahd'
  },{
    name:'Ali',
    id:'iasdj1'
  }]
}
  };
  render (){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster)=>{
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }

}

export default App;
