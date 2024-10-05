"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Upload } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProductCreation() {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [stock, setStock] = useState(1);
	const [sku, setSku] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [image, setImage] = useState<string | null>(null);

	const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0];
		if (file) {
			const reader = new FileReader();
			reader.onloadend = () => {
				setImage(reader.result as string);
			};
			reader.readAsDataURL(file);
		}
	};

	const handleSubmit = (event: React.FormEvent) => {
		event.preventDefault();
		// Here you would typically send the data to your backend
		console.log({ title, description, stock, sku, isActive, image });
	};

	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-6">
				<h1 className="text-2xl font-bold mb-6">Crear Producto</h1>
				<Link href="/admin/productos">
					<Button variant="outline" className="w-full">
						<ArrowLeft className="mr-2 h-4 w-4" /> Regresar a productos
					</Button>
				</Link>
			</div>
			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="md:col-span-2 space-y-6">
						<Input
							placeholder="TÍTULO DEL PRODUCTO"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
							className="text-lg"
						/>
						<Textarea
							placeholder="Descripción del producto"
							value={description}
							onChange={(e) => setDescription(e.target.value)}
							className="min-h-[200px]"
						/>
						<Card>
							<CardContent className="p-4 space-y-4">
								<div className="space-y-2">
									<Label htmlFor="stock">Stock</Label>
									<Input
										id="stock"
										type="number"
										value={stock}
										onChange={(e) => setStock(parseInt(e.target.value))}
										min={0}
									/>
								</div>
								<div className="space-y-2">
									<Label htmlFor="sku">SKU</Label>
									<Input
										id="sku"
										value={sku}
										onChange={(e) => setSku(e.target.value)}
									/>
								</div>
								<div className="flex items-center space-x-2">
									<Checkbox
										id="is-active"
										checked={isActive}
										onCheckedChange={(checked) =>
											setIsActive(checked as boolean)
										}
									/>
									<Label htmlFor="is-active">Está activo</Label>
								</div>
							</CardContent>
						</Card>
					</div>
					<div className="space-y-6">
						<Card>
							<CardContent className="p-4">
								{image ? (
									<div className="relative aspect-square mb-4">
										<Image
											src={image}
											alt="Product preview"
											layout="fill"
											objectFit="cover"
											className="rounded-md"
										/>
									</div>
								) : (
									<div className="aspect-square bg-gray-100 flex items-center justify-center mb-4 rounded-md">
										<span className="text-gray-400">IMAGEN DEL PRODUCTO</span>
									</div>
								)}
								<Label htmlFor="image-upload" className="w-full">
									<Button variant="outline" className="w-full">
										<Upload className="mr-2 h-4 w-4" /> Subir imagen
									</Button>
								</Label>
								<Input
									id="image-upload"
									type="file"
									accept="image/*"
									className="hidden"
									onChange={handleImageUpload}
								/>
							</CardContent>
						</Card>

						<Button type="submit" className="w-full">
							Crear producto
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
