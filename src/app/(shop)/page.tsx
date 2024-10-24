import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, Wrench, PaintBucket, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { MainPageSlider } from "@/components";

export const metadata = {
	title: "Ferreteria Andina | Inicio",
	description:
		"Ferreteria Andina es tu ferretería de confianza. Encuentra todo lo que necesitas para tus proyectos de construcción y reparación.",
};

export default function FerreteriaLanding() {
	return (
		<main className="flex-1">
			<section className="w-full py-12 md:py-24 lg:py-32 xl:py-20 bg-[url('/placeholder.svg')] bg-cover bg-center">
				<div className="container px-4 md:px-6 mx-auto">
					{/* <div className="flex flex-col items-center space-y-4 text-center">
						<div className="flex flex-col items-center space-y-4 text-center">
							<div className="space-y-2">
								<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
									Tu Ferretería de Confianza
								</h1>
								<p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
									Encuentra todo lo que necesitas para tus proyectos de
									construcción y reparación.
								</p>
							</div>
							<div className="space-x-4">
								<Button asChild>
									<Link href={"/tienda"}>Explorar tienda</Link>
								</Button>
								<Button variant="outline">Ver Servicios</Button>
							</div>
						</div>
					</div> */}
					<MainPageSlider />
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100">
				<div className="container md:px-6 mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Nuestros Productos
					</h2>
					<div className="px-8 md:px-36">
						<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
							{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
								<Card key={item}>
									<CardContent className="p-4">
										<Image
											src={`/placeholder.svg?height=200&width=300`}
											alt={`Producto ${item}`}
											className="rounded-lg object-cover w-full h-48 mb-4"
											width={300}
											height={200}
										/>
										<h3 className="text-xl font-bold mb-2">Producto {item}</h3>
										<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
											Descripción breve del producto y sus características
											principales.
										</p>
										<Button className="w-full">Ver Detalles</Button>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>
			<section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
				<div className="container px-4 md:px-6 mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Nuestros Servicios
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<Wrench className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Herramientas de Calidad</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Amplia selección de herramientas profesionales para todo tipo
									de trabajos.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<PaintBucket className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Pinturas y Acabados</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Gran variedad de pinturas y productos para acabados perfectos.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<Truck className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Entrega a Domicilio</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Servicio de entrega rápido y confiable para tu comodidad.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<Hammer className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Asesoría Experta</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Personal capacitado para ayudarte en todos tus proyectos.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
				<div className="flex justify-center mt-10">
					<Button>Explorar servicios</Button>
				</div>
			</section>
			{/* <section className="w-full py-12 md:py-24 lg:py-32 bg-zinc-100 dark:bg-zinc-800">
				<div className="container px-4 md:px-6 mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Lo que dicen nuestros clientes
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{[1, 2, 3].map((item) => (
							<Card key={item}>
								<CardContent className="p-6">
									<p className="text-sm text-zinc-500 dark:text-zinc-400 mb-4">
										"Excelente servicio y productos de calidad. Siempre
										encuentro lo que necesito para mis proyectos."
									</p>
									<p className="font-semibold">Cliente Satisfecho {item}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section> */}
			{/* <section className="w-full py-12 md:py-24 lg:py-32">
				<div className="container px-4 md:px-6 mx-auto">
					<div className="flex flex-col items-center space-y-4 text-center">
						<div className="space-y-2">
							<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
								Mantente Informado
							</h2>
							<p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
								Suscríbete para recibir nuestras ofertas y novedades.
							</p>
						</div>
						<div className="w-full max-w-sm space-y-2">
							<form className="flex space-x-2">
								<Input
									className="max-w-lg flex-1"
									placeholder="Ingresa tu correo electrónico"
									type="email"
								/>
								<Button type="submit">Suscribirse</Button>
							</form>
						</div>
					</div>
				</div>
			</section> */}
			<section className="w-full py-5 md:py-8 lg:py-12 bg-zinc-100">
				<div className="container px-4 md:px-6 mx-auto">
					<h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
						Productos en descuento
					</h2>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<Wrench className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Herramientas de Calidad</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Amplia selección de herramientas profesionales para todo tipo
									de trabajos.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<PaintBucket className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Pinturas y Acabados</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Gran variedad de pinturas y productos para acabados perfectos.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<Truck className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Entrega a Domicilio</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Servicio de entrega rápido y confiable para tu comodidad.
								</p>
							</CardContent>
						</Card>
						<Card>
							<CardContent className="flex flex-col items-center space-y-2 p-6">
								<Hammer className="h-12 w-12 mb-2" />
								<h3 className="text-xl font-bold">Asesoría Experta</h3>
								<p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
									Personal capacitado para ayudarte en todos tus proyectos.
								</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
		</main>
	);
}
