"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";
import type { Product } from "@/interfaces/productsInterface";

interface Props {
	initialProducts: Product[];
}

export const ProductsTable = ({ initialProducts }: Props) => {
	const [products, setProducts] = useState(initialProducts);
	const [searchTerm, setSearchTerm] = useState("");
	const [currentPage, setCurrentPage] = useState(1);
	const productsPerPage = 5;

	const indexOfLastProduct = currentPage * productsPerPage;
	const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
	const filteredProducts = products.filter(
		(product) =>
			product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.category.toLowerCase().includes(searchTerm.toLowerCase()),
	);
	const productsActuales = filteredProducts.slice(
		indexOfFirstProduct,
		indexOfLastProduct,
	);

	const pageNumbers = [];
	for (
		let i = 1;
		i <= Math.ceil(filteredProducts.length / productsPerPage);
		i++
	) {
		pageNumbers.push(i);
	}

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(event.target.value);
	};

	const handleCreateProduct = () => {
		// Implement create product functionality
		console.log("Create product clicked");
	};

	const handleEditProduct = (id: number) => {
		// Implement edit product functionality
		console.log(`Edit product with id: ${id}`);
	};

	const handleDeleteProduct = (id: number) => {
		// Implement delete product functionality
		console.log(`Delete product with id: ${id}`);
	};
	return (
		<>
			<div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
				<Input
					className="w-full sm:w-96"
					placeholder="Buscar por nombre, precio o categoría"
					value={searchTerm}
					onChange={handleSearch}
				/>
				<Link href="/admin/producto/crear">
					<Button>CREAR PRODUCTO</Button>
				</Link>
			</div>
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Nombre</TableHead>
							<TableHead>Precio</TableHead>
							<TableHead>Categoría</TableHead>
							<TableHead>Stock</TableHead>
							<TableHead>Acciones</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{productsActuales.map((product, index) => (
							<TableRow
								key={product.id}
								className={index % 2 === 0 ? "bg-slate-200" : ""}
							>
								<TableCell>{product.id}</TableCell>
								<TableCell>{product.title}</TableCell>
								<TableCell>{product.price}</TableCell>
								<TableCell>{product.category}</TableCell>
								<TableCell>0</TableCell>
								<TableCell>
									<div className="flex space-x-2">
										<Button variant="ghost" size="icon" asChild>
											<Link href={`/admin/producto/${product.id}`}>
												<Pencil className="h-4 w-4" />
											</Link>
										</Button>
										<Button
											variant="ghost"
											size="icon"
											onClick={() => handleDeleteProduct(product.id)}
										>
											<Trash2 className="h-4 w-4" />
										</Button>
									</div>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
				<div className="flex items-center justify-center space-x-2 mt-4">
					<Button
						variant="outline"
						size="icon"
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
					>
						<ChevronLeft className="h-4 w-4" />
					</Button>
					{pageNumbers.map((number) => (
						<Button
							key={number}
							variant={currentPage === number ? "default" : "outline"}
							onClick={() => setCurrentPage(number)}
						>
							{number}
						</Button>
					))}
					<Button
						variant="outline"
						size="icon"
						onClick={() =>
							setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
						}
						disabled={currentPage === pageNumbers.length}
					>
						<ChevronRight className="h-4 w-4" />
					</Button>
				</div>
			</div>
		</>
	);
};
