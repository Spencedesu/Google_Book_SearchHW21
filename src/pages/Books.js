import React, {useState} from "react";
import SearchForm from "../components/SearchForm";
import axios from "axios";
import ResultList from "../components/ResultList";
import Nav from "../components/Nav";



function Books(){

  const [booksArray, setBooksArray] = useState([]);
  let query
 

  const handleInputChange = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    query = event.target.value;
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("event is..")
    console.log(event.target);

     axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + query
      }).then(response => {
        console.log(response);
        let data = response.data.items;
        setBooksArray({...booksArray, data});
        console.log(booksArray);
      })
    }
    return(
<div>
  <Nav/>
  <SearchForm
  handleInputChange={handleInputChange}
  handleFormSubmit={handleFormSubmit}
  booksArray={booksArray}
  
  />
  
 
</div>
    );
}

export default Books;