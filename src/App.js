import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchfield : ''
    };
  }
  componentDidMount() {
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
    return (
      <div className="App">
        <input className='search-box' type='search' placeholder='search monsters' onChange={onSearchChange} />
       <CardList monsters={filteredMonsters}/>
      </div>
    );
  }

}

export default App;
