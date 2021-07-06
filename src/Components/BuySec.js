import React,{useEffect,useState} from "react";
import Axios from "axios";


import {random,commerce,datatype} from "faker";
import {Col, Container,Row} from "reactstrap";
import CartItem from "./Catalogue";


// const apikey = "ENTER_YOUR_KEY_HERE";
// const url ="https://api.pexels.com/v1/search?query=laptop&per_page=10&page=2"
const localurl = "https://jsonware.com/json/3631f2ed0b38f18d32387d6c5c92c665.json"

const BuyPage =({addInCart}) => {
    const [product,setProduct] =useState([])

//     const fetchPhotos = async ()  =>{
//         const response = await Axios.get(url,{header:{
//             Authorization: apikey
//         }})
//     }
    
    const fetchPhotos = async ()  => {
        const { data } = await Axios.get(localurl);
        const {photos} = data;
        const allProduct = photos.map(photo=>({
            smallImage: photo.src.medium,
            tinyImage: photo.src.tiny,
            productName: random.word(),
            productPrice:commerce.price(),
            id:datatype.uuid()
        }));

        setProduct(allProduct);
    }

    useEffect(() => {
       fetchPhotos();
    }, [])

    return(
        <Container>
            <h1>
                Buy Page
            </h1>
            <Row>
                {product.map(product => (
                   <Col md="4" key={product.id}><CartItem product={product} addItem={addInCart}/></Col>
                ))}
            </Row>
        </Container>
    );
};
export default BuyPage

