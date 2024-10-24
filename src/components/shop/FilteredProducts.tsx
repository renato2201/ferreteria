"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import Image from "next/image";
import type { Product } from "@/interfaces/productsInterface";

import { DualRangeSlider } from "../ui/dual-range-slider";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
	products: Product[];
	categories: string[];
}

export function FilteredProducts({ products, categories }: Props) {
	const [selectedCategory, setSelectedCategory] = useState("Todas");
	const [priceRange, setPriceRange] = useState([0, 150]);
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 8;

	const filteredProducts = products.filter(
		(product) =>
			(selectedCategory === "Todas" || product.category === selectedCategory) &&
			product.price >= priceRange[0] &&
			product.price <= priceRange[1],
	);

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const currentProducts = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct,
	);

	const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

	const handlePageChange = (pageNumber: number) => {
		setCurrentPage(pageNumber);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	useEffect(() => {
		setCurrentPage(1);
	}, [selectedCategory, priceRange]);

	return (
		<div className="lg:p-8 p-3 " id="top">
			<div className="flex flex-col lg:flex-row gap-2 lg:gap-6 mb-8 lg:w-5/6 lg:mx-auto">
				<div className="w-full  space-y-4 lg:basis-1/4">
					<div>
						<Label htmlFor="category" className="text-lg">
							Categoría
						</Label>
						<Select
							value={selectedCategory}
							onValueChange={setSelectedCategory}
						>
							<SelectTrigger id="category">
								<SelectValue placeholder="Selecciona una categoría" />
							</SelectTrigger>
							<SelectContent>
								{categories.map((category) => (
									<SelectItem key={category} value={category}>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>

					<div>
						<Label>Rango de Precio</Label>
						<DualRangeSlider
							min={0}
							max={150}
							step={1}
							value={priceRange}
							onValueChange={setPriceRange}
							className="mt-2"
						/>
						<div className="flex justify-between mt-2">
							<span>${priceRange[0]}</span>
							<span>${priceRange[1]}</span>
						</div>
					</div>
				</div>

				<div className="w-full ">
					{filteredProducts.length > 0 && (
						<div className="flex justify-center items-center space-x-2 mt-8">
							<Button
								variant="outline"
								size="icon"
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
							>
								<ChevronLeft className="h-4 w-4" />
							</Button>
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => (
									<Button
										key={page}
										variant={currentPage === page ? "default" : "outline"}
										onClick={() => handlePageChange(page)}
									>
										{page}
									</Button>
								),
							)}
							<Button
								variant="outline"
								size="icon"
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}
							>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</div>
					)}
					<div className="grid grid-cols-2  lg:grid-cols-3 gap-2 lg:gap-6 my-2">
						{currentProducts.map((product) => (
							<Card key={product.id} className="flex flex-col h-full">
								<CardContent className="p-4 flex-grow">
									<div className="aspect-square relative mb-4">
										<Image
											src={product.image}
											alt={product.name}
											layout="fill"
											objectFit="cover"
											className="rounded"
										/>
									</div>
									<h2 className="text-lg font-semibold mb-2">{product.name}</h2>
									<p className="text-gray-600 mb-2">{product.category}</p>
									<p className="text-sm text-gray-500 mb-2 line-clamp-3">
										{product.description}
									</p>
									<p className="font-bold">S/.{product.price}</p>
								</CardContent>
								<CardFooter className="p-4">
									<Button className="w-full text-xs lg:text-sm ">
										Agregar al carrito
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>

					{filteredProducts.length === 0 && (
						<p className="text-center text-gray-500 mt-8">
							No se encontraron productos que coincidan con los filtros
							seleccionados.
						</p>
					)}
					{filteredProducts.length > 0 && (
						<div className="flex justify-center items-center space-x-2 mt-8">
							<Button
								variant="outline"
								size="icon"
								onClick={() => handlePageChange(currentPage - 1)}
								disabled={currentPage === 1}
							>
								<ChevronLeft className="h-4 w-4" />
							</Button>
							{Array.from({ length: totalPages }, (_, i) => i + 1).map(
								(page) => (
									<Button
										key={page}
										variant={currentPage === page ? "default" : "outline"}
										onClick={() => handlePageChange(page)}
									>
										{page}
									</Button>
								),
							)}
							<Button
								variant="outline"
								size="icon"
								onClick={() => handlePageChange(currentPage + 1)}
								disabled={currentPage === totalPages}
							>
								<ChevronRight className="h-4 w-4" />
							</Button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
