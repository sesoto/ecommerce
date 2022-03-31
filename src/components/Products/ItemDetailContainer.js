import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

    const MockItem = [{
        id: 1,
        title : '1914 translation by H. Rackham',
        description : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        price: 5000,
        pictureUrl: 'Producto4.jpg',
    }]

    const [Item, setItem] = useState([])
    const [isLoading, setLoading] = useState(true)

    const getItem = () => new Promise((resolve, reject) => {
            return setTimeout( () => {
                resolve(MockItem);
        }, 2000);
    }); 

    useEffect( () => {
        setLoading(true)
        getItem().then( (Item) => {
            setItem(Item)
            // console.log(Item)
        }).finally( () => {
            setLoading(false)
        })
    }, [])

    return (
        isLoading ? (
        <div className="container "> 
            Cargando producto..
        </div> ) 
        : (
            <div className="container "> 
                    <p> Item Detail </p> 
                    
                    {Item.map(product => (
                        <ItemDetail item={product} key={product.id}/>
                     ))}
                
            </div> 
        ))
}

export default ItemDetailContainer
