import React from "react";
import "./FilteredList.css";

function FilteredList({items, searchText}){
    //Filtrar los elementos segun el texto de busqueda
    const filteredItems= items.filter((item) =>
    item.toLowerCase().includes(searchText.toLowerCase())
    );

    return(
        <div className="filtered-list">
            {filteredItems.length > 0 ?(
                <ul>
                    {filteredItems.map((item, index) => (
                        <li key={index}>{item}</li> //Cada elemento necesita una key unica
                    ))}
                </ul>
            ): (
                <p>No se encontraron los resultados</p>
            )}
        </div>
    );
}

export default FilteredList;