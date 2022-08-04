import React, { useState, useEffect, Component } from 'react';
import pokemonInd from "../../services/axios/pokemonInd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles.scss";

function CardsPokemon(){

    let random = Math.floor(Math.random() * 100) + 1;
    const [list, setList] = useState([]);

    useEffect(() => {
        pokemonInd.get(String(random)).then(({data}) => {
            setList(data)
        })
    }, []);

    return (
        <div className="pk-shelf">
                            <div className="pk-shelf-card__photo">
                                <img src={list?.sprites?.other?.home?.front_default}  alt={list?.name} />
                            </div>
                            <div className="pk-shelf-card__info">
                                <div className="pk-shelf-card__info--name">
                                    <h1>{list?.name}</h1>
                                </div>
                                <div className="pk-shelf-card__info--status">
                                    <div className="pk-shelf-card__info--status__hp">
                                        <div className="pk-shelf-card__info--status__name">
                                            <h2>{list?.stats?.[0].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: list?.stats?.[0]?.base_stat + "%"}}>
                                            <h2>{list?.stats?.[0]?.base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__atack">
                                        <div className="pk-shelf-card__info--status__name">
                                            <h2>{list?.stats?.[1].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: list?.stats?.[1]?.base_stat + "%"}}>
                                            <h2>{list?.stats?.[1].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__defesa">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{list?.stats?.[2].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: list?.stats?.[2]?.base_stat + "%"}}>
                                            <h2>{list?.stats?.[2].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__atackEsp">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{list?.stats?.[3].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: list?.stats?.[3]?.base_stat + "%"}}>
                                            <h2>{list?.stats?.[3].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__defesaEsp">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{list?.stats?.[4].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: list?.stats?.[4]?.base_stat + "%"}}>
                                            <h2>{list?.stats?.[4].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__speed">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{list?.stats?.[5].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: list?.stats?.[5]?.base_stat + "%"}}>
                                            <h2>{list?.stats?.[5].base_stat}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    );
}

export default CardsPokemon;