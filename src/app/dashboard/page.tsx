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
  const groups = [
    {
      items: [
        { label: 'Tableau de bord', href: '/dashboard', active: true },
        { label: 'Dream Graph', href: '/dream-graph' },
        { label: 'Dream Nations', href: '/nations' },
        { label: 'Projets', href: '/projects' },
        { label: 'Matching', href: '/matching' },
      ],
    },
    {
      title: 'Communauté',
      items: [
        { label: 'Messages', href: '#', badge: 5 },
        { label: 'Notifications', href: '#', badge: 12 },
        { label: 'Événements', href: '#' },
      ],
    },
    {
      title: 'Découvrir',
      items: [
        { label: 'Dream Academy', href: '#' },
        { label: 'Ressources', href: '#' },
        { label: 'Paramètres', href: '#' },
      ],
    },
  ];

  return (
    <div style={{
      width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column', height: '100vh',
      backgroundColor: '#0c0c0d',
      borderRight: '1px solid rgba(255,255,255,0.07)',
    }}>
      {/* Logo */}
      <div style={{ padding: '20px 20px 16px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 28, height: 28, borderRadius: 6, backgroundColor: '#c9a96e',
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
          <span style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 700, fontSize: 14, color: '#0c0c0d', lineHeight: 1 }}>O</span>
        </div>
        <div>
          <div style={{ fontFamily: 'Playfair Display, Georgia, serif', fontWeight: 600, fontSize: 15, color: '#f2ede4' }}>OLOD</div>
          <div style={{ fontSize: 10, color: '#4a4a4a', marginTop: 1 }}>One Life One Dream</div>
        </div>
      </div>

      <div style={{ height: 1, backgroundColor: 'rgba(255,255,255,0.07)', margin: '0 16px 8px' }} />

      {/* Nav */}
      <nav style={{ flex: 1, padding: '8px 12px', overflowY: 'auto' }}>
        {groups.map((group, gi) => (
          <div key={gi} style={{ marginBottom: 20 }}>
            {group.title && (
              <div style={{ fontSize: 10, fontWeight: 500, color: '#3a3a3a', letterSpacing: '0.08em', padding: '0 8px', marginBottom: 4 }}>
                {group.title}
              </div>
            )}
            {group.items.map(item => (
              <Link key={item.label} href={item.href}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '8px 10px', borderRadius: 6,
                  fontSize: 13, fontWeight: item.active ? 500 : 400, textDecoration: 'none',
                  color: item.active ? '#f2ede4' : '#5a5a5a',
                  backgroundColor: item.active ? '#1a1a1d' : 'transparent',
                  borderLeft: item.active ? '2px solid #c9a96e' : '2px solid transparent',
                  marginBottom: 2,
                  transition: 'color 0.15s',
                }}>
                <span>{item.label}</span>
                {item.badge && (
                  <span style={{
                    fontSize: 10, fontWeight: 600, color: '#0c0c0d',
                    backgroundColor: '#c9a96e', borderRadius: 10,
                    padding: '1px 6px', minWidth: 18, textAlign: 'center',
                  }}>{item.badge}</span>
                )}
              </Link>
            ))}
          </div>
        ))}
      </nav>

      {/* Profile mini */}
      <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        <Link href="/nations" style={{
          display: 'block', padding: '12px', borderRadius: 8,
          backgroundColor: '#141416', border: '1px solid rgba(201,169,110,0.15)',
          textDecoration: 'none',
        }}>
          <div style={{ fontSize: 11, fontWeight: 500, color: '#c9a96e', marginBottom: 4 }}>Rejoindre une Nation</div>
          <div style={{ fontSize: 11, color: '#4a4a4a' }}>9 communautés actives</div>
        </Link>
      </div>
    </div>
  );
}

function TopBar() {
  const quickLinks = [
    { label: 'Partager un rêve', href: '/matching' },
    { label: 'Trouver des collaborateurs', href: '/projects' },
    { label: 'Missions', href: '/missions' },
    { label: 'Nations', href: '/nations' },
  ];
  return (
    <div style={{
      flexShrink: 0, padding: '0 24px', height: 52,
      display: 'flex', alignItems: 'center', gap: 16,
      backgroundColor: '#0c0c0d',
      borderBottom: '1px solid rgba(255,255,255,0.07)',
    }}>
      {/* Search */}
      <div style={{ position: 'relative', width: 220, flexShrink: 0 }}>
        <svg style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }}
          width="13" height="13" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input placeholder="Rechercher..."
          style={{
            width: '100%', paddingLeft: 32, paddingRight: 12, paddingTop: 7, paddingBottom: 7,
            borderRadius: 7, fontSize: 12, outline: 'none',
            backgroundColor: '#141416', border: '1px solid rgba(255,255,255,0.08)', color: '#9a9a9a',
          }} />
      </div>

      {/* Quick links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, flex: 1, overflowX: 'auto' }}>
        {quickLinks.map(a => (
          <Link key={a.label} href={a.href} style={{
            padding: '6px 12px', borderRadius: 6,
            fontSize: 12, fontWeight: 400, color: '#5a5a5a',
            border: '1px solid rgba(255,255,255,0.07)',
            whiteSpace: 'nowrap', flexShrink: 0, textDecoration: 'none',
            backgroundColor: '#141416',
          }}>{a.label}</Link>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
        <div style={{ position: 'relative' }}>
          <svg width="16" height="16" fill="none" stroke="#4a4a4a" strokeWidth="1.5" viewBox="0 0 24 24" style={{ cursor: 'pointer' }}>
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span style={{
            position: 'absolute', top: -6, right: -6,
            width: 14, height: 14, borderRadius: 7,
            backgroundColor: '#c9a96e', fontSize: 9, fontWeight: 700,
            color: '#0c0c0d', display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>12</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            backgroundColor: '#1a1a1d', border: '1px solid rgba(201,169,110,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 11, fontWeight: 600, color: '#c9a96e',
            fontFamily: 'Playfair Display, serif',
          }}>HN</div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 500, color: '#f2ede4', lineHeight: 1.2 }}>Dr. Hassan N.</div>
            <div style={{ fontSize: 10, color: '#4a4a4a' }}>Scientist · LIMSET</div>
          </div>
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
    <div style={{ backgroundColor: '#0c0c0d' }}>
      {/* Banner — editorial flat strip, no decorative scenery */}
      <div className="relative h-32 overflow-hidden" style={{ backgroundColor: '#141416', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        {/* Thin gold line accent — top edge */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent 0%, #c9a96e 30%, #c9a96e 70%, transparent 100%)' }} />
        {/* Faint typographic texture — repeated field name */}
        <div className="absolute inset-0 flex items-center overflow-hidden select-none" style={{ opacity: 0.03 }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-6xl font-black whitespace-nowrap mr-16" style={{ color: '#f2ede4', fontFamily: 'Playfair Display, serif', letterSpacing: '-0.02em' }}>
              One Life One Dream
            </span>
          ))}
        </div>
        {/* QR card — right aligned, minimal */}
        <div className="absolute top-4 right-5 flex items-center gap-2 px-3 py-2 rounded"
          style={{ background: '#1a1a1d', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div className="w-10 h-10 bg-white rounded flex-shrink-0 p-0.5">
            <div className="w-full h-full grid grid-cols-7 gap-px">
              {Array.from({length:49}).map((_,i)=>{
                const r=Math.floor(i/7),c=i%7;
                const corner=(r<2&&c<2)||(r<2&&c>4)||(r>4&&c<2);
                const filled=corner||(i%5===0)||(i%8===3);
                return <div key={i} className={filled?'bg-black':'bg-white'} style={{aspectRatio:'1'}} />;
              })}
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold leading-none mb-0.5" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>QR Connect</p>
            <p className="text-xs" style={{ color: '#9a9a9a' }}>Partager</p>
          </div>
        </div>
      </div>

      {/* Profile info */}
      <div className="px-6 relative" style={{ backgroundColor: '#0c0c0d' }}>
        <div className="flex items-end gap-6 -mt-10 pb-5 flex-wrap">
          {/* Avatar — solid ring, initials */}
          <div className="relative flex-shrink-0 z-10">
            <div className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ border: '2px solid #0c0c0d', outline: '1.5px solid #c9a96e', background: '#1a1a1d' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#c9a96e', letterSpacing: '-0.02em' }}>HN</span>
            </div>
            <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 px-2 py-px text-xs font-semibold whitespace-nowrap"
              style={{ background: '#c9a96e', color: '#0c0c0d', fontSize: 10, letterSpacing: '0.04em', borderRadius: 3 }}>
              Maker
            </div>
          </div>

          {/* Name + meta */}
          <div className="flex-1 pt-10 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 20, fontWeight: 700, color: '#f2ede4', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                Dr Hassan Naanani
              </h2>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                <circle cx="12" cy="12" r="10" fill="#c9a96e" fillOpacity="0.15" stroke="#c9a96e" strokeWidth="1.5"/>
                <polyline points="8 12 11 15 16 9" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-xs mb-2" style={{ color: '#9a9a9a', fontFamily: 'Inter, sans-serif' }}>
              Scientist · LIMSET – UM6P &nbsp;·&nbsp; Benguerir, Maroc
            </p>
            <p className="text-xs italic mb-3" style={{ color: '#6a6a6a', fontFamily: 'Playfair Display, serif' }}>
              &ldquo;L&rsquo;innovation durable au service de l&rsquo;Afrique.&rdquo;
            </p>
            <div className="flex flex-wrap gap-1.5">
              {['Digital Twins','Hydrogène Vert','IA & ML','Entrepreneuriat'].map(tag => (
                <span key={tag} className="px-2 py-0.5 text-xs"
                  style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', color: '#c9a96e', borderRadius: 3, fontFamily: 'Inter, sans-serif' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Dream Genome — compact ring, no glow */}
          <div className="pt-10 flex items-center gap-3 flex-shrink-0">
            <div className="relative w-14 h-14">
              <svg viewBox="0 0 56 56" className="w-full h-full -rotate-90">
                <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="4"/>
                <circle cx="28" cy="28" r="22" fill="none" strokeWidth="4" strokeLinecap="round"
                  stroke="#c9a96e" strokeDasharray={`${0.85*2*Math.PI*22} ${2*Math.PI*22}`}/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span style={{ fontSize: 12, fontWeight: 700, color: '#c9a96e', fontFamily: 'Inter, sans-serif' }}>85%</span>
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Dream Genome</p>
              <p className="text-xs mt-0.5" style={{ color: '#9a9a9a' }}>3 Nations actives</p>
            </div>
          </div>

          {/* Nations — text list, no glow circles */}
          <div className="pt-10 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs" style={{ color: '#9a9a9a', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>Nations</span>
              <Link href="/nations" className="text-xs ml-4 hover:opacity-70 transition-opacity" style={{ color: '#c9a96e' }}>Voir</Link>
            </div>
            <div className="flex flex-col gap-1.5">
              {[
                { name:'Bâtisseurs', main: true },
                { name:'Explorateurs', main: false },
                { name:'Innovateurs', main: false },
              ].map(n => (
                <div key={n.name} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: n.main ? '#c9a96e' : '#3a3a3a' }} />
                  <span className="text-xs" style={{ color: n.main ? '#f2ede4' : '#6a6a6a', fontFamily: 'Inter, sans-serif' }}>{n.name}</span>
                  {n.main && <span className="text-xs" style={{ color: '#c9a96e', fontSize: 10 }}>principale</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs — gold underline on active, no gradient */}
        <div className="flex overflow-x-auto" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
          {tabs.map(tab => (
            <button key={tab.key} onClick={() => setActiveTab(tab.key)}
              className="px-4 py-3 text-xs font-medium transition-colors whitespace-nowrap border-b-2"
              style={activeTab === tab.key ? {
                color: '#f2ede4',
                borderColor: '#c9a96e',
                fontFamily: 'Inter, sans-serif',
              } : {
                color: '#6a6a6a',
                borderColor: 'transparent',
                fontFamily: 'Inter, sans-serif',
              }}>
              {tab.label}
              {tab.count !== undefined && (
                <span className="ml-1.5" style={{ color: activeTab === tab.key ? '#c9a96e' : '#3a3a3a', fontSize: 10 }}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Card({ children, className = '', style = {} }: { children: React.ReactNode; className?: string; style?: React.CSSProperties }) {
  return (
    <div className={`rounded-lg ${className}`}
      style={{ background: '#141416', border: '1px solid rgba(255,255,255,0.07)', ...style }}>
      {children}
    </div>
  );
}

function AboutColumn() {
  return (
    <div className="space-y-4">
      <Card className="p-5">
        <h3 className="font-bold text-sm mb-3" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>À propos de moi</h3>
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#475569' }}>
          Scientist, AI &amp; Digital Twins au LIMSET – UM6P. CTO de DIGITHS. 20+ ans en systèmes, réseaux et cloud. Spécialiste PINNs, jumeaux numériques, hydrogène vert et électrochimie computationnelle.
        </p>
        <div className="space-y-2.5">
          {[
            { emoji:'🏛️', t:'LIMSET – UM6P, Benguerir' },
            { emoji:'🏢', t:'CTO DIGITHS' },
            { emoji:'📍', t:'Benguerir, Maroc 🇲🇦' },
            { emoji:'🌐', t:'Français / عربي / English' },
            { emoji:'✉️', t:'Disponible pour collaborations' },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2.5 text-xs" style={{ color: '#475569' }}>
              <span style={{ flexShrink: 0 }}>{item.emoji}</span>
              <span>{item.t}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Stats scientifiques réelles */}
      <Card className="p-5">
        <h3 className="font-bold text-sm mb-3" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Production scientifique</h3>
        <div className="grid grid-cols-3 gap-3 mb-4">
          {[
            { val: '459', label: 'Citations', sub: '381 depuis 2021' },
            { val: '7', label: 'h-index', sub: 'Google Scholar' },
            { val: '5', label: 'i10-index', sub: 'Publications Q1' },
          ].map(s => (
            <div key={s.label} className="text-center rounded p-3"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.15)' }}>
              <div className="text-xl font-bold mb-0.5" style={{ color: '#c9a96e', fontFamily: 'Playfair Display, serif' }}>{s.val}</div>
              <div className="text-xs font-semibold" style={{ color: '#f2ede4' }}>{s.label}</div>
              <div className="text-xs mt-0.5" style={{ color: '#6a6a6a', fontSize: 10 }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {[
            { j: 'Computers & Chemical Engineering', q: 'Q1', y: '2026' },
            { j: 'Int. J. of Hydrogen Energy', q: 'Q1', y: '2026' },
            { j: 'Renewable Energy Focus', q: 'Q1', y: '2025' },
            { j: 'Int. J. of Hydrogen Energy', q: 'Q2', y: '2024' },
          ].map((p, i) => (
            <div key={i} className="flex items-center gap-2 text-xs">
              <span className="px-1.5 py-0.5 rounded font-bold text-xs flex-shrink-0"
                style={{ background: p.q === 'Q1' ? 'rgba(16,185,129,0.15)' : 'rgba(234,179,8,0.15)', color: p.q === 'Q1' ? '#10b981' : '#eab308', fontSize: 10 }}>{p.q}</span>
              <span className="truncate" style={{ color: '#475569' }}>{p.j}</span>
              <span className="flex-shrink-0" style={{ color: '#2d3748' }}>{p.y}</span>
            </div>
          ))}
        </div>
      </Card>

      {/* Certifications réelles */}
      <Card className="p-5">
        <h3 className="font-bold text-sm mb-3" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Certifications</h3>
        <div className="space-y-2">
          {[
            { name: 'Azure Data Scientist Associate', org: 'Microsoft', color: '#0078d4', emoji: '🔷' },
            { name: 'Azure Administrator Associate', org: 'Microsoft', color: '#0078d4', emoji: '☁️' },
            { name: 'VMware Professional VCP', org: 'VMware', color: '#607078', emoji: '⚙️' },
            { name: 'VMware vSphere 6.7', org: 'VMware', color: '#607078', emoji: '🖥️' },
            { name: 'Dell Implementation Engineer', org: 'Dell (×2)', color: '#007db8', emoji: '🔧' },
          ].map(c => (
            <div key={c.name} className="flex items-center gap-2.5 text-xs rounded-lg px-3 py-2"
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${c.color}20` }}>
              <span>{c.emoji}</span>
              <div className="flex-1 min-w-0">
                <div className="font-semibold truncate" style={{ color: '#94a3b8' }}>{c.name}</div>
                <div style={{ color: '#374151', fontSize: 10 }}>{c.org}</div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="p-5">
        <h3 className="font-bold text-sm mb-3" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Compétences clés</h3>
        <div className="flex flex-wrap gap-2">
          {['PINNs','Digital Twins','Deep Learning','Python','Azure ML','Unity 3D','Hydrogène Vert','PEM/AWE','Next.js','Formation'].map(s => (
            <span key={s} className="px-2.5 py-1 rounded-lg text-xs font-medium"
              style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#64748b' }}>{s}</span>
          ))}
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
          <h3 className="font-bold text-sm" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Mes projets</h3>
          <Link href="/projects" className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#c9a96e' }}>Voir tous</Link>
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
          <h3 className="font-bold text-sm" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Mon fil d&apos;activité</h3>
          <button className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#c9a96e' }}>Voir tout</button>
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
          <div className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold"
            style={{ background: '#c9a96e', color: '#0c0c0d', fontFamily: 'Playfair Display, serif' }}>HN</div>
          <input placeholder="Écrire un message..."
            className="flex-1 px-3.5 py-2 rounded text-xs focus:outline-none transition-colors"
            style={{ backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', color: '#9a9a9a' }} />
          <button className="w-8 h-8 rounded flex items-center justify-center hover:opacity-80 transition-opacity flex-shrink-0"
            style={{ background: '#c9a96e' }}>
            <svg width="11" height="11" viewBox="0 0 24 24" fill="#0c0c0d"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
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
          <h3 className="font-bold text-sm" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Opportunités pour vous</h3>
          <Link href="#" className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#c9a96e' }}>Voir tout</Link>
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
          <h3 className="font-bold text-sm" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Ma progression</h3>
          <button className="text-xs hover:opacity-70 transition-opacity" style={{ color: '#c9a96e' }}>Détails</button>
        </div>
        <div className="flex items-center gap-4 mb-5">
          <div className="relative w-20 h-20 flex-shrink-0">
            <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
              <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="5"/>
              <circle cx="40" cy="40" r="30" fill="none" strokeWidth="5" strokeLinecap="round"
                stroke="#c9a96e" strokeDasharray={`${0.74*2*Math.PI*30} ${2*Math.PI*30}`}/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold leading-none" style={{ color: '#c9a96e', fontFamily: 'Playfair Display, serif' }}>7</span>
              <span className="text-xs" style={{ color: '#9a9a9a' }}>Maker</span>
            </div>
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold mb-1" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>1 850 / 2 500 XP</p>
            <div className="rounded-full h-1.5 mb-1.5" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
              <div className="h-1.5 rounded-full" style={{ width:'74%', backgroundColor: '#c9a96e' }} />
            </div>
            <p className="text-xs" style={{ color: '#9a9a9a' }}>650 XP avant Niveau 8</p>
          </div>
        </div>
        <p className="text-xs mb-3" style={{ color: '#6a6a6a', fontFamily: 'Inter, sans-serif', letterSpacing: '0.06em' }}>Prochains badges</p>
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

      {/* Upgrade card — editorial, no decorative elements */}
      <div className="p-5 rounded-lg" style={{ background: '#141416', border: '1px solid rgba(201,169,110,0.2)' }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <span className="text-xs px-2 py-0.5 rounded mb-2 inline-block"
              style={{ background: 'rgba(201,169,110,0.12)', color: '#c9a96e', border: '1px solid rgba(201,169,110,0.2)', fontSize: 10, letterSpacing: '0.05em' }}>
              Premium
            </span>
            <p className="font-semibold text-sm mt-2" style={{ color: '#f2ede4', fontFamily: 'Playfair Display, serif' }}>Passez au niveau supérieur</p>
          </div>
        </div>
        <p className="text-xs leading-relaxed mb-4" style={{ color: '#9a9a9a', fontFamily: 'Inter, sans-serif' }}>
          Outils exclusifs et opportunités de développement avancées.
        </p>
        <button className="w-full py-2.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity"
          style={{ background: '#c9a96e', color: '#0c0c0d', fontFamily: 'Inter, sans-serif', letterSpacing: '0.03em' }}>
          Découvrir les abonnements
        </button>
        <p className="text-center text-xs mt-3" style={{ color: '#3a3a3a', fontFamily: 'Playfair Display, serif', fontStyle: 'italic' }}>Dream · Create · Impact</p>
      </div>
    </div>
  );
}

function TabContent({ activeTab }: { activeTab: string }) {
  if (activeTab === 'projets') {
    return (
      <div className="p-4" style={{ backgroundColor: '#0c0c0d' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg p-6" style={{ background: '#141416', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-sm" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Mes projets (2)</h3>
              <Link href="/projects" className="text-xs hover:opacity-70" style={{ color: '#c9a96e' }}>Voir tous les projets</Link>
            </div>
            {[
              { title:'OLOD Platform', status:'En cours', category:'Tech & Innovation', progress:72, emoji:'🌐' },
              { title:'Digital Twin H₂ Storage', status:'En cours', category:'Science · Énergie', progress:55, emoji:'⚗️' },
            ].map(p => (
              <div key={p.title} className="flex items-center gap-4 mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-14 h-14 rounded flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.15)' }}>{p.emoji}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm" style={{ color: '#f2ede4' }}>{p.title}</span>
                    <span className="text-xs px-2 py-0.5 rounded"
                      style={{ background: 'rgba(201,169,110,0.1)', color: '#c9a96e', border: '1px solid rgba(201,169,110,0.2)', fontSize: 10 }}>
                      {p.status}
                    </span>
                  </div>
                  <p className="text-xs mb-2" style={{ color: '#9a9a9a' }}>{p.category}</p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 rounded-full h-1" style={{ background: 'rgba(255,255,255,0.06)' }}>
                      <div className="h-1 rounded-full" style={{ width: `${p.progress}%`, backgroundColor: '#c9a96e' }} />
                    </div>
                    <span className="text-xs font-medium" style={{ color: '#c9a96e' }}>{p.progress}%</span>
                  </div>
                </div>
                <Link href="/projects" className="text-xs px-3 py-1.5 rounded font-medium hover:opacity-80 transition-opacity"
                  style={{ color: '#c9a96e', background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)' }}>Voir</Link>
              </div>
            ))}
            <Link href="/projects" className="block w-full text-center py-2.5 rounded text-xs font-semibold mt-2 hover:opacity-90 transition-opacity"
              style={{ background: '#c9a96e', color: '#0c0c0d' }}>+ Créer un nouveau projet</Link>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'connexions') {
    return (
      <div className="p-4" style={{ backgroundColor: '#0c0c0d' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg p-6" style={{ background: '#141416', border: '1px solid rgba(255,255,255,0.07)' }}>
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-sm" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Mes connexions (124)</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Sarah K.', role: 'CTO GreenEnergy', nation: 'Innovateurs', avatar: 'SK' },
                { name: 'Ali B.', role: 'IoT Engineer', nation: 'Bâtisseurs', avatar: 'AB' },
                { name: 'Sofia M.', role: 'Product Manager', nation: 'Bâtisseurs', avatar: 'SM' },
                { name: 'Youssef R.', role: 'Data Scientist', nation: 'Innovateurs', avatar: 'YR' },
                { name: 'Nadia H.', role: 'UX Designer', nation: 'Artisans', avatar: 'NH' },
                { name: 'Omar Z.', role: 'Blockchain Dev', nation: 'Pionniers', avatar: 'OZ' },
              ].map(c => (
                <div key={c.name} className="flex items-center gap-3 p-3 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{ background: '#1a1a1d', border: '1px solid rgba(201,169,110,0.3)', color: '#c9a96e', fontFamily: 'Inter, sans-serif' }}>{c.avatar}</div>
                  <div>
                    <p className="font-semibold text-xs" style={{ color: '#f2ede4' }}>{c.name}</p>
                    <p className="text-xs" style={{ color: '#9a9a9a' }}>{c.role}</p>
                    <p className="text-xs" style={{ color: '#6a6a6a' }}>{c.nation}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs mt-4" style={{ color: '#6a6a6a' }}>et 118 autres connexions…</p>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'badges') {
    return (
      <div className="p-4" style={{ backgroundColor: '#0c0c0d' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg p-6" style={{ background: '#141416', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 className="font-bold text-sm mb-5" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Mes badges (8)</h3>
            <div className="grid grid-cols-4 gap-3">
              {[
                { icon: '🏅', label: 'Expert Digital Twins' },
                { icon: '🌱', label: 'Green Innovator' },
                { icon: '🤝', label: 'Super Connecteur' },
                { icon: '🚀', label: 'Early Adopter' },
                { icon: '💡', label: 'Mentor' },
                { icon: '🌍', label: 'Nation Builder' },
                { icon: '⚗️', label: 'Chercheur' },
                { icon: '🎓', label: 'Formateur' },
              ].map(b => (
                <div key={b.label} className="flex flex-col items-center gap-2 p-4 rounded text-center"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,169,110,0.15)' }}>
                  <div className="text-2xl">{b.icon}</div>
                  <p className="text-xs" style={{ color: '#9a9a9a', fontFamily: 'Inter, sans-serif' }}>{b.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'journal') {
    return (
      <div className="p-4" style={{ backgroundColor: '#0c0c0d' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg p-6" style={{ background: '#141416', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 className="font-bold text-sm mb-5" style={{ color: '#f2ede4', fontFamily: 'Inter, sans-serif' }}>Mon journal de rêves</h3>
            <div className="space-y-3">
              {[
                { date: "Aujourd'hui", title: 'Vision OLOD 2026', text: 'Atteindre 10 000 membres actifs et 500 projets collaboratifs...' },
                { date: 'Il y a 3 jours', title: 'Avancée H₂ Storage', text: 'Le modèle thermochimique atteint 94% de précision sur les données LIMSET...' },
                { date: 'Il y a 1 semaine', title: 'Impact formation UM6P', text: 'Session Python ML terminée avec 95% de satisfaction. Prochaine étape: Deep Learning...' },
              ].map(j => (
                <div key={j.title} className="p-4 rounded" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <span className="font-semibold text-sm" style={{ color: '#f2ede4', fontFamily: 'Playfair Display, serif' }}>{j.title}</span>
                    <span className="text-xs flex-shrink-0" style={{ color: '#6a6a6a' }}>{j.date}</span>
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: '#9a9a9a' }}>{j.text}</p>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 py-2.5 rounded text-xs font-semibold hover:opacity-90 transition-opacity"
              style={{ background: '#c9a96e', color: '#0c0c0d' }}>+ Nouvelle entrée</button>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'parametres') {
    return (
      <div className="p-4" style={{ backgroundColor: '#080c18' }}>
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(145deg, #0e1628, #0a111e)', border: '1px solid rgba(255,255,255,0.07)' }}>
            <h3 className="font-bold text-sm mb-5" style={{ color: '#c7d2fe' }}>Paramètres du profil</h3>
            <div className="space-y-4">
              {[
                { label: 'Nom complet', value: 'Dr Hassan NAANANI', type: 'text' },
                { label: 'Titre', value: 'CTO DIGITHS • Chercheur LIMSET UM6P', type: 'text' },
                { label: 'Email', value: 'h.naanani@digiths.ma', type: 'email' },
                { label: 'Localisation', value: 'Benguerir, Maroc 🇲🇦', type: 'text' },
              ].map(f => (
                <div key={f.label}>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: '#4b5673' }}>{f.label}</label>
                  <input defaultValue={f.value} type={f.type}
                    className="w-full px-4 py-2.5 rounded-xl text-sm focus:outline-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#e2e8f0' }} />
                </div>
              ))}
              <button className="w-full py-2.5 rounded-xl text-xs font-semibold text-white mt-2"
                style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}>Enregistrer les modifications</button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Onglet profil (défaut) → les 3 colonnes
  return (
    <div className="grid gap-4 p-4" style={{ gridTemplateColumns: '300px 1fr 280px', backgroundColor: '#080c18' }}>
      <AboutColumn />
      <MiddleColumn />
      <RightColumn />
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
          <TabContent activeTab={activeTab} />
        </div>
      </div>
    </div>
  );
}
