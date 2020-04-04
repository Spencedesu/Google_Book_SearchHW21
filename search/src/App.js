import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {List, ListItem} from "./components/List"
import Nav from "./components/Nav";
import SearchForm from './components/SearchForm';
import { Col, Row, Container } from "./components/Grid";
import axios from "axios"

//import FormExampleForm from './components/FormExampleForm';
//import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function handleInputChange(event) {
  event.preventDefault();
    const { name, value } = event.target;
    // setFormObject({...formObject, search})
    // console.log(search);
};
function handleFormSubmit(event){
  console.log("event is..")
  console.log(event);
  event.preventDefault();
   axios({
    method: 'get',
    url: 'https://www.googleapis.com/books/v1/volumes?q='+ event.target.search,

    
  }) .then(function (response) {
      console.log(response);
    })
  }
  

function App() {
  return (
  <Container>
    <Row>
    <Col size="md-12">
    <div>
        <Nav />
      <SearchForm
      handleInputChange={handleInputChange}
      name="search"
      handleFormSubmit={handleFormSubmit}
      />
      
    </div>
    </Col>
    <List>

    </List>
    </Row>
   </Container>

  );
}

export default App;


{/* <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path={"/", "/books"}>
          <Books />
          </Route>
          <Route exact path ="/books/:id">
            <Detail />
          </Route>
        </Switch>
      
      </div>
    </Router> */}