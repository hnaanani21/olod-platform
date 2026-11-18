'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Node {
  id: string;
  label: string;
  type: 'self' | 'dream' | 'project' | 'person' | 'nation' | 'skill';
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: string[];
  color: string;
  size: number;
  meta?: string;
}

const NODES: Node[] = [
  { id: 'self', label: 'Dr Hassan\nNAANANI', type: 'self', x: 0, y: 0, vx: 0, vy: 0, connections: ['olod', 'dt-h2', 'coopmarket', 'bâtisseurs', 'skill-ai', 'skill-dt', 'sofia', 'ali', 'sarah'], color: '#6366f1', size: 32, meta: 'CTO DIGITHS — Niveau 7' },
  { id: 'olod', label: 'OLOD\nPlatform', type: 'dream', x: 180, y: -80, vx: 0, vy: 0, connections: ['self', 'bâtisseurs', 'sofia', 'ali'], color: '#8b5cf6', size: 24, meta: 'En cours — 72%' },
  { id: 'dt-h2', label: 'Digital Twin\nH₂ Storage', type: 'project', x: -160, y: -120, vx: 0, vy: 0, connections: ['self', 'innovateurs', 'skill-dt', 'sarah'], color: '#06b6d4', size: 22, meta: 'En cours — 55%' },
  { id: 'coopmarket', label: 'COOPMARKET\nAI', type: 'project', x: 20, y: 180, vx: 0, vy: 0, connections: ['self', 'bâtisseurs', 'skill-ai'], color: '#f59e0b', size: 20, meta: 'Idée — 28%' },
  { id: 'bâtisseurs', label: 'Dream Nation\nBâtisseurs', type: 'nation', x: 240, y: 100, vx: 0, vy: 0, connections: ['self', 'olod', 'coopmarket', 'ali'], color: '#10b981', size: 26, meta: '🌟 Principale — 1,247 membres' },
  { id: 'innovateurs', label: 'Dream Nation\nInnovateurs', type: 'nation', x: -240, y: 60, vx: 0, vy: 0, connections: ['self', 'dt-h2', 'skill-dt'], color: '#3b82f6', size: 22, meta: '856 membres' },
  { id: 'skill-ai', label: 'IA & ML', type: 'skill', x: 100, y: 240, vx: 0, vy: 0, connections: ['self', 'coopmarket'], color: '#ec4899', size: 16, meta: 'Compétence principale' },
  { id: 'skill-dt', label: 'Digital Twins', type: 'skill', x: -200, y: 200, vx: 0, vy: 0, connections: ['self', 'dt-h2', 'innovateurs'], color: '#06b6d4', size: 16, meta: 'Compétence principale' },
  { id: 'sofia', label: 'Sofia M.', type: 'person', x: 300, y: -40, vx: 0, vy: 0, connections: ['olod', 'bâtisseurs'], color: '#f97316', size: 18, meta: 'Designer UX — 94% compatibilité' },
  { id: 'ali', label: 'Ali B.', type: 'person', x: 320, y: 160, vx: 0, vy: 0, connections: ['olod', 'bâtisseurs'], color: '#a78bfa', size: 18, meta: 'Developer Full Stack — 88% compatibilité' },
  { id: 'sarah', label: 'Sarah K.', type: 'person', x: -280, y: -80, vx: 0, vy: 0, connections: ['dt-h2', 'self'], color: '#34d399', size: 18, meta: 'Chercheuse H₂ — 92% compatibilité' },
];

const TYPE_LABELS: Record<string, string> = {
  self: 'Mon profil',
  dream: 'Rêve',
  project: 'Projet',
  person: 'Connexion',
  nation: 'Dream Nation',
  skill: 'Compétence',
};

export default function DreamGraphPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>(JSON.parse(JSON.stringify(NODES)));
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const animRef = useRef<number>(0);
  const mouseRef = useRef({ x: 0, y: 0, dragging: false, dragId: null as string | null });
  const offsetRef = useRef({ x: 0, y: 0, scale: 1 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      offsetRef.current = { x: canvas.width / 2, y: canvas.height / 2, scale: 1 };
    };
    resize();
    window.addEventListener('resize', resize);

    const getCanvasPos = (cx: number, cy: number) => ({
      x: (cx - offsetRef.current.x) / offsetRef.current.scale,
      y: (cy - offsetRef.current.y) / offsetRef.current.scale,
    });

    const getNodeAt = (x: number, y: number) => {
      return nodesRef.current.find(n => {
        const dx = n.x - x;
        const dy = n.y - y;
        return Math.sqrt(dx * dx + dy * dy) < n.size + 8;
      });
    };

    // Mouse events
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const cx = e.clientX - rect.left;
      const cy = e.clientY - rect.top;
      const { x, y } = getCanvasPos(cx, cy);
      mouseRef.current.x = x;
      mouseRef.current.y = y;

      if (mouseRef.current.dragging && mouseRef.current.dragId) {
        const node = nodesRef.current.find(n => n.id === mouseRef.current.dragId);
        if (node) { node.x = x; node.y = y; node.vx = 0; node.vy = 0; }
      } else {
        const h = getNodeAt(x, y);
        setHoveredNode(h ? h.id : null);
        canvas.style.cursor = h ? 'pointer' : 'default';
      }
    };

    const onMouseDown = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const { x, y } = getCanvasPos(e.clientX - rect.left, e.clientY - rect.top);
      const node = getNodeAt(x, y);
      if (node) {
        mouseRef.current.dragging = true;
        mouseRef.current.dragId = node.id;
        setSelectedNode(node);
      }
    };

    const onMouseUp = () => {
      mouseRef.current.dragging = false;
      mouseRef.current.dragId = null;
    };

    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mouseup', onMouseUp);

    // Physics simulation
    const simulate = () => {
      const nodes = nodesRef.current;
      const K = 0.015;
      const repulsion = 8000;
      const damping = 0.85;

      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === mouseRef.current.dragId) continue;
        let fx = 0, fy = 0;

        // Repulsion
        for (let j = 0; j < nodes.length; j++) {
          if (i === j) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
          const f = repulsion / (dist * dist);
          fx += (dx / dist) * f;
          fy += (dy / dist) * f;
        }

        // Attraction along edges
        for (const connId of nodes[i].connections) {
          const other = nodes.find(n => n.id === connId);
          if (!other) continue;
          const dx = other.x - nodes[i].x;
          const dy = other.y - nodes[i].y;
          fx += dx * K;
          fy += dy * K;
        }

        // Center gravity
        fx -= nodes[i].x * 0.004;
        fy -= nodes[i].y * 0.004;

        nodes[i].vx = (nodes[i].vx + fx) * damping;
        nodes[i].vy = (nodes[i].vy + fy) * damping;
        nodes[i].x += nodes[i].vx;
        nodes[i].y += nodes[i].vy;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.translate(offsetRef.current.x, offsetRef.current.y);
      ctx.scale(offsetRef.current.scale, offsetRef.current.scale);

      const nodes = nodesRef.current;
      const hovered = hoveredNode;

      // Draw edges
      for (const node of nodes) {
        for (const connId of node.connections) {
          const other = nodes.find(n => n.id === connId);
          if (!other || other.id < node.id) continue;

          const isHighlighted = hovered === node.id || hovered === connId;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = isHighlighted
            ? `${node.color}99`
            : 'rgba(255,255,255,0.08)';
          ctx.lineWidth = isHighlighted ? 2 : 1;
          ctx.stroke();
        }
      }

      // Draw nodes
      for (const node of nodes) {
        const isHovered = hovered === node.id;
        const isSelected = selectedNode?.id === node.id;
        const size = node.size * (isHovered ? 1.2 : 1);

        // Glow
        if (isHovered || isSelected) {
          const grd = ctx.createRadialGradient(node.x, node.y, size * 0.5, node.x, node.y, size * 2.5);
          grd.addColorStop(0, `${node.color}44`);
          grd.addColorStop(1, 'transparent');
          ctx.beginPath();
          ctx.arc(node.x, node.y, size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grd;
          ctx.fill();
        }

        // Circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
        const grad = ctx.createRadialGradient(node.x - size * 0.3, node.y - size * 0.3, 0, node.x, node.y, size);
        grad.addColorStop(0, `${node.color}ff`);
        grad.addColorStop(1, `${node.color}88`);
        ctx.fillStyle = grad;
        ctx.fill();

        if (isSelected) {
          ctx.strokeStyle = '#fff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        // Label
        const lines = node.label.split('\n');
        ctx.fillStyle = '#ffffffdd';
        ctx.font = `${node.type === 'self' ? 'bold ' : ''}${Math.max(10, size * 0.42)}px Inter, sans-serif`;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const lineH = size * 0.5;
        const startY = node.y + size + 14 + (lines.length - 1) * lineH * 0.5;
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(lines[i], node.x, startY + i * lineH - (lines.length - 1) * lineH * 0.5);
        }
      }

      ctx.restore();
    };

    const loop = () => {
      simulate();
      draw();
      animRef.current = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(animRef.current);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('mousedown', onMouseDown);
      canvas.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('resize', resize);
    };
  }, [hoveredNode, selectedNode]);

  const filtered = filter === 'all'
    ? nodesRef.current
    : nodesRef.current.filter(n => n.type === filter || n.id === 'self');

  return (
    <div className="min-h-screen bg-[#060918] text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="text-white/40 hover:text-white/80 transition-colors text-sm">
            ← Dashboard
          </Link>
          <div>
            <h1 className="text-xl font-bold">Dream Graph™</h1>
            <p className="text-xs text-white/40">Living Constellation — Votre univers de connexions</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
            🌟 {NODES.length} nœuds · {NODES.reduce((s, n) => s + n.connections.length, 0) / 2} connexions
          </span>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Canvas */}
        <div className="flex-1 relative">
          <canvas ref={canvasRef} className="w-full h-full" style={{ background: 'radial-gradient(ellipse at 30% 40%, rgba(99,102,241,0.08) 0%, transparent 60%), radial-gradient(ellipse at 70% 60%, rgba(139,92,246,0.08) 0%, transparent 60%)' }} />

          {/* Filter pills */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {['all', 'dream', 'project', 'person', 'nation', 'skill'].map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`px-3 py-1 rounded-full text-xs border transition-all ${filter === f ? 'bg-purple-500/20 border-purple-500/50 text-purple-300' : 'bg-black/40 border-white/10 text-white/50 hover:border-white/20 backdrop-blur-sm'}`}>
                {f === 'all' ? '🌐 Tout' : TYPE_LABELS[f]}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-xs">
            <p className="text-white/50 mb-2 font-semibold">Légende</p>
            <div className="space-y-1.5">
              {[
                { color: '#6366f1', label: 'Mon profil' },
                { color: '#8b5cf6', label: 'Rêves' },
                { color: '#06b6d4', label: 'Projets' },
                { color: '#10b981', label: 'Dream Nations' },
                { color: '#f97316', label: 'Connexions' },
                { color: '#ec4899', label: 'Compétences' },
              ].map(l => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: l.color }} />
                  <span className="text-white/60">{l.label}</span>
                </div>
              ))}
            </div>
            <p className="text-white/30 mt-2 text-xs">Glissez les nœuds pour réorganiser</p>
          </div>

          {/* Hint */}
          <div className="absolute top-4 right-4 text-xs text-white/30 text-right">
            <p>Cliquez pour sélectionner</p>
            <p>Glissez pour repositionner</p>
          </div>
        </div>

        {/* Side panel */}
        <div className="w-72 border-l border-white/5 bg-[#0a0e1a] overflow-y-auto">
          {selectedNode ? (
            <div className="p-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: `${selectedNode.color}33`, border: `2px solid ${selectedNode.color}66` }}>
                  <span className="text-lg">
                    {selectedNode.type === 'self' ? '👤' : selectedNode.type === 'dream' ? '🌟' : selectedNode.type === 'project' ? '📋' : selectedNode.type === 'nation' ? '🏳️' : selectedNode.type === 'person' ? '🤝' : '⚡'}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-white text-sm">{selectedNode.label.replace('\n', ' ')}</h3>
                  <span className="text-xs" style={{ color: selectedNode.color }}>{TYPE_LABELS[selectedNode.type]}</span>
                </div>
                <button onClick={() => setSelectedNode(null)} className="ml-auto text-white/30 hover:text-white/60">✕</button>
              </div>

              {selectedNode.meta && (
                <div className="bg-white/5 rounded-lg p-3 mb-4">
                  <p className="text-sm text-white/70">{selectedNode.meta}</p>
                </div>
              )}

              <div className="mb-4">
                <p className="text-xs text-white/40 mb-2">Connexions directes</p>
                <div className="space-y-2">
                  {selectedNode.connections.map(cid => {
                    const conn = NODES.find(n => n.id === cid);
                    if (!conn) return null;
                    return (
                      <button key={cid} onClick={() => setSelectedNode(conn)}
                        className="w-full flex items-center gap-2 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all text-left">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: conn.color }} />
                        <span className="text-sm text-white/70">{conn.label.replace('\n', ' ')}</span>
                        <span className="ml-auto text-xs text-white/30">{TYPE_LABELS[conn.type]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedNode.type === 'person' && (
                <button className="w-full py-2 bg-blue-500/10 border border-blue-500/30 text-blue-300 rounded-lg text-sm hover:bg-blue-500/20 transition-all">
                  🤝 Envoyer une demande de connexion
                </button>
              )}
              {(selectedNode.type === 'dream' || selectedNode.type === 'project') && (
                <button className="w-full py-2 bg-purple-500/10 border border-purple-500/30 text-purple-300 rounded-lg text-sm hover:bg-purple-500/20 transition-all">
                  👁️ Voir le projet complet
                </button>
              )}
              {selectedNode.type === 'nation' && (
                <button className="w-full py-2 bg-green-500/10 border border-green-500/30 text-green-300 rounded-lg text-sm hover:bg-green-500/20 transition-all">
                  🏳️ Rejoindre la Nation
                </button>
              )}
            </div>
          ) : (
            <div className="p-4">
              <h3 className="font-semibold text-white/80 text-sm mb-3">Votre Constellation</h3>
              <div className="space-y-2">
                {[
                  { icon: '🌟', label: 'Rêves actifs', val: '1' },
                  { icon: '📋', label: 'Projets', val: '3' },
                  { icon: '🤝', label: 'Connexions', val: '87' },
                  { icon: '🏳️', label: 'Dream Nations', val: '3' },
                ].map(stat => (
                  <div key={stat.label} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-white/60">{stat.icon} {stat.label}</span>
                    <span className="font-semibold text-white">{stat.val}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-xl">
                <p className="text-xs font-semibold text-purple-300 mb-1">🧬 Dream Genome Score</p>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-white/10 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{ width: '85%' }} />
                  </div>
                  <span className="text-sm font-bold text-white">85%</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xs text-white/40 mb-2">Connexions suggérées</p>
                {[
                  { name: 'Youssef A.', role: 'AI Engineer', pct: '95%', color: '#6366f1' },
                  { name: 'Fatima Z.', role: 'Researcher H₂', pct: '91%', color: '#06b6d4' },
                ].map(s => (
                  <div key={s.name} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg mb-2">
                    <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ backgroundColor: `${s.color}33`, color: s.color }}>
                      {s.name[0]}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-medium text-white">{s.name}</p>
                      <p className="text-xs text-white/40">{s.role}</p>
                    </div>
                    <span className="text-xs text-green-400 font-semibold">{s.pct}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-white/30 text-center mt-4">👆 Cliquez sur un nœud pour l&apos;explorer</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
