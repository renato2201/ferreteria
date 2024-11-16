import { ProductForm, SingleOrderForm } from "@/components";
import { Button } from "@/components/ui/button";
import { getSingleOrder } from "@/utils/ordersAPI";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
	params: {
		id: string;
	};
}

export default async function EditVentaPage({ params }: Props) {
	const order = await getSingleOrder(params.id);
	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<div className="flex justify-between items-center mb-8">
				<h1 className="text-2xl font-bold">Editar Orden # {order.orderId}</h1>
				<Link href="/admin/ventas">
					<Button variant="outline" className="w-full">
						<ArrowLeft className="mr-2 h-4 w-4" /> Regresar a ventas
					</Button>
				</Link>
			</div>
			<SingleOrderForm order={order} />
		</div>
	);
}
