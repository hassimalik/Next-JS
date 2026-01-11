"use client";

export default function TeamsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <main>
        {children}
      </main>
    </div>
  );
}
