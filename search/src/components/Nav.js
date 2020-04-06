import React from "react";
import {  } from "react-router-dom";
import { Container, Header, Segment, Button, ButtonContent} from "semantic-ui-react";
import "./Nav.css";


function Nav() {
  return(
    <Container>
      <Segment className= "headerBackground" >
        <Header 
         as="h1" textAlign="center">
          Google Books Search
        </Header>
        <Header
        as="h2"
        textAlign="center">
            <Button
            size="huge"  color="google plus"  >
              Search
            </Button>
            <Button
            size="huge" color="facebook">
              My List
            </Button>

          
        </Header>
      </Segment>
    </Container>
  
 
  );
}

export default Nav;