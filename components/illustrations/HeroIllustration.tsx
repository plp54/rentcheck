"use client";

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 400 500" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background gradient */}
      <defs>
        <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5F5F7" />
          <stop offset="100%" stopColor="#E8E8ED" />
        </linearGradient>
        <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#5AC8FA" />
        </linearGradient>
        <linearGradient id="greenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34C759" />
          <stop offset="100%" stopColor="#30D158" />
        </linearGradient>
        <linearGradient id="orangeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="20" floodOpacity="0.15"/>
        </filter>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.1"/>
        </filter>
      </defs>
      
      {/* Base platform */}
      <ellipse cx="200" cy="420" rx="160" ry="40" fill="url(#bgGrad)" filter="url(#shadow)" />
      
      {/* House 3D isometric */}
      <g transform="translate(200, 200)">
        {/* House body */}
        <path d="M-80 20 L-80 120 L80 120 L80 20 Z" fill="#FFFFFF" stroke="#E5E5EA" strokeWidth="2" filter="url(#softShadow)" />
        <path d="M-80 20 L0 -40 L80 20 Z" fill="url(#blueGrad)" opacity="0.1" />
        <path d="M-80 20 L0 -40 L80 20" fill="none" stroke="#007AFF" strokeWidth="3" strokeLinecap="round" />
        
        {/* Roof */}
        <path d="M-100 20 L0 -50 L100 20 L80 20 L0 -35 L-80 20 Z" fill="url(#blueGrad)" filter="url(#softShadow)" />
        
        {/* Door */}
        <rect x="-20" y="60" width="40" height="60" rx="4" fill="#F5F5F7" stroke="#D1D1D6" strokeWidth="2" />
        <circle cx="10" cy="90" r="3" fill="#86868B" />
        
        {/* Windows */}
        <rect x="-60" y="40" width="30" height="30" rx="4" fill="#E8F4FD" stroke="#007AFF" strokeWidth="2" opacity="0.6" />
        <rect x="30" y="40" width="30" height="30" rx="4" fill="#E8F4FD" stroke="#007AFF" strokeWidth="2" opacity="0.6" />
        
        {/* Checkmark badge */}
        <g transform="translate(60, -30)">
          <circle cx="0" cy="0" r="25" fill="url(#greenGrad)" filter="url(#softShadow)" />
          <path d="M-8 0 L-2 6 L8 -6" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </g>
      </g>
      
      {/* Calculator floating */}
      <g transform="translate(80, 150)">
        <rect x="-50" y="-70" width="100" height="140" rx="16" fill="#FFFFFF" filter="url(#shadow)" />
        <rect x="-40" y="-50" width="80" height="20" rx="4" fill="#F5F5F7" />
        <rect x="-40" y="-20" width="35" height="15" rx="3" fill="#E5E5EA" />
        <rect x="5" y="-20" width="35" height="15" rx="3" fill="#E5E5EA" />
        <rect x="-40" y="5" width="35" height="15" rx="3" fill="#E5E5EA" />
        <rect x="5" y="5" width="35" height="15" rx="3" fill="#E5E5EA" />
        <rect x="-40" y="30" width="35" height="15" rx="3" fill="#E5E5EA" />
        <rect x="5" y="30" width="35" height="15" rx="3" fill="#E5E5EA" />
        <rect x="-15" y="55" width="30" height="15" rx="3" fill="url(#greenGrad)" />
      </g>
      
      {/* Document with chart */}
      <g transform="translate(320, 180)">
        <rect x="-60" y="-80" width="120" height="160" rx="12" fill="#FFFFFF" filter="url(#shadow)" />
        <rect x="-45" y="-60" width="90" height="8" rx="2" fill="#E5E5EA" />
        <rect x="-45" y="-45" width="60" height="6" rx="2" fill="#F5F5F7" />
        <rect x="-45" y="-35" width="70" height="6" rx="2" fill="#F5F5F7" />
        
        {/* Chart bars */}
        <rect x="-40" y="0" width="20" height="40" rx="3" fill="url(#blueGrad)" opacity="0.8" />
        <rect x="-10" y="-20" width="20" height="60" rx="3" fill="url(#orangeGrad)" />
        <rect x="20" y="10" width="20" height="30" rx="3" fill="url(#greenGrad)" opacity="0.8" />
        
        {/* Red line indicating illegal */}
        <line x1="-50" y1="-10" x2="50" y2="-10" stroke="#FF3B30" strokeWidth="2" strokeDasharray="5,3" />
        <text x="55" y="-6" fill="#FF3B30" fontSize="10" fontWeight="600">MAX</text>
      </g>
      
      {/* Money/Euro symbols floating */}
      <g transform="translate(60, 320)">
        <circle cx="0" cy="0" r="20" fill="url(#greenGrad)" filter="url(#softShadow)" opacity="0.9" />
        <text x="0" y="6" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">€</text>
      </g>
      
      <g transform="translate(340, 320)">
        <circle cx="0" cy="0" r="15" fill="url(#orangeGrad)" filter="url(#softShadow)" opacity="0.9" />
        <text x="0" y="5" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">%</text>
      </g>
      
      <g transform="translate(200, 360)">
        <circle cx="0" cy="0" r="25" fill="url(#blueGrad)" filter="url(#softShadow)" opacity="0.9" />
        <text x="0" y="8" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">35</text>
      </g>
    </svg>
  );
}
