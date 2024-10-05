"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	Home,
	ShoppingCart,
	Users,
	Settings,
	Menu,
	MessageSquare,
} from "lucide-react";

const menuItems = [
	{ icon: Home, label: "Dashboard", href: "/admin" },
	{ icon: ShoppingCart, label: "Productos", href: "/admin/productos" },
	{ icon: MessageSquare, label: "Reclamos", href: "/admin/reclamos" },
	{ icon: Users, label: "Usuarios", href: "/admin/usuarios" },
	{ icon: Settings, label: "Configuración", href: "/admin/configuracion" },
];

export function Sidebar() {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<>
			{/* Desktop Sidebar */}
			<div className="hidden lg:flex min-h-screen">
				<aside className="pb-12 w-64">
					<ScrollArea className="h-full py-6 px-3">
						<nav className="space-y-2">
							{menuItems.map((item) => (
								<Button
									key={item.href}
									asChild
									variant={pathname === item.href ? "default" : "ghost"}
									className="w-full justify-start"
								>
									<Link href={item.href}>
										<item.icon className="mr-2 h-4 w-4" />
										{item.label}
									</Link>
								</Button>
							))}
						</nav>
					</ScrollArea>
				</aside>
			</div>

			{/* Mobile Sidebar */}
			<Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
				<SheetTrigger asChild>
					<Button variant="ghost" className="lg:hidden" size="icon">
						<Menu />
						<span className="sr-only">Toggle Menu</span>
					</Button>
				</SheetTrigger>
				<SheetContent side="left" className="w-64 p-0">
					<ScrollArea className="h-full py-6 px-3">
						<nav className="space-y-2">
							{menuItems.map((item) => (
								<Button
									key={item.href}
									asChild
									variant={pathname === item.href ? "default" : "ghost"}
									className="w-full justify-start"
									onClick={() => setIsMobileMenuOpen(false)}
								>
									<Link href={item.href}>
										<item.icon className="mr-2 h-4 w-4" />
										{item.label}
									</Link>
								</Button>
							))}
						</nav>
					</ScrollArea>
				</SheetContent>
			</Sheet>
		</>
	);
}
