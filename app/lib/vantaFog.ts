import * as THREE from 'three';

let VANTA: any = null;

export const loadVantaFog = async (el: HTMLElement | null) => {
  if (!el) return;

  if (!VANTA) {
    const vantaModule = await import('vanta/dist/vanta.fog.min');
    VANTA = vantaModule.default;
  }

  return VANTA({
    el,
    THREE,
    highlightColor: 0x00bfff,
    midtoneColor: 0x222222,
    lowlightColor: 0x000000,
    baseColor: 0x000000,
    blurFactor: 0.7,
    speed: 1.2,
    zoom: 1,
  });
};
