import { NavBar } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Hammer, PaintBucket, Truck, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ShopLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="flex flex-col min-h-screen">
			<header className="w-full px-4 lg:px-6 h-14 flex items-center justify-center bg-zinc-100 dark:bg-zinc-800">
				<div className="container flex items-center justify-between">
					<Link className="flex items-center justify-center" href="#">
						<Hammer className="h-6 w-6 mr-2" />
						<span className="font-bold">Ferretería Andina</span>
					</Link>

					{/* Search store route */}
					<form className="hidden sm:flex items-center space-x-2">
						<Input
							className="max-w-lg flex-1 bg-zinc-100 text-black "
							placeholder="Buscar..."
							type="text"
						/>
						<Button type="submit" className="hidden">
							Buscar
						</Button>
					</form>
					<NavBar />
				</div>
			</header>
			<div className="min-h-screen">{children}</div>
			<footer className="w-full py-6 bg-zinc-100 dark:bg-zinc-800 ">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
						<p className="text-xs text-zinc-500 dark:text-zinc-400">
							© 2024 Ferretería Andina. Todos los derechos reservados.
						</p>
						<nav className="flex gap-4 sm:gap-6">
							<Link
								className="text-xs hover:underline underline-offset-4"
								href="#"
							>
								Términos de Servicio
							</Link>
							<Link
								className="text-xs hover:underline underline-offset-4"
								href="#"
							>
								Privacidad
							</Link>
						</nav>
					</div>
				</div>
			</footer>
		</div>
	);
}
