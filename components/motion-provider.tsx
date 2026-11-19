'use client';

import { LazyMotion, domAnimation } from 'framer-motion';

// Loads only the animation features the site uses (fades, slides, hover/tap,
// in-view). Components use the lightweight `m` instead of `motion`, which cuts
// framer-motion's JavaScript roughly in half. `strict` throws if a `motion.*`
// component sneaks back in, which would pull the full bundle again.
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
