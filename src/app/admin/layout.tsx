"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import {
	Bell,
	Home,
	Menu,
	MessageSquare,
	Settings,
	ShoppingCart,
	User,
	Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
	{ icon: Home, label: "Dashboard", href: "/admin" },
	{ icon: ShoppingCart, label: "Productos", href: "/admin/productos" },
	{ icon: MessageSquare, label: "Reclamos", href: "/admin/reclamos" },
	{ icon: Users, label: "Usuarios", href: "/admin/usuarios" },
	{ icon: Settings, label: "Configuración", href: "/admin/configuracion" },
];

export default function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	return (
		<div className="">
			{/* Header */}
			<header className="w-full bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between ">
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
				<div className="flex items-center space-x-4">
					<Avatar>
						<AvatarImage
							src="/placeholder.svg?height=32&width=32"
							alt="Pablo Garza"
						/>
						<AvatarFallback>PG</AvatarFallback>
					</Avatar>
					<div>
						<h2 className="text-sm font-semibold">Pablo Garza</h2>
						<p className="text-xs text-gray-500">Administrator</p>
					</div>
				</div>
				<div className="flex items-center space-x-4">
					<button className="p-2 hover:bg-gray-100 rounded-full" type="button">
						<Bell className="h-5 w-5 text-gray-600" />
					</button>
					<button className="p-2 hover:bg-gray-100 rounded-full" type="button">
						<User className="h-5 w-5 text-gray-600" />
					</button>
				</div>
			</header>
			<div className="flex min-h-screen">
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
				<div className="w-full p-5 bg-slate-200 ">{children}</div>
			</div>
		</div>
	);
}
