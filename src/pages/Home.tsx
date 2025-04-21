
import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Home as HomeIcon,
  Users,
  Calendar,
  Clock,
  Briefcase,
  FileText,
  Settings,
  Bell,
  Mail,
  LayoutDashboard,
  UserRound,
  TaskList
} from "lucide-react";
import DashboardStatCard from "@/components/DashboardStatCard";
import AnnouncementCard from "@/components/AnnouncementCard";
import BirthdayList from "@/components/BirthdayList";
import QuickLinksCard from "@/components/QuickLinksCard";

const sidebarItems = [
  { title: "Dashboard", url: "#", icon: LayoutDashboard },
  { title: "Employees", url: "#", icon: Users },
  { title: "Attendance", url: "#", icon: Clock },
  { title: "Leave", url: "#", icon: Calendar },
  { title: "Payroll", url: "#", icon: FileText },
  { title: "Projects", url: "#", icon: Briefcase },
  { title: "Tasks", url: "#", icon: TaskList },
  { title: "Settings", url: "#", icon: Settings },
];

export default function Home() {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-muted">
        <Sidebar>
          <SidebarHeader>
            <div className="flex items-center justify-center h-16">
              <img
                src="/lovable-uploads/08e82b6b-afe0-43d9-ac7f-8267cb3de151.png"
                alt="Company Logo"
                className="h-11 w-auto rounded-md shadow"
              />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {sidebarItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <a href={item.url} className="flex gap-2 items-center">
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarFooter>
            <div className="flex items-center gap-3 border-t border-border p-3">
              <UserRound className="w-8 h-8 text-muted-foreground" />
              <div>
                <div className="text-sm font-semibold text-foreground">Jane Do</div>
                <div className="text-xs text-muted-foreground">HR Manager</div>
              </div>
            </div>
          </SidebarFooter>
        </Sidebar>
        {/* Dashboard main area */}
        <main className="flex-1 flex flex-col gap-6 p-7 bg-gradient-to-tr from-background to-muted/70">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                HRMS Dashboard
              </h1>
              <p className="text-sm text-muted-foreground">
                Welcome to the company HRMS portal for all your HR needs.
                <span className="block mt-2 max-w-2xl text-xs text-muted-foreground">
                  Multinational IT development companies follow best practices like diverse and inclusive recruitment, transparent policies, robust compliance, clear employee handbooks, and promote fair rules on attendance, ethics, leave, pay, and benefits.
                </span>
              </p>
            </div>
            {/* Optionally, alerts icon */}
            <div className="flex items-center gap-3">
              <Bell className="w-6 h-6 text-muted-foreground" />
              <Mail className="w-6 h-6 text-muted-foreground" />
            </div>
          </div>
          {/* Quick stats cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <DashboardStatCard
              label="Total Employees"
              value={325}
              icon={Users}
              color="from-pink-200 to-pink-400"
            />
            <DashboardStatCard
              label="Active Today"
              value={291}
              icon={Clock}
              color="from-green-200 to-green-300"
            />
            <DashboardStatCard
              label="On Leave"
              value={12}
              icon={Calendar}
              color="from-yellow-100 to-yellow-300"
            />
            <DashboardStatCard
              label="New Joiners"
              value={5}
              icon={UserRound}
              color="from-blue-100 to-blue-300"
            />
          </section>
          {/* Lower content widgets */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnnouncementCard
              title="Notice Board / Announcements"
              announcements={[
                {
                  id: 1,
                  text: "20th April: Company Annual Day, Main Hall, 3 PM onwards!",
                  date: "2025-04-20",
                },
                {
                  id: 2,
                  text: "28th April: IT Security Training - mandatory for all staff.",
                  date: "2025-04-28",
                }
              ]}
            />
            <BirthdayList
              birthdays={[
                { name: "Alex Johnson", date: "21 Apr", dept: "Engineering" },
                { name: "Megha Nair", date: "25 Apr", dept: "Support" },
                { name: "Simon Liu", date: "29 Apr", dept: "Design" },
              ]}
            />
            <QuickLinksCard
              links={[
                { name: "HR Handbook", url: "#", icon: FileText },
                { name: "Apply Leave", url: "#", icon: Calendar },
                { name: "Attendance", url: "#", icon: Clock },
                { name: "Payroll Details", url: "#", icon: FileText },
                { name: "Contact HR", url: "#", icon: Mail },
              ]}
            />
          </section>
        </main>
        <SidebarTrigger className="fixed top-5 left-2 z-50 bg-white border rounded-full shadow" />
      </div>
    </SidebarProvider>
  );
}
