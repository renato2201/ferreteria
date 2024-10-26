import {Button} from "@/components/ui/button";
import type {Product} from "@/interfaces/productsInterface";
import {getSingleProduct} from "@/utils/productsAPI";
import Image from "next/image";
import {ProductBreadcrumb} from "@/components";

interface Props {
    params: {
        id: string;
    };
}

export default async function ProductPage({params}: Props) {
    const product = await getSingleProduct(params.id);
    return (
        <div className="container mx-auto px-4 py-8 ">
            <ProductBreadcrumb category={product.category} />
            <div className=" grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex justify-center">

                    <Image
                        src={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
                        alt={product.name}
                        width={400}
                        height={400}

                    />
                </div>

                <div className="py-4 flex flex-col gap-20 max-w-6xl">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                        <div className="flex flex-col gap-2 mt-4">

                            <p className="text-gray-400">SKU: {product.sku}</p>

                            <p className="text-gray-600 mb-2">{product.category}</p>
                            <p className="text-lg mb-2 line-clamp-3">
                                {product.description}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col h-full justify-end gap-4">
                        <p className={`text-2xl font-bold text-gray-600 `}>
                            S/.{product.price}
                        </p>
                        <div className="flex space-x-2 items-center">
                            <Button>+</Button>
                            <span className="font-bold text-2xl">0</span>
                            <Button>-</Button>
                            <Button className="">Agregar al carrito</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
