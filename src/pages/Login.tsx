
import Navbar from "../components/Navbar";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div
      className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{
        background: 'linear-gradient(90deg, #FFD6E8 0%, #FFB1D2 60%, #FFDEE2 100%)',
      }}
    >
      <img
        src="/lovable-uploads/e856a8a0-9efd-4ee7-807b-1ef09cbe963a.png"
        alt="Custom background"
        className="fixed inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none opacity-90"
        draggable={false}
      />
      <Navbar />
      <main className="flex flex-1 items-center justify-center py-24">
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;

