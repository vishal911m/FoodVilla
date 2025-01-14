import { useState } from "react";
import { useDispatch } from "react-redux";

const MenuItem = ({item}) => {
  const {name, id, description, price, defaultPrice, imageId} = item;
  const [itemCount, setItemCount] = useState(0);
  const dispatch = useDispatch()

  const handleAddItem = (item) => {
    dispatch(addItem(item));
    setItemCount(itemCount + 1);
  };

  const handleDeleteItem = (id) => {
    let updatedCount;
    dispatch(removeItem(id));
    updatedCount = itemCount > 0 ? itemCount -1 : 0 ;
    setItemCount(updatedCount);
  };

  const displayPrice = price > 0 ? price : defaultPrice ;

 return (
  <div className="p-4 border rounded-lg shadow-sm flex flex-col md:flex-row justify-between" 
  key={id}>
    <div className="flex-1">
      <h3 className="font-bold text-lg">{name}</h3>
      <p className="text-lg font-bold">{displayPrice > 0 ? "₹ " + displayPrice/100 : ""} {" "}</p>
      <p className="text-sm ">{description}</p>
    </div>

  </div>
 );
};

export default MenuItem;