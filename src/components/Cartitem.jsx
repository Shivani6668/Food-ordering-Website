import {
    swiggy_menu_api_URL,
    IMG_CDN_URL,
    ITEM_IMG_CDN_URL,
    MENU_ITEM_TYPE_KEY,
    RESTAURANT_TYPE_KEY,
  } from "../utils/contants"
const Cartitem = ({item}) =>{
return(
    <>
    <div className="cart">
        <div className="item">
        {item.map((data)=>(
            <div className="menu-item" key={data?.id}>
                <div className="menu-item-details">
                  <h3 className="item-title">{data?.name}</h3>
                  <p className="item-cost">
                    {data?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(data?.price / 100)
                      : " "}
                  </p>
                
                  <p className="item-desc">{data?.description}</p>
                </div>
                <div className="menu-img-wrapper">
                  {data?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN_URL + data?.imageId}
                      alt={data?.name}
                    />
                  )}
                </div>
              </div>
))}

        </div>
     
    </div>
    </>
)    
}
export default Cartitem