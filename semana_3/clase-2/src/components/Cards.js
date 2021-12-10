import React, { Component } from 'react';
import {Card} from 'react-bootstrap';

export default class Cards extends Component {

    render() {

        const {image,name,species} = this.props.characters;

        return (
            <div>
                <Card>
                    <Card.Img variant="top" src={image}/>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                           {species}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}