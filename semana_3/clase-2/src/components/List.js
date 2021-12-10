import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Card from './Cards';
import styled from 'styled-components';

const StyleContainerCard = styled.div`
    
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
`
export default class List extends Component {

     constructor(){
         super();
         this.state ={
             characters: []
         }
     }

      async componentDidMount(){
          const url = 'https://rickandmortyapi.com/api/character/';
          const resp = await fetch(url);
          const data = await resp.json();
          const {results} = data;
          this.setState({characters:results})
      }

    

    render() {
        return (
            <Container>
                <h1>Lista de Personajes</h1>
                <hr/>
                <StyleContainerCard >
                {
                     this.state.characters.map((character,index) => (
                         <Card 
                         key={index}
                         characters={character}/>
                     ))
                 }
                 </StyleContainerCard>
            </Container>
        )
    }
}