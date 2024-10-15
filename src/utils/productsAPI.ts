import type {
	Product,
	ProductResponse,
	ProductsResponse,
} from "@/interfaces/productsInterface";

const baseURL = "http://localhost:6969";

export const getProducts = async (): Promise<Product[]> => {
	const response: Promise<ProductsResponse> = await fetch(
		`${baseURL}/api/v1/products`,
	).then((res) => res.json());
	const products = (await response).products;
	return products;
};

export const getSingleProduct = async (id: string): Promise<Product> => {
	const response: Promise<ProductResponse> = await fetch(
		`${baseURL}/api/v1/products/${id}`,
	).then((res) => res.json());
	const product = (await response).product;
	return product;
};
