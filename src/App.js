import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
const App = ()=>{
  return(
    <div className="App">
    <h1>Monsters search</h1>
    {/* <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
   <CardList monsters={filteredMonsters}/> */}
  </div>
  )
}

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchfield : ''
//     };
//   }
//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then((users) => this.setState(() => {
//         return { monsters: users }
//       },
//         () => {
//         }
//       ))
//   }

//   onSearchChange =(event) => {
//     const searchfield =event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchfield };
//     });
//   }
//   render() {
//     const {monsters,searchfield}= this.state;
//     const {onSearchChange}=this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });
//     return (
//       <div className="App">
//         <h1>Monsters search</h1>
//         <SearchBox onChangeHandler={onSearchChange} placeholder='search monsters' className='search-box'/>
//        <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }

// }

export default App;
