import React from "react";
import { Component } from "react";
import {Segment, Header, Item} from "semantic-ui-react";


function ResultList({books}) {
   const populateResults= (searchResult) => {
    const books = {}
  }
    return (
      <div>
        { !books.data ? '' :
          books.data.map(book => { 
          return (

            <div key={book.id}>
            <div>{book.volumeInfo.title}</div>
            <div>{book.volumeInfo.authors}</div>
            <div>{book.volumeInfo.description}</div>
            <hr />
            </div>
          )
        })
        }
      </div>
    )
}
export default ResultList;