"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useRouter } from "next/navigation";
import { updateOrder } from "@/utils/ordersAPI";
import type { SingleOrder } from "@/interfaces/ordersInterface";
import { refreshVentas } from "@/utils/actions";

interface Props {
	order: SingleOrder;
}

interface FormData {
	status: string;
}

export const SingleOrderForm = ({ order }: Props) => {
	const router = useRouter();
	const MySwal = withReactContent(Swal);

	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>({
		defaultValues: {
			status: order?.status ?? "PROCESANDO",
		},
	});

	const onSubmit = async (data: FormData) => {
		const updatedOrder = {
			...order,
			status: data.status,
		};

		try {
			await updateOrder(updatedOrder);
			MySwal.fire({
				title: "Estado actualizado",
				text: "El estado de la orden ha sido actualizado exitosamente",
				icon: "success",
				confirmButtonText: "Aceptar",
			}).then(() => {
				refreshVentas();
				router.push("/admin/ventas");
			});
		} catch (error) {
			MySwal.fire({
				title: "Error",
				text: "Hubo un error al actualizar el estado de la orden",
				icon: "error",
				confirmButtonText: "Aceptar",
			});
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div className="space-y-6">
					<Card>
						<CardContent className="p-4 space-y-4">
							<div className="space-y-2">
								<Label htmlFor="status">Estado de la Orden</Label>
								<Controller
									name="status"
									control={control}
									rules={{ required: "El estado es obligatorio" }}
									render={({ field }) => (
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											<SelectTrigger className="w-full">
												<SelectValue placeholder="Selecciona el estado" />
											</SelectTrigger>
											<SelectContent>
												<SelectItem value="PROCESANDO">Procesando</SelectItem>
												<SelectItem value="COMPLETADO">Completado</SelectItem>
												<SelectItem value="ENTREGADO">Entregado</SelectItem>
												<SelectItem value="RECIBIDO">Recibido</SelectItem>
											</SelectContent>
										</Select>
									)}
								/>
								{errors.status && (
									<p className="text-red-500">{errors.status.message}</p>
								)}
							</div>
							<div>
								<Label htmlFor="totalAmount">Monto Total</Label>
								<Input
									id="totalAmount"
									value={`$${order.totalAmount}`}
									readOnly
									className="bg-gray-100"
								/>
							</div>
							<div>
								<Label htmlFor="createdAt">Fecha de Creación</Label>
								<Input
									id="createdAt"
									value={new Date(order.createdAt).toLocaleDateString("es-ES")}
									readOnly
									className="bg-gray-100"
								/>
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="space-y-6">
					<Card>
						<CardContent className="p-4 space-y-4">
							<div>
								<Label htmlFor="address">Dirección de Envío</Label>
								<Input
									id="address"
									value={`${order.address.line1}, ${order.address.city}, ${order.address.country}`}
									readOnly
									className="bg-gray-100"
								/>
							</div>
							{order.guest && (
								<div>
									<Label htmlFor="guest">Cliente Invitado</Label>
									<Input
										id="guest"
										value={`${order.guest.firstName} ${order.guest.lastName}`}
										readOnly
										className="bg-gray-100"
									/>
								</div>
							)}
						</CardContent>
					</Card>

					<Button type="submit" className="w-full">
						Actualizar Estado
					</Button>
				</div>
			</div>
		</form>
	);
};
