import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import MenuItem from "./MenuItem";

const RestaurantItemCategory = ({itemCategory}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => {
      setIsVisible(!isVisible);
  };

return (
  <div className="border-b py-4">
    <div className="RestaurantItemCategory-div1 flex justify-between items-center">
      <h1 
      className="text-lg font-semibold cursor-pointer" 
      onClick={toggleView}
      >
      {itemCategory?.title} ({itemCategory?.itemCards?.length})
      </h1>
      {isVisible ? (
        <SlArrowUp className="cursor-pointer" onClick={toggleView}/>
      ) : (
        <SlArrowDown className="cursor-pointer" onClick={toggleView}/>
      )}
    </div>
    {isVisible && (
      <div className="RestaurantItemCategory-div2 mt-3 space-y-4">
        {itemCategory?.itemCards?.map((item) => (
          <MenuItem key={item.id} item={item.card.info}/>
        ))}
      </div>
    )}
  </div>
)
};

export default RestaurantItemCategory;