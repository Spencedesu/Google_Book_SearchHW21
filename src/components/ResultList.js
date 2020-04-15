import React from "react";
import { Component } from "react";
import {Segment, Header, Item, Button} from "semantic-ui-react";
import axios from "axios";



function ResultList({books, add}) {
  const addBooks = (book) => {
    console.log(book);
    axios.post('mongodb://googlebooks', book)
      .then((res) => {
          console.log(res.data)
      }).catch((error) => {
          console.log(error)
      });
}
   const populateResults= (searchResult) => {
    
  }

    return (
      <div>
        { !books.data ? '' :
          books.data.map(book => { 
          return (

            <div key={book.id}>
            <h1>Title:{book.volumeInfo.title}</h1> {/* //changed title to h1 */}
            <h2>Subtitle:{book.volumeInfo.subtitle}</h2>
            <h2>Authors:{book.volumeInfo.authors}</h2>
            <p>Synopsis: {book.volumeInfo.description}</p>
            
            <hr />
          <Button className="right floated" onClick={() => addBooks(book)} inverted color="facebook">  
            Add
          </Button>
          <Button className= "right floated" color="instagram">Preview Book</Button>
          <hr/>
            </div>
            
          
          )
        })
        }
      </div>
    )
}
export default ResultList;