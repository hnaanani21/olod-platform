'use client';

import { useState } from 'react';
import Link from 'next/link';
import { mockCurrentUser } from '@/lib/data';
import { getRoleColor } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Accueil', icon: '🏠' },
  { href: '/dashboard', label: 'Dashboard', icon: '📊' },
  { href: '/dream-graph', label: 'Dream Graph', icon: '🔗' },
  { href: '/matching', label: 'Matching', icon: '✨' },
  { href: '/missions', label: 'Missions', icon: '🎯' },
  { href: '/nations', label: 'Nations', icon: '🌍' },
  { href: '/oip', label: 'OIP Points', icon: '💫' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const user = mockCurrentUser;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-white/5 backdrop-blur-xl rounded-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white font-black text-sm">OL</span>
            </div>
            <div>
              <span className="font-black text-white text-lg tracking-tight">OLOD</span>
              <span className="text-xs text-indigo-400 block leading-none -mt-1">One Life One Dream</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-all"
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* OIP badge */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20">
              <span className="text-xs">💫</span>
              <span className="text-amber-300 font-semibold text-sm">{user.oipPoints.toLocaleString()}</span>
              <span className="text-amber-400/60 text-xs">OIP</span>
            </div>

            {/* User avatar */}
            <div className="flex items-center gap-2">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:scale-105 transition-transform shadow-lg"
                style={{ background: `linear-gradient(135deg, ${getRoleColor(user.role)}, ${getRoleColor(user.role)}99)` }}
              >
                {user.avatar}
              </div>
            </div>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menu"
            >
              <div className="w-5 h-5 flex flex-col justify-center gap-1">
                <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/5 bg-cosmic-900/95 backdrop-blur-xl">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-slate-300 hover:text-white hover:bg-white/8 transition-all"
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
