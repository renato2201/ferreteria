// "use client";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { Slider } from "@/components/ui/slider";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Card, CardContent, CardFooter } from "@/components/ui/card";
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from "@/components/ui/select";
// import {
// 	Sheet,
// 	SheetContent,
// 	SheetDescription,
// 	SheetHeader,
// 	SheetTitle,
// 	SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";
// import Image from "next/image";

import type { Product } from "@/interfaces/productsInterface";
import { ProductGridItem } from "./ProductGridItem";

// export const ShopGrid = ({ fetchedProducts, categories, brands }: Props) => {
// 	const [products, setProducts] = useState(fetchedProducts);
// 	const [priceRange, setPriceRange] = useState([0, 100]);
// 	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
// 	const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
// 	const [currentPage, setCurrentPage] = useState(1);
// 	const productsPerPage = 8;

// 	const filteredProducts = products.filter(
// 		(product) =>
// 			product.price >= priceRange[0] &&
// 			product.price <= priceRange[1] &&
// 			(selectedCategories.length === 0 ||
// 				selectedCategories.includes(product.category)) &&
// 			(selectedBrands.length === 0 || selectedBrands.includes(product.brand)),
// 	);

// 	const indexOfLastProduct = currentPage * productsPerPage;
// 	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
// 	const currentProducts = filteredProducts.slice(
// 		indexOfFirstProduct,
// 		indexOfLastProduct,
// 	);

// 	const pageNumbers = [];
// 	for (
// 		let i = 1;
// 		i <= Math.ceil(filteredProducts.length / productsPerPage);
// 		i++
// 	) {
// 		pageNumbers.push(i);
// 	}

// 	const Filters = () => (
// 		<div className="space-y-6">
// 			<div>
// 				<h3 className="text-lg font-semibold mb-2">Precio</h3>
// 				<Slider
// 					min={0}
// 					max={100}
// 					step={1}
// 					value={priceRange}
// 					onValueChange={setPriceRange}
// 				/>
// 				<div className="flex justify-between mt-2">
// 					<span>${priceRange[0]}</span>
// 					<span>${priceRange[1]}</span>
// 				</div>
// 			</div>
// 			<div>
// 				<h3 className="text-lg font-semibold mb-2">Categorías</h3>
// 				{categories.map((category) => (
// 					<div key={category.id} className="flex items-center space-x-2 mb-2">
// 						<Checkbox
// 							id={category.category_name}
// 							checked={selectedCategories.includes(category.category_name)}
// 							onCheckedChange={(checked) => {
// 								setSelectedCategories(
// 									checked
// 										? [...selectedCategories, category.category_name]
// 										: selectedCategories.filter(
// 												(c) => c !== category.category_name,
// 											),
// 								);
// 							}}
// 						/>
// 						<Label htmlFor={category.category_name}>
// 							{category.category_name}
// 						</Label>
// 					</div>
// 				))}
// 			</div>
// 			<div>
// 				<h3 className="text-lg font-semibold mb-2">Marcas</h3>
// 				{brands.map((brand) => (
// 					<div
// 						key={brand.brand_name}
// 						className="flex items-center space-x-2 mb-2"
// 					>
// 						<Checkbox
// 							id={brand.brand_name}
// 							checked={selectedBrands.includes(brand.brand_name)}
// 							onCheckedChange={(checked) => {
// 								setSelectedBrands(
// 									checked
// 										? [...selectedBrands, brand.brand_name]
// 										: selectedBrands.filter((b) => b !== brand.brand_name),
// 								);
// 							}}
// 						/>
// 						<Label htmlFor={brand.brand_name}>{brand.brand_name}</Label>
// 					</div>
// 				))}
// 			</div>
// 		</div>
// 	);

// 	return (
// 		<div className="container mx-auto px-4 py-8">
// 			<h1 className="text-3xl font-bold mb-8">Nuestra Tienda</h1>
// 			<div className="flex flex-col md:flex-row gap-8">
// 				<aside className="w-full md:w-1/4">
// 					<div className="hidden md:block">
// 						<Filters />
// 					</div>
// 					<div className="md:hidden">
// 						<Sheet>
// 							<SheetTrigger asChild>
// 								<Button variant="outline" className="w-full mb-4">
// 									<Menu className="mr-2 h-4 w-4" /> Filtros
// 								</Button>
// 							</SheetTrigger>
// 							<SheetContent>
// 								<SheetHeader>
// 									<SheetTitle>Filtros</SheetTitle>
// 									<SheetDescription>
// 										Ajusta los filtros para encontrar los productos que buscas.
// 									</SheetDescription>
// 								</SheetHeader>
// 								<Filters />
// 							</SheetContent>
// 						</Sheet>
// 					</div>
// 				</aside>
// 				<main className="w-full md:w-3/4">
// 					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
// 						{currentProducts.map((product) => (
// 							<Card key={product.id}>
// 								<CardContent className="p-4">
// 									<Image
// 										src={product.image}
// 										alt={product.name}
// 										width={300}
// 										height={200}
// 										className="w-full h-48 object-cover mb-4 rounded"
// 									/>
// 									<h3 className="font-semibold mb-2">{product.name}</h3>
// 									<p className="text-sm text-gray-600 mb-2">
// 										{product.category}
// 									</p>
// 									<p className="text-sm text-gray-600 mb-2">{product.brand}</p>
// 									<p className="font-bold">${product.price}</p>
// 								</CardContent>
// 								<CardFooter>
// 									<Button className="w-full">Agregar al carrito</Button>
// 								</CardFooter>
// 							</Card>
// 						))}
// 					</div>
// 					<div className="mt-8 flex justify-center">
// 						<nav>
// 							<ul className="flex space-x-2">
// 								{pageNumbers.map((number) => (
// 									<li key={number}>
// 										<Button
// 											variant={currentPage === number ? "default" : "outline"}
// 											onClick={() => setCurrentPage(number)}
// 										>
// 											{number}
// 										</Button>
// 									</li>
// 								))}
// 							</ul>
// 						</nav>
// 					</div>
// 				</main>
// 			</div>
// 		</div>
// 	);
// };

interface Props {
	products: Product[];
}
export const ProductGrid = ({ products }: Props) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Grid Responsive de Items
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{products.map((product) => (
					<ProductGridItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
