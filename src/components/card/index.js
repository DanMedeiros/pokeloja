import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonInd from "../../services/axios/pokemonInd";


function CardResul() {
    const [inputList, setinputList] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        pokemonInd.get(`${id.toLowerCase()}`).then(({data}) => {
            console.log('data setinputList', data)
            setinputList(data)
        })
    }, []);  

    return(
        <div className="pk-shelf">
                            <div className="pk-shelf-card__photo">
                                <img src={inputList?.sprites?.other?.home?.front_default}  alt={inputList?.name} />
                            </div>
                            <div className="pk-shelf-card__info">
                                <div className="pk-shelf-card__info--name">
                                    <h1>{inputList?.name}</h1>
                                </div>
                                <div className="pk-shelf-card__info--status">
                                    <div className="pk-shelf-card__info--status__hp">
                                        <div className="pk-shelf-card__info--status__name">
                                            <h2>{inputList?.stats?.[0].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: inputList?.stats?.[0]?.base_stat + "%"}}>
                                            <h2>{inputList?.stats?.[0]?.base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__atack">
                                        <div className="pk-shelf-card__info--status__name">
                                            <h2>{inputList?.stats?.[1].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: inputList?.stats?.[1]?.base_stat + "%"}}>
                                            <h2>{inputList?.stats?.[1].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__defesa">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{inputList?.stats?.[2].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: inputList?.stats?.[2]?.base_stat + "%"}}>
                                            <h2>{inputList?.stats?.[2].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__atackEsp">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{inputList?.stats?.[3].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: inputList?.stats?.[3]?.base_stat + "%"}}>
                                            <h2>{inputList?.stats?.[3].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__defesaEsp">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{inputList?.stats?.[4].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: inputList?.stats?.[4]?.base_stat + "%"}}>
                                            <h2>{inputList?.stats?.[4].base_stat}</h2>
                                        </div>
                                    </div>
                                    <div className="pk-shelf-card__info--status__speed">
                                    <div className="pk-shelf-card__info--status__name">
                                            <h2>{inputList?.stats?.[5].stat?.name}</h2>
                                        </div>
                                        <div className="pk-shelf-card__info--status__info" style={{maxWidth: inputList?.stats?.[5]?.base_stat + "%"}}>
                                            <h2>{inputList?.stats?.[5].base_stat}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
        </div>
    )
}

export default CardResul;