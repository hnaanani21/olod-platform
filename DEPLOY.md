# Déploiement OLOD sur olod.digiths.ma

## Étape 1 — Pousser le code sur GitHub

```bash
# Créer le repo (une seule fois)
gh repo create hnaanani21/olod-platform \
  --public \
  --description "OLOD — One Life One Dream | DIGITHS" \
  --source=. --remote=origin --push

# Ou manuellement si gh n'est pas configuré :
git remote add origin https://github.com/hnaanani21/olod-platform.git
git push -u origin main
```

---

## Étape 2 — Déployer sur Vercel

### 2a. Créer le projet Vercel
1. Aller sur **[vercel.com/new](https://vercel.com/new)**
2. Cliquer **"Import Git Repository"**
3. Choisir `hnaanani21/olod-platform`
4. Framework : **Next.js** (détecté automatiquement)
5. Cliquer **Deploy** → attendre ~2 min

### 2b. Ajouter le domaine personnalisé
1. Dans le dashboard Vercel → projet `olod-platform`
2. **Settings** → **Domains**
3. Taper : `olod.digiths.ma` → **Add**
4. Vercel affiche la valeur DNS à configurer

---

## Étape 3 — Configurer le DNS

Dans le panneau de gestion DNS de votre domaine `digiths.ma` :

### Si votre hébergeur DNS est OVH / Gandi / MTDS :
Ajouter un enregistrement **CNAME** :

| Type  | Nom  | Valeur                    | TTL  |
|-------|------|---------------------------|------|
| CNAME | olod | `cname.vercel-dns.com`    | 3600 |

### Si Vercel demande un enregistrement A :
| Type | Nom  | Valeur          | TTL  |
|------|------|-----------------|------|
| A    | olod | `76.76.21.21`   | 3600 |

> ⏱ Propagation DNS : 5 min à 1h selon votre hébergeur

---

## Étape 4 — Vérifier le déploiement

```bash
# Tester que le site répond
curl -I https://olod.digiths.ma

# Tester l'endpoint de santé
curl https://olod.digiths.ma/health
# Réponse attendue :
# {"status":"ok","service":"OLOD Platform","version":"1.0.0",...}
```

---

## Étape 5 — Variables d'environnement (V2)

Dans Vercel → **Settings** → **Environment Variables** :

```env
# Quand le backend FastAPI sera prêt
NEXT_PUBLIC_API_URL=https://api.olod.digiths.ma

# OpenAI / LiteLLM Gateway
OPENAI_API_KEY=sk-...

# PostgreSQL (Supabase ou Neon)
DATABASE_URL=postgresql://...

# Redis
REDIS_URL=redis://...
```

---

## Résultat final

```
https://olod.digiths.ma          → Application OLOD
https://olod.digiths.ma/health   → Status API
https://www.digiths.ma           → Site vitrine DIGITHS (inchangé)
```

---

## CI/CD Automatique

Chaque `git push` sur `main` déclenche automatiquement un redéploiement Vercel.

```bash
# Workflow de mise à jour
git add .
git commit -m "feat: nouvelle fonctionnalité"
git push origin main
# → Vercel redéploie en ~90 secondes
```

---

*OLOD Platform — DIGITHS © 2024*
