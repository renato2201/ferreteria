// export default async function ShopPage() {
// 	const products = await pb.collection("products").getFullList();
// 	console.log(products);
// 	return (
// 		<div className="p-5 bg-zinc-300">
// 			<h1>Hello Page</h1>
// 			{products.map((product) => (
// 				<Card className="w-[350px] py-2" key={product.id}>
// 					<CardContent>
// 						<div className="grid w-full items-center gap-4">
// 							<div className="flex flex-col space-y-1.5 shadow-xl rounded-md">
// 								<img
// 									src={`http://127.0.0.1:8090/api/files/${product.collectionId}/${product.id}/${product.image}`}
// 									alt={product.name}
// 									width={300}
// 									height={200}
// 									className="rounded"
// 								/>
// 							</div>
// 						</div>
// 					</CardContent>
// 					<CardHeader>
// 						<CardTitle>{product.name}</CardTitle>
// 						{/* <CardDescription>
// 							Deploy your new project in one-click.
// 						</CardDescription> */}
// 					</CardHeader>
// 					<CardFooter className="flex justify-between">
// 						<Label className="">
// 							<span className="font-semibold">$</span>
// 							{product.price}
// 						</Label>
// 						<Button>Ver más</Button>
// 					</CardFooter>
// 				</Card>
// 			))}
// 		</div>
// 	);
// }

import { ProductGrid } from "@/components";
import type { Product } from "@/interfaces/productsInterface";

export default async function ShopPage() {
	const products = await fetch("https://fakestoreapi.com/products").then(
		(res) => res.json() as Promise<Product[]>,
	);
	return <ProductGrid products={products} />;
}
