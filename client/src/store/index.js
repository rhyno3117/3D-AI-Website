import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#FFFFFF',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './rhinob&w.webp',
  fullDecal: './rhinob&w.webp',
});

export default state;