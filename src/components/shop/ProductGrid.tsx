import type { Product } from "@/interfaces/productsInterface";
import { ProductGridItem } from "./ProductGridItem";

interface Props {
	products: Product[];
}
export const ProductGrid = ({ products }: Props) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
			{products.map((product) => (
				<ProductGridItem key={product.id} product={product} />
			))}
		</div>
	);
};
