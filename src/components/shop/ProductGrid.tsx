import type { Product } from "@/interfaces/productsInterface";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
	products: Product[];
}
export const ProductGrid = ({ products }: Props) => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-6 text-center">
				Grid Responsive de Items
			</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{products.map((product) => (
					<ProductGridItem key={product.id} product={product} />
				))}
			</div>
		</div>
	);
};
