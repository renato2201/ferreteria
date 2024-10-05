"use client";
import { adminMenu } from "@/app/menus/adminMenu";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const AdminSideBar = () => {
	const pathname = usePathname();
	return (
		<div className="hidden lg:flex min-h-screen">
			<aside className="pb-12 w-64">
				<ScrollArea className="h-full py-6 px-3">
					<nav className="space-y-2">
						{adminMenu.map((item) => (
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
	);
};
