import React from "react";
import axios from "axios";
var query = "";

class SearchForm extends React.Component{
  
  handleInputChange(event) {
    event.preventDefault();
      // const { searchField } = event.target;
      // setFormObject({...formObject, search})
       console.log(event.target.value);
       query = event.target.value
  };
   handleFormSubmit(event){
    event.preventDefault();
    console.log("event is..")
    console.log(event.target);
    
     axios({
      method: 'get',
      url: 'https://www.googleapis.com/books/v1/volumes?q=' + query
    }) .then(function (response) {
        console.log(response);
      })
    }

  render() {
  return (
    <form onSubmit={this.handleFormSubmit}>
      <div className="form-group">
        {/* <label htmlFor="search">Search:</label> */}
        <input
          onChange={this.handleInputChange}
          
          value={this.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Google Books"
          id="search"
        />
       
        <br/>
        <button onClick={(e) => this.handleFormSubmit(e)} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}
}
export default SearchForm;
