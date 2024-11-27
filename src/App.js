import React, {useState} from "react";
import SearchBox from "./SearchBox";
import FilteredList from "./FilteredList";
import "./App.css";

function App(){
  //Estado inicial
  const[searchText, setSearchText]= useState("") //PAra almacenar texto de busqueda
  const[items, setItem]= useState(["Quito", "Rogelio", "Gaby", "Bambi", "Martita", "Fany"])// Lista a elementos a filtrar

  return(
    <div className="App">
      <header>
        <h1>Filtrar listas de nombres</h1>
      </header>
      
      <SearchBox onSearchChange={setSearchText} />
     
      <FilteredList items={items} searchText={searchText} />
    </div>
  );
}

export default App
