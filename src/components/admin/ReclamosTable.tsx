"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Reclamo } from "@/interfaces/reclamosInterface";

interface Props {
	initialReclamos: Reclamo[];
}

export const ReclamosTable = ({ initialReclamos }: Props) => {
	const [reclamos, setReclamos] = useState(initialReclamos);
	const [filtroEstado, setFiltroEstado] = useState("todos");
	const [currentPage, setCurrentPage] = useState(1);
	const reclamosPorPagina = 5;

	const reclamosFiltrados = reclamos.filter(
		(reclamo) => filtroEstado === "todos" || reclamo.estado === filtroEstado,
	);

	const indexOfLastReclamo = currentPage * reclamosPorPagina;
	const indexOfFirstReclamo = indexOfLastReclamo - reclamosPorPagina;
	const reclamosActuales = reclamosFiltrados.slice(
		indexOfFirstReclamo,
		indexOfLastReclamo,
	);

	const pageNumbers = [];
	for (
		let i = 1;
		i <= Math.ceil(reclamosFiltrados.length / reclamosPorPagina);
		i++
	) {
		pageNumbers.push(i);
	}

	const handleUpdateReclamo = (id: number, nuevoEstado: string) => {
		setReclamos(
			reclamos.map((reclamo) =>
				reclamo.id === id ? { ...reclamo, estado: nuevoEstado } : reclamo,
			),
		);
	};
	return (
		<div className="container mx-auto px-4 py-8 bg-white rounded-lg shadow-md">
			<h1 className="text-2xl font-bold mb-6">Gestión de Reclamos</h1>
			<div className="flex justify-between items-center mb-6">
				<Select value={filtroEstado} onValueChange={setFiltroEstado}>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Filtrar por estado" />
					</SelectTrigger>
					<SelectContent>
						<SelectItem value="todos">Todos</SelectItem>
						<SelectItem value="Pendiente">Pendiente</SelectItem>
						<SelectItem value="En proceso">En proceso</SelectItem>
						<SelectItem value="Resuelto">Resuelto</SelectItem>
					</SelectContent>
				</Select>
			</div>
			<div className="overflow-x-auto">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>ID</TableHead>
							<TableHead>Cliente</TableHead>
							<TableHead>Fecha</TableHead>
							<TableHead>Asunto</TableHead>
							<TableHead>Estado</TableHead>
							<TableHead>Acciones</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{reclamosActuales.map((reclamo) => (
							<TableRow key={reclamo.id}>
								<TableCell>{reclamo.id}</TableCell>
								<TableCell>{reclamo.cliente}</TableCell>
								<TableCell>{reclamo.fecha}</TableCell>
								<TableCell>{reclamo.asunto}</TableCell>
								<TableCell>{reclamo.estado}</TableCell>
								<TableCell>
									<Button asChild>
										<Link href={`/admin/reclamo/${reclamo.id}`}>
											Ver detalles
										</Link>
									</Button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-center space-x-2 mt-4">
				<Button
					variant="outline"
					size="icon"
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
				>
					<ChevronLeft className="h-4 w-4" />
				</Button>
				{pageNumbers.map((number) => (
					<Button
						key={number}
						variant={currentPage === number ? "default" : "outline"}
						onClick={() => setCurrentPage(number)}
					>
						{number}
					</Button>
				))}
				<Button
					variant="outline"
					size="icon"
					onClick={() =>
						setCurrentPage((prev) => Math.min(prev + 1, pageNumbers.length))
					}
					disabled={currentPage === pageNumbers.length}
				>
					<ChevronRight className="h-4 w-4" />
				</Button>
			</div>
		</div>
	);
};
