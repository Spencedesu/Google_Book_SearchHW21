import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {List, ListItem} from "./components/List"
import Nav from "./components/Nav";
import SearchForm from './components/SearchForm';
import { Col, Row, Container } from "./components/Grid";
import axios from "axios"

//import { BrowserRouter as Router, Route, Switch} from "react-router-dom"


  

function App() {

  // function handleInputChange(event) {
  //   event.preventDefault();
  //     const { name, value } = event.target;
  //     // setFormObject({...formObject, search})
  //      console.log(event);
  // };
  // function handleFormSubmit(event){
  //   event.preventDefault();
  //   console.log("event is..")
  //   console.log(event);
    
  //    axios({
  //     method: 'get',
  //     url: 'https://www.googleapis.com/books/v1/volumes?q='+ event.target.name,
  //   }) .then(function (response) {
  //       console.log(response);
  //     })
  //   }


  return (
  <Container>
    <Row>
    <Col size="md-12">
    <div>
        <Nav />
      <SearchForm/>
    </div>
    </Col>
    <List>
    </List>
    </Row>
   </Container>
  );
}

export default App;


