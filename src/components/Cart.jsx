import { useSelector } from "react-redux"
import Cartitem from "./Cartitem";

const Cart = () =>{
const cartItem = useSelector((store)=> store.cart.items)
// console.log(cartItem);

return (
    <>
<Cartitem item={cartItem}/>
    </>
)
}
export default Cart