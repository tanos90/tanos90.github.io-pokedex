import React from 'react';
import { Card, Image } from 'semantic-ui-react';
export default class Pokemon extends React.Component {
    render() {
        const { pokemonDetails } = this.props;
        const pokemonCard = (
            <Card centered={true} color="black">
                <Image
                    fluid
                    circular
                    src={pokemonDetails.sprites.front_shiny}
                />
                <Card.Content>
                    <Card.Header>{pokemonDetails.name}</Card.Header>
                    <Card.Meta />
                    <Card.Description>
                        Color: {pokemonDetails.species.color.name} <br />
                        Moves: {pokemonDetails.topMoves}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra />
            </Card>
        );
        return <div>{pokemonCard}</div>;
    }
}
