
import React from "react";
import { cn } from "@/lib/utils";

type DashboardStatCardProps = {
  label: string;
  value: number;
  icon: React.ElementType;
  color?: string; // tailwind bg-gradient string
};

export default function DashboardStatCard({
  label,
  value,
  icon: Icon,
  color = "from-gray-100 to-gray-300",
}: DashboardStatCardProps) {
  return (
    <div className={cn(
      "flex items-center gap-4 rounded-xl p-5 shadow-sm bg-gradient-to-br",
      color
    )}>
      <div className="bg-white/60 shadow rounded-full p-3">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
