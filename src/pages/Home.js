import React from "react";
import ItemListContainer from '../components/Products/ItemListContainer';
import Footer from "../components/layout/Footer";

const HomePage = () => {
    return(
        <>
        <div>
            <h1> Home </h1>
            <ItemListContainer />
            <Footer />
        </div>

</>
    );
}

export default HomePage