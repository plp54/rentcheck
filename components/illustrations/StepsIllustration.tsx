"use client";

export function Step1Illustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="step1Blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#007AFF" />
          <stop offset="100%" stopColor="#5AC8FA" />
        </linearGradient>
        <filter id="stepShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Phone/device */}
      <rect x="50" y="20" width="100" height="160" rx="20" fill="#FFFFFF" filter="url(#stepShadow)" />
      <rect x="55" y="30" width="90" height="140" rx="12" fill="#F5F5F7" />
      
      {/* Form fields */}
      <rect x="65" y="50" width="70" height="12" rx="6" fill="#E5E5EA" />
      <rect x="65" y="70" width="50" height="10" rx="5" fill="#D1D1D6" />
      
      <rect x="65" y="90" width="70" height="12" rx="6" fill="#E5E5EA" />
      <rect x="65" y="110" width="40" height="10" rx="5" fill="#D1D1D6" />
      
      <rect x="65" y="130" width="70" height="12" rx="6" fill="#E5E5EA" />
      <rect x="65" y="150" width="55" height="10" rx="5" fill="#D1D1D6" />
      
      {/* Cursor */}
      <path d="M135 55 L140 80 L132 75 L128 82 L135 55" fill="url(#step1Blue)" opacity="0.8" />
      
      {/* Floating elements */}
      <circle cx="30" cy="100" r="8" fill="url(#step1Blue)" opacity="0.3" />
      <circle cx="170" cy="60" r="6" fill="url(#step1Blue)" opacity="0.2" />
    </svg>
  );
}

export function Step2Illustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="step2Orange" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF9500" />
          <stop offset="100%" stopColor="#FF6B00" />
        </linearGradient>
        <filter id="step2Shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* Document */}
      <rect x="40" y="30" width="120" height="140" rx="12" fill="#FFFFFF" filter="url(#step2Shadow)" />
      
      {/* Chart */}
      <rect x="55" y="50" width="90" height="60" rx="8" fill="#F5F5F7" />
      
      {/* Bars */}
      <rect x="65" y="85" width="15" height="25" rx="3" fill="#E5E5EA" />
      <rect x="90" y="70" width="15" height="40" rx="3" fill="url(#step2Orange)" />
      <rect x="115" y="80" width="15" height="30" rx="3" fill="#34C759" opacity="0.5" />
      
      {/* Red line */}
      <line x1="60" y1="75" x2="135" y2="75" stroke="#FF3B30" strokeWidth="2" strokeDasharray="4,2" />
      
      {/* Warning icon */}
      <g transform="translate(140, 130)">
        <circle cx="0" cy="0" r="20" fill="#FF3B30" opacity="0.1" />
        <path d="M0 -10 L8 8 L-8 8 Z" fill="#FF3B30" />
        <text x="0" y="4" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">!</text>
      </g>
      
      {/* Text lines */}
      <rect x="55" y="125" width="70" height="6" rx="3" fill="#E5E5EA" />
      <rect x="55" y="140" width="50" height="6" rx="3" fill="#D1D1D6" />
      
      {/* Euro symbol */}
      <circle cx="35" cy="50" r="10" fill="url(#step2Orange)" opacity="0.8" />
      <text x="35" y="54" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">€</text>
    </svg>
  );
}

export function Step3Illustration() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="step3Green" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34C759" />
          <stop offset="100%" stopColor="#30D158" />
        </linearGradient>
        <filter id="step3Shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="12" floodOpacity="0.15"/>
        </filter>
      </defs>
      
      {/* PDF Document */}
      <g transform="translate(100, 100)">
        <rect x="-60" y="-70" width="120" height="140" rx="8" fill="#FFFFFF" filter="url(#step3Shadow)" />
        <rect x="-50" y="-60" width="100" height="120" rx="4" fill="#F5F5F7" />
        
        {/* PDF Header */}
        <rect x="-45" y="-50" width="30" height="8" rx="2" fill="#FF3B30" opacity="0.8" />
        <text x="-42" y="-44" fill="white" fontSize="5" fontWeight="bold">PDF</text>
        
        {/* Content lines */}
        <rect x="-45" y="-35" width="70" height="4" rx="2" fill="#E5E5EA" />
        <rect x="-45" y="-25" width="50" height="4" rx="2" fill="#D1D1D6" />
        <rect x="-45" y="-15" width="60" height="4" rx="2" fill="#D1D1D6" />
        
        {/* Chart in PDF */}
        <rect x="-45" y="0" width="90" height="40" rx="4" fill="#FFFFFF" />
        <rect x="-35" y="25" width="15" height="10" rx="2" fill="#E5E5EA" />
        <rect x="-10" y="15" width="15" height="20" rx="2" fill="url(#step3Green)" opacity="0.6" />
        <rect x="15" y="20" width="15" height="15" rx="2" fill="#007AFF" opacity="0.5" />
        <rect x="40" y="10" width="15" height="25" rx="2" fill="#FF9500" opacity="0.5" />
        
        {/* Checkmarks */}
        <circle cx="-30" cy="55" r="8" fill="url(#step3Green)" />
        <path d="M-34 55 L-32 57 L-27 52" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        <circle cx="0" cy="55" r="8" fill="url(#step3Green)" />
        <path d="M-4 55 L-2 57 L3 52" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        <circle cx="30" cy="55" r="8" fill="url(#step3Green)" />
        <path d="M26 55 L28 57 L33 52" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </g>
      
      {/* Money coins */}
      <circle cx="40" cy="50" r="15" fill="url(#step3Green)" opacity="0.9" />
      <text x="40" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">€</text>
      
      <circle cx="160" cy="150" r="12" fill="url(#step3Green)" opacity="0.7" />
      <text x="160" y="154" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">€</text>
      
      <circle cx="35" cy="160" r="10" fill="#FF9500" opacity="0.7" />
      <text x="35" y="164" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">%</text>
    </svg>
  );
}
