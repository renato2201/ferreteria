import { ProductsTable } from "@/components";
import { productColumns } from "@/components/admin/products/columns";

import { getProducts } from "@/utils/productsAPI";

// Mock data for products

export default async function ProductPage() {
	const initialProducts = await getProducts();

	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Mis productos</h1>
			<ProductsTable data={initialProducts} columns={productColumns} />
		</div>
	);
}
