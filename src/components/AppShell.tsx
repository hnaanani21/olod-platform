'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

/* ─── Design tokens ─────────────────────────────────────────
   bg-void     : #04060f
   bg-base     : #080c18
   bg-card     : #0c1120
   accent-indigo: #6366f1
─────────────────────────────────────────────────────────── */

const NAV_ITEMS = [
  { icon: '⬡',  label: 'Dashboard',      href: '/dashboard' },
  { icon: '🎯', label: 'Matching ODME™', href: '/matching' },
  { icon: '🕸️', label: 'Dream Graph',    href: '/dream-graph' },
  { icon: '🌍', label: 'Dream Nations',  href: '/nations' },
  { icon: '🗺️', label: 'Missions',       href: '/missions' },
  { icon: '💎', label: 'OIP Points™',    href: '/oip' },
  { icon: '📋', label: 'Projets',        href: '/projects' },
  { icon: '🎓', label: 'Opportunités',   href: '/opportunities' },
  { icon: '💬', label: 'Messages',       href: '#', badge: 5,  badgeColor: '#818cf8' },
  { icon: '🔔', label: 'Notifications',  href: '#', badge: 12, badgeColor: '#f87171' },
  { icon: '⚙️', label: 'Paramètres',    href: '#' },
];

function Sidebar({ activePath }: { activePath: string }) {
  return (
    <div
      className="w-[220px] flex-shrink-0 flex flex-col h-screen"
      style={{
        background: 'linear-gradient(180deg, #060916 0%, #04060f 100%)',
        borderRight: '1px solid rgba(99,102,241,0.12)',
      }}
    >
      {/* Logo */}
      <div className="px-5 py-5 flex items-center gap-3">
        <div
          className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%)' }}
        >
          <span className="font-black text-white text-sm relative z-10">O</span>
          <div
            className="absolute inset-0 opacity-50"
            style={{ background: 'radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 60%)' }}
          />
        </div>
        <div>
          <div className="font-black text-sm" style={{ color: '#f0f4ff', letterSpacing: '0.03em' }}>OLOD</div>
          <div className="text-xs font-medium" style={{ color: '#6366f1', letterSpacing: '0.02em' }}>One Life One Dream</div>
        </div>
      </div>

      <div className="mx-4 mb-2 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(99,102,241,0.3), transparent)' }} />

      <nav className="flex-1 px-3 py-1 space-y-0.5 overflow-y-auto">
        {NAV_ITEMS.map(item => {
          const active = activePath === item.href || (item.href !== '/' && activePath.startsWith(item.href) && item.href !== '#');
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all relative group"
              style={active
                ? { background: 'linear-gradient(90deg, rgba(99,102,241,0.18) 0%, rgba(99,102,241,0.06) 100%)', color: '#a5b4fc' }
                : { color: '#4b5673' }
              }
            >
              {active && (
                <>
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 rounded-r-full"
                    style={{ background: 'linear-gradient(180deg, #818cf8, #6366f1)' }} />
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(99,102,241,0.04)' }} />
                </>
              )}
              {!active && (
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(255,255,255,0.03)' }} />
              )}
              <span className={`text-sm w-5 text-center flex-shrink-0 ${active ? '' : 'opacity-50 group-hover:opacity-80 transition-opacity'}`}>
                {item.icon}
              </span>
              <span className={`flex-1 font-medium truncate ${active ? '' : 'group-hover:text-slate-300 transition-colors'}`}>
                {item.label}
              </span>
              {item.badge && (
                <span
                  className="text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center text-white flex-shrink-0"
                  style={{ backgroundColor: (item as any).badgeColor, boxShadow: `0 0 8px ${(item as any).badgeColor}60` }}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Galaxy card */}
      <div className="m-3">
        <div
          className="relative p-4 rounded-2xl overflow-hidden text-center"
          style={{ background: 'linear-gradient(135deg, #0c0a2e 0%, #130d3a 50%, #0a1428 100%)', border: '1px solid rgba(139,92,246,0.2)' }}
        >
          {[...Array(18)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: i%4===0?2:1, height: i%4===0?2:1, top:`${(i*41+7)%100}%`, left:`${(i*59+13)%100}%`, opacity: 0.15+(i%6)*0.08 }} />
          ))}
          <div className="absolute inset-0 rounded-2xl"
            style={{ background: 'radial-gradient(ellipse at 50% 70%, rgba(99,102,241,0.3) 0%, transparent 65%)' }} />
          <div className="relative w-14 h-14 mx-auto mb-3">
            <div className="absolute inset-0 rounded-full"
              style={{ background: 'radial-gradient(circle at 35% 35%, rgba(129,140,248,0.5), rgba(99,102,241,0.2), transparent)', border: '1px solid rgba(99,102,241,0.3)' }} />
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

function TopBar({ title, subtitle }: { title?: string; subtitle?: string }) {
  const actions = [
    { icon: '✦', label: 'Partager un rêve', from: '#7c3aed', to: '#6366f1' },
    { icon: '🤝', label: 'Collaborateurs',   from: '#1d4ed8', to: '#3b82f6' },
    { icon: '🚀', label: 'Rejoindre',        from: '#065f46', to: '#059669' },
    { icon: '🌍', label: 'Nations',          from: '#92400e', to: '#d97706' },
    { icon: '⬡',  label: 'QR Connect',      from: '#164e63', to: '#0891b2' },
  ];
  return (
    <div
      className="flex-shrink-0 px-5 py-3 flex items-center gap-4"
      style={{ background: 'linear-gradient(90deg, #060916 0%, #04060f 100%)', borderBottom: '1px solid rgba(99,102,241,0.1)' }}
    >
      {title ? (
        <div className="flex-shrink-0 mr-2">
          <div className="text-sm font-bold" style={{ color: '#f0f4ff' }}>{title}</div>
          {subtitle && <div className="text-xs" style={{ color: '#4b5673' }}>{subtitle}</div>}
        </div>
      ) : (
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
      )}

      <div className="flex items-center gap-2 flex-1 overflow-x-auto">
        {actions.map(a => (
          <button key={a.label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white whitespace-nowrap flex-shrink-0 transition-all hover:scale-105 hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${a.from}, ${a.to})`, boxShadow: `0 2px 8px ${a.to}40` }}>
            <span className="text-xs">{a.icon}</span> {a.label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4 flex-shrink-0">
        <div className="relative">
          <button style={{ color: '#4b5673' }} className="hover:text-slate-400 transition-colors">
            <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
            </svg>
          </button>
          <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-xs flex items-center justify-center text-white font-bold"
            style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)', boxShadow: '0 0 8px rgba(239,68,68,0.5)', fontSize: 9 }}>12</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer group">
          <div
            className="relative w-8 h-8 rounded-full flex items-center justify-center font-black text-xs text-white"
            style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', boxShadow: '0 0 12px rgba(99,102,241,0.4)', border: '2px solid rgba(129,140,248,0.3)' }}
          >
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

export function AppShell({
  children,
  topBarTitle,
  topBarSubtitle,
}: {
  children: React.ReactNode;
  topBarTitle?: string;
  topBarSubtitle?: string;
}) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#04060f' }}>
      <Sidebar activePath={pathname} />
      <div className="flex-1 flex flex-col overflow-hidden min-w-0">
        <TopBar title={topBarTitle} subtitle={topBarSubtitle} />
        <div className="flex-1 overflow-y-auto" style={{ backgroundColor: '#080c18' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
