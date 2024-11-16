import { VentasTableSkeleton } from "@/components";
import { ventasColumns } from "@/components/admin/ventas/columns";
import { VentasTable } from "@/components/admin/ventas/VentasTable";
import { getVentas } from "@/utils/ordersAPI";
import { Suspense } from "react";

export default async function Ventas() {
	const initialVentas = await getVentas();

	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Mis ventas</h1>
			{initialVentas ? (
				<Suspense fallback={<VentasTableSkeleton />}>
					<VentasTable data={initialVentas} columns={ventasColumns} />
				</Suspense>
			) : (
				<VentasTableSkeleton />
			)}
		</div>
	);
}
