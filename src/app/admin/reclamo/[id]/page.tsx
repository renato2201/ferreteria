import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface Props {
	params: {
		id: string;
	};
}

export default function ReclamoPage({ params }: Props) {
	console.log(params.id);
	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Reclamo #{params.id}</h1>
			<p>Enviado por Pepe</p>
			<p>Fecha: 2024-10-01</p>
			<p>Estado: Pendiente</p>
			<p>Detalle del reclamo:</p>
			<Textarea placeholder="Resolver el problema..." />
			<Button className="mt-4">Resolver queja</Button>
		</div>
	);
}
