"use client";

import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { createProduct } from "@/utils/productsAPI";
import { getCategories } from "@/utils/categoriesAPI";
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { refreshProducts } from "@/utils/actions";

interface Category {
  id: string;
  name: string;
}

interface FormData {
  name: string;
  description: string;
  quantity: number;
  sku: string;
  price: number;
  categoryId: string;
  image: string;
}

export const CreateProductForm = () => {
  const MySwal = withReactContent(Swal);
  const router = useRouter();
  const [categories, setCategories] = useState<Category[]>([]);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categoriesData = await getCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const onSubmit = async (data: FormData) => {
    const newProduct = {
      ...data,
      inventoryId: undefined, // Si necesitas agregarlo después
    };
    try {
      await createProduct(newProduct);
      MySwal.fire({
        title: "Producto creado",
        text: "El producto ha sido creado exitosamente",
        icon: "success",
        confirmButtonText: "Aceptar",
      }).then(() => {
        refreshProducts();
        router.push("/admin/productos");
      });
    } catch (error) {
      console.error("Error creating product:", error);
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
              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select
                  {...register("categoryId", {
                    required: "La categoría es obligatoria",
                  })}
                >
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.categoryId && (
                  <p className="text-red-500">{errors.categoryId.message}</p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="space-y-6">
          <Card>
            <CardContent className="p-4">
              <Input
                placeholder="URL de la imagen"
                {...register("image", { required: "La imagen es obligatoria" })}
              />
              {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </CardContent>
          </Card>

          <Button type="submit" className="w-full">
            Crear producto
          </Button>
        </div>
      </div>
    </form>
  );
};
