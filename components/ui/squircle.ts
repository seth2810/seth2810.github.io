import type { CSSProperties } from 'react';

// `corner-shape` isn't in React's CSS types yet; browsers without it fall back to plain rounded corners.
export const squircle = { cornerShape: 'squircle' } as CSSProperties;
