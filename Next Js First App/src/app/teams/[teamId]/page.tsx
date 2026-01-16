"use client"
import { useSearchParams } from "next/navigation";
import { use } from "react";

type PageProps = {
  params: { teamId: string };
};

export default function TeamPage({ params }: PageProps) {
  const { teamId } = use(Promise.resolve(params));
  // Dummy data for teams
  const searchparams = useSearchParams();
  const teamData = {
    Peshawar: { name: "Peshawar 🚀", members: 10, color: "bg-[#ead811]" },
    Quetta: { name: "Quetta 🔥", members: 15, color: "bg-[#220651]" },
    Islamabad: { name: "Islamabad 🌟", members: 12, color: "bg-[orange]" },
    Multan: { name: "Multan 🦁", members: 10, color: "bg-[#074243]" },
    Karachi: { name: "Karachi 🚀", members: 10, color: "bg-[#0e1c7a]" },
  };
  const team = teamData[teamId] || {
    name: "Unknown Team ❌",
    members: 0,
    color: "from-gray-700 via-gray-600 to-gray-500",
  };
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div
        className={`max-w-md w-full p-8 rounded-2xl shadow-2xl bg-gradient-to-br ${team.color} text-white text-center transform transition-all hover:scale-105`}
      >
        <h2 className="text-4xl font-extrabold mb-4">{team.name}</h2>
        <p className="text-lg mb-2">
          Team ID: <span className="font-semibold">{teamId}</span>
        </p>
        <p>So u searched or at the {searchparams}</p>
        <p className="text-lg mb-6">
          Number of Members:{" "}
          <span className="font-semibold">{team.members}</span>
        </p>
        {/* Example buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-white/20 hover:bg-white/40 rounded-xl text-lg font-semibold transition transform hover:-translate-y-1 hover:scale-105 shadow-lg">
            View Members
          </button>
          <button className="px-6 py-3 bg-white/20 hover:bg-white/40 rounded-xl text-lg font-semibold transition transform hover:-translate-y-1 hover:scale-105 shadow-lg">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
