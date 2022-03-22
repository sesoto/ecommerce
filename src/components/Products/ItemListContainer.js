import ItemCount from './ItemCount';

const ItemListContainer = (props) => {

    const {title,price,size,stock} = props

    // const onAdd = () => {
    //     console.log("hola")
    // }

    return (
        <div className="container ">
            Items List
            <ItemCount stock="5" initial="0" />
      </div>
    )
}

export default ItemListContainer