import React, { useEffect, useState} from "react";

function Books() {
  const[books, setBooks] = useState([])
  const [formInput, setFormInput] = useState({
    title: ""
  })

  function loadBooks() {

  }


  function handleInputChange(event) {
    const { name, value} = event.target;
    setFormInput({...formInput, [name] : value})
  }

  function handleFormSubmit(){
    event.preventDefault();

  }
}