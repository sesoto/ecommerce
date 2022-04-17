import React from "react";
import ItemListContainer from '../components/Products/ItemListContainer';
import '../../src/App.css';


const HomePage = () => {
    return(
        <div className="App">
            <h1> Home </h1>
            <ItemListContainer />
        </div>

    );
}

export default HomePage