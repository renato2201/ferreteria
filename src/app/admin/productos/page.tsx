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
import { Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

// Mock data for products
const initialProducts = [
	{
		id: 1,
		name: "Producto 1",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
	{
		id: 2,
		name: "Producto 2",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
	{
		id: 3,
		name: "Producto 3",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
	{
		id: 4,
		name: "Producto 4",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
	{
		id: 5,
		name: "Producto 5",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
	{
		id: 6,
		name: "Producto 6",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
	{
		id: 7,
		name: "Producto 7",
		price: "S/ 100.00",
		category: "Herramientas",
		stock: "En stock (100)",
	},
];

export default function ProductPage() {
	const [products, setProducts] = useState(initialProducts);
	const [searchTerm, setSearchTerm] = useState("");

	const filteredProducts = products.filter(
		(product) =>
			product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
			product.price.includes(searchTerm) ||
			product.category.toLowerCase().includes(searchTerm.toLowerCase()),
	);

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
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Mis productos</h1>
			<div className="flex flex-col sm:flex-row justify-between items-center mb-6 space-y-4 sm:space-y-0">
				<Input
					className="w-full sm:w-96"
					placeholder="Buscar por nombre, precio o categoría"
					value={searchTerm}
					onChange={handleSearch}
				/>
				<Link href="/admin/productos/crear">
					<Button>CREAR PRODUCTO</Button>
				</Link>
			</div>
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[100px]">ID</TableHead>
							<TableHead>Nombre</TableHead>
							<TableHead>Precio</TableHead>
							<TableHead>Categoría</TableHead>
							<TableHead>Stock</TableHead>
							<TableHead className="text-right">Acciones</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{filteredProducts.map((product, index) => (
							<TableRow
								key={product.id}
								className={index % 2 === 0 ? "bg-slate-200" : ""}
							>
								<TableCell className="font-medium">{product.id}</TableCell>
								<TableCell>{product.name}</TableCell>
								<TableCell>{product.price}</TableCell>
								<TableCell>{product.category}</TableCell>
								<TableCell>{product.stock}</TableCell>
								<TableCell className="text-right">
									<Button
										variant="ghost"
										size="icon"
										onClick={() => handleEditProduct(product.id)}
									>
										<Pencil className="h-4 w-4" />
									</Button>
									<Button
										variant="ghost"
										size="icon"
										onClick={() => handleDeleteProduct(product.id)}
									>
										<Trash2 className="h-4 w-4" />
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
		</div>
	);
}
