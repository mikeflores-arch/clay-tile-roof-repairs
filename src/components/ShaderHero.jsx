import { MeshGradient } from '@paper-design/shaders-react';

export default function ShaderHero({ children }) {
  return (
    <div className="relative min-h-[90vh] w-full overflow-hidden">
      {/* Primary shader layer — warm clay/terracotta tones */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        style={{ width: '100%', height: '100%' }}
        colors={['#1a1410', '#a3391b', '#d46428', '#3d2015', '#832f1d']}
        speed={0.25}
        backgroundColor="#1a1410"
      />

      {/* Secondary wireframe layer for depth */}
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-40"
        style={{ width: '100%', height: '100%' }}
        colors={['#1a1410', '#e8a36f', '#6b291b', '#1a1410']}
        speed={0.15}
        backgroundColor="transparent"
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-stone-950/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}
