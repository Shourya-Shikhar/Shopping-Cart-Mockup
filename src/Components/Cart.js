import React from 'react';
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    CardBody,
    CardHeader,
    Card,
    CardFooter,
    Col,Row
} from 'reactstrap';

const Cart=({cartItem,removeItem,buyNow})=>{
    let amount = 0 ;
    cartItem.forEach(item=>{
        amount+=parseFloat(item.productPrice)
    })
    return(
        <Container fluid>
            <h1>Your Cart</h1>
            <ListGroup className="mt-3">
                {cartItem.map(item => (
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                            <img height="80" src={item.tinyImage}/>
                            </Col>
                            <Col className="text-left">
                                {item.productName}
                                <span>Price:${item.productPrice}</span>
                                <Button color="danger" onClick={()=>removeItem(item)}>Remove Item</Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
            {/* If the cart is empty */}
            {
                cartItem.length>=1?(
                    <Card className="text-center mt-3">
                        <CardHeader className="text-center text-primary">Grand Total</CardHeader>
                        <CardBody>
                            Your amount for {cartItem.length} product is ${amount}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={buyNow}>Pay Now</Button>
                        </CardFooter>
                    </Card>
                ):(
                    <h1 className="text-primary">Cart is Empty</h1>
                )
            }
        </Container>
    )


}


export default Cart;