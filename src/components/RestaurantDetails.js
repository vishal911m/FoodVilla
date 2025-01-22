import { useParams } from "react-router";
import Shimmer from "./Shimmer";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenuList from "./RestaurantMenuList";
import useRestaurant1 from "../utils/useRestaurant1";

const RestaurantDetails = () => {
  const {id} = useParams();
  const restaurant = useRestaurant1(id);

  return !restaurant ? (
    <Shimmer /> 
  ) : (
    <div className="RestaurantDetails">
      <RestaurantInfo {...restaurant.info} />
      <RestaurantMenuList menu={restaurant.menu} />
    </div>
  );
};

export default RestaurantDetails;