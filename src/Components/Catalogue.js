import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,Button} from 'reactstrap' 


const CartItem = ({product,addItem}) => {
    return(
        <Card className ="mt-2 mb-2">
            <CardImg top width="100%" height="200" src={product.smallImage}/>
            <CardTitle>{product.productName}</CardTitle>
            <CardText className="text-muted">Price:$ {product.productPrice}</CardText>
            <Button width="100%" color="warning" onClick={()=>addItem(product)}>Buy Now</Button>
        </Card>
    )
}

export default CartItem;