"use server";
import { revalidatePath } from "next/cache";

export const refreshProducts = () => {
	revalidatePath("/admin/productos");
};

export const refreshVentas = () => {
	revalidatePath("/admin/ventas");
};

export const refreshReclamos = () => {
	revalidatePath("/admin/reclamos");
};
