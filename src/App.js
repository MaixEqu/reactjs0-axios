import React, { Component } from 'react';
import axios from 'axios';

export class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>[ Learn React (Mx, ver 0.1.5, J214) ]</div>
          <div id="res">results here...</div>
        </header>
      </div>
    );
  }
}

//const lObj  = (obj) => console.log(JSON.stringify(obj, null, '    '));
const sObj  = (obj) => JSON.stringify(obj, null, '    ');

export class PersonList extends React.Component {
  //this.setState(persons: [])
  /*
  constructor() {
    super();
    //this.setState({presons:[], data: "data_state"})
  }
  */
  componentDidMount() {
    axios.get(`http://localhost:3000`)
    //axios.get(`https://www.reddit.com/r/reactjs.json`)
      .then(res => {
        const persons = res.headers.date;
        console.log("Mx1>> " + persons);
        console.log("Mx2>>\n" + sObj(res));
        this.setState({ persons });
      })
  }

  render() {
    // console.log(this.state.data)
    const ss = this.state ? this.state.data : "no data"
    return (
      <ul>34234_: {ss}
      </ul>
    )
  }
}
//         { this.state.persons.map(person => <li key="2">{person.name}</li>)}