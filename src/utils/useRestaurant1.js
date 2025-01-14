import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurant1 = (id) => {
 const [restaurant, setRestaurant] = useState(null);

 useEffect(()=> {
  getRestaurantData();
 },[]);

 const getRestaurantData = async() => {
  
  try {
    const response = await fetch(MENU_API_URL + id);
  const res_data = await response.json();
  console.log("API response: ", res_data);
  const info = res_data.data.cards[2].card.card.info;
  const menuItemsList = res_data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  console.log("Info", info);
  console.log("Menu", menuItemsList);
  const ITEM_CATEGORY = "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
  const NESTED_ITEM_CATEGORY = "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory";

  const menu = menuItemsList.map((item) => {
    if((item.card.card["@type"] === ITEM_CATEGORY) || (item.card.card["@type"] === NESTED_ITEM_CATEGORY)) {
      return item.card.card;
    }
 });

 const modifiedData = {
  info: res_data.data.cards[2].card.card.info,
  menu: menu.filter(value => value !== undefined),
  menu1: menu,
 };
 setRestaurant(modifiedData); 
 } catch (error) {
    console.error(error)
  };
};

 useEffect(()=> {
  console.log("Restaurant:", restaurant);
 },[restaurant])

 return restaurant;
};

export default useRestaurant1;