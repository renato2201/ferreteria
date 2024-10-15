export interface ProductsResponse {
	ok: boolean;
	products: Product[];
}

export interface ProductResponse {
	ok: boolean;
	product: Product;
}

export interface Product {
	id: string;
	name: string;
	sku: string;
	description: string;
	price: number;
	category: string;
	categoryId: string;
	quantity: number;
	discount: number;
	totalPrice: number;
}
