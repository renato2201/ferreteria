"use client";
import { useState } from "react";
import Image from "next/image";
import { Upload } from "lucide-react";
import type { Product } from "@/interfaces/productsInterface";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { createProduct, updateProduct } from "@/utils/productsAPI";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { revalidatePath } from "next/cache";
import { refreshProducts } from "@/utils/actions";

interface Props {
  product: Product;
}

interface FormData {
  name: string;
  description: string;
  quantity: number;
  sku: string;
  price: number;
  image: string;
}

export const ProductForm = ({ product }: Props) => {
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const {
    control,
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      name: product?.name ?? "",
      description: product?.description ?? "",
      quantity: product?.stock ?? 1,
      sku: product?.sku ?? "",
      price: product?.price ?? 0,
      image: product?.image ?? "",
    },
  });

  const onSubmit = async (data: FormData) => {
    const updatedData = {
      ...data,
      price: Number(data.price),
      quantity: Number(data.quantity),
    };

    if (product) {
      const updatedProduct = {
        ...product,
        ...updatedData,
        discountId: null,
      };
      await updateProduct(updatedProduct);
      MySwal.fire({
        title: "Producto actualizado",
        text: "El producto ha sido actualizado exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        refreshProducts();
        router.push("/admin/productos");
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <div>
            <Input
              placeholder="TÍTULO DEL PRODUCTO"
              {...register("name", { required: "El nombre es obligatorio" })}
              className="text-lg"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div>
            <Textarea
              placeholder="Descripción del producto"
              {...register("description", {
                required: "La descripción es obligatoria",
              })}
              className="min-h-[200px]"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
            )}
          </div>

          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="stock">Stock</Label>
                <Input
                  id="stock"
                  type="number"
                  {...register("quantity", {
                    required: "El stock es obligatorio",
                    min: {
                      value: 0,
                      message: "El stock no puede ser negativo",
                    },
                  })}
                />
                {errors.quantity && (
                  <p className="text-red-500">{errors.quantity.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="sku">SKU</Label>
                <Input
                  id="sku"
                  {...register("sku", { required: "El SKU es obligatorio" })}
                />
                {errors.sku && (
                  <p className="text-red-500">{errors.sku.message}</p>
                )}
              </div>

              {/* Campo de precio */}
              <div className="space-y-2">
                <Label htmlFor="price">Precio</Label>
                <Input
                  id="price"
                  type="number"
                  {...register("price", {
                    required: "El precio es obligatorio",
                    min: {
                      value: 0,
                      message: "El precio no puede ser negativo",
                    },
                  })}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <div>
                {product?.image ? (
                  <div className="relative aspect-square mb-4">
                    <Image
                      src={product.image}
                      alt="Product preview"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                ) : (
                  <Input
                    placeholder="URL de la imagen"
                    {...register("image", {
                      required: "La imagen es obligatoria",
                    })}
                  />
                )}
                {errors.image && (
                  <p className="text-red-500">{errors.image.message}</p>
                )}
              </div>
            </CardContent>
          </Card>

          <Button type="submit" className="w-full">
            Editar producto
          </Button>
        </div>
      </div>
    </form>
  );
};
