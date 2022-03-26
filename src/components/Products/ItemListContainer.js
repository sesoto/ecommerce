import { useState, useEffect } from 'react'
import ItemCount from './ItemCount';
import ItemList from './ItemList'

const ItemListContainer = () => {

    const Products = [{
        id: 1,
        title : 'Producto 1',
        price: 1000,
        pictureUrl: 'Producto1.jpg',
    },
    {
        id: 2,
        title : 'Producto 2',
        price: 2000,
        pictureUrl: 'Producto2.jpg', 
    },
    {
        id: 3,
        title : 'Producto 3',
        price: 3000,
        pictureUrl: 'Producto3.jpg',
    }
]
    const [items, setItems] = useState([])
    const [isLoading, setLoading] = useState(true)

    // const {title,price,size,stock} = props
    // const onAdd = (count) => { console.log(`Agregaste ${count} productos al carrito.`) }

    const getProducts = () => new Promise((resolve, reject) => {
            return setTimeout( () => {
                resolve(Products);
        }, 2000);
    }); 


    useEffect( () => {
        setLoading(true)
        getProducts().then( (items) => {
            setItems(items)
        }).finally( () => {
            setLoading(false)
        })
    }, [])

    return (
         isLoading ? (
            <div className="container "> 
                Cargando..
            </div> ) 
            : (
                <div className="container "> 
                     Items List
                    <ItemList items={items} />
                    {/* <ItemCount stock="5" initial="0" onAdd={onAdd}/> */}
                </div> 
            ))
}

export default ItemListContainer