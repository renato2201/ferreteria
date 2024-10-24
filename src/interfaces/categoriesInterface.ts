export interface CategoriesResponse {
	ok: boolean;
	response: Category[];
}

export interface Category {
	id: string;
	name: string;
	description: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt: null;
}
