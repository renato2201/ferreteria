import { ProductGrid } from "@/components";
import type { Product } from "@/interfaces/productsInterface";

export default async function ShopPage() {
	const products = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json() as Promise<Product[]>,
	);
	return <ProductGrid products={products} />;
}
