import { ReclamosTable } from "@/components";

// Mock data for reclamos
const initialReclamos = [
	{
		id: 1,
		cliente: "Juan Pérez",
		fecha: "2024-10-01",
		asunto: "Producto defectuoso",
		estado: "Pendiente",
	},
	{
		id: 2,
		cliente: "María García",
		fecha: "2024-10-02",
		asunto: "Retraso en la entrega",
		estado: "En proceso",
	},
	{
		id: 3,
		cliente: "Carlos López",
		fecha: "2024-10-03",
		asunto: "Facturación incorrecta",
		estado: "Resuelto",
	},
	{
		id: 4,
		cliente: "Ana Martínez",
		fecha: "2024-10-04",
		asunto: "Devolución",
		estado: "Pendiente",
	},
	{
		id: 5,
		cliente: "Pedro Sánchez",
		fecha: "2024-10-05",
		asunto: "Producto equivocado",
		estado: "En proceso",
	},
	{
		id: 6,
		cliente: "Carlos López",
		fecha: "2024-10-03",
		asunto: "Facturación incorrecta",
		estado: "Resuelto",
	},
];

export default function ReclamosManagement() {
	return <ReclamosTable initialReclamos={initialReclamos} />;
}
