"use client";

import * as React from "react";
import { Label, Pie, PieChart, Sector } from "recharts";
import type { PieSectorDataItem } from "recharts/types/polar/Pie";

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
  ChartStyle,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const desktopData = [
  { distrito: "surco", desktop: 186, fill: "var(--color-surco)" },
  { distrito: "sanIsidro", desktop: 305, fill: "var(--color-sanIsidro)" },
  { distrito: "laMolina", desktop: 237, fill: "var(--color-laMolina)" },
  { distrito: "santaAnita", desktop: 173, fill: "var(--color-santaAnita)" },
  { distrito: "ate", desktop: 209, fill: "var(--color-ate)" },
];

const chartConfig = {
  compras: {
    label: "Compras",
  },
  desktop: {
    label: "Desktop",
  },
  surco: {
    label: "Surco",
    color: "hsl(var(--chart-1))",
  },
  sanIsidro: {
    label: "San Isidro",
    color: "hsl(var(--chart-2))",
  },
  laMolina: {
    label: "La Molina",
    color: "hsl(var(--chart-3))",
  },
  santaAnita: {
    label: "Santa Anita",
    color: "hsl(var(--chart-4))",
  },
  ate: {
    label: "Ate",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function VentasDistritosChart() {
  const id = "pie-interactive";
  const [activeDistrict, setActiveDistrict] = React.useState(
    desktopData[0].distrito
  );

  const activeIndex = React.useMemo(
    () => desktopData.findIndex((item) => item.distrito === activeDistrict),
    [activeDistrict]
  );

  const districts = React.useMemo(
    () => desktopData.map((item) => item.distrito),
    []
  );

  return (
    <Card data-chart={id} className="flex flex-col">
      <ChartStyle id={id} config={chartConfig} />
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Ventas por distrito</CardTitle>
          {/* <CardDescription>January - June 2024</CardDescription> */}
        </div>
        <Select value={activeDistrict} onValueChange={setActiveDistrict}>
          <SelectTrigger
            className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Select district" />
          </SelectTrigger>
          <SelectContent align="end" className="rounded-xl">
            {districts.map((key) => {
              const config = chartConfig[key as keyof typeof chartConfig];
              if (!config) {
                return null;
              }

              return (
                <SelectItem
                  key={key}
                  value={key}
                  className="rounded-lg [&_span]:flex"
                >
                  <div className="flex items-center gap-2 text-xs">
                    <span
                      className="flex h-3 w-3 shrink-0 rounded-sm"
                      style={{
                        backgroundColor: `var(--color-${key})`,
                      }}
                    />
                    {config?.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        <ChartContainer
          id={id}
          config={chartConfig}
          className="mx-auto aspect-square w-full max-w-[300px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={desktopData}
              dataKey="desktop"
              nameKey="distrito"
              innerRadius={60}
              strokeWidth={5}
              activeIndex={activeIndex}
              activeShape={({
                outerRadius = 0,
                ...props
              }: PieSectorDataItem) => (
                <g>
                  <Sector {...props} outerRadius={outerRadius + 10} />
                  <Sector
                    {...props}
                    outerRadius={outerRadius + 25}
                    innerRadius={outerRadius + 12}
                  />
                </g>
              )}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {desktopData[activeIndex].desktop.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Ventas
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
