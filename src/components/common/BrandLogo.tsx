import React from 'react';
import Link from 'next/link';

interface BrandLogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  withTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'dark',
  size = 'md',
  withTagline = false,
}) => {
  const isDarkBg = variant === 'light'; // on dark background, logo is white

  const sizeClasses = {
    sm: {
      mark: 'w-7 h-7 text-xs',
      title: 'text-sm tracking-tight',
      sub: 'text-[9px] tracking-widest',
    },
    md: {
      mark: 'w-8 h-8 text-sm',
      title: 'text-base tracking-tight font-bold',
      sub: 'text-[10px] tracking-widest font-medium',
    },
    lg: {
      mark: 'w-10 h-10 text-base',
      title: 'text-xl tracking-tight font-bold',
      sub: 'text-xs tracking-widest font-medium',
    },
  }[size];

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-2.5 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-motive-red"
      aria-label="Motive Technologies - Homepage"
    >
      {/* Precision Geometric Monogram Symbol */}
      <div
        className={`relative ${sizeClasses.mark} flex items-center justify-center font-mono font-bold transition-transform duration-300 group-hover:scale-105 ${
          isDarkBg
            ? 'bg-white text-black'
            : 'bg-motive-black text-white'
        }`}
        style={{ borderRadius: '2px' }}
      >
        <span className="relative z-10 font-bold tracking-tighter">M</span>
        {/* Subtle signature red indicator pip */}
        <span
          className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-motive-red"
          aria-hidden="true"
        />
      </div>

      {/* Typographic Wordmark */}
      <div className="flex flex-col leading-none">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-sans tracking-tight uppercase font-extrabold ${sizeClasses.title} ${
              isDarkBg ? 'text-white' : 'text-motive-black'
            }`}
          >
            MOTIVE
          </span>
          <span
            className={`font-sans uppercase text-[11px] font-semibold tracking-wider ${
              isDarkBg ? 'text-zinc-400' : 'text-motive-grey'
            }`}
          >
            TECHNOLOGIES
          </span>
        </div>
        {withTagline && (
          <span className="text-[9px] tracking-widest font-mono uppercase text-motive-grey mt-0.5">
            INNOVATE. AUTOMATE. TRANSFORM.
          </span>
        )}
      </div>
    </Link>
  );
};
