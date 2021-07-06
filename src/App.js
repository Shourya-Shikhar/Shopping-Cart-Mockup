import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import "react-toastify/dist/ReactToastify.css"
import {useState} from 'react'
import {ToastContainer,toast } from "react-toastify";
import BuyPage from "./Components/BuySec";
import Cart from "./Components/Cart";
import {Col, Container,Row} from "reactstrap";
function App() {
  const [cartItem,setCartItem]=useState([])
  const addItem = item => {
    const isAlreadyAdded = cartItem.findIndex(function(array){
      return array.id ===item.id
    })

    if(isAlreadyAdded !== -1){
      toast("Already added in the cart.",{
        type:"warning"
      });
      return;
    };

    setCartItem([...cartItem,item])
  }

  const buyNow = () =>{
    setCartItem([])
    toast("Purchase Completed",{type: "success"})
  }

  const removeItem = item => {
    setCartItem(cartItem.filter(singleItem=> singleItem.id !==item.id))
  }


  // const checkout = cartItem =>{
  //   const amount = cartIte
  // }

  return (
    <Container fluid>
     <ToastContainer/>
     <Row>
       <Col md="8" className="text-center">
         <BuyPage addInCart={addItem}/>
       </Col>
       <Col md ="4">
         <Cart cartItem={cartItem} removeItem={removeItem} buyNow={buyNow}/>
       </Col>
     </Row>
    </Container>
  );
}

export default App;
