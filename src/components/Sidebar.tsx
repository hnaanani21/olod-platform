'use client';

import { useState } from 'react';
import Link from 'next/link';

const navItems = [
  { icon: '🏠', label: 'Accueil', href: '/dashboard', badge: null },
  { icon: '🕸️', label: 'Dream Graph', href: '/dream-graph', badge: null },
  { icon: '🌍', label: 'Dream Nations', href: '/nations', badge: null },
  { icon: '📋', label: 'Projets', href: '/projects', badge: null },
  { icon: '🎯', label: 'Opportunités', href: '/opportunities', badge: null },
  { icon: '💬', label: 'Messages', href: '#', badge: 5 },
  { icon: '🔔', label: 'Notifications', href: '#', badge: 12 },
  { icon: '🎓', label: 'Dream Academy', href: '#', badge: null },
  { icon: '📅', label: 'Événements', href: '#', badge: null },
  { icon: '📱', label: 'QR Code Connect', href: '#', badge: null },
  { icon: '📚', label: 'Ressources', href: '#', badge: null },
  { icon: '⚙️', label: 'Paramètres', href: '#', badge: null },
];

export default function Sidebar() {
  const [active, setActive] = useState('Accueil');

  return (
    <div className="w-[185px] flex-shrink-0 bg-[#080c1a] border-r border-white/10 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">O</span>
          </div>
          <div>
            <div className="font-bold text-white text-sm leading-tight">OLOD</div>
            <div className="text-white/40 text-xs leading-tight">One Life One Dream</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 py-2 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setActive(item.label)}
            className={`flex items-center gap-3 px-4 py-2.5 text-sm transition-colors relative ${
              active === item.label
                ? 'bg-blue-600/20 text-white border-r-2 border-blue-500'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="bg-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Bottom card */}
      <div className="p-3 border-t border-white/10">
        <div className="bg-gradient-to-br from-blue-900/60 to-purple-900/60 border border-purple-500/20 rounded-xl p-3">
          <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">🌐</div>
          <p className="text-xs font-semibold text-white mb-1">Rejoignez une Nation</p>
          <p className="text-xs text-white/50 mb-2">Découvrez vos affinités et trouvez votre tribu.</p>
          <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-1.5 text-xs font-medium transition-colors">
            Explorer les Nations →
          </button>
        </div>
      </div>
    </div>
  );
}
