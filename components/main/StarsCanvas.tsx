"use client";

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const StarBackground = dynamic(() => import('./StarBackground'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-auto fixed inset-0 z-[20] bg-[#030014]" />
  )
});

export default function StarsCanvas() {
  return (
    <Suspense fallback={
      <div className="w-full h-auto fixed inset-0 z-[20] bg-[#030014]" />
    }>
      <StarBackground />
    </Suspense>
  );
} 