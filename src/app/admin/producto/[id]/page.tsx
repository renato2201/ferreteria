import { Button } from "@/components/ui/button";

import { ArrowLeft } from "lucide-react";

import Link from "next/link";
import { getSingleProduct } from "@/utils/productsAPI";
import { ProductForm } from "@/components";

interface Props {
	params: {
		id: string;
	};
}

export default async function ProductEditPage({ params }: Props) {
	const product = await getSingleProduct(params.id);

	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold">Editar Producto</h1>
				<Link href="/admin/productos">
					<Button variant="outline" className="w-full">
						<ArrowLeft className="mr-2 h-4 w-4" /> Regresar a productos
					</Button>
				</Link>
			</div>
			<ProductForm product={product} />
		</div>
	);
}
