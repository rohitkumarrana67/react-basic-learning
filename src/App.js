import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:'NEETU',age:27},
      {name:'ROHIT',age:23},
      {name:'ROMIT',age:19}
    ],
    showPerson: false
  }
 
  deletePersonHandler=(personIndex)=>{
    let persons=this.state.persons;
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  nameChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:'NEETU',age:27},
        {name:event.target.value,age:23},
        {name:'ROMIT',age:19}
      ]
    })
  }

  togglePersonsHandler=()=>{
      const doesShow=this.state.showPerson;
      this.setState({showPerson: !doesShow});
  }


   

  render(){
   
    const style={
      backgroundColor:'blue',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px'
    }

    let persons=null;

    if (this.state.showPerson)
    {
      persons=(
      <div>
        {this.state.persons.map((person,index)=>{
          return <Person 
          click={()=>this.deletePersonHandler(index)}
          name={person.name} 
          age={person.age}/>
        })}
      </div> )

    }


    return (
      <div className="App">
        <h1>hi , i am react app</h1>
        <p>This really works!!!</p>
        <button style={style}  onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;   





// const App = props => {
  
//   const [personsState,setPersonsState]=useState({
//     persons:[
//       {name:'NEETU',age:27},
//       {name:'ROHIT',age:23},
//       {name:'ROMIT',age:19}
//     ]
//   });

//   const switchNameHandler = () =>{
//     setPersonsState({
//       persons:[
//         {name:'Neerala',age:27},
//         {name:'ROHIT',age:23},
//         {name:'ROMIT',age:19}
//       ]
//     })
//   }


  
//     return (
//       <div className="App">
//         <h1>hi , i am react app</h1>
//         <p>This really works!!!</p>
//         <button onClick={switchNameHandler}>Switch Name</button>
//         <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//         <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> and  I am software engineer</Person>
//         <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//       </div>
//     );
// }

// export default App; 


 

 
 