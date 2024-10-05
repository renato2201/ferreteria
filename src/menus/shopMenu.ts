import { Home, ShoppingCart, MessageSquare, Users } from "lucide-react";

export const ShopMenu = [
	{ name: "Inicio", href: "/" },
	{ name: "Tienda", href: "/tienda" },
	{ name: "Categorias", href: "/categorias" },
	{ name: "Servicios", href: "/servicios" },
];

export const mobileShopMenu = [
	{ icon: Home, label: "Inicio", href: "/" },
	{ icon: ShoppingCart, label: "Tienda", href: "/tienda" },
	{ icon: MessageSquare, label: "Categorias", href: "/categorias" },
	{ icon: Users, label: "Servicios", href: "/servicios" },
];
