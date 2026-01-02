export default function Footer() {
  const teams = [
    "Karachi Kings",
    "Lahore Qalandars",
    "Islamabad United",
    "Peshawar Zalmi",
    "Quetta Gladiators",
    "Multan Sultans",
  ];

  return (
    <footer className="mt-20 bg-gradient-to-t from-black via-zinc-900 to-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            PSL Teams Hub
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Pakistan Super League teams ka modern showcase. Built with Next.js &
            Tailwind CSS.
          </p>
        </div>

        {/* Teams */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">PSL Teams</h3>
          <ul className="space-y-2">
            {teams.map((team) => (
              <li
                key={team}
                className="text-gray-400 hover:text-purple-400 hover:translate-x-1 transition-all duration-300 cursor-pointer"
              >
                {team}
              </li>
            ))}
          </ul>
        </div>

        {/* Extra */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Explore</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-pink-400 transition">Teams</li>
            <li className="hover:text-pink-400 transition">Stats</li>
            <li className="hover:text-pink-400 transition">Schedule</li>
            <li className="hover:text-pink-400 transition">About PSL</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © 2026 PSL Teams Hub — All rights reserved.
      </div>
    </footer>
  );
}
