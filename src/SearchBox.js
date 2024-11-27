import React from "react";
import "./SearchBox.css";

function SearchBox({onSearchChange}){
    //Manejar el cambio de texto en el input
    const handleChange=(event)=>{
        onSearchChange(event.target.value); // Llama  a la funcion pasada por props
    };

    return(
        <div className="search-box">
            <input
            type="text"
            placeholder="Buscar..."
            onChange={handleChange}
            aria-label="Buscar nombres"
            />
        </div>
    );
}

export default SearchBox