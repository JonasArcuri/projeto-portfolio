// Mapeamento de tecnologias para ícones SVG simplificados
export const getTechIcon = (techName) => {
  const techIcons = {
    'React': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    ),
    'JavaScript': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="20" height="20" x="2" y="2" fill="#F7DF1E" rx="3"/>
        <text x="12" y="16" fontSize="10" fill="#000" textAnchor="middle" fontWeight="bold">JS</text>
      </svg>
    ),
    'TypeScript': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="20" height="20" x="2" y="2" fill="#3178C6" rx="3"/>
        <text x="12" y="16" fontSize="9" fill="#fff" textAnchor="middle" fontWeight="bold">TS</text>
      </svg>
    ),
    'Node.js': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" fill="#339933"/>
        <text x="12" y="16" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">N</text>
      </svg>
    ),
    'Express': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="20" height="20" x="2" y="2" fill="#000000" rx="3"/>
        <text x="12" y="16" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">E</text>
      </svg>
    ),
    'MongoDB': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 2L8 8l4 6 4-6-4-6z" fill="#47A248"/>
        <path d="M12 14L8 20l4-6 4 6-4-6z" fill="#47A248"/>
      </svg>
    ),
    'PostgreSQL': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" fill="#336791"/>
        <text x="12" y="16" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">PG</text>
      </svg>
    ),
    'Tailwind CSS': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.12 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.31-.74-1.91-1.35C15.61 7.15 14.47 6 12 6z" fill="#38B2AC"/>
      </svg>
    ),
    'Framer Motion': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path d="M4 0l16 12-8 12L4 12l8-12z" fill="#0055FF"/>
      </svg>
    ),
    'REST API': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="6" cy="6" r="2" fill="#FF6B6B"/>
        <circle cx="12" cy="12" r="2" fill="#FF6B6B"/>
        <circle cx="18" cy="18" r="2" fill="#FF6B6B"/>
        <line x1="8" y1="6" x2="10" y2="12" stroke="#FF6B6B" strokeWidth="1.5"/>
        <line x1="14" y1="12" x2="16" y2="18" stroke="#FF6B6B" strokeWidth="1.5"/>
      </svg>
    ),
    'Leaflet Maps': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <circle cx="12" cy="12" r="8" fill="none" stroke="#199900" strokeWidth="2"/>
        <circle cx="12" cy="12" r="2" fill="#199900"/>
      </svg>
    ),
    'JWT': (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <rect width="20" height="20" x="2" y="2" fill="#000000" rx="3"/>
        <text x="12" y="16" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">JWT</text>
      </svg>
    ),
  };

  // Retorna o ícone ou um ícone padrão
  return techIcons[techName] || (
    <svg viewBox="0 0 24 24" className="w-6 h-6">
      <circle cx="12" cy="12" r="10" fill="#64748b"/>
      <text x="12" y="16" fontSize="8" fill="#fff" textAnchor="middle" fontWeight="bold">{techName.charAt(0)}</text>
    </svg>
  );
};

