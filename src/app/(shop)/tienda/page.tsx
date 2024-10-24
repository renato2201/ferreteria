import { FilteredProducts, ProductGrid } from "@/components";
import { getCategoriesNames } from "@/utils/categoriesAPI";
import { getProducts } from "@/utils/productsAPI";

// export const fetchCache = "force-no-store";

export const metadata = {
	title: "Ferreteria Andina | Tienda",
	description: "Ferreteria Andina | Tienda",
};
export default async function ShopPage() {
	const products = await getProducts();
	const categories = await getCategoriesNames();

	return (
		<div className="lg:px-10 lg:py-8 py-4">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Nuestros Productos
			</h1>
			<FilteredProducts products={products} categories={categories} />
		</div>
	);
}
