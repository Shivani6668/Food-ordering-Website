import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem, removeSingle } from "../utils/slice/cartSlice";
import {
  swiggy_menu_api_URL,
  IMG_CDN_URL,
  ITEM_IMG_CDN_URL,
  MENU_ITEM_TYPE_KEY,
  RESTAURANT_TYPE_KEY,
} from "../utils/contants";
import { useEffect, useState } from "react";
import toast from 'react-hot-toast';
import { FaPlus, FaMinus } from "react-icons/fa6";


const Cartitem = ({ item }) => {
  const dispatch = useDispatch();
  const [totalprice,setTotalprice] = useState(0)
 const [totalqnty,setTotalqnty] = useState(0)

  const handleClearCart = () => {
    dispatch(clearCart());
    toast.success("Your Cart is Empty")
  };

  const inchandler = (e) => {
    dispatch(addItem(e));
  };

  const dechandler=(e)=>{
    dispatch(removeSingle(e))
    
  }

  const remove = (e) =>{
dispatch(removeItem(e))
toast.success("Item Remove from your Cart")
  }

  // count total price
const total = ()=>{
  let totalprice = 0
  item.map((ele,ind)=>{
    totalprice = ele.price * ele.qnty + totalprice
  })
  setTotalprice(totalprice)
}

useEffect(()=>{
total()
},[total])

// count total item
const quantity = () =>{
  let totalqnty = 0
  item.map((ele,ind)=>{
    totalqnty = ele.qnty + totalqnty
  })
  setTotalqnty(totalqnty)
}

useEffect(()=>{
quantity()
},[quantity])
  return (
    <>
<div className="small-container cart-page">
 
  <table>
    <tr>
      <th>Product</th>
      <th>Quantity</th>
      <th>Subtotal

        <button onClick={handleClearCart}>Empty Cart</button>
      </th>
    </tr>  
  
 
{item.length === 0 && <h1>Cart Empty. Add Items to the Cart</h1>}
  
  {item.map((data)=>(
    <tr key={data?.id}>
      <td>
        <div className="cart-info">
         
          {data?.imageId && (
                    <img
                      classNameName="menu-item-img"
                      src={ITEM_IMG_CDN_URL + data?.imageId}
                      alt={data?.name}
                    />
                    
                  )}
          <div>
            <p>{data?.name}</p>
            <small>Price ₹{data?.price/100}</small>
            <br />
            <a className="remove" onClick={()=> remove(data.id)}>Remove</a>
          </div>
        </div>
      </td>
      <td> 
     <FaMinus className="remove" onClick={ data.qnty <1 ? remove(data.id) :()=> dechandler(data)}/>
        <input type="text" value={data?.qnty} disabled />
        <FaPlus className="remove" onClick={()=> inchandler(data)}/>
        </td>
      <td>₹{data?.qnty *  data?.price/100 }</td>
    </tr>
  ))}
    
    
    
      </table>

  <div className="total-price">
    <table>
      <tr>
        <td>Total Item</td>
        <td>{totalqnty}</td>
      </tr>
            <tr>
        <td>Total Amount</td>
        <td>₹{totalprice/100}</td>
      </tr>
    
      
    </table>
  </div>
</div>





 


    </>
  );
};
export default Cartitem;
