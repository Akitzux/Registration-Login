
import Navbar from "../components/Navbar";

const Contact = () => {
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
        className="fixed inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none opacity-90"
        draggable={false}
      />
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center py-24">
        <h2 className="text-3xl font-bold text-primary drop-shadow mb-4">Contact Us</h2>
        <p className="text-lg text-black/80 max-w-xl text-center">
          Reach out for questions or feedback. Add a contact form here if you like!
        </p>
      </main>
    </div>
  );
};

export default Contact;
