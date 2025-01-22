import RestaurantItemCategory from "./RestaurantItemCategory";
import RestauranrNestedItemCategory from "./RestaurantNestedItemCategory";

const RestaurantMenuList = ({menu}) => {
return (
  <div className="RestaurantMenuList flex justify-center sm:flex-col xsm:flex-col mob:flex-col">
    <div className="RestaurantMenuList-div1 mt-7 xl:w-[70%] lg:w-[70%] md:w-[70%]">
      {menu.map((item, index)=> (
        <div className="RestaurantMenuList-div1-map" key={index}>
          {item.categories ? (
            <RestauranrNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} /> 
          )}
        </div>
      ))}
    </div>
    <div className="RestaurantMenuList-div2  p-4 rounded-lg shadow-md w-[350px]"><h1>Cart Fallback</h1></div>
  </div>
);
};

export default RestaurantMenuList;