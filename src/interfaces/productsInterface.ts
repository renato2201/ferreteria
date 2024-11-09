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
	image: string | null;
	name: string;
	sku: string;
	description: string;
	price: number;
	category: string;
	categoryId: string;
	inventoryId: string;
	discountId: null | string;
	quantity: number;
	discount: number;
	totalPrice: number;
}

export interface NewProduct {
	name: string;
	quantity: number;
	description: string;
	sku: string;
	price: number;
	categoryId: string;
	inventoryId: string | undefined;
	image: string | null | undefined;
}
