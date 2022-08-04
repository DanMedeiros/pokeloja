import React from 'react';
import { useRef} from 'react';
import "./search.scss";

function Search() {

    const valuInput = useRef("");
    
    const openSearch = e => {
        e.preventDefault();  
        let valInput = valuInput.current.value;    
        window.location.href = `/${valInput}`;
    }
    
    return(
        <div className="pk-search">
            <div className="pk-search-title">
                Buscar
            </div>
            <div className="pk-search-input">
                <input
                name="pesquisar"
                placeholder="Ex.: Pikachu"
                ref={valuInput}
                type="text" />
            </div>
            <div className="pk-search-btnSearch">
                <button onClick={openSearch}>
                    Pesquiar
                </button>
            </div>
        </div>
    )
}

export default Search;