import type { CategoriesResponse } from "@/interfaces/categoriesInterface";
import { baseURL } from "./urls";

export const getCategories = async () => {
	const response: Promise<CategoriesResponse> = await fetch(
		`${baseURL}/api/v1/categories/`,
	).then((res) => res.json());

	const categories = (await response).categories;
	return categories;
};

export const getCategoriesForShop = async () => {
	const response: Promise<CategoriesResponse> = await fetch(
		`${baseURL}/api/v1/categories/get-all`,
	).then((res) => res.json());

	const categories = (await response).categories.map(
		(category) => category.name,
	);

	categories.unshift("Todas");
	return categories;
};

export const getCategoriesNames = async () => {
	const response: Promise<CategoriesResponse> = await fetch(
		`${baseURL}/api/v1/categories/`,
	).then((res) => res.json());
	const data = (await response).categories;
	return data.map((category) => category.name);
};
