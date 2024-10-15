import { FilteredProducts, ProductGrid } from "@/components";
import type { Product } from "@/interfaces/productsInterface";
import { getProducts } from "@/utils/productsAPI";

export const metadata = {
	title: "Ferreteria Andina | Tienda",
	description: "Ferreteria Andina | Tienda",
};
export default async function ShopPage() {
	const products = await getProducts();

	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Nuestros Productos
			</h1>
			<FilteredProducts products={products} />
		</div>
	);
}
