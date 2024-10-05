import { ProductsTable } from "@/components";
import { getProducts } from "@/fake-data/fakeProducts";

// Mock data for products

export default async function ProductPage() {
	const initialProducts = await getProducts();

	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Mis productos</h1>
			<ProductsTable initialProducts={initialProducts} />
		</div>
	);
}
