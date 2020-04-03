import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Nav from "./components/Nav";
import SearchForm from './components/SearchForm';
//import Input from "./components/Input";
//import FormExampleForm from './components/FormExampleForm';
//import { BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
   
    <SearchForm/>
    // How do other apps handle the app() return function portion?
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