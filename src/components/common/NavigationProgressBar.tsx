'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export const NavigationProgressBar: React.FC = () => {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // When pathname changes, animate quick progress bar at the very top
    setLoading(true);
    setProgress(30);

    const midTimer = setTimeout(() => {
      setProgress(85);
    }, 100);

    const endTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setLoading(false);
        setProgress(0);
      }, 200);
    }, 250);

    return () => {
      clearTimeout(midTimer);
      clearTimeout(endTimer);
    };
  }, [pathname]);

  if (!loading && progress === 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-[2.5px] bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-motive-red transition-all duration-200 ease-out shadow-[0_0_8px_#ED1C2E]"
        style={{
          width: `${progress}%`,
          opacity: progress === 100 ? 0 : 1,
        }}
      />
    </div>
  );
};
