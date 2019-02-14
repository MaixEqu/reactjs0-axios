import React, { Component } from 'react';
// import axios from 'axios';
import responseJsonL from './2/movies2.txt'

export class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>[ Learn React (Mx, ver 0.1.12, J214) ]</div>
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
    // + axios.get(`http://localhost:3000`)
    // + axios.get(`https://www.reddit.com/r/reactjs.json`)
    // -- axios.get(`/home/maick/xMx/reactjs0-axios/data/README.md`)
    // -axios.get(`http://localhost/aa/test3.html`)
    //-axios.get("http://eee9.000webhostapp.com/aa/aa.txt")

    /*
    axios.get(`http://localhost:3000`)
    .then(res => {
        console.log("Mx2>>\n" + sObj(res));
        const persons = res.headers.date;
        console.log("Mx1>> " + persons);
        this.setState({ persons });
      })
    */
    // + fetch('https://facebook.github.io/react-native/movies.json')
    //+fetch('http://localhost:3000/static/media/movies.301eeaa2.txt')
    fetch('http://localhost:3000' + responseJsonL)
    //fetch('https://facebook.github.io/react-native/movies.json')
    //fetch('./movies.json')
      .then((response) => response.text())
      .then((responseJson) => {
        console.log("Mx0+>>\n" + sObj(responseJsonL));
        console.log("Mx2+>>\n" + sObj(responseJson.split("\r\n")));
        //const persons = (responseJson) ? responseJson.movies[2].title : "no 'responseJson'"; 
        const persons = (responseJson) ? responseJson : "no 'responseJson'"; 
        console.log("Mx1>> " + persons);
        //const persons2 = (responseJsonL) ? responseJsonL.movies[2].title : "no 'responseJsonL'";
        // persons.replace("\n", "<br />");
        this.setState({ persons: persons.split("\r") });
        //return responseJson.movies;
      })
      //         this.setState({ persons: persons.replace(/\n/g, "+ ") });

      .catch((error) => {
        console.error(error);
      });
  }
/*
    .then((response) => {
            console.log("Mx1>>\n" + sObj(response));
            response.json()
        }
        ) //response.json())

*/  

  render() {
    // console.log(this.state.data)
    const sData = (this.state && 'persons' in this.state) ? this.state.persons : "no data"
    //const aData = sData.split("\n");
    return (
      <div>data: {sData} )</div>
    )
  }
}
/*       <div>data: {sData.map( function(row) { return row} )</div></div>

//         { this.state.persons.map(person => <li key="2">{person.name}</li>)}
/*
function getMoviesFromApiAsync() {
  return fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
}

*/