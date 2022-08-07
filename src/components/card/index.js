import React from 'react';
import { Col } from 'react-bootstrap';
import './styles.scss'

function Card({ pokemon }) {

    const openPokemon = () => { 
        let name = pokemon.name  
        window.location.href = `/${name}`;
    }


    return (
        <Col md={4} className={`pk-card ${pokemon.types[0].type.name}`} onClick={openPokemon}>
            <div className="pk-card_content">
                <div className="pk-card__img">
                    <img src={pokemon.sprites?.other?.home?.front_default} alt="" />
                </div>
                <div className="pk-card__info">
                    <div className="pk-card__info--id">
                        <span>#{pokemon.id}</span>
                    </div>
                    <div className="pk-card__info--name">
                        <h1>{pokemon.name}</h1>
                    </div>
                </div>
            </div>
        </Col>
    );
}

export default Card;
