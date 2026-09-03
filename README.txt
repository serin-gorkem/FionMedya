FION SINGLE-WINE FULL SOURCE OVERLAY

This package includes the complete relevant source set for the current homepage:
- Hero
- Header + navigation overlay/switch
- Single wine video scroll system
- Services
- Projects
- About
- Footer
- page/layout/globals
- package config
- wine.mp4

Copy the contents into the root of your existing Fion project and overwrite matching files.

IMPORTANT:
The package does NOT include your existing public/fion-logo.png because the original binary asset was not available in the runtime.
Keep your current:
public/fion-logo.png

Run:
npm install
npm run dev

Optional cleanup:
rm app/components/WineServicesScene.tsx
rm public/videos/wine/wine-glass-pour.mp4
rm public/videos/wine/wine-stream.mp4
