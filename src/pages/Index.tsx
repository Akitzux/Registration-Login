import Navbar from "../components/Navbar";
import LoginCard from "../components/LoginCard";

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
        <LoginCard />
      </main>
    </div>
  );
};

export default Index;
