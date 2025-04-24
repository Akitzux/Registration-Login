import Navbar from "../components/Navbar";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { User, LogIn, LogOut, Clock, ChartBar } from "lucide-react";
import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { Button } from "@/components/ui/button";
import EmployeeOfMonthCard from "@/components/EmployeeOfMonthCard";
import ApplyLeaveModal from "@/components/ApplyLeaveModal";
import AttendanceTable from "@/components/AttendanceTable";
import { useIsMobile } from "../hooks/use-mobile";

const employee = {
  name: "Priya Sharma",
  employeeId: "EMP-0458",
  designation: "HR Executive",
  department: "Human Resources",
  email: "priya.sharma@company.com",
  phone: "+91-9001234567",
};

const attendance = {
  loginTime: "09:02 AM",
  logoutTime: "06:12 PM",
  breaks: [
    { start: "01:10 PM", end: "01:40 PM", duration: "30 min" },
    { start: "04:00 PM", end: "04:15 PM", duration: "15 min" },
  ],
};

const weeklyOnlineData = [
  { day: "Mon", minutes: 430 }, // 7h10m
  { day: "Tue", minutes: 480 }, // 8h
  { day: "Wed", minutes: 410 }, // 6h50m
  { day: "Thu", minutes: 455 }, // 7h35m
  { day: "Fri", minutes: 500 }, // 8h20m
];

const formatMinutes = (mins: number) => {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return `${h}h ${m}m`;
};

const chartConfig = {
  online: {
    label: "Online Time",
    icon: ChartBar,
    color: "#9b87f5",
  },
};

const Home = () => {
  const isMobile = useIsMobile();

  const handleLogin = () => {
    console.log("Login tracked");
  };
  const handleLogout = () => {
    console.log("Logout tracked");
  };

  return (
    <div
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #FFD6E8 0%, #FFB1D2 60%, #FFDEE2 100%)',
      }}
    >
      <img
        src="/lovable-uploads/08e82b6b-afe0-43d9-ac7f-8267cb3de151.png"
        alt="Purple star nebula background"
        className="fixed inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none opacity-80"
        draggable={false}
      />
      <Navbar />
      <main className="flex flex-1 items-center justify-center w-full px-2">
        <div
          className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-2"} gap-5 w-full max-w-[1200px]"`}
          style={{ minHeight: "100svh", alignItems: "center" }}
        >
          <div className="flex flex-col gap-4 w-full">
            <EmployeeOfMonthCard />

            <Card className="w-full shadow-xl bg-white/75 backdrop-blur-sm border-0">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <span className="bg-primary/90 rounded-full p-3 text-white">
                  <User size={32} />
                </span>
                <div>
                  <CardTitle className="text-2xl">{employee.name}</CardTitle>
                  <CardDescription className="text-base mt-1">{employee.designation} &nbsp;|&nbsp; {employee.department}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid grid-cols-2 gap-y-1 gap-x-4 pt-0 pb-2">
                <div>
                  <span className="text-xs text-gray-600">Employee ID</span>
                  <div className="font-medium">{employee.employeeId}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-600">Email</span>
                  <div className="font-medium text-sm">{employee.email}</div>
                </div>
                <div>
                  <span className="text-xs text-gray-600">Phone</span>
                  <div className="font-medium">{employee.phone}</div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-3 justify-between">
              <Button
                variant="default"
                className="bg-[#8B5CF6] hover:bg-[#7E69AB] text-white font-semibold px-4 py-2 shadow-md w-full"
                onClick={handleLogin}
              >
                <span className="flex items-center gap-2 justify-center">
                  <LogIn className="w-5 h-5" /> Login
                </span>
              </Button>
              <Button
                variant="destructive"
                className="bg-[#ea384c] hover:bg-red-500 text-white font-semibold px-4 py-2 shadow-md w-full"
                onClick={handleLogout}
              >
                <span className="flex items-center gap-2 justify-center">
                  <LogOut className="w-5 h-5" /> Logout
                </span>
              </Button>
              <ApplyLeaveModal />
            </div>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <Card className="w-full shadow-lg bg-white/80 border-0">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  <Clock className="text-primary" />
                  Attendance Today
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <LogIn className="text-green-500" />
                    <span className="text-sm font-semibold">Login:</span>
                    <span className="text-base">{attendance.loginTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <LogOut className="text-red-400" />
                    <span className="text-sm font-semibold">Logout:</span>
                    <span className="text-base">{attendance.logoutTime}</span>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="font-semibold text-sm mb-1 flex items-center gap-1">
                    <Clock size={18} className="text-primary" />
                    Breaks
                  </div>
                  <ul className="space-y-1">
                    {attendance.breaks.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="bg-pink-200 rounded text-pink-900 px-1.5 py-0.5 text-xs">Break {i + 1}</span>
                        <span className="text-gray-600">From <span className="font-medium">{b.start}</span></span>
                        <span className="text-gray-600">To <span className="font-medium">{b.end}</span></span>
                        <span className="ml-auto text-xs text-gray-500">({b.duration})</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full shadow-lg bg-white/85 border-0">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 text-lg text-primary">
                  <ChartBar className="text-[#9b87f5]" />
                  Online Time (Mon-Fri)
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ChartContainer config={chartConfig}>
                  <BarChart width={isMobile ? 250 : 380} height={140} data={weeklyOnlineData}>
                    <XAxis
                      dataKey="day"
                      tick={{ fontSize: 13, fill: "#9b87f5" }}
                      axisLine={false}
                    />
                    <YAxis
                      tick={{ fontSize: 12, fill: "#b085d6" }}
                      axisLine={false}
                      tickFormatter={formatMinutes}
                      width={40}
                    />
                    <Tooltip
                      content={<ChartTooltipContent labelKey="day" formatter={(value: number) => formatMinutes(value)} />}
                    />
                    <Bar
                      dataKey="minutes"
                      fill="#9b87f5"
                      radius={[8, 8, 4, 4]}
                      maxBarSize={isMobile ? 26 : 28}
                      name="Online Time"
                    />
                  </BarChart>
                </ChartContainer>
              </CardContent>
            </Card>
            <AttendanceTable />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
