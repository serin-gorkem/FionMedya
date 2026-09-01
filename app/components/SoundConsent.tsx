"use client";

type SoundConsentProps = {
  onAccept: () => void;
  onDecline: () => void;
};

export default function SoundConsent({
  onAccept,
  onDecline,
}: SoundConsentProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0c0809]/95 px-6 backdrop-blur-md">
      <div className="text-center">
        <p className="mb-7 text-[9px] uppercase tracking-[0.5em] text-wine-light">
          Fion Medya
        </p>

        <h2 className="font-serif text-4xl leading-tight sm:text-5xl">
          Deneyimin
          <br />
          <em>bir sesi var.</em>
        </h2>

        <p className="mx-auto mt-6 max-w-xs text-sm leading-6 text-muted">
          Site deneyiminde küçük ses detayları kullanılsın mı?
        </p>

        <div className="mt-9 flex items-center justify-center gap-8">
          <button
            type="button"
            onClick={onAccept}
            className="border-b border-ivory pb-2 text-[10px] uppercase tracking-[0.25em]"
          >
            Sesi Aç
          </button>

          <button
            type="button"
            onClick={onDecline}
            className="pb-2 text-[10px] uppercase tracking-[0.25em] text-muted transition hover:text-ivory"
          >
            Sessiz Devam
          </button>
        </div>
      </div>
    </div>
  );
}