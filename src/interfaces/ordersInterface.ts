export interface OrdersResponse {
	orders: Order[];
}

export interface Order {
	id: string;
	status: string;
	total: string;
	createdAt: Date;
	user: string;
	products: OrderProduct[];
}

export interface OrderProduct {
	id: string;
	name: string;
	price: number;
	discount: number | null;
	quantity: number;
}

export interface SingleOrderResponse {
	ok: boolean;
	orderDetails: SingleOrder;
}

export interface SingleOrder {
	orderId: string;
	status: string;
	totalAmount: string;
	createdAt: Date;
	user: null;
	guest: Guest;
	address: Address;
	products: OrderProduct[];
	productCount: number;
}

export interface Address {
	line1: string;
	line2: null;
	city: null;
	country: null;
}

export interface Guest {
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
}

export interface OrderProduct {
	id: string;
	name: string;
	image: string;
	description: string;
	price: number;
	discount: number | null;
	quantity: number;
	categoryName: string;
}
