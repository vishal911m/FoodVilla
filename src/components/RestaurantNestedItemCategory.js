import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({nestedCategory}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="border-b border-gray py-4">
      <h3 
      className="RestaurantNestedItemCategory-div1 text-xl font-bold cursor-pointer flex justify-between items-center" 
      onClick={toggleView}
      >
        {nestedCategory.title}
        {isVisible ? (
        <SlArrowUp onClick={toggleView} className="cursor-pointer "/>
      ) : (
        <SlArrowDown onClick={toggleView} className="cursor-pointer"/> 
      )}
      </h3> 
      {isVisible && (
      <div className="RestaurantNestedItemCategory-div2 pl-4 mt-2 space-y-3">
        {nestedCategory.categories.map((category, index)=> (
          <div key={index}>
            <RestaurantItemCategory itemCategory={category} />
          </div>
        ))}
      </div>
    )}    
    </div>
);
};

export default RestaurantNestedItemCategory;