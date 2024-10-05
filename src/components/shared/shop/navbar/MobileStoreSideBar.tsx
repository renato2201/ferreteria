"use client";
import { mobileShopMenu, ShopMenu } from "@/app/menus/shopMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";

import { Label } from "@radix-ui/react-label";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
export const MobileStoreSideBar = () => {
	const pathname = usePathname();
	return (
		<div className="md:hidden">
			<Sheet>
				<SheetTrigger asChild>
					<Button variant="ghost">
						<Menu />
					</Button>
				</SheetTrigger>
				<SheetContent className="w-64 p-0">
					<ScrollArea className="h-full py-6 px-3">
						<nav className="space-y-2">
							{mobileShopMenu.map((item) => (
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
				</SheetContent>
			</Sheet>
		</div>
	);
};
