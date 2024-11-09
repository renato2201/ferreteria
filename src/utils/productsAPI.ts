import type {
	NewProduct,
	Product,
	ProductResponse,
	ProductsResponse,
} from "@/interfaces/productsInterface";
import { baseURL } from "./urls";
import { revalidatePath } from "next/cache";

export const getProducts = async (): Promise<Product[]> => {
	const response: Promise<ProductsResponse> = await fetch(
		`${baseURL}/api/v1/products`,
		{
			cache: "no-store",
		},
	).then((res) => res.json());
	const products = (await response).products;
	return products;
};

export const getSingleProduct = async (id: string): Promise<Product> => {
	const response: Promise<ProductResponse> = await fetch(
		`${baseURL}/api/v1/products/${id}`,
		{
			cache: "no-store",
		},
	).then((res) => res.json());
	const product = (await response).product;
	return product;
};

export const deleteProduct = async (productId: string, inventoryId: string) => {
	console.log(productId, inventoryId);
	fetch(`${baseURL}/api/v1/products/delete`, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			productId,
			inventoryId,
		}),
	}).then((res) => res.json());
};

export const updateProduct = async (product: Product) => {
	const response: Promise<ProductResponse> = await fetch(
		`${baseURL}/api/v1/products/update`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(product),
		},
	).then((res) => res.json());
	// const productResponse = (await response).product;
	// return productResponse;
};

export const createProduct = async (product: NewProduct) => {
	await fetch(`${baseURL}/api/v1/products/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(product),
	}).then((res) => res.json());
	// const productResponse = (await response).product;
	// return productResponse;
};
