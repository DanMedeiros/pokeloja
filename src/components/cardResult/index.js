import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pokemonInd from "../../services/axios/pokemonInd";
import { Container, Row, Col } from 'react-bootstrap';
import "./styles.scss";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function CardResul() {
    const [inputList, setinputList] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        pokemonInd.get(`${id.toLowerCase()}`).then(({ data }) => {
            setinputList(data)
        })
    }, []);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false
          },
        },
    };

    let labels = [
        `${inputList?.stats?.[0].stat?.name}`, 
        `${inputList?.stats?.[1].stat?.name}`, 
        `${inputList?.stats?.[2].stat?.name}`, 
        `${inputList?.stats?.[3].stat?.name}`, 
        `${inputList?.stats?.[4].stat?.name}`, 
        `${inputList?.stats?.[5].stat?.name}`
    ];

    let valuesData = [
        `${inputList?.stats?.[0]?.base_stat}`, 
        `${inputList?.stats?.[1]?.base_stat}`, 
        `${inputList?.stats?.[2]?.base_stat}`, 
        `${inputList?.stats?.[3]?.base_stat}`, 
        `${inputList?.stats?.[4]?.base_stat}`,
        `${inputList?.stats?.[5]?.base_stat}`
    ];

    const data = {
        labels,
        datasets: [
          {
            data: valuesData.map((itens) => (
                itens
            )),
            backgroundColor: 'rgba(233, 99, 3, 1)',
          },
        ],
    };
      
    return (
        <Container className="pk-shelf">
            <Row>
                <Col md={6} className={`pk-shelf-card__photo ${inputList?.types?.[0].type?.name}`}>
                    <img src={inputList?.sprites?.other?.home?.front_default} alt={inputList?.name} />
                </Col>
                <Col md={6} className="pk-shelf-card__info">
                    <Row>
                        <Col md={12} className="pk-shelf-card__info--name">
                            <h1>{inputList?.name}</h1>
                            <span className={`pk-shelf-card__info--name__${inputList?.types?.[0].type?.name}`}>{inputList?.types?.[0].type?.name}</span>
                        </Col>
                        <Col md={12}>
                            <Row>
                                <Col md={4} className="pk-shelf-card__info--height">
                                    <span>Height</span>
                                    <strong>{inputList?.height}mm</strong>
                                </Col>
                                <Col md={4} className="pk-shelf-card__info--weight">
                                    <span>Weight</span>
                                    <strong>{inputList?.height}g</strong>
                                </Col>
                                <Col md={4} className="pk-shelf-card__info--abilities">
                                    <span>Abilities</span>
                                    <strong>{inputList?.abilities?.[0].ability.name}</strong>
                                    <strong>{inputList?.abilities?.[1].ability.name}</strong>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={12}>
                            <h2>Stats</h2>
                            <Bar options={options} data={data} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default CardResul;