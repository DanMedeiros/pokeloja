function Menu(){

    const listMenu = ["Home", "Contato", "Pokemons"];
        
    return(
        <ul>
            {listMenu.map((item) => (
                <li>
                    {item}   
                </li>
            ))}
        </ul>
    )
}

export default Menu;