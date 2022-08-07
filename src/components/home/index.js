import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { allPokemon, getPokemon } from '../../services/axios/apiPokemon';
import Card from '../card';

import "./styles.scss";

function Home() {
    const [dataPokemon, setDataPokemon] = useState([]);
    const [nextUrl, setNextUrl] = useState('');
    const [previousUrl, setPreviousUrl] = useState('');
    const [loading, setLoading] = useState(true);
    const url = 'https://pokeapi.co/api/v2/pokemon';

    useEffect(() => {
        async function fetchData() {
        let resp = await allPokemon(url);
        setNextUrl(resp.next);
        setPreviousUrl(resp.previous);
        let pokemon = await loadingPokemon(resp.results);
        setLoading(false);
      }
      fetchData();
    }, []);
    
    const next = async () => {
        setLoading(true);
        let data = await allPokemon(nextUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
    }

    const prev = async () => {
        if (!previousUrl) return;
        setLoading(true);
        let data = await allPokemon(previousUrl);
        await loadingPokemon(data.results);
        setNextUrl(data.next);
        setPreviousUrl(data.previous);
        setLoading(false);
    }

    const loadingPokemon = async (data) => {
        let _pokemonData = await Promise.all(
          data.map(async pokemon => {
            let pokemonRecord = await getPokemon(pokemon.url);
            return pokemonRecord;
          })
        );
    
        setDataPokemon(_pokemonData);
    };

    return (
        <>
          { loading ? <h1>Carregando...</h1> : (
            <>
              <Container >
                <Row>
                  <Col md={12} className="pk-card--btn">
                    <Button className='pk-card--btn__prev' variant="outline-warning" onClick={prev}>Anterior</Button>
                    <Button className='pk-card--btn__next' variant="outline-warning" onClick={next}>Próximo</Button>
                  </Col>
                {dataPokemon?.map((pokemon, i) => {
                  return <Card key={i} pokemon={pokemon}/>
                })}
                </Row>
              </Container>
              </>
          )}
        </>
      );
}
export default Home;