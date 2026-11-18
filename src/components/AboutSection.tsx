'use client';

export default function AboutSection() {
  return (
    <div className="space-y-4">
      {/* À propos */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">À propos de moi</h3>
        <p className="text-sm text-white/70 leading-relaxed">
          CTO de DIGITHS et Responsable de la Digitalisation au LIMSET (UM6P, Benguerir).
          Passionné par l&apos;IA, les jumeaux numériques et les systèmes énergétiques durables.
          Je rêve de contribuer à la transition énergétique mondiale par l&apos;innovation technologique
          et la formation de la prochaine génération d&apos;ingénieurs africains.
        </p>
        <div className="mt-3 space-y-2">
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>👤</span> <span>CTO & Chercheur en IA / Digital Twins</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>🌐</span> <span>Arabe, Français, Anglais</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>📍</span> <span>Benguerir, Maroc</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/60">
            <span>🌍</span> <span>Disponible pour collaborations internationales</span>
          </div>
        </div>
      </div>

      {/* Compétences */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">Mes compétences</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Digital Twins', 'IA & ML', 'Python', 'Next.js',
            'Hydrogène Vert', 'PEM/AWE', 'Unity 3D', 'Azure',
            'Blender', 'Formation', '+4'
          ].map((skill) => (
            <span key={skill} className="bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs px-2.5 py-1 rounded-full hover:bg-blue-500/20 cursor-pointer transition-colors">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Vidéo de présentation */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4">
        <h3 className="font-semibold text-white mb-3">Ma vidéo de présentation</h3>
        <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-900 to-purple-900 aspect-video flex items-center justify-center cursor-pointer group">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative w-14 h-14 bg-white/20 group-hover:bg-white/30 rounded-full flex items-center justify-center transition-colors backdrop-blur-sm">
            <span className="text-2xl ml-1">▶</span>
          </div>
          <div className="absolute bottom-2 right-2 text-white/60 text-xs">1:45</div>
          <div className="absolute bottom-2 left-2 text-white/60 text-xs">Vision OLOD — Dr Hassan NAANANI</div>
        </div>
      </div>
    </div>
  );
}
