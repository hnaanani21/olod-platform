'use client';

import { mockOIPTransactions } from '@/lib/data';

export default function OIPLedger({ limit = 6 }: { limit?: number }) {
  const txs = mockOIPTransactions.slice(0, limit);

  function formatTs(ts: string) {
    return new Date(ts).toLocaleDateString('fr-FR', {
      day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit',
    });
  }

  return (
    <div className="glass-card p-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-white font-semibold text-sm flex items-center gap-2">
          <span>💫</span> Journal OIP Points
        </h3>
        <span className="dream-badge">Append-only</span>
      </div>

      <div className="space-y-2">
        {txs.map((tx) => {
          const isPositive = tx.amount > 0;
          const icon = tx.type === 'bonus' ? '🏆' : isPositive ? '📥' : '📤';
          const amtColor = isPositive ? 'text-emerald-400' : 'text-red-400';
          const amtSign = isPositive ? '+' : '';

          return (
            <div key={tx.id} className="flex items-center gap-3 py-2 border-b border-white/4 last:border-0">
              <span className="text-base w-7 flex-shrink-0">{icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-slate-300 text-xs leading-snug truncate">{tx.reason}</p>
                <p className="text-slate-600 text-xs mt-0.5">{formatTs(tx.timestamp)}</p>
              </div>
              <span className={`${amtColor} font-bold text-sm flex-shrink-0`}>
                {amtSign}{tx.amount}
              </span>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-slate-500 text-xs">Total accumulé</span>
        <div className="flex items-center gap-1">
          <span className="text-amber-400 text-xs">💫</span>
          <span className="text-amber-300 font-bold">
            {txs.reduce((sum, t) => sum + t.amount, 0).toLocaleString()} OIP
          </span>
        </div>
      </div>
    </div>
  );
}
