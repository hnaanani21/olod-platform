import Link from 'next/link';

export default function HomePage() {
  const nations = [
    { label: 'Technologie',  color: '#6366f1', members: '12 400' },
    { label: 'Art & Créa',   color: '#ec4899', members: '9 800' },
    { label: 'Sciences',     color: '#10b981', members: '7 200' },
    { label: 'Social',       color: '#c9a96e', members: '14 100' },
    { label: 'Éducation',    color: '#8b5cf6', members: '8 500' },
    { label: 'Environnement',color: '#22c55e', members: '6 300' },
    { label: 'Santé',        color: '#ef4444', members: '5 100' },
    { label: 'Finance',      color: '#3b82f6', members: '4 600' },
    { label: 'Culture',      color: '#f97316', members: '7 900' },
  ];

  const aiModules = [
    {
      title: 'Dream Genome™',
      desc: 'Sept dimensions vectorisées qui capturent l\'essence d\'un rêve en 90 secondes depuis une description libre.',
    },
    {
      title: 'ODME™ Matching',
      desc: 'Score de compatibilité pondéré entre porteurs et collaborateurs — taux d\'acceptation actuel 37 %.',
    },
    {
      title: 'Dream Coach™',
      desc: 'Agent LangGraph autonome qui structure, questionne et enrichit votre projet semaine après semaine.',
    },
    {
      title: 'RAG Pipeline',
      desc: 'LlamaIndex + pgvector — recherche sémantique sur l\'ensemble des Dream Pages et profils de la plateforme.',
    },
  ];

  const profiles = [
    { role: 'Dreamer',      desc: 'Porteur de projet' },
    { role: 'Dream Maker',  desc: 'Expert & mentor' },
    { role: 'Dream Lover',  desc: 'Ambassadeur' },
    { role: 'Dream Funder', desc: 'Investisseur' },
    { role: 'Admin',        desc: 'Modération & monitoring' },
  ];

  return (
    <main style={{ backgroundColor: '#0c0c0d', minHeight: '100vh' }}>

      {/* ── Nav ─────────────────────────────────────────────────────── */}
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        backgroundColor: 'rgba(12,12,13,0.92)',
        backdropFilter: 'blur(12px)',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', height: 56, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 6,
              backgroundColor: '#c9a96e',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 14, color: '#0c0c0d', lineHeight: 1 }}>O</span>
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 600, fontSize: 16, color: '#f2ede4' }}>OLOD</span>
          </div>
          <nav style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            <Link href="/dream-graph" style={{ fontSize: 13, color: '#7a7a7a', textDecoration: 'none' }}>Dream Graph</Link>
            <Link href="/nations" style={{ fontSize: 13, color: '#7a7a7a', textDecoration: 'none' }}>Nations</Link>
            <Link href="/matching" style={{ fontSize: 13, color: '#7a7a7a', textDecoration: 'none' }}>Matching</Link>
            <Link href="/dashboard" style={{
              fontSize: 13, fontWeight: 500, color: '#0c0c0d', textDecoration: 'none',
              backgroundColor: '#c9a96e', borderRadius: 6, padding: '7px 16px',
            }}>Accéder</Link>
          </nav>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 1200, margin: '0 auto', padding: '140px 24px 100px' }}>
        <div style={{ maxWidth: 740 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: '#c9a96e', letterSpacing: '0.08em', marginBottom: 24 }}>
            Réseau social collaboratif · IA native · V1
          </p>
          <h1 style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(48px, 7vw, 80px)',
            fontWeight: 600,
            lineHeight: 1.08,
            color: '#f2ede4',
            margin: '0 0 28px',
          }}>
            One Life,<br />
            <span style={{ color: '#c9a96e', fontStyle: 'italic' }}>One Dream</span>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.65, color: '#9a9a9a', maxWidth: 540, margin: '0 0 44px' }}>
            La plateforme qui transforme un rêve en projet structuré — grâce à des agents IA et à une communauté mondiale de collaborateurs.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link href="/dashboard" style={{
              backgroundColor: '#c9a96e', color: '#0c0c0d',
              borderRadius: 7, padding: '12px 24px',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              display: 'inline-block',
            }}>Commencer gratuitement</Link>
            <Link href="/dream-graph" style={{
              color: '#9a9a9a', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 7, padding: '12px 24px',
              fontWeight: 500, fontSize: 14, textDecoration: 'none',
              display: 'inline-block',
            }}>Explorer le Dream Graph</Link>
          </div>
        </div>

        {/* Stats strip */}
        <div style={{
          marginTop: 80,
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: 40,
          gap: 0,
        }}>
          {[
            { value: '48 000+', label: 'Dreamers actifs' },
            { value: '9',       label: 'Dream Nations' },
            { value: '37 %',    label: 'Taux de matching' },
            { value: '90 s',    label: 'Onboarding IA' },
          ].map((s, i) => (
            <div key={i} style={{
              paddingRight: 32,
              borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              paddingLeft: i > 0 ? 32 : 0,
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 36, fontWeight: 700, color: '#f2ede4', lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: 12, color: '#4a4a4a', marginTop: 8, fontWeight: 400 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── IA Modules ──────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <p className="section-label" style={{ marginBottom: 16 }}>Intelligence artificielle</p>
              <h2 style={{
                fontFamily: 'Playfair Display, serif', fontSize: 32,
                fontWeight: 600, lineHeight: 1.2, color: '#f2ede4', margin: 0,
              }}>
                Chaque couche, augmentée
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, backgroundColor: 'rgba(255,255,255,0.07)' }}>
              {aiModules.map((m) => (
                <div key={m.title} style={{ backgroundColor: '#0c0c0d', padding: '32px 28px' }}>
                  <h3 style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, fontWeight: 600, color: '#f2ede4', margin: '0 0 12px' }}>{m.title}</h3>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: '#6a6a6a', margin: 0 }}>{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Dream Nations ───────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <p className="section-label" style={{ marginBottom: 12 }}>Communautés</p>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, fontWeight: 600, color: '#f2ede4', margin: 0 }}>
              9 Dream Nations
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(9, 1fr)', gap: 2 }}>
            {nations.map((n) => (
              <Link href="/nations" key={n.label} style={{ textDecoration: 'none' }}>
                <div style={{
                  backgroundColor: '#141416', padding: '20px 12px', cursor: 'pointer',
                  borderTop: `2px solid ${n.color}`,
                  transition: 'background 0.2s',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 500, color: '#6a6a6a', marginBottom: 8 }}>{n.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: n.color }}>{n.members}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5 Profils ───────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <p className="section-label" style={{ marginBottom: 16 }}>Écosystème</p>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 32, fontWeight: 600, color: '#f2ede4', margin: '0 0 16px' }}>
                5 profils,<br />1 écosystème
              </h2>
              <p style={{ fontSize: 13, lineHeight: 1.6, color: '#6a6a6a', margin: 0 }}>
                Chaque participant joue un rôle distinct — porteur, expert, ambassadeur, investisseur ou modérateur.
              </p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 2 }}>
              {profiles.map((p, i) => (
                <div key={p.role} style={{
                  backgroundColor: '#141416',
                  padding: '24px 16px',
                  borderLeft: `2px solid ${i === 0 ? '#c9a96e' : 'rgba(255,255,255,0.07)'}`,
                }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: i === 0 ? '#c9a96e' : '#f2ede4', marginBottom: 6 }}>{p.role}</div>
                  <div style={{ fontSize: 11, color: '#5a5a5a', lineHeight: 1.5 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.07)', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: 42, fontWeight: 600, color: '#f2ede4', margin: '0 0 20px', lineHeight: 1.15 }}>
              Votre rêve mérite<br />
              <span style={{ color: '#c9a96e', fontStyle: 'italic' }}>une structure</span>
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: '#6a6a6a', margin: '0 0 36px' }}>
              Rejoignez 48 000 Dreamers qui ont franchi le pas — de l'idée au projet collaboratif, en moins d'une semaine.
            </p>
            <Link href="/dashboard" style={{
              backgroundColor: '#c9a96e', color: '#0c0c0d',
              borderRadius: 7, padding: '13px 28px',
              fontWeight: 600, fontSize: 14, textDecoration: 'none',
              display: 'inline-block',
            }}>Créer mon profil</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { step: '1', text: 'Décrivez votre rêve en quelques phrases' },
              { step: '2', text: 'Le Dream Genome™ le structure en 90 secondes' },
              { step: '3', text: 'L\'ODME™ trouve vos collaborateurs idéaux' },
              { step: '4', text: 'Votre Dream Coach™ vous accompagne au quotidien' },
            ].map((s) => (
              <div key={s.step} style={{
                display: 'flex', alignItems: 'center', gap: 20,
                backgroundColor: '#141416', padding: '20px 24px',
              }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#c9a96e', minWidth: 16 }}>{s.step}</span>
                <span style={{ fontSize: 13, color: '#9a9a9a', lineHeight: 1.5 }}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer style={{
        borderTop: '1px solid rgba(255,255,255,0.07)',
        padding: '32px 24px',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 24, height: 24, borderRadius: 5, backgroundColor: '#c9a96e', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontWeight: 700, fontSize: 12, color: '#0c0c0d' }}>O</span>
            </div>
            <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 14, color: '#f2ede4' }}>OLOD</span>
            <span style={{ fontSize: 12, color: '#3a3a3a' }}>— One Life One Dream</span>
          </div>
          <span style={{ fontSize: 12, color: '#3a3a3a' }}>
            Développé par DIGITHS · 2026
          </span>
        </div>
      </footer>

    </main>
  );
}
