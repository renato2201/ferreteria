"use server";
import { revalidatePath } from "next/cache";

export const refreshProducts = () => {
	revalidatePath("/admin/productos");
};
