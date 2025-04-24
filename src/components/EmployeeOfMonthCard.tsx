
import React from "react";
import { Award } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const EmployeeOfMonthCard = () => (
  <Card className="w-full bg-white shadow-xl border-0 flex items-center gap-1 px-1.5 py-1">
    <img
      src="/lovable-uploads/7814240d-a31b-4c08-b011-6be663c0b9e2.png"
      alt="Employee of the Month"
      className="w-10 h-10 rounded-full object-cover border-2 border-[#9b87f5] bg-gray-100 flex-shrink-0"
      draggable={false}
    />
    <div className="flex-1">
      <CardHeader className="p-0 pb-0.5 flex flex-row items-center gap-1">
        <Award stroke="#9b87f5" size={12} />
        <CardTitle className="text-xs font-semibold text-primary m-0">Employee of the Month</CardTitle>
      </CardHeader>
      <CardContent className="p-0 text-[10px] text-gray-700">
        <div className="font-bold">Akash Verma</div>
        <div className="text-[8px] text-gray-500">Sales Manager</div>
        <div className="text-[8px] mt-0.5">For outstanding performance in March 🎉</div>
      </CardContent>
    </div>
  </Card>
);

export default EmployeeOfMonthCard;
