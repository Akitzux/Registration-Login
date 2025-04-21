
import React from "react";
import { Bell } from "lucide-react";

type Announcement = { id: number; text: string; date: string };

export default function AnnouncementCard({
  title,
  announcements = [],
}: {
  title: string;
  announcements: Announcement[];
}) {
  return (
    <div className="bg-white/90 rounded-xl border shadow-sm p-5 flex flex-col gap-3">
      <div className="flex items-center gap-2 mb-1">
        <Bell className="w-5 h-5 text-primary" />
        <h3 className="font-semibold text-foreground">{title}</h3>
      </div>
      <ul className="space-y-2">
        {announcements.map((a) => (
          <li key={a.id} className="text-[0.97rem] text-muted-foreground">
            <span className="font-medium">{a.text}</span>
            <span className="block text-xs text-muted-foreground opacity-65">
              {new Date(a.date).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
