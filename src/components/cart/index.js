import {useState, useEffect} from 'react';
import pokemonInd from "../../services/axios/pokemonInd";
import "./styles.scss"
function Cart() {

    const [listStorage, setlistStorage] = useState({});
    const [newList, setNewList] = useState(null)

    const listStorageResult = JSON.parse(localStorage.getItem("itensCart"));

    useEffect(() => {
        pokemonInd.get().then(({ data }) => {
            setNewList(data.results)

            listStorageResult.map(itens => {
                pokemonInd.get(String(itens)).then((resp) => {
                    setlistStorage(resp.data);
                   }).catch(error => {
                       console.log(error);
                   });
                 return itens;
             });
        })
        .catch(error => {
            console.log(error);
        });
    }, []);
    
    return (
        <>
        <div className='pk-cart'>
            <div className="pk-cart--title">
                <h2>Carrinho</h2>
            </div>
            {<div className="pk-cart--content">
                <div className="pk-cart--content__img">
                    <img src={listStorage?.sprites?.other?.home?.front_default} alt={listStorage?.name} />
                </div>
                <div className='pk-cart--content__name'>
                    <span>{listStorage?.name}</span>
                </div>
            </div>}
            <div className="pk-cart--content">
                <div className="pk-cart--content__img">
                    <img src={listStorage?.sprites?.other?.home?.front_default} alt={listStorage?.name} />
                </div>
                <div className='pk-cart--content__name'>
                    <span>{listStorage?.name}</span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cart;