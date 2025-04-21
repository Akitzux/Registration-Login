
import Navbar from "../components/Navbar";

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
        className="fixed inset-0 w-full h-full object-cover object-center -z-10 pointer-events-none opacity-90"
        draggable={false}
      />
      <Navbar />
      <main className="flex flex-1 flex-col items-center justify-center py-24">
        <h2 className="text-3xl font-bold text-primary drop-shadow mb-4">Home: About MNC IT Companies</h2>
        <div className="bg-white/80 rounded-xl shadow-lg p-8 max-w-2xl text-pink-900 flex flex-col items-center gap-4">
          <p className="text-lg text-center font-semibold pb-2">
            MNC IT (Multi-National Corporation Information Technology) companies are renowned for driving innovation and digital transformation across the globe.
          </p>
          <ul className="text-base list-disc pl-6 text-left pb-4">
            <li>
              <span className="font-semibold text-pink-700">Global Presence:</span> MNC IT companies operate in multiple countries with diverse teams collaborating across time zones.
            </li>
            <li>
              <span className="font-semibold text-pink-700">Innovation:</span> They invest heavily in research and development, working on cutting-edge technologies like AI, Cloud Computing, and Cybersecurity.
            </li>
            <li>
              <span className="font-semibold text-pink-700">Work Culture & Rules:</span>
              <ul className="list-disc pl-6">
                <li>Emphasis on <span className="font-semibold text-pink-600">professionalism</span> and ethical conduct.</li>
                <li>Strict <span className="font-semibold text-pink-600">data privacy and security</span> protocols.</li>
                <li>Adherence to global <span className="font-semibold text-pink-600">compliance laws</span> and standards.</li>
                <li>Collaboration is key—teamwork across cultures is encouraged.</li>
                <li>Continuous learning and <span className="font-semibold text-pink-600">upskilling</span> are highly supported.</li>
                <li>Diversity and inclusion are considered vital for growth.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-pink-700">Examples:</span> Some leading MNC IT companies include <span className="font-semibold">Google, Microsoft, IBM, TCS, Infosys, Accenture, and Capgemini</span>.
            </li>
          </ul>
          <p className="italic text-pink-700 text-center mt-2">
            MNC IT firms shape the digital world by delivering solutions that connect people, improve business agility, and transform entire industries.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;

