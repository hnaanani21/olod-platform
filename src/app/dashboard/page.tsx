'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── Sidebar ────────────────────────────────────────────────────────────────
function Sidebar() {
  const items = [
    { icon: '🏠', label: 'Accueil', href: '/dashboard', active: true },
    { icon: '🕸️', label: 'Dream Graph', href: '/dream-graph' },
    { icon: '🌍', label: 'Dream Nations', href: '/nations' },
    { icon: '📋', label: 'Projets', href: '/projects' },
    { icon: '💬', label: 'Messages', href: '#', badge: 5, badgeColor: '#6366f1' },
    { icon: '🔔', label: 'Notifications', href: '#', badge: 12, badgeColor: '#ef4444' },
    { icon: '🎓', label: 'Dream Academy', href: '#' },
    { icon: '📅', label: 'Événements', href: '#' },
    { icon: '📱', label: 'QR Code Connect', href: '#' },
    { icon: '📚', label: 'Ressources', href: '#' },
    { icon: '⚙️', label: 'Paramètres', href: '#' },
  ];

  return (
    <div className="w-[200px] flex-shrink-0 flex flex-col h-screen border-r border-white/8"
      style={{ backgroundColor: '#070b18' }}>
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1, #8b5cf6)' }}>
          <span className="font-black text-white text-sm relative z-10">O</span>
          <div className="absolute inset-0 opacity-40"
            style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)' }} />
        </div>
        <div>
          <div className="font-black text-white text-base leading-tight">OLOD</div>
          <div className="text-xs leading-tight" style={{ color: '#6366f1' }}>One Life One Dream</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-1 space-y-0.5 overflow-y-auto">
        {items.map(item => (
          <Link key={item.label} href={item.href}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all relative group ${
              item.active ? 'text-white font-semibold' : 'text-white/50 hover:text-white/80 hover:bg-white/5'
            }`}
            style={item.active ? { backgroundColor: '#1e2440' } : {}}>
            {item.active && (
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-full"
                style={{ backgroundColor: '#6366f1' }} />
            )}
            <span className="text-base w-5 text-center">{item.icon}</span>
            <span className="flex-1">{item.label}</span>
            {item.badge && (
              <span className="text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center text-white"
                style={{ backgroundColor: item.badgeColor }}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Nation CTA */}
      <div className="m-3 rounded-2xl overflow-hidden">
        <div className="relative p-4 text-center rounded-2xl overflow-hidden">
          {/* Galaxy background */}
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #0d0528, #1a0a4a, #0a1a3a)' }} />
          <div className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(99,102,241,0.5) 0%, rgba(139,92,246,0.3) 30%, transparent 70%)' }} />
          {/* Stars */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{
                width: Math.random() > 0.7 ? 2 : 1,
                height: Math.random() > 0.7 ? 2 : 1,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.3 + Math.random() * 0.5,
              }} />
          ))}
          {/* Globe */}
          <div className="relative w-16 h-16 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full border border-purple-500/30" />
            <div className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle at 35% 35%, rgba(99,102,241,0.6), rgba(59,130,246,0.3), transparent)' }} />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🌐</div>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="absolute w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: ['#6366f1','#8b5cf6','#3b82f6','#06b6d4','#10b981','#f59e0b'][i],
                  top: `${50 - 44 * Math.cos(i * Math.PI / 3)}%`,
                  left: `${50 + 44 * Math.sin(i * Math.PI / 3)}%`,
                  transform: 'translate(-50%, -50%)',
                  boxShadow: `0 0 4px ${['#6366f1','#8b5cf6','#3b82f6','#06b6d4','#10b981','#f59e0b'][i]}`,
                }} />
            ))}
          </div>
          <p className="relative text-sm font-bold text-white mb-1">Rejoignez une Nation</p>
          <p className="relative text-xs text-white/50 mb-3">Découvrez vos affinités et trouvez votre tribu.</p>
          <Link href="/nations"
            className="relative block w-full py-2 rounded-xl text-xs font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
            Explorer les Nations →
          </Link>
        </div>
      </div>
    </div>
  );
}

// ─── Top Bar ─────────────────────────────────────────────────────────────────
function TopBar() {
  const actions = [
    { icon: '✨', label: 'Partager un rêve', bg: 'linear-gradient(135deg, #7c3aed, #6366f1)' },
    { icon: '🤝', label: 'Trouver des collaborateurs', bg: 'linear-gradient(135deg, #2563eb, #3b82f6)' },
    { icon: '🚀', label: 'Rejoindre un projet', bg: 'linear-gradient(135deg, #059669, #10b981)' },
    { icon: '🌍', label: 'Explorer les Nations', bg: 'linear-gradient(135deg, #d97706, #f59e0b)' },
    { icon: '📱', label: 'Connect (QR)', bg: 'linear-gradient(135deg, #0891b2, #06b6d4)' },
  ];
  return (
    <div className="border-b border-white/5 px-4 py-2.5 flex items-center gap-3 flex-shrink-0"
      style={{ backgroundColor: '#070b18' }}>
      <div className="relative w-72 flex-shrink-0">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">🔍</span>
        <input placeholder="Rechercher un membre, un projet, une Nation..."
          className="w-full pl-9 pr-14 py-2 rounded-xl text-xs text-white placeholder-white/30 focus:outline-none border border-white/8 focus:border-purple-500/50"
          style={{ backgroundColor: '#111827' }} />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/20 font-mono bg-white/5 px-1.5 py-0.5 rounded">⌘K</span>
      </div>
      <div className="flex items-center gap-1.5 flex-1">
        {actions.map(a => (
          <button key={a.label}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-white whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ background: a.bg }}>
            <span>{a.icon}</span> {a.label}
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 flex-shrink-0">
        <button className="text-white/40 hover:text-white/70 transition-colors">
          <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </button>
        <div className="relative">
          <button className="text-white/40 hover:text-white/70 transition-colors">
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
          <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold leading-none">12</span>
        </div>
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-xs text-white border-2 border-purple-500/40 cursor-pointer">
          HN
        </div>
        <button className="text-white/30 hover:text-white/60 transition-colors text-sm">▾</button>
      </div>
    </div>
  );
}

// ─── Profile Hero ─────────────────────────────────────────────────────────────
function ProfileHero({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: (t: string) => void }) {
  const tabs = [
    { label: 'Mon profil', key: 'profil' },
    { label: 'Mes projets', key: 'projets', count: 2 },
    { label: 'Mon journal', key: 'journal' },
    { label: 'Mes connexions', key: 'connexions', count: 124 },
    { label: 'Mes badges', key: 'badges', count: 8 },
    { label: 'Paramètres', key: 'parametres' },
  ];

  return (
    <div className="relative">
      {/* Hero banner — landscape photo simulation */}
      <div className="relative h-52 overflow-hidden">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom right, #0a1628 0%, #1a3a1a 25%, #2d5a1a 45%, #1a3a2a 65%, #0d2040 85%, #070b18 100%)' }} />
        {/* Sun glow */}
        <div className="absolute top-6 left-1/2 -translate-x-1/4 w-32 h-32 rounded-full opacity-60"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.8) 0%, rgba(251,146,60,0.4) 40%, transparent 70%)' }} />
        {/* Mountain layers */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path d="M0,100 L0,65 L100,30 L200,55 L320,15 L440,50 L560,8 L680,42 L800,12 L920,48 L1040,18 L1160,52 L1200,45 L1200,100 Z" fill="rgba(10,30,10,0.7)" />
          <path d="M0,100 L0,78 L150,50 L280,70 L400,35 L520,65 L640,28 L760,60 L880,32 L1000,62 L1120,38 L1200,55 L1200,100 Z" fill="rgba(15,40,15,0.8)" />
          <path d="M0,100 L0,88 L200,72 L400,80 L600,68 L800,78 L1000,70 L1200,76 L1200,100 Z" fill="rgba(7,11,24,0.9)" />
        </svg>
        {/* Silhouette person */}
        <div className="absolute bottom-14 left-1/2 -translate-x-1/2 opacity-40">
          <svg width="30" height="50" viewBox="0 0 30 50" fill="#000">
            <circle cx="15" cy="8" r="6"/>
            <path d="M8 20 Q15 15 22 20 L24 38 L20 38 L18 28 L12 28 L10 38 L6 38 Z"/>
            <path d="M8 22 L2 32 M22 22 L28 32"/>
          </svg>
        </div>

        {/* QR Code panel — top right */}
        <div className="absolute top-3 right-4 rounded-2xl p-3.5 border border-white/10"
          style={{ backgroundColor: 'rgba(7,11,24,0.90)', backdropFilter: 'blur(16px)', minWidth: 190 }}>
          <p className="text-sm font-bold text-white mb-0.5">Mon QR Code Connect™</p>
          <p className="text-xs text-white/50 mb-2">Scannez et connectez-vous</p>
          <div className="w-20 h-20 mx-auto bg-white rounded-lg p-1.5 mb-2">
            <div className="w-full h-full grid grid-cols-9 gap-0">
              {Array.from({ length: 81 }).map((_, i) => {
                const r = Math.floor(i / 9), c = i % 9;
                const corner = (r < 3 && c < 3) || (r < 3 && c > 5) || (r > 5 && c < 3);
                const data = [13,14,22,23,31,32,40,41,49,50,58,59,67,68,43,44,36,37,16,24,38,46,54,62,70];
                return <div key={i} className={`${(corner || data.includes(i)) ? 'bg-black' : 'bg-white'} rounded-sm`} style={{ width: '100%', aspectRatio: '1' }} />;
              })}
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-1 text-xs font-medium hover:opacity-80 transition-opacity"
            style={{ color: '#6366f1' }}>
            <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
            Partager mon QR Code
          </button>
        </div>
      </div>

      {/* Profile row */}
      <div className="px-6 relative" style={{ backgroundColor: '#0a0e1a' }}>
        <div className="flex items-end gap-5 -mt-16 pb-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0 z-10">
            <div className="w-28 h-28 rounded-full border-4 overflow-hidden"
              style={{ borderColor: '#0a0e1a', background: 'linear-gradient(135deg, #1e40af, #4c1d95, #1e3a8a)' }}>
              {/* Simulated person avatar */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-full h-full bg-gradient-to-b from-blue-800 to-indigo-900 flex flex-col items-center justify-end pb-2">
                  <div className="absolute top-4 w-10 h-10 rounded-full bg-amber-200/80" />
                  <div className="relative w-16 h-8 rounded-t-full bg-blue-700/80" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold text-white whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)', boxShadow: '0 2px 8px rgba(99,102,241,0.5)' }}>
              ✨ Maker
            </div>
          </div>

          {/* Name + meta */}
          <div className="flex-1 pt-14">
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-xl font-black text-white">Dr Hassan NAANANI</h2>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#3b82f6"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/50 mb-2 flex-wrap">
              <span className="font-semibold text-white/80">Maker</span>
              <span>•</span><span>Niveau 7</span>
              <span>•</span><span>🇲🇦</span><span>Maroc</span>
              <span>•</span><span>Benguerir</span>
            </div>
            <p className="text-sm text-white/55 italic mb-2">
              &quot;L&apos;innovation durable au service de l&apos;Afrique et au-delà.&quot;
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Digital Twins', 'Hydrogène Vert', 'IA & ML', 'Entrepreneuriat', '+3'].map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-white/12 text-white/60"
                  style={{ backgroundColor: 'rgba(99,102,241,0.08)' }}>{tag}</span>
              ))}
            </div>
          </div>

          {/* Dream Genome circle */}
          <div className="flex items-center gap-3 pt-14">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6"/>
                <circle cx="32" cy="32" r="26" fill="none" stroke="url(#dg2)" strokeWidth="6"
                  strokeDasharray={`${0.85 * 2 * Math.PI * 26} ${2 * Math.PI * 26}`} strokeLinecap="round"/>
                <defs><linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#6366f1"/>
                </linearGradient></defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-black text-white leading-none">85%</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold text-white">Dream Genome™</p>
              <p className="text-xs text-white/40">Affinités • 3 Nations</p>
            </div>
          </div>

          {/* Nations */}
          <div className="pt-14">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/50 uppercase tracking-wide">Mes Nations</span>
              <Link href="/nations" className="text-xs hover:opacity-80" style={{ color: '#6366f1' }}>Voir tout →</Link>
            </div>
            <div className="flex gap-3">
              {[
                { icon: '🏗️', name: 'Bâtisseurs', main: true, color: '#10b981' },
                { icon: '🔭', name: 'Explorateurs', main: false, color: '#6366f1' },
                { icon: '⚡', name: 'Innovateurs', main: false, color: '#3b82f6' },
              ].map(n => (
                <div key={n.name} className="flex flex-col items-center gap-1 text-center">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${n.color}22`, border: `2px solid ${n.main ? n.color : n.color + '55'}`, boxShadow: n.main ? `0 0 10px ${n.color}40` : 'none' }}>
                    {n.icon}
                  </div>
                  <span className="text-xs text-white/70">{n.name}</span>
                  {n.main && <span className="text-xs" style={{ color: n.color }}>(principale)</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-white/8">
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab.key ? 'text-white border-blue-500' : 'text-white/40 border-transparent hover:text-white/70'
              }`}>
              {tab.label}
              {tab.count !== undefined && <span className="ml-1 text-xs text-white/35">({tab.count})</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Left column ──────────────────────────────────────────────────────────────
function AboutColumn() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl p-5 border border-white/8" style={{ backgroundColor: '#0d1225' }}>
        <h3 className="font-bold text-white mb-3 text-sm">À propos de moi</h3>
        <p className="text-xs text-white/60 leading-relaxed mb-4">
          Passionné par l&apos;innovation durable, les technologies de pointe et les rencontres inspirantes. CTO de DIGITHS, chercheur au LIMSET UM6P en Digital Twins, IA et Hydrogène Vert. Toujours à la recherche de nouvelles opportunités et de belles collaborations.
        </p>
        <div className="space-y-2.5">
          {[
            { icon: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', label: 'CTO DIGITHS & Chercheur LIMSET' },
            { icon: 'M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z', label: 'Français / العربية / English' },
            { icon: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', label: 'Benguerir, Maroc' },
            { icon: 'M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z', label: 'Disponible pour des collaborations' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs text-white/55">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="flex-shrink-0 text-white/30">
                <path d={item.icon}/>
              </svg>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="rounded-2xl p-5 border border-white/8" style={{ backgroundColor: '#0d1225' }}>
        <h3 className="font-bold text-white mb-3 text-sm">Mes compétences</h3>
        <div className="flex flex-wrap gap-2">
          {['Digital Twins', 'IA & ML', 'Python', 'Next.js', 'Hydrogène Vert', 'Azure', 'Unity 3D', 'Formation', '+4'].map(s => (
            <span key={s} className="px-2.5 py-1 rounded-full text-xs border border-white/10 text-white/65"
              style={{ backgroundColor: 'rgba(99,102,241,0.07)' }}>{s}</span>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="rounded-2xl overflow-hidden border border-white/8" style={{ backgroundColor: '#0d1225' }}>
        <div className="p-4 pb-2">
          <h3 className="font-bold text-white text-sm">Ma vidéo de présentation</h3>
        </div>
        <div className="relative mx-4 mb-4 rounded-xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
          style={{ background: 'linear-gradient(135deg, #0f2027, #1a3a1a, #203a43)' }}>
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.5))' }} />
          {/* Landscape thumbnail simulation */}
          <div className="absolute inset-0 opacity-50"
            style={{ background: 'linear-gradient(135deg, #1a4a1a 0%, #2d6a1a 30%, #3a7a2a 50%, #1a4a3a 70%, #0d2a4a 100%)' }} />
          <div className="relative w-12 h-12 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/35 transition-all border border-white/40">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <span className="absolute bottom-2 right-2 text-xs text-white/70 bg-black/50 px-1.5 py-0.5 rounded font-mono">0:28</span>
        </div>
      </div>
    </div>
  );
}

// ─── Middle column ────────────────────────────────────────────────────────────
function MiddleColumn() {
  const projects = [
    {
      title: 'OLOD Platform', status: 'En cours', statusColor: '#3b82f6',
      category: 'Tech & Innovation • Communauté', progress: 72,
      desc: 'Réseau social collaboratif qui transforme les rêves en réalisations via l\'intelligence collective.',
      collaborators: 5, experts: 3, connections: 12,
      gradient: 'linear-gradient(135deg, #1e3a5f 0%, #2d1b69 100%)',
      emoji: '🌐',
    },
    {
      title: 'Digital Twin H₂ Storage', status: 'En cours', statusColor: '#3b82f6',
      category: 'Science • Énergie • Technologies', progress: 55,
      desc: 'Jumeau numérique d\'un système de stockage thermochimique de l\'hydrogène à base de phosphogypse.',
      collaborators: 3, experts: 2, connections: 7,
      gradient: 'linear-gradient(135deg, #0c2a3a 0%, #1a4a2a 100%)',
      emoji: '⚗️',
    },
    {
      title: 'COOPMARKET AI', status: 'En phase d\'idée', statusColor: '#f59e0b',
      category: 'Entrepreneuriat • Impact Social', progress: 28,
      desc: 'Marketplace IA pour les coopératives et artisans marocains à l\'international.',
      collaborators: 2, experts: 1, connections: 4,
      gradient: 'linear-gradient(135deg, #2d1b00 0%, #3a2a0a 100%)',
      emoji: '🛒',
    },
  ];

  const activities = [
    { color: '#10b981', bg: '#10b98122', icon: '🏳️', text: 'Vous avez rejoint la Nation des Bâtisseurs de l\'Innovation', time: 'Il y a 2 jours' },
    { color: '#6366f1', bg: '#6366f122', icon: '🏅', text: 'Nouveau badge : Expert Digital Twins', sub: 'Pour avoir partagé votre expertise', time: 'Il y a 3 jours' },
    { color: '#06b6d4', bg: '#06b6d422', icon: '💬', text: 'Sarah K. a commenté votre projet Digital Twin H₂', sub: '"Excellent travail sur la modélisation thermochimique !"', time: 'Il y a 4 jours', initials: 'SK' },
  ];

  return (
    <div className="space-y-4">
      {/* Projects */}
      <div className="rounded-2xl border border-white/8 overflow-hidden" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between px-5 pt-4 pb-3">
          <h3 className="font-bold text-white text-sm">Mes projets</h3>
          <Link href="/projects" className="text-xs hover:opacity-80 transition-opacity" style={{ color: '#3b82f6' }}>
            Voir tous mes projets →
          </Link>
        </div>
        <div>
          {projects.map((p, idx) => (
            <div key={p.title} className={`p-4 ${idx < projects.length - 1 ? 'border-b border-white/5' : ''}`}>
              <div className="flex gap-4">
                {/* Photo thumbnail */}
                <div className="w-24 h-[72px] rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center text-2xl"
                  style={{ background: p.gradient }}>
                  <span className="text-3xl">{p.emoji}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h4 className="font-semibold text-white text-sm">{p.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0"
                      style={{ backgroundColor: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}30` }}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs text-white/35 mb-1.5">{p.category}</p>
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="flex-1 rounded-full h-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                      <div className="h-1.5 rounded-full" style={{ width: `${p.progress}%`, background: 'linear-gradient(90deg, #3b82f6, #6366f1)' }} />
                    </div>
                    <span className="text-xs text-white/40 flex-shrink-0">{p.progress}%</span>
                  </div>
                  <p className="text-xs text-white/50 mb-2.5 line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-white/35">
                      <span>👥 {p.collaborators}</span>
                      <span>🎓 {p.experts}</span>
                      <span>🔗 {p.connections}</span>
                    </div>
                    <button className="text-xs border px-3 py-1 rounded-lg transition-all hover:bg-blue-500/10"
                      style={{ color: '#3b82f6', borderColor: 'rgba(59,130,246,0.3)' }}>
                      Voir le projet →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity */}
      <div className="rounded-2xl border border-white/8 p-4" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white text-sm">Mon fil d&apos;activité</h3>
          <button className="text-xs hover:opacity-80 transition-opacity" style={{ color: '#3b82f6' }}>Voir tout →</button>
        </div>
        <div className="space-y-3.5">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ backgroundColor: a.bg, color: a.color }}>
                {a.initials || a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/75 leading-relaxed">{a.text}</p>
                {a.sub && <p className="text-xs text-white/35 mt-0.5 italic">{a.sub}</p>}
              </div>
              <span className="text-xs text-white/25 flex-shrink-0 whitespace-nowrap">{a.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">HN</div>
          <div className="flex-1 relative">
            <input placeholder="Écrire un message..."
              className="w-full px-4 py-2 rounded-xl text-xs text-white placeholder-white/25 focus:outline-none border border-white/8 focus:border-purple-500/40"
              style={{ backgroundColor: '#111827' }} />
          </div>
          <button className="w-8 h-8 rounded-xl flex items-center justify-center transition-colors hover:opacity-80 flex-shrink-0"
            style={{ backgroundColor: '#6366f1' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Right column ─────────────────────────────────────────────────────────────
function RightColumn() {
  const opps = [
    { type: 'Mise en relation', role: 'Expert en permaculture', pct: 98, emoji: '🌱', emojiColor: '#10b981' },
    { type: 'Partenaire', role: 'Resort hôtelier', pct: 92, emoji: '🏨', emojiColor: '#3b82f6' },
    { type: 'Apport de compétences', role: 'UX Designer', pct: 87, emoji: '🎨', emojiColor: '#8b5cf6' },
    { type: 'Accès réseau', role: 'Investisseur à impact', pct: 83, emoji: '💰', emojiColor: '#f59e0b' },
  ];
  const badges = [
    { icon: '🔮', label: 'Visionnaire', color: '#f59e0b' },
    { icon: '🤝', label: 'Collaborateur', color: '#6366f1' },
    { icon: '💥', label: 'Impact', color: '#ec4899' },
  ];

  return (
    <div className="space-y-4">
      {/* Opportunities */}
      <div className="rounded-2xl border border-white/8 p-4" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white text-sm">Opportunités pour vous</h3>
          <Link href="/opportunities" className="text-xs hover:opacity-80" style={{ color: '#3b82f6' }}>Voir tout →</Link>
        </div>
        <div className="space-y-3">
          {opps.map((o, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-xl border-2"
                style={{ backgroundColor: `${o.emojiColor}18`, borderColor: `${o.emojiColor}40` }}>
                {o.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white/80 leading-tight">
                  <span style={{ color: o.emojiColor }}>{o.type}</span> - {o.role}
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex-1 rounded-full h-1" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
                    <div className="h-1 rounded-full" style={{ width: `${o.pct}%`, backgroundColor: '#10b981' }} />
                  </div>
                  <span className="text-xs font-semibold flex-shrink-0" style={{ color: '#10b981' }}>{o.pct}%</span>
                </div>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-lg font-semibold text-white flex-shrink-0 hover:opacity-90 transition-opacity"
                style={{ backgroundColor: '#10b981' }}>
                Voir
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progression */}
      <div className="rounded-2xl border border-white/8 p-4" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-white text-sm">Ma progression</h3>
          <button className="text-xs hover:opacity-80" style={{ color: '#3b82f6' }}>Voir les détails →</button>
        </div>
        <div className="flex items-center gap-4 mb-4">
          {/* XP circle */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 96 96" className="w-full h-full -rotate-90">
              <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8"/>
              <circle cx="48" cy="48" r="38" fill="none" stroke="url(#xp2)" strokeWidth="8"
                strokeDasharray={`${0.74 * 2 * Math.PI * 38} ${2 * Math.PI * 38}`} strokeLinecap="round"/>
              <defs><linearGradient id="xp2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#10b981"/>
              </linearGradient></defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-black text-white leading-none">7</span>
              <span className="text-xs text-white/40">Maker</span>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-1">1 850 / 2 500 XP</p>
            <div className="w-28 rounded-full h-2 mb-2" style={{ backgroundColor: 'rgba(255,255,255,0.08)' }}>
              <div className="h-2 rounded-full" style={{ width: '74%', background: 'linear-gradient(90deg, #06b6d4, #10b981)' }} />
            </div>
            <p className="text-xs text-white/35">650 XP avant Niveau 8</p>
          </div>
        </div>
        <div>
          <p className="text-xs text-white/35 uppercase tracking-wide mb-2">Prochains badges</p>
          <div className="flex gap-3">
            {badges.map(b => (
              <div key={b.label} className="flex flex-col items-center gap-1.5">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl border-2 border-dashed"
                  style={{ borderColor: `${b.color}50`, backgroundColor: `${b.color}12` }}>
                  {b.icon}
                </div>
                <span className="text-xs text-white/45">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upgrade card */}
      <div className="rounded-2xl overflow-hidden border border-white/8 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a1a 40%, #0d2040 80%, #070b18 100%)' }} />
        {/* Sun glow */}
        <div className="absolute top-0 right-0 w-40 h-40 opacity-50"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.5), rgba(251,146,60,0.2), transparent 70%)' }} />
        {/* Mountain silhouette */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 400 60" preserveAspectRatio="none" style={{ height: 50 }}>
          <path d="M0,60 L0,40 L60,15 L120,35 L180,8 L240,32 L300,10 L360,30 L400,18 L400,60 Z" fill="rgba(0,0,0,0.5)"/>
        </svg>
        {/* Silhouette */}
        <div className="absolute bottom-10 right-10 opacity-25">
          <svg width="20" height="35" viewBox="0 0 20 35" fill="black">
            <circle cx="10" cy="5" r="4"/><path d="M5 14 Q10 10 15 14 L17 26 L13 26 L12 20 L8 20 L7 26 L3 26 Z"/>
          </svg>
        </div>
        <div className="relative p-4">
          <div className="inline-flex items-center gap-1.5 mb-2 px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{ backgroundColor: 'rgba(251,191,36,0.15)', color: '#fbbf24', border: '1px solid rgba(251,191,36,0.3)' }}>
            👑 Premium
          </div>
          <p className="font-bold text-white mb-1 text-sm">Passez au niveau supérieur</p>
          <p className="text-xs text-white/55 mb-3 leading-relaxed">Accédez à des outils exclusifs et des opportunités pour développer vos projets.</p>
          <button className="w-full py-2.5 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
            Découvrir les abonnements →
          </button>
          <p className="text-center text-xs text-white/25 mt-2 italic">Dream • Create • Impact</p>
        </div>
      </div>
    </div>
  );
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profil');
  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#070b18', color: '#fff' }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar />
        <div className="flex-1 overflow-y-auto" style={{ backgroundColor: '#0a0e1a' }}>
          <ProfileHero activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="grid gap-4 p-4" style={{ gridTemplateColumns: '300px 1fr 280px' }}>
            <AboutColumn />
            <MiddleColumn />
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
