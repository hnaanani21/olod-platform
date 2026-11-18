'use client';

const tabs = [
  { id: 'profil', label: 'Mon profil' },
  { id: 'projets', label: 'Mes projets (3)' },
  { id: 'journal', label: 'Mon journal' },
  { id: 'connexions', label: 'Mes connexions (87)' },
  { id: 'badges', label: 'Mes badges (6)' },
  { id: 'parametres', label: 'Paramètres' },
];

export default function ProfileTabs({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  return (
    <div className="bg-[#0d1225] border-b border-white/10 px-6">
      <div className="flex gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-3 text-sm font-medium transition-colors border-b-2 ${
              activeTab === tab.id
                ? 'border-blue-500 text-white'
                : 'border-transparent text-white/50 hover:text-white/80'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
