import type {
	Order,
	SingleOrder,
	SingleOrderResponse,
} from "@/interfaces/ordersInterface";
import { baseURL } from "./urls";
import { get } from "http";

export const getVentas = async (): Promise<Order[] | null> => {
	try {
		const response = await fetch(`${baseURL}/api/v1/orders`, {
			cache: "no-store",
		});
		const data = await response.json();
		const ventas = data.orders;
		return ventas;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const updateOrder = async ({ orderId, status }: SingleOrder) => {
	const response = await fetch(`${baseURL}/api/v1/orders/update`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ orderId, status }),
	});
	const data = await response.json();
	return data;
};

export const getSingleOrder = async (id: string): Promise<SingleOrder> => {
	const response: Promise<SingleOrderResponse> = await fetch(
		`${baseURL}/api/v1/orders/${id}`,
		{
			cache: "no-store",
		},
	).then((res) => res.json());
	const order = (await response).orderDetails;
	return order;
};

export async function getTopSellingProducts(): Promise<
	[id: string, quantity: number][]
> {
	const orders = await getVentas();

	// Creamos un mapa para almacenar el conteo de cada producto
	const productSales = {};

	// Iteramos sobre cada orden
	orders.forEach((order) => {
		// Iteramos sobre los productos en cada orden
		order.products.forEach((product) => {
			const productId = product.id;

			// Si el producto ya está en el mapa, sumamos la cantidad, si no, lo agregamos
			if (productSales[productId]) {
				productSales[productId].quantity += product.quantity;
			} else {
				productSales[productId] = {
					name: product.name,
					quantity: product.quantity,
				};
			}
		});
	});

	// Convertimos el objeto a un arreglo y lo ordenamos por cantidad en orden descendente
	const sortedProducts = Object.values(productSales).sort(
		(a, b) => b.quantity - a.quantity,
	);

	return sortedProducts;
}

// const topSellingProducts = getTopSellingProducts(orders);
// console.log(topSellingProducts);
