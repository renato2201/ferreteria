"use client";
import { Button } from "@/components/ui/button";
import { DialogHeader } from "@/components/ui/dialog";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import type { Product } from "@/interfaces/productsInterface";
import {
	Dialog,
	DialogTrigger,
	DialogContent,
	DialogTitle,
	DialogDescription,
} from "@radix-ui/react-dialog";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
		accessorKey: "quantity",
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
			const quantity: number = row.getValue("quantity");
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

			return (
				<div className="flex gap-2 justify-center pr-5">
					<Button asChild>
						<Link href={`/admin/producto/${product.id}`}>
							<Pencil size={15} />
						</Link>
					</Button>
					<Button onClick={handleErase}>
						<Trash size={15} />
					</Button>
				</div>
			);
		},
	},
];

export function Actions({ href }: { href: string }) {
	const [open, setOpen] = useState(false);
	const isDesktop = useMediaQuery("(min-width: 768px)");
	if (isDesktop) {
		return (
			<div>
				<Button>
					<Link href={href}>
						<Pencil />
					</Link>
				</Button>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button variant="outline">Edit Profile</Button>
					</DialogTrigger>
					<DialogContent className="sm:max-w-[425px]">
						<DialogHeader>
							<DialogTitle>Edit profile</DialogTitle>
							<DialogDescription>
								Make changes to your profile here. Click save when you're done.
							</DialogDescription>
						</DialogHeader>
						<div>
							<p>hola</p>
						</div>
					</DialogContent>
				</Dialog>
			</div>
		);
	}

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>
				<Button variant="outline">Edit Profile</Button>
			</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader className="text-left">
					<DrawerTitle>Edit profile</DrawerTitle>
					<DrawerDescription>
						Make changes to your profile here. Click save when you're done.
					</DrawerDescription>
				</DrawerHeader>
				<div>
					<p>hola</p>
				</div>
				<DrawerFooter className="pt-2">
					<DrawerClose asChild>
						<Button variant="outline">Cancel</Button>
					</DrawerClose>
				</DrawerFooter>
			</DrawerContent>
		</Drawer>
	);
}

const handleErase = () => {
	alert("Esto es una prueba");
};
