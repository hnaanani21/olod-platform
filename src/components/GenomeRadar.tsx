'use client';

import type { DreamGenome } from '@/types';

interface GenomeRadarProps {
  genome: DreamGenome;
  size?: number;
}

const dimensions = [
  { key: 'impact', label: 'Impact', angle: -90 },
  { key: 'scale', label: 'Échelle', angle: -30 },
  { key: 'nature', label: 'Nature', angle: 30 },
  { key: 'stage', label: 'Stade', angle: 90 },
  { key: 'resources', label: 'Ressources', angle: 150 },
  { key: 'values', label: 'Valeurs', angle: 210 },
];

function getScore(genome: DreamGenome, key: string): number {
  if (key === 'impact') return genome.impact * 10;
  if (key === 'scale') {
    const scales: Record<string, number> = { local: 20, national: 40, 'Panafricain': 70, Panafricain: 70, mondial: 100 };
    return scales[genome.scale] ?? 60;
  }
  if (key === 'nature') return 70;
  if (key === 'stage') {
    const stages: Record<string, number> = { idea: 20, prototype: 40, mvp: 60, growth: 80, impact: 100 };
    return stages[genome.stage] ?? 50;
  }
  if (key === 'resources') return Math.min(100, (genome.resources?.length ?? 1) * 25);
  if (key === 'values') return Math.min(100, (genome.values?.length ?? 1) * 20);
  return 50;
}

export default function GenomeRadar({ genome, size = 200 }: GenomeRadarProps) {
  const center = size / 2;
  const maxR = size * 0.38;
  const levels = 4;

  // Build polygon points
  const points = dimensions.map(({ key, angle }) => {
    const score = getScore(genome, key) / 100;
    const rad = (angle * Math.PI) / 180;
    const r = maxR * score;
    return {
      x: center + r * Math.cos(rad),
      y: center + r * Math.sin(rad),
    };
  });

  const polygonPoints = points.map((p) => `${p.x},${p.y}`).join(' ');

  // Grid levels
  const gridPolygons = Array.from({ length: levels }, (_, i) => {
    const r = (maxR * (i + 1)) / levels;
    return dimensions
      .map(({ angle }) => {
        const rad = (angle * Math.PI) / 180;
        return `${center + r * Math.cos(rad)},${center + r * Math.sin(rad)}`;
      })
      .join(' ');
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
      {/* Grid */}
      {gridPolygons.map((pts, i) => (
        <polygon
          key={i}
          points={pts}
          fill="none"
          stroke="rgba(255,255,255,0.06)"
          strokeWidth="1"
        />
      ))}

      {/* Axis lines */}
      {dimensions.map(({ angle, label }) => {
        const rad = (angle * Math.PI) / 180;
        const x = center + maxR * Math.cos(rad);
        const y = center + maxR * Math.sin(rad);
        const lx = center + (maxR + 18) * Math.cos(rad);
        const ly = center + (maxR + 18) * Math.sin(rad);
        return (
          <g key={angle}>
            <line x1={center} y1={center} x2={x} y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
            <text
              x={lx}
              y={ly}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="rgba(165,180,252,0.8)"
              fontSize="8"
              fontFamily="Inter, sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* Data polygon */}
      <polygon
        points={polygonPoints}
        fill="rgba(99,102,241,0.2)"
        stroke="#6366f1"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />

      {/* Points */}
      {points.map((p, i) => (
        <circle
          key={i}
          cx={p.x}
          cy={p.y}
          r="3"
          fill="#818cf8"
          stroke="#312e81"
          strokeWidth="1.5"
        />
      ))}

      {/* Center */}
      <circle cx={center} cy={center} r="2" fill="#6366f1" />
    </svg>
  );
}
