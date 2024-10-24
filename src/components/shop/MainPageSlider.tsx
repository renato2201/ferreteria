"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const images = [
	"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
	"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
	"https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
	"https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
];

export const MainPageSlider = () => {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				loop={true}
				autoplay={{
					delay: 3500,
					disableOnInteraction: true,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Navigation, Autoplay]}
			>
				{images.map((image) => (
					<SwiperSlide key={image}>
						<Image
							src={image}
							alt="slide"
							width={200}
							height={500}
							className="w-full h-96 object-contain"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="flex flex-col items-center mt-5 text-center ">
				<div className="space-y-2">
					<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
						Tu Ferretería de Confianza
					</h1>
					<p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
						Encuentra todo lo que necesitas para tus proyectos de construcción y
						reparación.
					</p>
					<div className="space-x-4">
						<Button asChild>
							<Link href={"/tienda"}>Explorar tienda</Link>
						</Button>
						<Button variant="outline">Ver Servicios</Button>
					</div>
				</div>
			</div>
		</>
	);
};
