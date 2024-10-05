"use client";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Card, CardContent } from "../ui/card";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import { Button } from "../ui/button";
import { Upload } from "lucide-react";
import type { Product } from "@/interfaces/productsInterface";

interface Props {
	product?: Product;
}

export const ProductForm = ({ product }: Props) => {
	const [title, setTitle] = useState(product?.title ?? "");
	const [description, setDescription] = useState(product?.description ?? "");
	const [stock, setStock] = useState(1);
	const [sku, setSku] = useState("");
	const [isActive, setIsActive] = useState(false);
	const [image, setImage] = useState<string | null>(product?.image ?? null);

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
									onCheckedChange={(checked) => setIsActive(checked as boolean)}
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
						Editar producto
					</Button>
				</div>
			</div>
		</form>
	);
};
