
import Navbar from "../components/Navbar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { User, LogIn, LogOut, Clock } from "lucide-react";

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

const Home = () => {
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
      <main className="flex flex-1 flex-col items-center justify-center py-12">
        {/* Employee Details Card */}
        <Card className="max-w-xl w-full mb-8 shadow-xl bg-white/75 backdrop-blur-sm border-0">
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
              <div className="font-medium">{employee.email}</div>
            </div>
            <div>
              <span className="text-xs text-gray-600">Phone</span>
              <div className="font-medium">{employee.phone}</div>
            </div>
          </CardContent>
        </Card>
        {/* Attendance / Timings */}
        <Card className="max-w-xl w-full shadow-lg bg-white/80 border-0">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center gap-2 text-lg text-primary">
              <Clock className="text-primary" />
              Attendance Today
            </CardTitle>
            <CardDescription>Track login, logout, and break timings for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
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
            <div className="mt-4">
              <div className="font-semibold text-sm mb-2 flex items-center gap-1">
                <Clock size={18} className="text-primary" />
                Breaks
              </div>
              <ul className="space-y-2">
                {attendance.breaks.map((b, i) => (
                  <li key={i} className="flex items-center gap-4 text-base">
                    <span className="bg-pink-200 rounded text-pink-900 px-2 py-0.5 text-xs">Break {i + 1}</span>
                    <span className="text-gray-600">From <span className="font-medium">{b.start}</span></span>
                    <span className="text-gray-600">To <span className="font-medium">{b.end}</span></span>
                    <span className="ml-auto text-xs text-gray-500">({b.duration})</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Home;
