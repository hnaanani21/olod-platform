'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── Sidebar ────────────────────────────────────────────────────────────────
function Sidebar({ active }: { active: string }) {
  const items = [
    { icon: '🏠', label: 'Accueil', href: '/dashboard' },
    { icon: '🕸️', label: 'Dream Graph', href: '/dream-graph' },
    { icon: '🌍', label: 'Dream Nations', href: '/nations' },
    { icon: '📋', label: 'Projets', href: '/projects' },
    { icon: '💬', label: 'Messages', href: '#', badge: 5 },
    { icon: '🔔', label: 'Notifications', href: '#', badge: 12 },
    { icon: '🎓', label: 'Dream Academy', href: '#' },
    { icon: '📅', label: 'Événements', href: '#' },
    { icon: '📱', label: 'QR Code Connect', href: '#' },
    { icon: '📚', label: 'Ressources', href: '#' },
    { icon: '⚙️', label: 'Paramètres', href: '#' },
  ];

  return (
    <div className="w-[192px] flex-shrink-0 flex flex-col h-screen border-r border-white/8"
      style={{ backgroundColor: '#070b18' }}>
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>
          <span className="font-black text-white text-sm">O</span>
        </div>
        <div>
          <div className="font-black text-white text-base leading-tight">OLOD</div>
          <div className="text-xs leading-tight" style={{ color: '#6366f1' }}>One Life One Dream</div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-2 space-y-0.5 overflow-y-auto">
        {items.map(item => {
          const isActive = item.label === active;
          return (
            <Link key={item.label} href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all relative ${
                isActive
                  ? 'text-white font-semibold'
                  : 'text-white/50 hover:text-white/80 hover:bg-white/5'
              }`}
              style={isActive ? { backgroundColor: '#1e2440' } : {}}>
              <span className="text-base">{item.icon}</span>
              <span className="flex-1">{item.label}</span>
              {item.badge && (
                <span className="text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center"
                  style={{ backgroundColor: item.label === 'Messages' ? '#6366f1' : '#ef4444', color: '#fff' }}>
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Rejoindre une Nation CTA */}
      <div className="m-3 rounded-2xl overflow-hidden">
        <div className="relative p-4 text-center"
          style={{ background: 'linear-gradient(135deg, #1a1040, #0d1a3a)' }}>
          <div className="absolute inset-0 opacity-30"
            style={{ background: 'radial-gradient(ellipse at center, rgba(99,102,241,0.6) 0%, transparent 70%)' }} />
          {/* Mini constellation */}
          <div className="relative w-16 h-16 mx-auto mb-2">
            <div className="absolute inset-0 rounded-full border border-purple-500/20" />
            <div className="absolute inset-2 rounded-full border border-purple-500/15" />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🌐</div>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="absolute w-1.5 h-1.5 rounded-full bg-purple-400/60"
                style={{
                  top: `${50 - 42 * Math.cos(i * Math.PI / 3)}%`,
                  left: `${50 + 42 * Math.sin(i * Math.PI / 3)}%`,
                  transform: 'translate(-50%, -50%)',
                }} />
            ))}
          </div>
          <p className="relative text-sm font-bold text-white mb-0.5">Rejoignez une Nation</p>
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

// ─── Top Search Bar ──────────────────────────────────────────────────────────
function TopBar() {
  return (
    <div className="border-b border-white/5 px-6 py-3 flex items-center gap-3"
      style={{ backgroundColor: '#070b18' }}>
      {/* Search */}
      <div className="flex-1 max-w-xl relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30 text-sm">🔍</span>
        <input placeholder="Rechercher un membre, un projet, une Nation..."
          className="w-full pl-9 pr-16 py-2 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none border border-white/8 focus:border-purple-500/50"
          style={{ backgroundColor: '#111827' }} />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-white/20 font-mono">⌘K</span>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2 ml-2">
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)' }}>
          <span>✨</span> Partager un rêve
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}>
          <span>🤝</span> Trouver des collaborateurs
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
          <span>🚀</span> Rejoindre un projet
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #d97706, #f59e0b)' }}>
          <span>🌍</span> Explorer les Nations
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white transition-all hover:opacity-90"
          style={{ background: 'linear-gradient(135deg, #0891b2, #06b6d4)' }}>
          <span>📱</span> Connect (QR)
        </button>
      </div>

      {/* Icons + avatar */}
      <div className="flex items-center gap-3 ml-2">
        <button className="text-white/40 hover:text-white/70 transition-colors text-lg">✉️</button>
        <div className="relative">
          <button className="text-white/40 hover:text-white/70 transition-colors text-lg">🔔</button>
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">12</span>
        </div>
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-purple-500/50 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm text-white">
          HN
        </div>
        <button className="text-white/30 hover:text-white/60 transition-colors">▾</button>
      </div>
    </div>
  );
}

// ─── Profile Hero ────────────────────────────────────────────────────────────
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
      {/* Hero banner */}
      <div className="relative h-48 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }}>
        {/* Landscape background effect */}
        <div className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.5) 100%), linear-gradient(135deg, #1a3a2a 0%, #2d5016 20%, #1a4a3a 40%, #0d2a4a 70%, #071525 100%)'
          }} />
        {/* Decorative mountain silhouette */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0,120 L0,80 L150,20 L300,60 L450,10 L600,50 L750,5 L900,45 L1050,15 L1200,55 L1200,120 Z" fill="rgba(0,0,0,0.3)" />
        </svg>
        {/* Sun/glow */}
        <div className="absolute top-8 right-80 w-24 h-24 rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(251,146,60,0.3) 40%, transparent 70%)' }} />

        {/* QR Code Connect (top right) */}
        <div className="absolute top-4 right-4 rounded-2xl p-4 border border-white/10"
          style={{ backgroundColor: 'rgba(10,14,30,0.85)', backdropFilter: 'blur(12px)', minWidth: 200 }}>
          <p className="text-sm font-bold text-white mb-0.5">Mon QR Code Connect™</p>
          <p className="text-xs text-white/50 mb-2">Scannez et connectez-vous</p>
          {/* QR code pixel art */}
          <div className="w-20 h-20 mx-auto bg-white rounded-lg p-1.5 mb-2">
            <div className="w-full h-full grid grid-cols-9 gap-px">
              {Array.from({ length: 81 }).map((_, i) => {
                const pattern = [0,1,2,3,4,5,6,9,15,18,24,27,33,36,37,38,39,40,41,42,54,55,56,57,58,59,60,63,69,72,78,74,66,47,43,20,11];
                return <div key={i} className={`${pattern.includes(i) ? 'bg-black' : 'bg-white'} rounded-sm`} />;
              })}
            </div>
          </div>
          <button className="w-full flex items-center justify-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors">
            <span>⬇</span> Partager mon QR Code
          </button>
        </div>
      </div>

      {/* Profile info row */}
      <div className="px-6 relative" style={{ backgroundColor: '#0a0e1a' }}>
        <div className="flex items-end gap-5 -mt-16 pb-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-28 h-28 rounded-full border-4 border-[#0a0e1a] overflow-hidden bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center">
              <span className="text-4xl font-black text-white">HN</span>
            </div>
            {/* Dreamer badge */}
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-0.5 rounded-full text-xs font-semibold text-white whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #6366f1)' }}>
              ✨ Maker
            </div>
          </div>

          {/* Name + meta */}
          <div className="flex-1 pt-14">
            <div className="flex items-center gap-2 mb-0.5">
              <h2 className="text-2xl font-black text-white">Dr Hassan NAANANI</h2>
              <span className="text-blue-400">✓</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-white/50 mb-2">
              <span className="font-semibold text-white/70">Maker</span>
              <span>•</span>
              <span>Niveau 7</span>
              <span>•</span>
              <span>🇲🇦</span>
              <span>Maroc</span>
              <span>•</span>
              <span>Benguerir UM6P</span>
            </div>
            <p className="text-sm text-white/60 italic mb-2">
              &quot;L&apos;innovation durable au service de l&apos;Afrique et au-delà.&quot;
            </p>
            <div className="flex flex-wrap gap-2">
              {['Digital Twins', 'Hydrogène Vert', 'IA & ML', 'Entrepreneuriat', '+3'].map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs border border-white/15 text-white/60"
                  style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Dream Genome */}
          <div className="flex items-center gap-3 pt-14">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6" />
                <circle cx="32" cy="32" r="26" fill="none" stroke="url(#dg)" strokeWidth="6"
                  strokeDasharray={`${0.85 * 2 * Math.PI * 26} ${2 * Math.PI * 26}`}
                  strokeLinecap="round" />
                <defs>
                  <linearGradient id="dg" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-black text-white">85%</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Dream Genome™</p>
              <p className="text-xs text-white/40">Affinités • 3 Nations</p>
            </div>
          </div>

          {/* Nations */}
          <div className="pt-14">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-white/60">Mes Nations</span>
              <Link href="/nations" className="text-xs text-purple-400 hover:text-purple-300">Voir tout →</Link>
            </div>
            <div className="flex gap-3">
              {[
                { icon: '🏗️', name: 'Bâtisseurs', main: true, color: '#10b981' },
                { icon: '🔭', name: 'Explorateurs', main: false, color: '#6366f1' },
                { icon: '⚡', name: 'Innovateurs', main: false, color: '#3b82f6' },
              ].map(n => (
                <div key={n.name} className="flex flex-col items-center gap-1">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-xl"
                    style={{ backgroundColor: `${n.color}20`, border: `2px solid ${n.main ? n.color : n.color + '50'}` }}>
                    {n.icon}
                  </div>
                  <span className="text-xs text-white/60">{n.name}</span>
                  {n.main && <span className="text-xs" style={{ color: n.color }}>(principale)</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-b border-white/8">
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-3 text-sm font-medium transition-all border-b-2 ${
                activeTab === tab.key
                  ? 'text-white border-blue-500'
                  : 'text-white/50 border-transparent hover:text-white/80'
              }`}>
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1.5 text-xs text-white/40">({tab.count})</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Left column: About ──────────────────────────────────────────────────────
function AboutColumn() {
  return (
    <div className="space-y-5">
      {/* À propos */}
      <div className="rounded-2xl p-5 border border-white/8" style={{ backgroundColor: '#0d1225' }}>
        <h3 className="font-bold text-white mb-3">À propos de moi</h3>
        <p className="text-sm text-white/60 leading-relaxed mb-4">
          Passionné par l&apos;innovation durable, les technologies de pointe et les rencontres inspirantes. CTO de DIGITHS, chercheur au LIMSET UM6P en Digital Twins, IA et Hydrogène Vert. Je rêve de créer des projets qui ont un impact positif sur les communautés et la planète. Toujours à la recherche de nouvelles opportunités et de belles collaborations.
        </p>
        <div className="space-y-2 text-sm text-white/60">
          {[
            { icon: '👤', text: 'CTO DIGITHS & Chercheur LIMSET' },
            { icon: '🌐', text: 'Français / العربية / English' },
            { icon: '📍', text: 'Benguerir, Maroc' },
            { icon: '🤝', text: 'Disponible pour des collaborations internationales' },
          ].map(i => (
            <div key={i.text} className="flex items-center gap-2">
              <span className="text-base w-5 text-center">{i.icon}</span>
              <span>{i.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Compétences */}
      <div className="rounded-2xl p-5 border border-white/8" style={{ backgroundColor: '#0d1225' }}>
        <h3 className="font-bold text-white mb-3">Mes compétences</h3>
        <div className="flex flex-wrap gap-2">
          {['Digital Twins', 'IA & ML', 'Python', 'Next.js', 'Hydrogène Vert', 'Azure', 'Unity 3D', 'Blender', 'Formation', '+4'].map(skill => (
            <span key={skill} className="px-3 py-1 rounded-full text-sm border border-white/10 text-white/70"
              style={{ backgroundColor: 'rgba(99,102,241,0.08)' }}>
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Vidéo */}
      <div className="rounded-2xl overflow-hidden border border-white/8" style={{ backgroundColor: '#0d1225' }}>
        <div className="p-4 pb-2">
          <h3 className="font-bold text-white">Ma vidéo de présentation</h3>
        </div>
        <div className="relative mx-4 mb-4 rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-blue-900/40 to-purple-900/40 flex items-center justify-center group cursor-pointer">
          <div className="absolute inset-0"
            style={{ background: 'linear-gradient(135deg, #0f2027, #203a43, #2c5364)' }} />
          <div className="relative w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/30 transition-all border border-white/30">
            <span className="text-white text-xl ml-1">▶</span>
          </div>
          <span className="absolute bottom-2 right-2 text-xs text-white/60 bg-black/40 px-2 py-0.5 rounded">0:28</span>
        </div>
      </div>
    </div>
  );
}

// ─── Middle column: Projects + Activity ─────────────────────────────────────
function MiddleColumn() {
  const projects = [
    {
      title: 'OLOD Platform', status: 'En cours', statusColor: '#3b82f6',
      category: 'Tech & Innovation • Communauté', progress: 72,
      desc: 'Réseau social collaboratif qui transforme les rêves en réalisations via l\'intelligence collective.',
      collaborators: 5, experts: 3, connections: 12,
      img: 'linear-gradient(135deg, #1e3a5f, #2d1b69)',
      icon: '🌐',
    },
    {
      title: 'Digital Twin H₂ Storage', status: 'En cours', statusColor: '#3b82f6',
      category: 'Science • Énergie • Technologies', progress: 55,
      desc: 'Jumeau numérique d\'un système de stockage thermochimique de l\'hydrogène à base de phosphogypse.',
      collaborators: 3, experts: 2, connections: 7,
      img: 'linear-gradient(135deg, #0c2a3a, #1a4a2a)',
      icon: '⚗️',
    },
    {
      title: 'COOPMARKET AI', status: 'En phase d\'idée', statusColor: '#f59e0b',
      category: 'Entrepreneuriat • Impact Social', progress: 28,
      desc: 'Marketplace IA pour les coopératives et artisans marocains à l\'international.',
      collaborators: 2, experts: 1, connections: 4,
      img: 'linear-gradient(135deg, #2d1b00, #3a2a0a)',
      icon: '🛒',
    },
  ];

  const activities = [
    { icon: '🏳️', iconBg: '#10b981', text: 'Vous avez rejoint la Nation des Bâtisseurs de l\'Innovation', time: 'Il y a 2 jours', color: '#10b981' },
    { icon: '🏅', iconBg: '#6366f1', text: 'Nouveau badge : Expert Digital Twins', sub: 'Pour avoir partagé votre expertise', time: 'Il y a 3 jours', color: '#6366f1' },
    { icon: '💬', iconBg: '#06b6d4', text: 'Sarah K. a commenté votre projet Digital Twin H₂', sub: '"Excellent travail sur la modélisation thermochimique !"', time: 'Il y a 4 jours', color: '#06b6d4', avatar: 'SK' },
  ];

  return (
    <div className="space-y-5">
      {/* Projects */}
      <div className="rounded-2xl border border-white/8 overflow-hidden" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h3 className="font-bold text-white">Mes projets</h3>
          <Link href="/projects" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Voir tous mes projets →
          </Link>
        </div>
        <div className="space-y-0">
          {projects.map((p, idx) => (
            <div key={p.title} className={`p-5 ${idx < projects.length - 1 ? 'border-b border-white/5' : ''}`}>
              <div className="flex gap-4">
                {/* Project image */}
                <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center text-3xl"
                  style={{ background: p.img }}>
                  {p.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-white text-sm">{p.title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{ backgroundColor: `${p.statusColor}18`, color: p.statusColor, border: `1px solid ${p.statusColor}30` }}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs text-white/40 mb-2">{p.category}</p>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex-1 bg-white/8 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full"
                        style={{ width: `${p.progress}%`, background: 'linear-gradient(90deg, #3b82f6, #6366f1)' }} />
                    </div>
                    <span className="text-xs text-white/50 flex-shrink-0">{p.progress}%</span>
                  </div>
                  <p className="text-xs text-white/55 mb-3 line-clamp-2">{p.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-white/40">
                      <span>👥 {p.collaborators} collaborateurs</span>
                      <span>🎓 {p.experts} experts</span>
                      <span>🔗 {p.connections} connexions</span>
                    </div>
                    <button className="text-xs text-blue-400 border border-blue-400/30 px-3 py-1 rounded-lg hover:bg-blue-400/10 transition-all">
                      Voir le projet →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity feed */}
      <div className="rounded-2xl border border-white/8 p-5" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">Mon fil d&apos;activité</h3>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Voir tout →</button>
        </div>
        <div className="space-y-4">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ backgroundColor: `${a.iconBg}25`, color: a.iconBg }}>
                {a.avatar ? a.avatar : a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-white/80">{a.text}</p>
                {a.sub && <p className="text-xs text-white/40 mt-0.5 italic">{a.sub}</p>}
              </div>
              <span className="text-xs text-white/30 flex-shrink-0">{a.time}</span>
            </div>
          ))}
        </div>

        {/* Message input */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 relative">
            <input placeholder="Écrire un message..."
              className="w-full px-4 py-2.5 rounded-xl text-sm text-white placeholder-white/30 focus:outline-none border border-white/8 focus:border-purple-500/50"
              style={{ backgroundColor: '#111827' }} />
          </div>
          <button className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-colors border border-white/8 hover:border-white/20"
            style={{ backgroundColor: '#111827' }}>
            ➤
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Right column: Opportunities + Progression ───────────────────────────────
function RightColumn() {
  const opportunities = [
    { type: 'Mise en relation', role: 'Expert en permaculture', pct: 98, color: '#10b981' },
    { type: 'Partenaire', role: 'Resort hôtelier', pct: 92, color: '#10b981' },
    { type: 'Apport de compétences', role: 'UX Designer', pct: 87, color: '#3b82f6' },
    { type: 'Accès réseau', role: 'Investisseur à impact', pct: 83, color: '#3b82f6' },
  ];

  const nextBadges = [
    { icon: '🔮', label: 'Visionnaire', color: '#f59e0b' },
    { icon: '🤝', label: 'Collaborateur', color: '#6366f1' },
    { icon: '💥', label: 'Impact', color: '#ec4899' },
  ];

  return (
    <div className="space-y-5">
      {/* Opportunities */}
      <div className="rounded-2xl border border-white/8 p-5" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">Opportunités pour vous</h3>
          <Link href="/opportunities" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Voir tout →
          </Link>
        </div>
        <div className="space-y-3">
          {opportunities.map((o, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl flex-shrink-0 overflow-hidden bg-gradient-to-br from-green-900/40 to-blue-900/40 flex items-center justify-center text-lg">
                {['🌱', '🏨', '🎨', '💰'][i]}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-white/80">{o.type} -</p>
                <p className="text-xs text-white/50">{o.role}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 bg-white/8 rounded-full h-1">
                    <div className="h-1 rounded-full transition-all" style={{ width: `${o.pct}%`, backgroundColor: o.color }} />
                  </div>
                  <span className="text-xs font-semibold flex-shrink-0" style={{ color: o.color }}>
                    {o.pct}% de compatibilité
                  </span>
                </div>
              </div>
              <button className="text-xs px-3 py-1.5 rounded-lg font-medium text-white opacity-0 group-hover:opacity-100 transition-all"
                style={{ backgroundColor: '#10b981' }}>
                Voir
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Progression */}
      <div className="rounded-2xl border border-white/8 p-5" style={{ backgroundColor: '#0d1225' }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-white">Ma progression</h3>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Voir les détails →</button>
        </div>
        <div className="flex items-center gap-5 mb-5">
          {/* Circle progress */}
          <div className="relative w-24 h-24 flex-shrink-0">
            <svg viewBox="0 0 96 96" className="w-full h-full -rotate-90">
              <circle cx="48" cy="48" r="38" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
              <circle cx="48" cy="48" r="38" fill="none" stroke="url(#xp)" strokeWidth="8"
                strokeDasharray={`${(1850/2500) * 2 * Math.PI * 38} ${2 * Math.PI * 38}`}
                strokeLinecap="round" />
              <defs>
                <linearGradient id="xp" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-black text-white">7</span>
              <span className="text-xs text-white/50">Maker</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-white/60 mb-1">1 850 / 2 500 XP</p>
            <div className="w-32 bg-white/8 rounded-full h-2 mb-2">
              <div className="h-2 rounded-full" style={{ width: '74%', background: 'linear-gradient(90deg, #06b6d4, #6366f1)' }} />
            </div>
            <p className="text-xs text-white/40">650 XP avant Niveau 8</p>
          </div>
        </div>

        {/* Next badges */}
        <div>
          <p className="text-xs text-white/40 mb-2">Prochains badges</p>
          <div className="flex gap-3">
            {nextBadges.map(b => (
              <div key={b.label} className="flex flex-col items-center gap-1">
                <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl border-2 border-dashed"
                  style={{ borderColor: `${b.color}50`, backgroundColor: `${b.color}10` }}>
                  {b.icon}
                </div>
                <span className="text-xs text-white/50">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upgrade card */}
      <div className="rounded-2xl overflow-hidden border border-white/8 relative">
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, #0f2027 0%, #1a3a2a 50%, #0d1f3a 100%)' }} />
        <div className="absolute top-0 right-0 w-32 h-32 opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.4), transparent 70%)' }} />
        <div className="relative p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xl">👑</span>
            <span className="font-bold text-white">Passez au niveau supérieur</span>
          </div>
          <p className="text-sm text-white/60 mb-4">
            Accédez à des outils exclusifs et des opportunités pour développer vos projets.
          </p>
          <button className="w-full py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #059669, #10b981)' }}>
            Découvrir les abonnements →
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profil');

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#070b18' }}>
      <Sidebar active="Accueil" />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar />

        <div className="flex-1 overflow-y-auto" style={{ backgroundColor: '#0a0e1a' }}>
          <ProfileHero activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="grid grid-cols-[320px_1fr_300px] gap-5 p-5">
            <AboutColumn />
            <MiddleColumn />
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
