import React from "react";
import CategoryContainer from "../components/Products/CategoryContainer";
import { useParams } from 'react-router-dom'
import Footer from "../components/layout/Footer";

const CategoryPage = () => {

    const { categoria } = useParams()
    return(
        <div>
            <h1> Categoria: {categoria} </h1>
            <CategoryContainer category={ categoria }/>
            <Footer />
        </div>

    );
}

export default CategoryPage