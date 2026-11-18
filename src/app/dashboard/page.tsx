'use client';

import { useState } from 'react';
import Link from 'next/link';

/* ─── Design tokens ─────────────────────────────────────────────────────────
   bg-void     : #04060f   (deepest background — almost black)
   bg-base     : #080c18   (page background)
   bg-card     : #0c1120   (card surface)
   bg-elevated : #111827   (input / elevated surface)
   border-dim  : rgba(255,255,255,0.06)
   border-mid  : rgba(255,255,255,0.10)
   accent-indigo: #6366f1
   accent-blue : #3b82f6
   glow-indigo : rgba(99,102,241,0.25)
   text-primary : #f0f4ff
   text-secondary: #94a3b8
   text-muted   : #4b5673
──────────────────────────────────────────────────────────────────────────── */

function Sidebar() {
  const items = [
    { icon: '⬡', label: 'Accueil', href: '/dashboard', active: true },
    { icon: '🕸️', label: 'Dream Graph', href: '/dream-graph' },
    { icon: '🌍', label: 'Dream Nations', href: '/nations' },
    { icon: '📋', label: 'Projets', href: '/projects' },
    { icon: '💬', label: 'Messages', href: '#', badge: 5, badgeColor: '#818cf8' },
    { icon: '🔔', label: 'Notifications', href: '#', badge: 12, badgeColor: '#f87171' },
    { icon: '🎓', label: 'Dream Academy', href: '#' },
    { icon: '📅', label: 'Événements', href: '#' },
    { icon: '📱', label: 'QR Connect', href: '#' },
    { icon: '📚', label: 'Ressources', href: '#' },
    { icon: '⚙️', label: 'Paramètres', href: '#' },
  ];

  return (
    <div className="w-[210px] flex-shrink-0 flex flex-col h-screen"
      style={{
        background: 'linear-gradient(180deg, #060916 0%, #04060f 100%)',
        borderRight: '1px solid rgba(99,102,241,0.12)',
      }}>

      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3">
        <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)' }}>
          <span className="font-black text-white text-sm relative z-10">O</span>
          <div className="absolute inset-0 opacity-50"
            style={{ background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 60%)' }} />
        </div>
        <div>
          <div className="font-black text-sm" style={{ color: '#f0f4ff', letterSpacing: '0.03em' }}>OLOD</div>
          <div className="text-xs font-medium" style={{ color: '#6366f1', letterSpacing: '0.02em' }}>One Life One Dream</div>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-4 mb-2 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      {/* Nav */}
      <nav className="flex-1 px-3 py-1 space-y-0.5 overflow-y-auto">
        {items.map(item => (
          <Link key={item.label} href={item.href}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all relative group"
            style={item.active ? {
              background: 'linear-gradient(90deg, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 100%)',
              color: '#a5b4fc',
            } : { color: '#4b5673' }}>
            {item.active && (
              <>
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
                  style={{ background: 'linear-gradient(180deg, #818cf8, #6366f1)' }} />
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(99,102,241,0.04)' }} />
              </>
            )}
            {!item.active && (
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: 'rgba(255,255,255,0.03)' }} />
            )}
            <span className={`text-sm w-5 text-center ${item.active ? '' : 'opacity-50 group-hover:opacity-80 transition-opacity'}`}>{item.icon}</span>
            <span className={`flex-1 font-medium ${item.active ? '' : 'group-hover:text-slate-300 transition-colors'}`}>{item.label}</span>
            {item.badge && (
              <span className="text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center text-white"
                style={{ backgroundColor: item.badgeColor, boxShadow: `0 0 8px ${item.badgeColor}60` }}>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Galaxy card */}
      <div className="m-3">
        <div className="relative p-4 rounded-2xl overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg, #0c0a2e 0%, #130d3a 50%, #0a1428 100%)', border: '1px solid rgba(139,92,246,0.2)' }}>
          {/* Stars */}
          {[...Array(18)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: i%4===0?2:1, height: i%4===0?2:1, top:`${(i*41+7)%100}%`, left:`${(i*59+13)%100}%`, opacity: 0.15+(i%6)*0.08 }} />
          ))}
          {/* Glow */}
          <div className="absolute inset-0 rounded-2xl" style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(99,102,241,0.3) 0%, transparent 65%)' }} />
          {/* Globe */}
          <div className="relative w-14 h-14 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(129,140,248,0.5), rgba(99,102,241,0.2), transparent)', border: '1px solid rgba(99,102,241,0.3)' }} />
            <div className="absolute inset-0 flex items-center justify-center text-2xl">🌐</div>
            {[0,1,2,3,4,5].map(i => (
              <div key={i} className="absolute w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: ['#818cf8','#a78bfa','#60a5fa','#34d399','#fbbf24','#f472b6'][i], top:`${50-42*Math.cos(i*Math.PI/3)}%`, left:`${50+42*Math.sin(i*Math.PI/3)}%`, transform:'translate(-50%,-50%)', boxShadow:`0 0 6px currentColor` }} />
            ))}
          </div>
          <p className="relative text-xs font-bold mb-1" style={{ color: '#e0e7ff' }}>Rejoignez une Nation</p>
          <p className="relative text-xs mb-3" style={{ color: '#6366f1' }}>Trouvez votre tribu</p>
          <Link href="/nations"
            className="relative block w-full py-2 rounded-xl text-xs font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 2px 12px rgba(99,102,241,0.4)' }}>
            Explorer →
          </Link>
        </div>
      </div>
    </div>
  );
}

function TopBar() {
  const actions = [
    { icon: '✦', label: 'Partager un rêve', from: '#7c3aed', to: '#6366f1' },
    { icon: '🤝', label: 'Collaborateurs', from: '#1d4ed8', to: '#3b82f6' },
    { icon: '🚀', label: 'Rejoindre', from: '#065f46', to: '#059669' },
    { icon: '🌍', label: 'Nations', from: '#92400e', to: '#d97706' },
    { icon: '⬡', label: 'QR Connect', from: '#164e63', to: '#0891b2' },
  ];
  return (
    <div className="flex-shrink-0 px-5 py-3 flex items-center gap-4"
      style={{ background: 'linear-gradient(90deg, #060916 0%, #04060f 100%)', borderBottom: '1px solid rgba(99,102,241,0.1)' }}>
      {/* Search */}
      <div className="relative w-56 flex-shrink-0">
        <svg className="absolute left-3 top-1/2 -translate-y-1/2 opacity-30" width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input placeholder="Rechercher..."
          className="w-full pl-9 pr-14 py-2 rounded-xl text-xs focus:outline-none transition-colors"
          style={{ backgroundColor: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', color: '#94a3b8' }} />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono px-1.5 py-0.5 rounded"
          style={{ color: '#4b5673', backgroundColor: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>⌘K</span>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-2 flex-1 overflow-x-auto">
        {actions.map(a => (
          <button key={a.label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap flex-shrink-0 transition-all hover:scale-105 hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})`, boxShadow: `0 2px 8px ${a.to}40` }}>
            <span className="text-xs">{a.icon}</span> {a.label}
          </button>
        ))}
      </div>
      {/* Right icons */}
      <div className="flex items-center gap-4 flex-shrink-0">
        <button style={{ color: '#4b5673' }} className="hover:text-slate-400 transition-colors">
          <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </button>
        <div className="relative">
          <button style={{ color: '#4b5673' }} className="hover:text-slate-400 transition-colors">
            <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
          </button>
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white font-bold"
            style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', boxShadow: '0 0 8px rgba(239,68,68,0.5)', fontSize: 9 }}>12</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="relative w-8 h-8 rounded-full flex items-center justify-center font-black text-xs text-white"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 12px rgba(99,102,241,0.4)', border: '2px solid rgba(129,140,248,0.3)' }}>
            HN
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full border-2 border-[#04060f]"
              style={{ backgroundColor: '#10b981' }} />
          </div>
          <span style={{ color: '#4b5673' }} className="text-xs group-hover:text-slate-400 transition-colors">▾</span>
        </div>
      </div>
    </div>
  );
}

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
    <div>
      {/* Banner */}
      <div className="relative h-44 overflow-hidden">
        {/* Sky */}
        <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #020510 0%, #071020 20%, #0d2010 55%, #040c04 100%)' }} />
        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{ width: i%5===0?2:1, height: i%5===0?2:1, top:`${(i*31+5)%60}%`, left:`${(i*47+9)%100}%`, opacity:0.1+(i%7)*0.07 }} />
        ))}
        {/* Sun glow */}
        <div className="absolute top-4" style={{ left:'48%', width:120, height:120, borderRadius:'50%', background:'radial-gradient(circle, rgba(251,191,36,0.6) 0%, rgba(251,146,60,0.25) 40%, transparent 70%)', transform:'translateX(-50%)' }} />
        {/* Mountains — back */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 90" preserveAspectRatio="none">
          <path d="M0,90 L0,50 L80,20 L160,45 L260,8 L360,38 L460,5 L560,32 L660,2 L760,30 L860,6 L960,34 L1060,8 L1160,36 L1280,12 L1380,40 L1440,28 L1440,90 Z"
            fill="rgba(8,20,8,0.75)" />
        </svg>
        {/* Mountains — mid */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path d="M0,70 L0,55 L120,30 L240,52 L360,18 L480,46 L600,15 L720,44 L840,18 L960,46 L1080,22 L1200,48 L1320,20 L1440,38 L1440,70 Z"
            fill="rgba(10,28,10,0.88)" />
        </svg>
        {/* Mountains — front */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 50" preserveAspectRatio="none">
          <path d="M0,50 L0,38 L180,22 L360,38 L540,20 L720,38 L900,22 L1080,40 L1260,24 L1440,36 L1440,50 Z"
            fill="rgba(6,12,6,0.96)" />
        </svg>
        {/* Silhouette */}
        <div className="absolute bottom-10" style={{ left:'50%', transform:'translateX(-50%)', opacity:0.25 }}>
          <svg width="20" height="34" viewBox="0 0 20 34" fill="#000">
            <circle cx="10" cy="5" r="4.5"/>
            <path d="M4 14 Q10 10 16 14 L17.5 28 L13.5 28 L12 20 L8 20 L6.5 28 L2.5 28 Z"/>
          </svg>
        </div>
        {/* QR card */}
        <div className="absolute top-3 right-4 rounded-2xl p-3 overflow-hidden"
          style={{ background:'rgba(4,6,15,0.85)', backdropFilter:'blur(20px)', border:'1px solid rgba(99,102,241,0.2)', minWidth:180 }}>
          <div className="absolute inset-0 opacity-20" style={{ background:'radial-gradient(ellipse at 100% 0%, rgba(99,102,241,0.6), transparent 60%)' }} />
          <p className="relative text-xs font-bold mb-0.5" style={{ color:'#e0e7ff' }}>Mon QR Code Connect™</p>
          <p className="relative text-xs mb-2" style={{ color:'#4b5673' }}>Scannez et connectez-vous</p>
          <div className="relative w-16 h-16 mx-auto bg-white rounded-lg p-1 mb-2">
            <div className="w-full h-full grid grid-cols-9 gap-px">
              {Array.from({length:81}).map((_,i)=>{
                const r=Math.floor(i/9),c=i%9;
                const corner=(r<3&&c<3)||(r<3&&c>5)||(r>5&&c<3);
                const data=[13,14,22,23,31,32,40,41,43,44,49,54,58,62,67,68];
                const filled=corner||data.includes(i)||(i%7===0)||(i%11===3);
                return <div key={i} className={filled?'bg-black':'bg-white'} style={{aspectRatio:'1'}} />;
              })}
            </div>
          </div>
          <button className="relative w-full flex items-center justify-center gap-1 text-xs font-semibold hover:opacity-80 transition-opacity"
            style={{ color:'#818cf8' }}>
            <svg width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Partager mon QR Code
          </button>
        </div>
      </div>

      {/* Profile info */}
      <div className="px-6 relative" style={{ backgroundColor: '#080c18' }}>
        <div className="flex items-end gap-5 -mt-12 pb-5 flex-wrap">
          {/* Avatar */}
          <div className="relative flex-shrink-0 z-10">
            <div className="w-24 h-24 rounded-full overflow-hidden"
              style={{ border: '3px solid #080c18', boxShadow: '0 0 0 2px rgba(99,102,241,0.4), 0 0 20px rgba(99,102,241,0.2)', background: 'linear-gradient(135deg, #1e3a8a, #4c1d95)' }}>
              <div className="w-full h-full flex flex-col items-center justify-end pb-1 bg-gradient-to-b from-blue-800/80 to-indigo-900">
                <div className="absolute top-4 w-9 h-9 rounded-full" style={{ backgroundColor: 'rgba(253,230,138,0.65)' }} />
                <div className="relative w-14 h-7 rounded-t-full" style={{ backgroundColor: 'rgba(59,130,246,0.6)' }} />
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-xs font-bold text-white whitespace-nowrap"
              style={{ background: 'linear-gradient(135deg, #6d28d9, #4f46e5)', boxShadow: '0 2px 10px rgba(99,102,241,0.5)', border: '1px solid rgba(165,180,252,0.2)' }}>
              ✦ Maker
            </div>
          </div>
          {/* Name + meta */}
          <div className="flex-1 pt-14 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-xl font-black truncate" style={{ color: '#f0f4ff', letterSpacing: '-0.01em' }}>Dr Hassan NAANANI</h2>
              <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(135deg, #2563eb, #3b82f6)' }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs mb-2 flex-wrap" style={{ color: '#4b5673' }}>
              <span className="font-semibold" style={{ color: '#818cf8' }}>Maker</span>
              <span>•</span><span style={{ color: '#64748b' }}>Niveau 7</span>
              <span>•</span><span>🇲🇦 Benguerir</span>
            </div>
            <p className="text-xs italic mb-2.5" style={{ color: '#475569' }}>&quot;L&apos;innovation durable au service de l&apos;Afrique.&quot;</p>
            <div className="flex flex-wrap gap-1.5">
              {['Digital Twins','Hydrogène Vert','IA & ML','Entrepreneuriat'].map(tag => (
                <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs font-medium"
                  style={{ backgroundColor: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', color: '#818cf8' }}>{tag}</span>
              ))}
            </div>
          </div>
          {/* Dream Genome */}
          <div className="pt-14 flex items-center gap-3 flex-shrink-0">
            <div className="relative w-16 h-16">
              <svg viewBox="0 0 64 64" className="w-full h-full -rotate-90">
                <circle cx="32" cy="32" r="26" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5"/>
                <circle cx="32" cy="32" r="26" fill="none" strokeWidth="5" strokeLinecap="round"
                  stroke="url(#dg4)" strokeDasharray={`${0.85*2*Math.PI*26} ${2*Math.PI*26}`}/>
                <defs><linearGradient id="dg4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#818cf8"/>
                </linearGradient></defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-sm font-black leading-none" style={{ color: '#a5b4fc' }}>85%</span>
              </div>
              <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.08), transparent 70%)' }} />
            </div>
            <div>
              <p className="text-xs font-bold" style={{ color: '#c7d2fe' }}>Dream Genome™</p>
              <p className="text-xs mt-0.5" style={{ color: '#4b5673' }}>3 Nations actives</p>
            </div>
          </div>
          {/* Nations */}
          <div className="pt-14 flex-shrink-0">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#4b5673', fontSize: 10 }}>Mes Nations</span>
              <Link href="/nations" className="text-xs font-semibold ml-4 hover:opacity-80 transition-opacity" style={{ color: '#6366f1' }}>Voir →</Link>
            </div>
            <div className="flex gap-3">
              {[
                { icon:'🏗️', name:'Bâtisseurs', main:true, color:'#10b981', glow:'rgba(16,185,129,0.3)' },
                { icon:'🔭', name:'Explorateurs', color:'#818cf8', glow:'rgba(129,140,248,0.2)' },
                { icon:'⚡', name:'Innovateurs', color:'#60a5fa', glow:'rgba(96,165,250,0.2)' },
              ].map(n => (
                <div key={n.name} className="flex flex-col items-center gap-1.5">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl transition-transform hover:scale-105"
                    style={{ background:`radial-gradient(circle at 35% 35%, ${n.color}30, ${n.color}10)`, border:`1.5px solid ${n.main ? n.color : n.color+'50'}`, boxShadow:`0 0 ${n.main?'14px':'6px'} ${n.glow}` }}>
                    {n.icon}
                  </div>
                  <span className="text-xs text-center" style={{ color: n.main ? n.color : '#475569' }}>{n.name}</span>
                  {n.main && <span className="text-xs font-semibold" style={{ color: '#10b981', fontSize: 10 }}>principale</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className="px-4 py-3 text-xs font-semibold transition-all border-b-2 whitespace-nowrap relative"
              style={activeTab === tab.key ? {
                color: '#a5b4fc', borderColor: '#6366f1',
              } : { color: '#4b5673', borderColor: 'transparent' }}>
              {activeTab === tab.key && (
                <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)' }} />
              )}
              {tab.label}
              {tab.count !== undefined && <span className="ml-1.5 text-xs" style={{ color: activeTab===tab.key ? '#6366f1' : '#2d3748' }}>({tab.count})</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-2xl ${className}`}
      style={{ background: 'linear-gradient(145deg, #0e1628 0%, #0a111e 100%)', border: '1px solid rgba(255,255,255,0.06)', ...style }}>
      {children}
    </div>
  );
}

function AboutColumn() {
  return (
    <div className="space-y-4">
      <Card className="p-5">
        <h3 className="font-bold text-sm mb-3" style={{ color: '#c7d2fe' }}>À propos de moi</h3>
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#475569' }}>
          CTO de DIGITHS, chercheur au LIMSET UM6P en Digital Twins, IA et Hydrogène Vert. Passionné par l&apos;innovation durable et les collaborations impactantes.
        </p>
        <div className="space-y-2.5">
          {[
            { d:'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z', t:'CTO DIGITHS & Chercheur LIMSET' },
            { d:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', t:'Benguerir, Maroc 🇲🇦' },
            { d:'M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm10 14h2v-2h-2v2zm0-8h2V7h-2v2z', t:'Français / عربي / English' },
            { d:'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z', t:'Disponible pour collaborations' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs" style={{ color: '#475569' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#374151', flexShrink: 0 }}><path d={item.d}/></svg>
              <span>{item.t}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <h3 className="font-bold text-sm mb-3" style={{ color: '#c7d2fe' }}>Mes compétences</h3>
        <div className="flex flex-wrap gap-2">
          {['Digital Twins','IA & ML','Python','Next.js','Hydrogène Vert','Azure','Unity 3D','Formation','+4'].map(s => (
            <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-medium transition-colors hover:border-indigo-500/40"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#64748b' }}>{s}</span>
          ))}
        </div>
      </Card>

      <Card>
        <div className="p-4 pb-2"><h3 className="font-bold text-sm" style={{ color: '#c7d2fe' }}>Ma vidéo de présentation</h3></div>
        <div className="relative mx-4 mb-4 rounded-xl overflow-hidden aspect-video flex items-center justify-center cursor-pointer group"
          style={{ background: 'linear-gradient(135deg, #060f1e 0%, #0a2010 50%, #060f1e 100%)' }}>
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
            style={{ background: 'rgba(99,102,241,0.08)' }} />
          <div className="w-11 h-11 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
            style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-0.5"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <span className="absolute bottom-2 right-2 text-xs bg-black/60 px-1.5 py-0.5 rounded font-mono" style={{ color: '#64748b' }}>0:28</span>
        </div>
      </Card>
    </div>
  );
}

function MiddleColumn() {
  const projects = [
    { title:'OLOD Platform', status:'En cours', sc:'#6366f1', sg:'rgba(99,102,241,0.15)', category:'Tech & Innovation', progress:72, desc:"Réseau social collaboratif qui transforme les rêves en réalisations via l'IA collective.", c:5,e:3,conn:12, gradient:'linear-gradient(135deg, #1e1b4b, #1e3a5f)', emoji:'🌐', bar:'#6366f1' },
    { title:'Digital Twin H₂ Storage', status:'En cours', sc:'#3b82f6', sg:'rgba(59,130,246,0.15)', category:'Science • Énergie', progress:55, desc:"Jumeau numérique d'un système thermochimique de stockage de l'hydrogène à base de phosphogypse.", c:3,e:2,conn:7, gradient:'linear-gradient(135deg, #0c1f38, #0c2a1a)', emoji:'⚗️', bar:'#3b82f6' },
    { title:'COOPMARKET AI', status:"En phase d'idée", sc:'#f59e0b', sg:'rgba(245,158,11,0.15)', category:'Entrepreneuriat • Impact Social', progress:28, desc:"Marketplace IA pour les coopératives et artisans marocains à l'international.", c:2,e:1,conn:4, gradient:'linear-gradient(135deg, #1c1200, #1a1a00)', emoji:'🛒', bar:'#f59e0b' },
  ];
  const activities = [
    { color:'#10b981', bg:'rgba(16,185,129,0.1)', border:'rgba(16,185,129,0.2)', icon:'🏳️', text:"Vous avez rejoint la Nation des Bâtisseurs de l'Innovation", time:'Il y a 2 jours' },
    { color:'#818cf8', bg:'rgba(129,140,248,0.1)', border:'rgba(129,140,248,0.2)', icon:'🏅', text:'Nouveau badge : Expert Digital Twins', sub:'Pour avoir partagé votre expertise', time:'Il y a 3 jours' },
    { color:'#06b6d4', bg:'rgba(6,182,212,0.1)', border:'rgba(6,182,212,0.2)', initials:'SK', text:'Sarah K. a commenté votre projet Digital Twin H₂', sub:'"Excellent travail sur la modélisation thermochimique !"', time:'Il y a 4 jours' },
  ];
  return (
    <div className="space-y-4">
      <Card>
        <div className="flex items-center justify-between px-5 pt-5 pb-4">
          <h3 className="font-bold text-sm" style={{ color: '#c7d2fe' }}>Mes projets</h3>
          <Link href="/projects" className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ color: '#6366f1' }}>Voir tous →</Link>
        </div>
        {projects.map((p, idx) => (
          <div key={p.title} className={`px-5 pb-5 ${idx < projects.length-1 ? 'mb-1' : ''}`}>
            {idx > 0 && <div className="mb-5 h-px" style={{ background: 'rgba(255,255,255,0.04)' }} />}
            <div className="flex gap-3.5">
              <div className="w-[72px] h-[56px] rounded-xl overflow-hidden flex-shrink-0 flex items-center justify-center text-2xl"
                style={{ background: p.gradient, border: '1px solid rgba(255,255,255,0.06)' }}>{p.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold text-sm truncate" style={{ color: '#e2e8f0' }}>{p.title}</h4>
                  <span className="text-xs px-2 py-0.5 rounded-full font-semibold flex-shrink-0"
                    style={{ backgroundColor: p.sg, color: p.sc, border: `1px solid ${p.sc}30` }}>{p.status}</span>
                </div>
                <p className="text-xs mb-1.5" style={{ color: '#374151' }}>{p.category}</p>
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="flex-1 rounded-full h-1" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-1 rounded-full" style={{ width:`${p.progress}%`, backgroundColor: p.bar, boxShadow:`0 0 6px ${p.bar}60` }} />
                  </div>
                  <span className="text-xs flex-shrink-0 font-medium" style={{ color: p.bar }}>{p.progress}%</span>
                </div>
                <p className="text-xs line-clamp-1 mb-2" style={{ color: '#374151' }}>{p.desc}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#374151' }}>
                    <span>👥 {p.c}</span><span>🎓 {p.e}</span><span>🔗 {p.conn}</span>
                  </div>
                  <button className="text-xs px-3 py-1 rounded-lg font-semibold transition-all hover:opacity-80"
                    style={{ color: p.sc, backgroundColor: p.sg, border: `1px solid ${p.sc}25` }}>
                    Voir →
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Card>

      <Card className="p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm" style={{ color: '#c7d2fe' }}>Mon fil d&apos;activité</h3>
          <button className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ color: '#6366f1' }}>Voir tout →</button>
        </div>
        <div className="space-y-4">
          {activities.map((a, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold"
                style={{ backgroundColor: a.bg, color: a.color, border: `1px solid ${a.border}` }}>
                {a.initials || a.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs leading-relaxed" style={{ color: '#64748b' }}>{a.text}</p>
                {a.sub && <p className="text-xs mt-0.5 italic" style={{ color: '#374151' }}>{a.sub}</p>}
              </div>
              <span className="text-xs flex-shrink-0 whitespace-nowrap" style={{ color: '#2d3748' }}>{a.time}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-center gap-2 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
          <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-black text-white"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)' }}>HN</div>
          <input placeholder="Écrire un message..."
            className="flex-1 px-3.5 py-2 rounded-xl text-xs focus:outline-none transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: '#64748b' }} />
          <button className="w-8 h-8 rounded-xl flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)', boxShadow: '0 2px 10px rgba(99,102,241,0.3)' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="white"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </div>
      </Card>
    </div>
  );
}

function RightColumn() {
  const opps = [
    { type:'Mise en relation', role:'Expert permaculture', pct:98, emoji:'🌱', color:'#10b981', glow:'rgba(16,185,129,0.25)' },
    { type:'Partenaire', role:'Resort hôtelier', pct:92, emoji:'🏨', color:'#60a5fa', glow:'rgba(96,165,250,0.25)' },
    { type:'Compétences', role:'UX Designer', pct:87, emoji:'🎨', color:'#a78bfa', glow:'rgba(167,139,250,0.25)' },
    { type:'Réseau', role:'Investisseur à impact', pct:83, emoji:'💰', color:'#fbbf24', glow:'rgba(251,191,36,0.25)' },
  ];
  const badges = [
    { icon:'🔮', label:'Visionnaire', color:'#fbbf24' },
    { icon:'🤝', label:'Collaborateur', color:'#818cf8' },
    { icon:'💥', label:'Impact', color:'#f472b6' },
  ];
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm" style={{ color: '#c7d2fe' }}>Opportunités pour vous</h3>
          <Link href="#" className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ color: '#6366f1' }}>Voir tout →</Link>
        </div>
        <div className="space-y-3.5">
          {opps.map((o, i) => (
            <div key={i} className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full flex-shrink-0 flex items-center justify-center text-lg"
                style={{ background: `radial-gradient(circle at 35% 35%, ${o.color}25, ${o.color}08)`, border: `1.5px solid ${o.color}35`, boxShadow: `0 0 10px ${o.glow}` }}>
                {o.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold leading-tight">
                  <span style={{ color: o.color }}>{o.type}</span>
                  <span style={{ color: '#374151' }}> — {o.role}</span>
                </p>
                <div className="flex items-center gap-1.5 mt-1">
                  <div className="flex-1 rounded-full h-1" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
                    <div className="h-1 rounded-full" style={{ width:`${o.pct}%`, backgroundColor: o.color, boxShadow:`0 0 4px ${o.color}80` }} />
                  </div>
                  <span className="text-xs font-bold flex-shrink-0" style={{ color: o.color }}>{o.pct}%</span>
                </div>
              </div>
              <button className="text-xs px-2.5 py-1.5 rounded-lg font-bold text-white flex-shrink-0 hover:opacity-90 transition-opacity"
                style={{ background: `linear-gradient(135deg, ${o.color}cc, ${o.color})`, boxShadow: `0 2px 8px ${o.glow}` }}>
                Voir
              </button>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm" style={{ color: '#c7d2fe' }}>Ma progression</h3>
          <button className="text-xs font-semibold hover:opacity-80 transition-opacity" style={{ color: '#6366f1' }}>Détails →</button>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="relative w-20 h-20 flex-shrink-0">
            <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
              <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="6"/>
              <circle cx="40" cy="40" r="30" fill="none" strokeWidth="6" strokeLinecap="round"
                stroke="url(#xp4)" strokeDasharray={`${0.74*2*Math.PI*30} ${2*Math.PI*30}`}/>
              <defs><linearGradient id="xp4" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#06b6d4"/><stop offset="100%" stopColor="#10b981"/>
              </linearGradient></defs>
            </svg>
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.06), transparent 70%)' }} />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-black leading-none" style={{ color: '#34d399' }}>7</span>
              <span className="text-xs" style={{ color: '#374151' }}>Maker</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold mb-1" style={{ color: '#e2e8f0' }}>1 850 / 2 500 XP</p>
            <div className="rounded-full h-2 mb-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}>
              <div className="h-2 rounded-full" style={{ width:'74%', background:'linear-gradient(90deg, #06b6d4, #10b981)', boxShadow:'0 0 8px rgba(16,185,129,0.4)' }} />
            </div>
            <p className="text-xs" style={{ color: '#374151' }}>650 XP avant Niveau 8</p>
          </div>
        </div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: '#2d3748', fontSize: 10 }}>Prochains badges</p>
        <div className="flex gap-3 justify-around">
          {badges.map(b => (
            <div key={b.label} className="flex flex-col items-center gap-1.5 group">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-xl transition-transform group-hover:scale-110"
                style={{ background:`radial-gradient(circle at 35% 35%, ${b.color}15, ${b.color}05)`, border:`1.5px dashed ${b.color}40`, boxShadow:`0 0 10px ${b.color}15` }}>
                {b.icon}
              </div>
              <span className="text-xs" style={{ color: '#374151' }}>{b.label}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Upgrade card */}
      <div className="relative rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(99,102,241,0.2)' }}>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #060a20 0%, #0a1a0a 45%, #060c1e 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(99,102,241,0.2) 0%, transparent 55%)' }} />
        <svg className="absolute bottom-0 w-full" viewBox="0 0 400 50" preserveAspectRatio="none" style={{ height: 42 }}>
          <path d="M0,50 L0,30 L60,12 L120,28 L180,6 L240,24 L300,10 L360,26 L400,16 L400,50 Z" fill="rgba(0,0,0,0.5)"/>
          <path d="M0,50 L0,38 L80,26 L200,36 L320,24 L400,32 L400,50 Z" fill="rgba(4,6,15,0.7)"/>
        </svg>
        <div className="absolute bottom-10 right-6 opacity-15">
          <svg width="18" height="30" viewBox="0 0 18 30" fill="white">
            <circle cx="9" cy="4" r="3.5"/><path d="M3 12 Q9 8 15 12 L16 24 L12.5 24 L11.5 18 L6.5 18 L5.5 24 L2 24 Z"/>
          </svg>
        </div>
        {/* Stars */}
        {[...Array(12)].map((_,i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{ width:1, height:1, top:`${(i*31+5)%80}%`, left:`${(i*47+9)%90}%`, opacity:0.08+(i%5)*0.06 }} />
        ))}
        <div className="relative p-5">
          <div className="inline-flex items-center gap-1.5 mb-3 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ background:'rgba(251,191,36,0.1)', color:'#fbbf24', border:'1px solid rgba(251,191,36,0.25)' }}>
            👑 Premium
          </div>
          <p className="font-bold text-sm mb-1.5" style={{ color: '#f0f4ff' }}>Passez au niveau supérieur</p>
          <p className="text-xs leading-relaxed mb-4" style={{ color: '#374151' }}>Accédez à des outils exclusifs et des opportunités de développement avancées.</p>
          <button className="w-full py-2.5 rounded-xl text-xs font-bold text-white hover:opacity-90 transition-all hover:scale-[1.02]"
            style={{ background: 'linear-gradient(135deg, #065f46, #059669)', boxShadow: '0 3px 14px rgba(16,185,129,0.3)' }}>
            Découvrir les abonnements →
          </button>
          <p className="text-center text-xs mt-2.5 italic" style={{ color: '#1f2937' }}>Dream • Create • Impact</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('profil');
  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#04060f' }}>
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar />
        <div className="flex-1 overflow-y-auto" style={{ backgroundColor: '#080c18' }}>
          <ProfileHero activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="grid gap-4 p-4" style={{ gridTemplateColumns: '300px 1fr 280px', backgroundColor: '#080c18' }}>
            <AboutColumn />
            <MiddleColumn />
            <RightColumn />
          </div>
        </div>
      </div>
    </div>
  );
}
