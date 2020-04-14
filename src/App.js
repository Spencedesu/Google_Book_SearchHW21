import React from 'react';
//import logo from './logo.svg';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import {List, ListItem} from "./components/List"
import Nav from "./components/Nav";
import SearchForm from './components/SearchForm';
import { Col, Row, Container } from "./components/Grid";
import ResultList from "./components/ResultList"
import axios from "axios";
import MyList from "./pages/MyList";
import Books from "./pages/Books";


function App() {

  return (
    <Container>
      <Router>
      <Row>
      <Col size="md-16">
      <div>
          <Nav />
          <Route exact path="/" component={Books} />
          <Route exact path="/mylist" component={MyList} />


      </div>
      </Col>
      <List>
      </List>
      </Row>
      </Router>
    </Container>
    );
}

export default App;



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


