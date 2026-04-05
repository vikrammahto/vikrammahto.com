import type { StaticImageData } from 'next/image';

import aiSdkLightLogo from './ai-sdk-light.svg';
import figmaSvg from './figma.svg';
import nextJsSvg from './nextjs.svg';
import nodeJsSvg from './nodejs.svg';
import photoshopSvg from './photoshop.svg';
import reactSvg from './react.svg';
import reactNativeSvg from './reactnative.svg';
import shadcnUiSvg from './shadcn-ui.svg';
import supabaseSvg from './supabase.svg';
import tailwindCssSvg from './tailwindcss.svg';
import typeScriptSvg from './typescript-circle.svg';

export type TechLogo = {
  src: StaticImageData;
  alt: string;
};

export const reactLogo: TechLogo = {
  src: reactSvg,
  alt: 'React logo',
};

export const nextJsLogo: TechLogo = {
  src: nextJsSvg,
  alt: 'Next.js logo',
};

export const typeScriptLogo: TechLogo = {
  src: typeScriptSvg,
  alt: 'TypeScript logo',
};

export const tailwindCssLogo: TechLogo = {
  src: tailwindCssSvg,
  alt: 'Tailwind CSS logo',
};

export const shadcnUiLogo: TechLogo = {
  src: shadcnUiSvg,
  alt: 'shadcn/ui logo',
};

export const reactNativeLogo: TechLogo = {
  src: reactNativeSvg,
  alt: 'React Native logo',
};

export const nodeJsLogo: TechLogo = {
  src: nodeJsSvg,
  alt: 'Node.js logo',
};

export const supabaseLogo: TechLogo = {
  src: supabaseSvg,
  alt: 'Supabase logo',
};

export const figmaLogo: TechLogo = {
  src: figmaSvg,
  alt: 'Figma logo',
};

export const photoshopLogo: TechLogo = {
  src: photoshopSvg,
  alt: 'Adobe Photoshop logo',
};

export const aiSdkLogo: TechLogo = {
  src: aiSdkLightLogo,
  alt: 'AI SDK logo',
};
