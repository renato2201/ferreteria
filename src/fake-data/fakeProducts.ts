import type { Product } from "@/interfaces/productsInterface";

export const getProducts = async (): Promise<Product[]> => {
	const productos = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json(),
	);
	return productos;
};

export const getSingleProduct = async (id: string): Promise<Product> => {
	const product = await fetch(`https://fakestoreapi.com/products/${id}`).then(
		(res) => res.json(),
	);
	return product;
};
