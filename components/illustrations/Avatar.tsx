"use client";

interface AvatarProps {
  name: string;
  color?: string;
}

export function Avatar({ name, color = "#007AFF" }: AvatarProps) {
  const initial = name.charAt(0).toUpperCase();
  
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full rounded-full">
      <defs>
        <linearGradient id={`grad-${name}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0.4" />
        </linearGradient>
      </defs>
      
      {/* Background */}
      <circle cx="50" cy="50" r="50" fill={`url(#grad-${name})`} />
      <circle cx="50" cy="50" r="48" fill={color} fillOpacity="0.1" />
      
      {/* Face silhouette */}
      <circle cx="50" cy="40" r="20" fill={color} fillOpacity="0.3" />
      <ellipse cx="50" cy="85" rx="28" ry="25" fill={color} fillOpacity="0.3" />
      
      {/* Initial */}
      <text
        x="50"
        y="58"
        textAnchor="middle"
        fill={color}
        fontSize="36"
        fontWeight="bold"
        fontFamily="-apple-system, BlinkMacSystemFont, sans-serif"
      >
        {initial}
      </text>
    </svg>
  );
}

export function AvatarStack() {
  const avatars = [
    { name: "Sophie", color: "#007AFF" },
    { name: "Marc", color: "#34C759" },
    { name: "Julie", color: "#FF9500" },
    { name: "Thomas", color: "#5856D6" },
  ];
  
  return (
    <div className="flex -space-x-3">
      {avatars.map((avatar, i) => (
        <div
          key={avatar.name}
          className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-md"
          style={{ zIndex: avatars.length - i }}
        >
          <Avatar name={avatar.name} color={avatar.color} />
        </div>
      ))}
    </div>
  );
}
