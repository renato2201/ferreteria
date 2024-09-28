import Link from "next/link";
import React from "react";
import { NavBarItem } from "./NavBarItem";

const navItems = [
	{ name: "Inicio", href: "/" },
	{ name: "Tienda", href: "/tienda" },
	{ name: "Categorias", href: "/categorias" },
	{ name: "Servicios", href: "/servicios" },
];

export const NavBar = () => {
	return (
		<nav className="flex gap-4 sm:gap-6">
			{navItems.map((item) => (
				<NavBarItem key={item.name} {...item} />
			))}
		</nav>
	);
};
