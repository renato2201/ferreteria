import { ShopMenu } from "@/menus/shopMenu";
import { NavBarItem } from "./NavBarItem";

export const NavBar = () => {
	return (
		<nav className="hidden md:flex gap-4 sm:gap-6 ">
			{ShopMenu.map((item) => (
				<NavBarItem key={item.name} {...item} />
			))}
		</nav>
	);
};
