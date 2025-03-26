"use client";

import dynamic from 'next/dynamic';

const StarsCanvas = dynamic(() => import('./StarsCanvas'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-auto fixed inset-0 z-[20] bg-[#030014]" />
  )
});

export default function StarsCanvasWrapper() {
  return <StarsCanvas />;
} 