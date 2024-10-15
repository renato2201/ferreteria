"use client";
import type { Product } from "@/interfaces/productsInterface";
import { ProductGrid } from "./ProductGrid";
import { useState } from "react";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../ui/card";

import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Checkbox } from "../ui/checkbox";
import { Menu } from "lucide-react";

interface Props {
	products: Product[];
}

export const FilteredProducts = ({ products }: Props) => {
	const [filteredProducts, setFilteredProducts] = useState(products);
	const [priceRange, setPriceRange] = useState([0, 100]);
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [isFilterVisible, setIsFilterVisible] = useState(false);

	const handleFilter = () => {
		const filtered = products.filter((product) => {
			const inPriceRange =
				product.price >= priceRange[0] && product.price <= priceRange[1];
			const inCategory =
				selectedCategories.length === 0 ||
				selectedCategories.includes(product.category);
			return inPriceRange && inCategory;
		});
		setFilteredProducts(filtered);
		setIsFilterVisible(false); // Hide filter after applying on mobile
	};

	const toggleFilterVisibility = () => {
		setIsFilterVisible(!isFilterVisible);
	};

	console.log(filteredProducts);

	return (
		<>
			<div className="md:hidden mb-4">
				<Button onClick={toggleFilterVisibility} className="w-full">
					<Menu className="mr-2 h-4 w-4" />{" "}
					{isFilterVisible ? "Hide Filters" : "Show Filters"}
				</Button>
			</div>
			<div className="flex flex-col md:flex-row gap-8 ">
				<div
					className={`w-full md:w-1/4 ${isFilterVisible ? "block" : "hidden md:block"}`}
				>
					<Card>
						<CardHeader>
							<CardTitle>Filters</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="space-y-4">
								<div>
									<h3 className="text-lg font-semibold mb-2">Price Range</h3>
									<Slider
										min={0}
										max={100}
										step={1}
										value={priceRange}
										onValueChange={setPriceRange}
									/>
									<div className="flex justify-between mt-2">
										<span>${priceRange[0]}</span>
										<span>${priceRange[1]}</span>
									</div>
								</div>
								<div>
									<h3 className="text-lg font-semibold mb-2">Categories</h3>
									{["Electronics", "Clothing", "Home"].map((category) => (
										<div key={category} className="flex items-center space-x-2">
											<Checkbox
												id={category}
												checked={selectedCategories.includes(category)}
												onCheckedChange={(checked) => {
													setSelectedCategories(
														checked
															? [...selectedCategories, category]
															: selectedCategories.filter(
																	(c) => c !== category,
																),
													);
												}}
											/>
											<label htmlFor={category}>{category}</label>
										</div>
									))}
								</div>
							</div>
						</CardContent>
						<CardFooter>
							<Button onClick={handleFilter} className="w-full">
								Apply Filters
							</Button>
						</CardFooter>
					</Card>
				</div>
				<ProductGrid products={products} />
			</div>
		</>
	);
};
