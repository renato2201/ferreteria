import { Button } from "@/components/ui/button";
import type { Product } from "@/interfaces/productsInterface";
import Image from "next/image";

interface Props {
	params: {
		id: string;
	};
}

export default async function ProductPage({ params }: Props) {
	const product = await fetch(
		`https://fakestoreapi.com/products/${params.id}`,
	).then((res) => res.json() as Promise<Product>);
	return (
		<div className="container mx-auto px-4 py-8">
			<div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Image
					src={product.image}
					alt={product.title}
					width={500}
					height={500}
				/>

				<div className="py-4 flex flex-col gap-20 max-w-6xl">
					<div>
						<h1 className="text-3xl font-bold mb-6">{product.title}</h1>
						<p>SKU:</p>
						<p>Rating: {product.rating.rate}</p>
						<p className="text-gray-600">{product.description}</p>
						<p>Price: ${product.price.toFixed(2)}</p>
					</div>

					<div className="flex gap-5 items-center">
						<div className="flex space-x-2 items-center">
							<Button>+</Button>
							<span>0</span>
							<Button>-</Button>
						</div>
						<Button className="">Agregar al carrito</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
