import { ProductsTable, ProductsTableSkeleton } from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { productColumns } from "@/components/admin/products/columns";

import { getProducts } from "@/utils/productsAPI";
import { Suspense } from "react";

export default async function ProductPage() {
	const initialProducts = await getProducts();

	return (
		<div className="mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Mis productos</h1>

			{initialProducts ? (
				<Suspense fallback={<ProductsTableSkeleton />}>
					<ProductsTable data={initialProducts} columns={productColumns} />
				</Suspense>
			) : (
				<ProductsTableSkeleton />
			)}
		</div>
	);
}
