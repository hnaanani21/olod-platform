# OLOD — One Life One Dream 🌟

> **Le premier réseau social collaboratif augmenté par l'IA** pour transformer les rêves en réalisations concrètes.

Développé par **[DIGITHS](https://digiths.com)** · CTO : Hassan Naanani

---

## Vision

OLOD connecte des **Dreamers** (porteurs de projets), des **Dream Makers** (contributeurs), des **Dream Lovers** (soutiens), et des **Dream Funders** (investisseurs) au travers d'un moteur de matching IA — le **ODME™ (OLOD Dream Matching Engine)**.

---

## Stack Technique

| Couche | Technologies |
|--------|-------------|
| Frontend | Next.js 14 · React 18 · TypeScript · Tailwind CSS |
| Design | Glass morphism · Dark cosmic theme · Poppins/Inter |
| Backend (V2) | Python FastAPI · PostgreSQL + pgvector · Redis + Celery |
| IA & Agents | LangGraph · CrewAI · LlamaIndex · LiteLLM Gateway |
| Infra (V2) | Docker · GitHub Actions CI/CD · Vercel / Azure |

---

## Fonctionnalités V1

### 🧬 Dream Genome™
Profil vectoriel à 7 dimensions (Domaine, Impact, Nature, Stade, Ressources, Échelle, Valeurs) calculé lors de l'onboarding et affiné par l'IA.

### 🎯 ODME™ — Dream Matching Engine
```
Score(A,B) = 100 × [0,4 × Compatibilité(Domaine+Impact)
                   + 0,4 × Complémentarité(Ressources)
                   + 0,2 × Alignement(Valeurs)]
```
- **V1** : Score arithmétique pondéré
- **V2** : Similarité cosinus sur embeddings 1536-dim (OpenAI)
- **V3** : Multi-agent LangGraph + raisonnement

### ⭐ OIP Points™ (OLOD Impact Points)
Système de gamification sur ledger append-only. Chaque contribution est tracée et récompensée.

### 🤖 9 Agents IA
| Agent | Rôle |
|-------|------|
| Dream Coach™ | Conseiller personnalisé |
| Match Curator™ | Curateur de matchs |
| Health Check™ | Score santé des projets |
| Trust Auditor™ | Vérification de crédibilité |
| Skill Match Agent | Matching missions/compétences |
| Due Diligence Agent™ | Analyse financière (funders) |
| Onboarding Agent | Accompagnement nouveaux users |
| Dream Summarizer | Résumé IA des Dream Pages |
| Curation Agent™ | Modération du contenu |

### 🌍 9 Dream Nations
Tech · Art · Science · Social · Education · Environment · Health · Finance · Culture

### 📄 Dream Pages
Profils enrichis des projets avec tracking sémantique RAG (LlamaIndex + pgvector).

---

## Profils Utilisateurs

| Profil | Rôle |
|--------|------|
| 🌟 Dreamer | Porteur de vision |
| 🛠 Dream Maker | Contributeur compétences |
| ❤️ Dream Lover | Soutien et ambassadeur |
| 💰 Dream Funder | Investisseur d'impact |
| ⚙️ Administrateur | Gestion plateforme |

---

## Installation

```bash
git clone https://github.com/hnaanani21/olod-platform
cd olod-platform
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Structure du Projet

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── dashboard/page.tsx    # Dashboard Dreamer
│   ├── matching/page.tsx     # ODME Matching Engine
│   ├── dream-graph/page.tsx  # Dream Pages explorer
│   ├── missions/page.tsx     # Mission Market™
│   ├── nations/page.tsx      # 9 Dream Nations
│   ├── oip/page.tsx          # OIP Points ledger
│   └── dream/[id]/page.tsx   # Dream Page détail
├── components/
│   ├── Navigation.tsx
│   ├── DreamPageCard.tsx
│   ├── MatchCard.tsx
│   ├── GenomeRadar.tsx       # SVG Radar Chart
│   ├── AgentStatusPanel.tsx
│   └── OIPLedger.tsx
├── lib/
│   ├── data.ts               # Mock data V1
│   └── utils.ts              # Helpers
└── types/
    └── index.ts              # TypeScript types
```

---

## Roadmap

### V1 — Foundations (6 mois · 128k€)
- [x] Frontend Next.js 14 — UI/UX complète
- [ ] Backend FastAPI + PostgreSQL
- [ ] Authentification JWT + OAuth
- [ ] Dream Genome™ onboarding flow
- [ ] ODME™ V1 (algorithme arithmétique)
- [ ] 4 agents IA de base (Coach, Health, Summarizer, Onboarding)

### V2 — AI-Native (M6+)
- [ ] Embeddings 1536-dim + pgvector
- [ ] LangGraph multi-agent orchestration
- [ ] RAG Pipeline LlamaIndex
- [ ] Dream Constellation 3D
- [ ] Mobile React Native

### V3 — Scale & Governance
- [ ] NFT Soul-Bound OIP
- [ ] DAO Nation Governance
- [ ] API publique OLOD

---

## Licence

© 2024 DIGITHS — Tous droits réservés  
Contact : hassan.naanani@digiths.com

---

*"One Life. One Dream. Make It Real."* ✨
