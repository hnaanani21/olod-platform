'use client';

import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileTabs from '@/components/ProfileTabs';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import OpportunitiesSection from '@/components/OpportunitiesSection';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div className="flex h-screen bg-[#0a0e1a] text-white overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <TopBar />
        <ProfileHeader />
        <ProfileTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <div className="flex gap-4 p-4">
          <div className="w-[300px] flex-shrink-0 space-y-4">
            <AboutSection />
          </div>
          <div className="flex-1 space-y-4">
            <ProjectsSection />
            <ActivityFeed />
          </div>
          <div className="w-[300px] flex-shrink-0 space-y-4">
            <OpportunitiesSection />
            <ProgressionSection />
            <UpgradeCard />
          </div>
        </div>
      </main>
    </div>
  );
}

function TopBar() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-[#0d1225] border-b border-white/10">
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Rechercher un membre, un projet, une Nation..."
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white/70 placeholder-white/30 focus:outline-none focus:border-purple-500"
        />
        <span className="absolute right-3 top-2 text-white/30 text-xs">⌘K</span>
      </div>
      <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
        <span>✨</span> Partager un rêve
      </button>
      <button className="flex items-center gap-2 bg-blue-600/20 border border-blue-500/30 hover:bg-blue-600/30 px-4 py-2 rounded-lg text-sm transition-colors">
        <span>🤝</span> Trouver des collaborateurs
      </button>
      <button className="flex items-center gap-2 bg-green-600/20 border border-green-500/30 hover:bg-green-600/30 px-4 py-2 rounded-lg text-sm transition-colors">
        <span>📅</span> Rejoindre un projet
      </button>
      <button className="flex items-center gap-2 bg-orange-600/20 border border-orange-500/30 hover:bg-orange-600/30 px-4 py-2 rounded-lg text-sm transition-colors">
        <span>🌍</span> Explorer les Nations
      </button>
      <button className="flex items-center gap-2 bg-cyan-600/20 border border-cyan-500/30 hover:bg-cyan-600/30 px-4 py-2 rounded-lg text-sm transition-colors">
        <span>📱</span> Connect (QR)
      </button>
      <button className="relative p-2 hover:bg-white/10 rounded-lg">
        <span>✉️</span>
      </button>
      <button className="relative p-2 hover:bg-white/10 rounded-lg">
        <span>🔔</span>
        <span className="absolute -top-1 -right-1 bg-purple-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">12</span>
      </button>
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 overflow-hidden flex items-center justify-center text-xs font-bold">
        HN
      </div>
    </div>
  );
}

function ActivityFeed() {
  const activities = [
    { icon: '🌍', text: 'Vous avez rejoint la Nation des Bâtisseurs du Futur', time: 'il y a 2 jours', color: 'bg-green-500' },
    { icon: '🏆', text: 'Nouveau badge : Innovateur Digital', sub: 'Pour avoir lancé votre première plateforme IA', time: 'il y a 3 jours', color: 'bg-yellow-500' },
    { icon: '💬', text: 'Samir Essatim a commenté votre projet OLOD', sub: '"Excellent travail Hassan, la vision est claire et impactante !"', time: 'il y a 4 jours', color: 'bg-blue-500' },
    { icon: '🤝', text: 'Nouvelle connexion : Dr. Abdessamad Faik', time: 'il y a 5 jours', color: 'bg-purple-500' },
  ];

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Mon fil d&apos;activité</h3>
        <button className="text-purple-400 text-sm hover:text-purple-300">Voir tout →</button>
      </div>
      <div className="space-y-3">
        {activities.map((a, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className={`w-8 h-8 rounded-full ${a.color} flex items-center justify-center text-sm flex-shrink-0`}>
              {a.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-white/80">{a.text}</p>
              {a.sub && <p className="text-xs text-white/50 italic mt-0.5">{a.sub}</p>}
              <p className="text-xs text-white/30 mt-1">{a.time}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3">
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-xs font-bold flex-shrink-0">HN</div>
        <input type="text" placeholder="Écrivez un message..." className="flex-1 bg-white/5 rounded-lg px-3 py-1.5 text-sm text-white/70 placeholder-white/30 focus:outline-none" />
        <button className="text-purple-400 hover:text-purple-300">➤</button>
      </div>
    </div>
  );
}

function ProgressionSection() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-white">Ma progression</h3>
        <button className="text-purple-400 text-sm hover:text-purple-300">Voir les détails →</button>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="2.5" />
            <circle cx="18" cy="18" r="15.9" fill="none" stroke="#8b5cf6" strokeWidth="2.5"
              strokeDasharray="82 100" strokeLinecap="round" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-xs font-bold text-white">Niveau 7</span>
            <span className="text-xs text-purple-400">Expert</span>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs text-white/50 mb-2">1 850 / 2 500 XP</p>
          <div className="w-full bg-white/10 rounded-full h-1.5 mb-3">
            <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '74%' }} />
          </div>
          <p className="text-xs text-white/50 mb-1">Prochains badges</p>
          <div className="flex gap-2">
            {['🔮', '🌟', '💡'].map((badge, i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm">{badge}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function UpgradeCard() {
  return (
    <div className="relative bg-gradient-to-br from-blue-900 to-purple-900 border border-purple-500/30 rounded-xl p-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url(/hero-bg.jpg)', backgroundSize: 'cover' }} />
      <div className="relative">
        <span className="text-2xl">👑</span>
        <h3 className="font-bold text-white mt-1">Passez au niveau supérieur</h3>
        <p className="text-xs text-white/70 mt-1 mb-3">Accédez à des outils exclusifs et des opportunités pour développer vos projets.</p>
        <button className="w-full bg-white/20 hover:bg-white/30 border border-white/20 rounded-lg py-2 text-sm font-medium transition-colors">
          Découvrir les abonnements →
        </button>
      </div>
    </div>
  );
}
