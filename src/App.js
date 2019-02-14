import React, { Component } from 'react';
//import responseJsonL from './2/movies2.json';
import dataOfFile from './2/movies2.txt';

export class Main extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>[ Learn React (Mx, ver 0.1.14, J214) ]</div>
          <div id="res">results here...</div>
        </header>
      </div>
    );
  }
}

//const lObj  = (obj) => console.log(JSON.stringify(obj, null, '    '));
const sObj  = (obj) => JSON.stringify(obj, null, '    ');

export class PersonList extends React.Component {
  componentDidMount() {
    // + fetch('https://facebook.github.io/react-native/movies.json')
    //!++ fetch('http://localhost:3000' + responseJsonL)
    console.log("Mx6: " + typeof(responseJson));
    //console.log("Mx7>>\n" + sObj(responseJsonL));
    if (typeof(dataOfFile) == 'string') {
      fetch('http://localhost:3000' + dataOfFile)
        .then((response) => response.text())
        .then((responseText) => {
          //console.log("Mx0+>>\n" + sObj(responseJsonL));
          //console.log("Mx2+>>\n" + sObj(responseJson.split("\r\n")));
          //const persons = (responseJson) ? responseJson.movies[2].title : "no 'responseJson'"; 
          //const persons = (responseText) ? responseText : "no 'responseJson'"; 
          const aResponseText = responseText.split("\n");
          const aR = aResponseText.map( (row, i) => {
            console.log(i + ":: " + row);
            return `${i}: ${row}`
          });
          console.log(aR);
          //console.log("Mx1>> " + persons);
          //const persons2 = (responseJsonL) ? responseJsonL.movies[2].title : "no 'responseJsonL'";
          // persons.replace("\n", "<br />");
          this.setState({ persons: aResponseText[23] });
          console.log("data file is text.")
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("data file isn't text type.")
      this.setState({ persons: sObj(dataOfFile) });
    }
  }
  render() {
    const sData = (this.state && 'persons' in this.state) ? this.state.persons : "no 'persons'"
    return (
      <div>data: {sData} )</div>
    )
  }
}