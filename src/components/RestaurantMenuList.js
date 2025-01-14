import RestaurantItemCategory from "./RestaurantItemCategory";
import RestauranrNestedItemCategory from "./RestaurantNestedItemCategory";

const RestaurantMenuList = ({menu}) => {
return (
  <div className="flex flex-col lg:flex-row justify-between gap-6">
    <div className="flex-1 space-y-4">
      {menu.map((item, index)=> (
        <div key={index}>
          {item.categories ? (
            <RestauranrNestedItemCategory nestedCategory={item} />
          ) : (
            <RestaurantItemCategory itemCategory={item} /> 
          )}
        </div>
      ))}
    </div>
    <div className="w-full lg:w-1/3 bg-gray p-4 rounded-lg shadow-md"><h1>Cart Fallback</h1></div>
  </div>
);
};

export default RestaurantMenuList;