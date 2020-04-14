import React from "react";
import axios from "axios";
import { Segment, Header, Input, Button} from "semantic-ui-react"
import ResultList from "./ResultList";
var query = "";

function SearchForm({handleInputChange, handleFormSubmit, booksArray}){

  return (
    <Segment>
      <Header content = "The world of books awaits..."/>
        <Input
          size="huge"
          onChange={handleInputChange}
          
          // value={this.search}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search Google Books"
          id="search"
        />
  
        <Button onClick={(e) => handleFormSubmit(e)} inverted color="facebook">
          Search
        </Button>
        <ResultList books={ booksArray}/>
    </Segment>
  );
}

export default SearchForm;
