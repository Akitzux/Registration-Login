
import React from "react";
import {
  Home,
  "task-list" as TaskList,
  Calendar,
  Leave,
  Payroll,
  FileText,
  FilePlus,
  FileMinus,
  FileX,
  Edit,
  Users,
  User,
  Settings,
  ClockInOut,
  Search,
} from "lucide-react";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

const sidebarNav = [
  { label: "Home", icon: Home, to: "#" },
  { label: "Task List", icon: "task-list", to: "#" },
  { label: "Calendar", icon: Calendar, to: "#" },
  { label: "Leave", icon: Leave, to: "#" },
  { label: "Attendance", icon: ClockInOut, to: "#" },
  { label: "Payroll", icon: Payroll, to: "#" },
  { label: "Recruitment", icon: Users, to: "#" },
  { label: "Personnel Info", icon: User, to: "#" },
  { label: "Settings", icon: Settings, to: "#" },
];

const birthdays = [
  { id: "SG011", name: "Jerry N", date: "09 March", company: "PinkCloud Service Ltd", dept: "Sales & Marketing" },
  { id: "SG011", name: "Daniel H", date: "11 March", company: "PinkCloud Service Ltd", dept: "R&D" },
  { id: "SG001", name: "Susan K", date: "12 March", company: "PinkCloud Service Ltd", dept: "R&D" },
  { id: "SG002", name: "John D", date: "14 March", company: "PinkCloud Asia Ltd", dept: "Finance" },
  { id: "SG012", name: "Kate T", date: "28 March", company: "PinkCloud Asia Ltd", dept: "Finance" },
  { id: "SG003", name: "Thomas L", date: "30 March", company: "PinkCloud Asia Ltd", dept: "Sales & Marketing" },
  { id: "SG005", name: "Sally B", date: "03 April", company: "PinkCloud Asia Ltd", dept: "R&D" },
  { id: "SG006", name: "Steven M", date: "08 April", company: "PinkCloud Asia Ltd", dept: "Finance" }
];

const shifts = [
  { day: "Friday", hours: "09:00 - 18:00" },
  { day: "Thursday", hours: "09:00 - 18:00" },
  { day: "Wednesday", hours: "09:00 - 18:00" }
];

const newJoiner = {
  avatar: "/lovable-uploads/147ba24c-fcf7-4938-8e88-a7c3acd7d871.png",
  name: "Jane Do",
  company: "PinkCloud Service Ltd.",
  dept: "Sales",
  title: "Sales Executive",
  joinDate: "2024-03-01",
  localName: "Jane"
};

function Sidebar() {
  return (
    <aside className="bg-pink-200 min-h-screen w-56 py-6 px-3 flex flex-col text-pink-900 shadow-xl border-r border-pink-300">
      <div className="text-2xl font-extrabold text-pink-700 mb-6 tracking-wider text-center select-none">
        PINKO HR
      </div>
      <nav className="flex-1">
        <ul className="space-y-1">
          {sidebarNav.map(({ label, icon, to }) => {
            const Icon = typeof icon === "string" ? Home : icon; // fallback
            return (
              <li key={label}>
                <a
                  href={to}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-pink-100 font-semibold text-base transition-colors"
                >
                  <Icon className="w-5 h-5 opacity-80" />
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="mt-10 text-xs text-pink-500 text-center">
        PINKO. All Rights Reserved
        <br />
        Version - 1.0.0
      </div>
    </aside>
  );
}

function EmployeeBirthdays() {
  return (
    <div className="bg-white/95 rounded-md shadow-md border px-4 pt-2 pb-3 flex flex-col h-full">
      <h3 className="font-bold text-pink-800 text-lg mb-2">Employee Birthday</h3>
      <div className="mb-2 flex items-center gap-2">
        <div className="relative flex flex-1">
          <input
            placeholder="Search employee"
            className="pl-9 pr-3 py-1.5 border rounded bg-pink-50 text-sm text-pink-900 w-full focus:outline-pink-400"
          />
          <Search className="absolute left-2 top-2 w-4 h-4 text-pink-400" />
        </div>
        <Button className="text-xs h-7 bg-pink-200 text-pink-900 border border-pink-300 hover:bg-pink-300">Go</Button>
      </div>
      <div className="overflow-auto flex-1">
        <Table>
          <TableHeader>
            <TableRow className="text-pink-900 border-b-pink-200">
              <TableHead>Employee</TableHead>
              <TableHead>Birthday</TableHead>
              <TableHead>Company</TableHead>
              <TableHead>Department</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {birthdays.map((e, idx) => (
              <TableRow key={idx} className="text-sm odd:bg-pink-50">
                <TableCell className="font-semibold">{e.id} - {e.name}</TableCell>
                <TableCell>{e.date}</TableCell>
                <TableCell>{e.company}</TableCell>
                <TableCell>{e.dept}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-2 px-1 text-xs">
        <span>Page 1 of 1 ({birthdays.length} items)</span>
        <div className="flex gap-1">
          <Button size="sm" className="h-6 w-6 p-0 text-xs bg-pink-100 text-pink-700 border border-pink-200">&lt;</Button>
          <span className="px-2 text-pink-800 font-bold">1</span>
          <Button size="sm" className="h-6 w-6 p-0 text-xs bg-pink-100 text-pink-700 border border-pink-200">&gt;</Button>
        </div>
        <label>
          <span>Page Size</span>
          <select className="ml-1 border bg-white rounded text-pink-900 text-xs px-1 py-0.5">
            <option>10</option>
          </select>
        </label>
      </div>
    </div>
  );
}

function WeeklySchedule() {
  return (
    <div className="bg-white/95 rounded-md shadow-md border px-4 pt-2 pb-3 flex flex-col h-full min-h-[170px]">
      <h3 className="font-bold text-pink-800 text-lg mb-2">Weekly Schedule</h3>
      <ul className="flex-1 flex flex-col gap-2">
        {shifts.map((s, i) => (
          <li key={i} className="flex justify-between text-pink-900 text-sm items-center px-1">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-red-300 inline-block mr-2"></span>
              {s.day}
            </div>
            <span className="tracking-wider">{s.hours}</span>
            <span>-</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-end mt-auto gap-1">
        <Button size="icon" variant="ghost" className="h-6 w-6 p-0 text-pink-300">
          &lt;
        </Button>
        <Button size="icon" variant="ghost" className="h-6 w-6 p-0 text-pink-300">
          &gt;
        </Button>
      </div>
    </div>
  );
}

function NewJoiner() {
  return (
    <div className="bg-white/95 rounded-md shadow-md border px-4 pt-2 pb-3 h-full flex flex-col gap-2">
      <h3 className="font-bold text-pink-800 text-lg mb-2">New Joiner</h3>
      <div className="flex gap-3 items-center">
        <img
          src={newJoiner.avatar}
          className="w-20 h-20 rounded-full border-2 border-pink-300 object-cover"
          alt={newJoiner.name}
        />
        <div className="flex-1 space-y-1">
          <div className="grid grid-cols-2 text-sm text-pink-900">
            <span className="font-semibold">Employee Name:</span>
            <span>{newJoiner.name}</span>
            <span className="font-semibold">Local Name:</span>
            <span>{newJoiner.localName}</span>
            <span className="font-semibold">Company:</span>
            <span>{newJoiner.company}</span>
            <span className="font-semibold">Department:</span>
            <span>{newJoiner.dept}</span>
            <span className="font-semibold">Designation:</span>
            <span>{newJoiner.title}</span>
            <span className="font-semibold">Join Date:</span>
            <span>{newJoiner.joinDate}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-1 mt-1">
        <Button size="icon" variant="ghost" className="h-6 w-6 p-0 text-pink-300">
          &lt;
        </Button>
        <Button size="icon" variant="ghost" className="h-6 w-6 p-0 text-pink-300">
          &gt;
        </Button>
      </div>
    </div>
  );
}

function InternalJob() {
  return (
    <div className="bg-white/95 rounded-md shadow-md border px-4 pt-2 pb-2">
      <h3 className="font-bold text-pink-800 text-lg mb-2">Internal Job</h3>
      <p className="text-pink-700 text-sm">• Talent Referral Program</p>
    </div>
  );
}

function UsefulLink() {
  return (
    <div className="bg-white/95 rounded-md shadow-md border px-4 pt-2 pb-2">
      <h3 className="font-bold text-pink-800 text-lg mb-2">Useful Link</h3>
      <p>
        <a
          href="https://www.pinkcloud.example/hr"
          className="text-pink-700 hover:underline text-sm"
          target="_blank" rel="noopener noreferrer"
        >
          www.pinkcloud.example/hr
        </a>
      </p>
    </div>
  );
}

const Home = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-r from-pink-100 via-pink-200 to-pink-50">
      <Sidebar />
      <main className="flex-1 p-5 grid grid-cols-4 grid-rows-3 gap-5">
        <div className="col-span-2 row-span-2 flex flex-col">
          <EmployeeBirthdays />
        </div>
        <div className="col-span-2">
          <WeeklySchedule />
        </div>
        <div className="row-span-2 flex flex-col">
          <NewJoiner />
        </div>
        <div>
          <InternalJob />
        </div>
        <div>
          <UsefulLink />
        </div>
      </main>
    </div>
  );
};

export default Home;
