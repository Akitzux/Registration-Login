
import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";
import HomeCard from "../components/HomeCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

const Index = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #7e69ab 0%, #9b87f5 60%, #e5deff 100%)',
      }}
    >
      <img
        src="/lovable-uploads/7814240d-a31b-4c08-b011-6be663c0b9e2.png"
        alt="Purple landscape background"
        className="fixed inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none opacity-95"
        draggable={false}
      />
      <Navbar />
      <main className="flex flex-1 items-center justify-center py-24">
        <Tabs defaultValue="login" className="w-full max-w-md">
          <TabsList className="w-full mb-8 bg-white/70 rounded-xl shadow">
            <TabsTrigger value="login" className="w-1/2">Log In</TabsTrigger>
            <TabsTrigger value="home" className="w-1/2">Home</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
            <LoginCard />
          </TabsContent>
          <TabsContent value="home">
            <HomeCard />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;
