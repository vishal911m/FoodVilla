import React from "react";
import { NavLink } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const CartFallback = ({ text, btnText }) => {
	return (
		<div className="flex flex-col justify-center items-center">
			<img src={LOGO_URL} alt="" className="h-[200px] w-[200px]" />
			<h2 className="px-14 pt-8 my-4">{text}</h2>
			{btnText && (
				<NavLink to="/">
					<button className="bg-yellow px-4 py-2 text-blue-dark hover:drop-shadow-lg backdrop-blur">
						{btnText}
					</button>
				</NavLink>
			)}
		</div>
	);
};

export default CartFallback;