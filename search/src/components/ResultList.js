import React from "react";
import { Component } from "react";

function ResultList({books}) {


   const populateResults= (searchResult) => {
    const books = {}
    
  }
    return (
      <div>
        { books.map(book => { 
          return (
            <div>
            <div>{book.volumeInfo.title}</div>
            <div>{book.volumeInfo.authors}</div>
            <hr />
            </div>
          )
        })
        }
      </div>
    )
}
export default ResultList;