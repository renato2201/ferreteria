import { Skeleton } from "@/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export const ProductsTableSkeleton = () => {
	return (
		// <div className="rounded-md border">
		// 	<Table>
		// 		<TableHeader>
		// 			<TableRow>
		// 				<TableHead>"Nombre"</TableHead>
		// 			</TableRow>
		// 		</TableHeader>
		// 		<TableBody>
		// 			<TableRow>
		// 				<TableCell>
		// 					<Skeleton className="h-4 w-[150px]" />
		// 				</TableCell>
		// 			</TableRow>
		// 		</TableBody>
		// 	</Table>
		// </div>
		<div className="rounded-md border">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[100px]">Nombre</TableHead>
						<TableHead>Categoría</TableHead>
						<TableHead>Stock</TableHead>
						<TableHead>Precio</TableHead>
						<TableHead className="text-right">Acciones</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{Array.from({ length: 5 }).map((_, index) => (
						<TableRow key={index}>
							<TableCell className="font-medium">
								<Skeleton className="h-4 w-[80px]" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-[150px]" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-[100px]" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-[120px]" />
							</TableCell>
							<TableCell className="text-right">
								<Skeleton className="h-4 w-[100px] ml-auto" />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</div>
	);
};
