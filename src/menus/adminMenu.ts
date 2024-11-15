import {
	Home,
	ShoppingCart,
	MessageSquare,
	Users,
	Settings, List,
} from "lucide-react";

export const adminMenu = [
	{ icon: Home, label: "Dashboard", href: "/admin" },
	{ icon: ShoppingCart, label: "Ventas", href: "/admin/ventas" },
	{ icon: List, label: "Productos", href: "/admin/productos" },
	{ icon: MessageSquare, label: "Reclamos", href: "/admin/reclamos" },
	{ icon: Users, label: "Usuarios", href: "/admin/usuarios" },
	{ icon: Settings, label: "Configuración", href: "/admin/configuracion" },
];
