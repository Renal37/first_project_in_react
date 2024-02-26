import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
super();

this.state = {
  name:{firstName:'Renal',lastName:'Mustafin'},
  school: 'APT'
}
  };
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I study at {this.state.school}  
          </p>
          <button 
          onClick={()=>{
            this.setState((state,props)=>{
              return{
                name:{firstName:'Dima',lastName:'Dima'}
              }
            },()=>{
              console.log(this.state)
            });
          }}
          >
            Change name</button>
        </header>
      </div>
    );
  }

}

export default App;
