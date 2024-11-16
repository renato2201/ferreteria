"use client";
import { Button } from "@/components/ui/button";

import type { Product } from "@/interfaces/productsInterface";
import type { Order } from "@/interfaces/ordersInterface";
import { refreshProducts } from "@/utils/actions";
import { deleteProduct } from "@/utils/productsAPI";

import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export const ventasColumns: ColumnDef<Order>[] = [
	{
		accessorKey: "id",
		header: "Id",
	},
	{
		accessorKey: "status",
		header: "Estado",
	},
	{
		accessorKey: "total",
		header: ({ column }) => {
			return (
				<Button
					className="w-full"
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Total
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
		cell: ({ row }) => {
			const quantity: number = row.getValue("total");
			return <div className="text-center font-medium">S/. {quantity}</div>;
		},
	},
	{
		accessorKey: "productCount",
		header: ({ column }) => (
			<Button
				className="w-full"
				variant={"ghost"}
				onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
			>
				Productos
				<ArrowUpDown className="ml-2 h-4 w-4" />
			</Button>
		),
		cell: ({ row }) => {
			const amount = Number.parseFloat(row.getValue("productCount"));

			return <div className="text-center font-medium">{amount}</div>;
		},
	},
	{
		accessorKey: "createdAt",
		header: "Fecha",
		cell: ({ row }) => {
			const date = row.getValue("createdAt");
			const dateFormat = new Date(date).toLocaleDateString("es-ES");
			return <div className=" font-medium">{dateFormat}</div>;
		},
	},
	{
		accessorKey: "user",
		header: "Usuario",
		cell: ({ row }) => {
			const user = row.getValue("user");
			return <div className=" font-medium">{user}</div>;
		},
	},
	{
		id: "actions",
		header: () => (
			<div className="flex gap-2 justify-center pr-5">Acciones</div>
		),
		cell: ({ row }) => {
			const venta = row.original;

			return <Actions venta={venta} />;
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

const Actions = ({ venta }: { venta: Order }) => {
	return (
		<div className="flex gap-2 justify-center pr-5">
			<Button asChild>
				<Link href={`/admin/ventas/${venta.id}`}>
					<Pencil size={15} />
				</Link>
			</Button>
		</div>
	);
};
