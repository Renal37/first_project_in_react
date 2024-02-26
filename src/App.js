import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield : ''
    };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((users) => this.setState(() => {
        return { monsters: users }
      },
        () => {
        }
      ))
  }

  onSearchChange =(event) => {
    const searchfield =event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchfield };
    });
  }
  render() {
    const {monsters,searchfield}= this.state;
    const {onSearchChange}=this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchfield);
    });

    console.log('render');
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} />
        {
          filteredMonsters.map((monster) => {
            return <div key={monster.id}><h1>{monster.name}</h1></div>
          })
        }
      </div>
    );
  }

}

export default App;
