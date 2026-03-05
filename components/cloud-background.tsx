'use client';

export function CloudBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Base sky gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, hsl(210 50% 92%) 0%, hsl(210 40% 96%) 40%, hsl(220 30% 97%) 100%)',
        }}
      />

      {/* Cloud layer 1 - large far clouds */}
      <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top-left large cloud */}
        <ellipse cx="200" cy="80" rx="300" ry="60" fill="white" opacity="0.45" />
        <ellipse cx="280" cy="65" rx="180" ry="50" fill="white" opacity="0.55" />
        <ellipse cx="120" cy="90" rx="200" ry="45" fill="white" opacity="0.4" />

        {/* Top-right cloud cluster */}
        <ellipse cx="1100" cy="100" rx="250" ry="55" fill="white" opacity="0.4" />
        <ellipse cx="1200" cy="85" rx="200" ry="48" fill="white" opacity="0.5" />
        <ellipse cx="1050" cy="110" rx="180" ry="40" fill="white" opacity="0.35" />

        {/* Center-top wispy cloud */}
        <ellipse cx="700" cy="50" rx="350" ry="35" fill="white" opacity="0.3" />
        <ellipse cx="650" cy="40" rx="200" ry="30" fill="white" opacity="0.4" />
      </svg>

      {/* Cloud layer 2 - mid clouds */}
      <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Left mid cloud */}
        <ellipse cx="100" cy="250" rx="220" ry="50" fill="white" opacity="0.35" />
        <ellipse cx="180" cy="240" rx="160" ry="42" fill="white" opacity="0.45" />
        <ellipse cx="50" cy="260" rx="150" ry="35" fill="white" opacity="0.3" />

        {/* Right mid cloud */}
        <ellipse cx="1300" cy="300" rx="200" ry="48" fill="white" opacity="0.35" />
        <ellipse cx="1350" cy="285" rx="160" ry="40" fill="white" opacity="0.45" />

        {/* Center cloud mass */}
        <ellipse cx="750" cy="220" rx="280" ry="40" fill="white" opacity="0.25" />
        <ellipse cx="680" cy="210" rx="180" ry="35" fill="white" opacity="0.35" />
        <ellipse cx="850" cy="230" rx="160" ry="32" fill="white" opacity="0.3" />
      </svg>

      {/* Cloud layer 3 - lower atmospheric clouds */}
      <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        {/* Lower left */}
        <ellipse cx="300" cy="450" rx="250" ry="45" fill="white" opacity="0.2" />
        <ellipse cx="350" cy="440" rx="180" ry="38" fill="white" opacity="0.3" />

        {/* Lower right */}
        <ellipse cx="1100" cy="500" rx="220" ry="42" fill="white" opacity="0.2" />
        <ellipse cx="1150" cy="490" rx="170" ry="36" fill="white" opacity="0.28" />

        {/* Center lower */}
        <ellipse cx="600" cy="550" rx="300" ry="38" fill="white" opacity="0.15" />
        <ellipse cx="550" cy="540" rx="200" ry="32" fill="white" opacity="0.22" />
      </svg>

      {/* Cloud layer 4 - soft blue-tinted haze clouds for depth */}
      <svg className="absolute w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="400" cy="150" rx="400" ry="70" fill="hsl(210 50% 88%)" opacity="0.25" />
        <ellipse cx="1000" cy="200" rx="350" ry="60" fill="hsl(215 45% 90%)" opacity="0.2" />
        <ellipse cx="200" cy="380" rx="300" ry="55" fill="hsl(210 40% 91%)" opacity="0.18" />
        <ellipse cx="1200" cy="420" rx="280" ry="50" fill="hsl(210 45% 89%)" opacity="0.15" />
        <ellipse cx="700" cy="700" rx="500" ry="80" fill="hsl(215 35% 92%)" opacity="0.12" />
      </svg>

      {/* Subtle bottom haze */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1/3"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(210 30% 96% / 0.4) 100%)',
        }}
      />
    </div>
  );
}
