
import React from "react";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@/components/ui/table";
import { Clock, LogIn, LogOut } from "lucide-react";

type Break = { start: string; end: string; duration: string };
type DayAttendance = {
  date: string;
  login: string;
  logout: string;
  breaks: Break[];
};

// Mock data for Monday to Friday
const attendanceData: DayAttendance[] = [
  {
    date: "Mon, 22 Apr",
    login: "09:02 AM",
    logout: "06:12 PM",
    breaks: [
      { start: "01:10 PM", end: "01:40 PM", duration: "30 min" },
      { start: "04:00 PM", end: "04:15 PM", duration: "15 min" },
    ],
  },
  {
    date: "Tue, 23 Apr",
    login: "09:11 AM",
    logout: "06:04 PM",
    breaks: [
      { start: "12:58 PM", end: "01:33 PM", duration: "35 min" },
    ],
  },
  {
    date: "Wed, 24 Apr",
    login: "08:59 AM",
    logout: "05:50 PM",
    breaks: [
      { start: "01:15 PM", end: "01:45 PM", duration: "30 min" },
      { start: "03:50 PM", end: "04:00 PM", duration: "10 min" },
    ],
  },
  {
    date: "Thu, 25 Apr",
    login: "09:14 AM",
    logout: "06:33 PM",
    breaks: [
      { start: "01:23 PM", end: "01:59 PM", duration: "36 min" },
      { start: "04:05 PM", end: "04:20 PM", duration: "15 min" },
    ],
  },
  {
    date: "Fri, 26 Apr",
    login: "09:10 AM",
    logout: "06:30 PM",
    breaks: [
      { start: "12:45 PM", end: "01:28 PM", duration: "43 min" },
    ],
  },
];

const AttendanceTable = () => (
  <div className="w-full rounded-lg bg-white/90 shadow border-0 p-0 max-w-full">
    <div className="px-4 pt-2 pb-1 flex items-center gap-1.5 text-xs font-semibold text-violet-700">
      <Clock size={14} />
      Weekly Attendance Details (Mon–Fri)
    </div>
    <Table className="min-w-full text-xs border-0">
      <TableHeader>
        <TableRow>
          <TableHead className="pl-4 py-1">Date</TableHead>
          <TableHead className="py-1">
            <span className="inline-flex gap-1 items-center"><LogIn className="w-3.5 h-3.5 text-green-500" />Login</span>
          </TableHead>
          <TableHead className="py-1">
            <span className="inline-flex gap-1 items-center"><LogOut className="w-3.5 h-3.5 text-red-500" />Logout</span>
          </TableHead>
          <TableHead className="py-1">Break(s)</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {attendanceData.map((d, idx) => (
          <TableRow key={idx} className="hover:bg-purple-50/80">
            <TableCell className="pl-4 py-1 font-medium text-gray-700">{d.date}</TableCell>
            <TableCell className="py-1 text-gray-800">{d.login}</TableCell>
            <TableCell className="py-1 text-gray-800">{d.logout}</TableCell>
            <TableCell className="py-1 text-gray-700">
              <ul className="space-y-0.5 text-[10px]">
                {d.breaks.map((b, i) => (
                  <li key={i} className="flex gap-1.5 items-center">
                    <span className="bg-pink-100 rounded px-1 text-pink-800 font-semibold">{b.duration}</span>
                    <span className="text-gray-500">
                      {b.start} - {b.end}
                    </span>
                  </li>
                ))}
              </ul>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
);

export default AttendanceTable;
