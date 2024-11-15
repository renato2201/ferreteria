import { VentasChart, VentasDistritosChart } from "@/components";

export default function Dashboard() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <VentasChart />
      <VentasDistritosChart />
    </div>
  );
}
