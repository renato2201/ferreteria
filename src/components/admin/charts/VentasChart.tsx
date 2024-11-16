"use client";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import { getTopSellingProducts } from "@/utils/ordersAPI";
import { useEffect, useState } from "react";

// const chartData = [
// 	{ month: "Enero", ventas: 186 },
// 	{ month: "Febrero", ventas: 305 },
// 	{ month: "Marzo", ventas: 237 },
// 	{ month: "Abril", ventas: 73 },
// 	{ month: "Mayo", ventas: 209 },
// 	{ month: "Junio", ventas: 214 },
// ];

const chartConfig = {
	ventas: {
		label: "Ventas totales",
		color: "hsl(var(--chart-1))",
	},
} satisfies ChartConfig;

export const VentasChart = () => {
	const [chartData, setChartData] = useState([]);
	useEffect(() => {
		getTopSellingProducts().then((data) => {
			setChartData(data);
		});
	}, []);

	const date = new Date();
	const currentMonth = date.getMonth();

	const startMonth = new Date(date.setMonth(currentMonth - 5));
	const monthFormatter = new Intl.DateTimeFormat("es", { month: "long" });

	const capitalizeFirstLetter = (month: string) =>
		month.charAt(0).toUpperCase() + month.slice(1);

	const startMonthString = capitalizeFirstLetter(
		monthFormatter.format(startMonth),
	);
	const currentMonthString = capitalizeFirstLetter(
		monthFormatter.format(new Date()),
	);

	return (
		<Card>
			<CardHeader>
				<CardTitle>Productos mas vendidos</CardTitle>
				<CardDescription></CardDescription>
			</CardHeader>
			<CardContent className="flex justify-center">
				<ChartContainer config={chartConfig} className="h-96 flex w-full ">
					<BarChart accessibilityLayer data={chartData} className="">
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="name"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							// tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="quantity" fill="var(--color-ventas)" radius={8}>
							<LabelList
								position="top"
								offset={5}
								className="fill-foreground"
								fontSize={12}
							/>
						</Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
};
