# Fion Medya — SOLID Refactor

Bu paket mevcut Fion Medya landing page'inin component mimarisini SOLID prensiplerine göre ayırır.

## Ana yapı

- `app/components/ui`: tekrar kullanılabilir sunum parçaları
- `app/components/sections/hero`: Hero atmosferi ve içerik ayrımı
- `app/components/sections/services`: service data / copy / row / mockup ayrımı
- `app/components/sections/projects`: gerçek proje data / copy / visual ayrımı
- `app/components/sections/about`: about intro / studio board / manifesto ayrımı
- `app/components/sections/footer`: contact hero / links / SEO summary / footer meta ayrımı
- `app/config`: iletişim ve site sabitleri
- `app/components/wine`: scroll-video davranışı

## Önemli

1. `public/videos/wine/wine.mp4` paketin içinde korunmuştur.
2. `public/projects/README.txt` içindeki gerçek proje görsellerini ekleyin.
3. Instagram URL'si doğrulanmadığı için `app/config/contact.ts` içinde boş bırakılmıştır.
4. WhatsApp ve e-posta tek bir config dosyasından yönetilir.
5. Ortadaki wine lane tek bir `WineLane.tsx` component'ine taşındı; genişlik `460px` olarak kilitli.
6. Services, Projects ve About arka planları saf `#000000`; Hero atmosferi istisnadır.
7. Eski section import path'leri için küçük re-export dosyaları bırakıldı; mevcut importlar kırılmaz.

## Çalıştırma

```bash
npm install
npm run dev
```

Kontrol:

```bash
npm run build
```

## Smooth navigation system

The navigation now uses a shared cinematic in-page navigation layer.

Files:

- `app/components/navigation/SmoothNavigationProvider.tsx`
- `app/components/navigation/SmoothAnchor.tsx`
- `app/components/NavigationOverlay.tsx`
- `app/components/HeaderNavigation.tsx`
- `app/components/QuickNavigation.tsx`

Behavior:

1. Opening the menu progressively darkens the current page instead of snapping to an opaque screen.
2. Closing the menu reverses the same light/dark transition.
3. Selecting a menu item starts the menu exit first, then begins a custom eased section scroll underneath the fading overlay.
4. Header logo, hero CTA, quick navigation and shared `TextLink` hash links use the same smooth navigation engine.
5. The animation respects `prefers-reduced-motion` for programmatic scroll behavior.
6. User wheel/touch/key input cancels an active programmatic scroll so the interface never fights the user.

The global document intentionally keeps `scroll-behavior: auto`; section navigation is controlled by the shared navigation provider so duration/easing remains consistent across browsers.
