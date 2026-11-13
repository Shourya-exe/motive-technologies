import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
  const isDarkBg = variant === 'light'; // on dark background, text is white

  const sizeClasses = {
    sm: {
      width: 44,
      height: 24,
      title: 'text-sm tracking-tight',
      sub: 'text-[9px] tracking-widest',
    },
    md: {
      width: 54,
      height: 30,
      title: 'text-base tracking-tight font-bold',
      sub: 'text-[10px] tracking-widest font-medium',
    },
    lg: {
      width: 72,
      height: 40,
      title: 'text-xl tracking-tight font-bold',
      sub: 'text-xs tracking-widest font-medium',
    },
  }[size];

  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-motive-red"
      aria-label="Motive Technologies - Homepage"
    >
      {/* Motive Technologies Official 3D Metallic Emblem */}
      <div className="relative shrink-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src={isDarkBg ? '/images/motive-logo.png' : '/images/motive-logo-light.png'}
          alt="Motive Technologies Logo"
          width={sizeClasses.width}
          height={sizeClasses.height}
          className="w-auto h-auto object-contain"
          priority
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
          <span className="text-[9px] tracking-widest font-mono uppercase text-motive-grey mt-1">
            INNOVATE. AUTOMATE. TRANSFORM.
          </span>
        )}
      </div>
    </Link>
  );
};
