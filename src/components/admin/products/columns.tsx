"use client";
import { Button } from "@/components/ui/button";
import type { Product } from "@/interfaces/productsInterface";
import { refreshProducts } from "@/utils/actions";
import { deleteProduct } from "@/utils/productsAPI";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const productColumns: ColumnDef<Product>[] = [
	{
		accessorKey: "name",
		header: "Nombre",
	},
	{
		accessorKey: "category",
		header: "Categoría",
	},
	{
		accessorKey: "stock",
		header: ({ column }) => {
			return (
				<Button
					className="w-full"
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Stock
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const quantity: number = row.getValue("stock");
			return <div className="text-center font-medium">{quantity}</div>;
		},
	},
	{
		accessorKey: "price",
		header: ({ column }) => (
			<Button
				className="w-full"
				variant={"ghost"}
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Precio
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("price"));
			const formatted = new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "PEN",
			}).format(amount);

			return <div className="text-center font-medium">{formatted}</div>;
		},
	},
	{
		id: "actions",
		header: () => (
			<div className="flex gap-2 justify-center pr-5">Acciones</div>
		),
		cell: ({ row }) => {
			const product = row.original;

			return <Actions product={product} />;
		},
	},
];

// export function Actions({ href }: { href: string }) {
//   const [open, setOpen] = useState(false);
//   const isDesktop = useMediaQuery("(min-width: 768px)");
//   if (isDesktop) {
//     return (
//       <div>
//         <Button>
//           <Link href={href}>
//             <Pencil />
//           </Link>
//         </Button>
//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger asChild>
//             <Button variant="outline">Edit Profile</Button>
//           </DialogTrigger>
//           <DialogContent className="sm:max-w-[425px]">
//             <DialogHeader>
//               <DialogTitle>Edit profile</DialogTitle>
//               <DialogDescription>
//                 Make changes to your profile here. Click save when you're done.
//               </DialogDescription>
//             </DialogHeader>
//             <div>
//               <p>hola</p>
//             </div>
//           </DialogContent>
//         </Dialog>
//       </div>
//     );
//   }

//   return (
//     <Drawer open={open} onOpenChange={setOpen}>
//       <DrawerTrigger asChild>
//         <Button variant="outline">Edit Profile</Button>
//       </DrawerTrigger>
//       <DrawerContent>
//         <DrawerHeader className="text-left">
//           <DrawerTitle>Edit profile</DrawerTitle>
//           <DrawerDescription>
//             Make changes to your profile here. Click save when you're done.
//           </DrawerDescription>
//         </DrawerHeader>
//         <div>
//           <p>hola</p>
//         </div>
//         <DrawerFooter className="pt-2">
//           <DrawerClose asChild>
//             <Button variant="outline">Cancel</Button>
//           </DrawerClose>
//         </DrawerFooter>
//       </DrawerContent>
//     </Drawer>
//   );
// }

const Actions = ({ product }: { product: Product }) => {
	const handleErase = async (id: string, inventoryId: string) => {
		try {
			await deleteProduct(id, inventoryId);
			MySwal.fire({
				title: "Producto eliminado",
				text: "El producto ha sido eliminado exitosamente",
				icon: "success",
				confirmButtonText: "Aceptar",
			}).then(() => {
				router.refresh();
			});
		} catch (e) {
			console.log(e);
			MySwal.fire({
				title: "Error",
				text: "Ha ocurrido un error al eliminar el producto",
				icon: "error",
				confirmButtonText: "Aceptar",
			}).then(() => {
				refreshProducts();
				router.refresh();
			});

			// alert(`Producto eliminado: ${id}, ${inventoryId}`);
		}
	};
	const MySwal = withReactContent(Swal);
	const router = useRouter();
	return (
		<div className="flex gap-2 justify-center pr-5">
			<Button asChild>
				<Link href={`/admin/producto/${product.id}`}>
					<Pencil size={15} />
				</Link>
			</Button>
			<Button onClick={() => handleErase(product.id, product.inventoryId)}>
				<Trash size={15} />
			</Button>
		</div>
	);
};
