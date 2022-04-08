import React from "react";
import CategoryContainer from "../components/Products/CategoryContainer";
import '../../src/App.css';
import { useParams } from 'react-router-dom'

const CategoryPage = () => {

    const { categoria } = useParams()
    // console.log(categoria)
    return(
        <div className="App">
            <h1> Categoria: {categoria} </h1>
            <CategoryContainer category={ categoria }/>
        </div>

    );
}

export default CategoryPage