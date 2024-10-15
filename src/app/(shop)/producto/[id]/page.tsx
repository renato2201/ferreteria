import { Button } from "@/components/ui/button";
import type { Product } from "@/interfaces/productsInterface";
import { getSingleProduct } from "@/utils/productsAPI";
import Image from "next/image";

interface Props {
	params: {
		id: string;
	};
}

export default async function ProductPage({ params }: Props) {
	const product = await getSingleProduct(params.id);
	return (
		<div className="container mx-auto px-4 py-8">
			<div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
				<Image
					src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
					alt={product.name}
					width={500}
					height={500}
				/>

				<div className="py-4 flex flex-col gap-20 max-w-6xl">
					<div>
						<h1 className="text-3xl font-bold mb-6">{product.name}</h1>
						<p>SKU: {product.sku}</p>

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
