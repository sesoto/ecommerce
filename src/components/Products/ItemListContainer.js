import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const {title,price,size,stock} = props
    const onAdd = (count) => { console.log(`Agregaste ${count} productos al carrito.`) }


    return (
        <div className="container ">
            Items List
            <ItemCount stock="5" initial="0" onAdd={onAdd}/>
      </div>
    )
}

export default ItemListContainer