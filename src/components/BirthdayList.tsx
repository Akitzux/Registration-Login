
import React from "react";
import { Cake } from "lucide-react";

type Birthday = { name: string; date: string; dept?: string };

export default function BirthdayList({ birthdays }: { birthdays: Birthday[] }) {
  return (
    <div className="bg-white/90 rounded-xl border shadow-sm p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <Cake className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">Upcoming Birthdays</h3>
      </div>
      <ul className="space-y-2">
        {birthdays.length === 0 && (
          <li className="text-sm text-muted-foreground">No birthdays this week.</li>
        )}
        {birthdays.map((b, idx) => (
          <li key={idx} className="flex justify-between">
            <span className="font-medium">{b.name}</span>
            <span className="text-xs text-muted-foreground">{b.date} {b.dept && <span>({b.dept})</span>}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
