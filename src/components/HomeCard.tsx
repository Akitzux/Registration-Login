
import React from "react";

const HomeCard = () => {
  return (
    <div className="w-full max-w-md bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center gap-6 animate-fade-in">
      <h2 className="text-3xl font-extrabold text-primary mb-2 text-center tracking-tight drop-shadow-sm">
        Welcome to Client X
      </h2>
      <p className="text-gray-600 text-lg text-center">
        This is your portal homepage.<br />
        Select a tab to get started or navigate to another section.
      </p>
      <img
        src="/lovable-uploads/7814240d-a31b-4c08-b011-6be663c0b9e2.png"
        alt="Client X Home"
        className="w-24 h-24 rounded-xl object-cover shadow-md"
        draggable={false}
      />
    </div>
  );
};

export default HomeCard;
