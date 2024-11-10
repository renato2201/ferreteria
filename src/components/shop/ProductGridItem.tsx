import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import type { Product } from "@/interfaces/productsInterface";
import Link from "next/link";

interface Props {
  product: Product;
}

export const ProductGridItem = ({ product }: Props) => {
  return (
    <Card className="flex flex-col max-w-[300px] shadow-md rounded-lg p-5">
      <CardContent className="p-4 flex-grow">
        <Image
          src={product.image ?? ""}
          alt={product.name}
          width={500}
          height={500}
          className="w-full h-48 object-scale-down mb-4 rounded "
        />
        <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-600 line-clamp-2" title={product.description}>
          {product.description}
        </p>
      </CardContent>
      <CardFooter className="p-4 flex justify-between products-center">
        <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
        <Button asChild>
          <Link href={`/producto/${product.id}`}>Ver detalles</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
